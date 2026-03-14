@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    TONTONYUTA - ONE CLICK APK (v10.0 PRO)
echo ==========================================

REM --------------------------------------------
REM 1. KIEM TRA DIEU KIEN
REM --------------------------------------------
where node >nul 2>nul
if !errorlevel! neq 0 (
    echo [Loi] NodeJS chua duoc cai dat!
    pause
    exit /b
)
where javac >nul 2>nul
if !errorlevel! neq 0 (
    echo [Loi] Java JDK chua duoc cai dat!
    pause
    exit /b
)

REM --------------------------------------------
REM 2. CAU HINH TEN VA PHIEN BAN APP
REM --------------------------------------------
echo.
echo [!] THIET LAP THONG TIN CAP NHAT
set /p APP_NAME="1. Nhap ten App (VD: Toan Hoc 6) [De trong de giu cu]: "
set /p APP_VERSION="2. Nhap so phien ban OTA (VD: 2.0.0) [De trong de giu cu]: "

REM Tu dong sua file config.ts va package.json
if not "!APP_VERSION!"=="" (
    echo [OK] Dang tu dong cap nhat ma nguon len ban !APP_VERSION!...
    
    REM Dung PowerShell de thay the dung dong APP_VERSION trong config.ts
    if exist "src\config.ts" (
        powershell -Command "$c = Get-Content 'src\config.ts'; $c = $c -replace 'export const APP_VERSION = ''.*?''', 'export const APP_VERSION = ''!APP_VERSION!'''; Set-Content 'src\config.ts' $c"
    ) else (
        echo [Canh bao] Khong tim thay src\config.ts
    )
    
    REM Cap nhat luon file package.json
    call npm pkg set version="!APP_VERSION!"
)

REM --------------------------------------------
REM 2.1. DONG BO PHIEN BAN VAO LOI ANDROID (MOI)
REM --------------------------------------------
if not "!APP_VERSION!"=="" (
    if exist "android\app\build.gradle" (
        echo [OK] Dang bom phien ban !APP_VERSION! vao loi Android...
        powershell -Command "$file = 'android\app\build.gradle'; $content = Get-Content $file; $content = $content -replace 'versionName\s+\".*?\"', 'versionName \"!APP_VERSION!\"'; Set-Content $file $content"
    ) else (
        echo [Canh bao] Chua tim thay Android project de cap nhat version. (Se tao o buoc sau)
    )
)

REM --------------------------------------------
REM 3. XU LY CAU HINH CAPACITOR
REM --------------------------------------------
echo.
echo [1/9] Thiet lap cau hinh he thong...
if not "!APP_NAME!"=="" (
    set APP_ID=com.tontonyuta.myapp
    
    REM Tim va thay the ten App trong file config cua Capacitor
    if exist "capacitor.config.ts" (
        powershell -Command "$c = Get-Content 'capacitor.config.ts'; $c = $c -replace 'appName: ''.*?''', 'appName: ''!APP_NAME!'''; $c = $c -replace 'appName: \".*?\"', 'appName: \"!APP_NAME!\"'; Set-Content 'capacitor.config.ts' $c"
        echo [OK] Da cap nhat ten App trong capacitor.config.ts thanh: !APP_NAME!
    ) else if exist "capacitor.config.json" (
        powershell -Command "$c = Get-Content 'capacitor.config.json'; $c = $c -replace '\"appName\":\s*\".*?\"', '\"appName\": \"!APP_NAME!\"'; Set-Content 'capacitor.config.json' $c"
        echo [OK] Da cap nhat ten App trong capacitor.config.json thanh: !APP_NAME!
    ) else (
        echo { > capacitor.config.json
        echo   "appId": "!APP_ID!", >> capacitor.config.json
        echo   "appName": "!APP_NAME!", >> capacitor.config.json
        echo   "webDir": "dist", >> capacitor.config.json
        echo   "bundledWebRuntime": false >> capacitor.config.json
        echo } >> capacitor.config.json
        echo [OK] Da tao moi capacitor.config.json voi ten: !APP_NAME!
    )
    REM Tim va thay the ten App trong file strings.xml cua Android
    set STRINGS_XML=android\app\src\main\res\values\strings.xml
    if exist "!STRINGS_XML!" (
    powershell -Command "$c = Get-Content '!STRINGS_XML!'; $c = $c -replace '<string name=\"app_name\">.*?</string>', '<string name=\"app_name\">!APP_NAME!</string>'; Set-Content '!STRINGS_XML!' $c"
    echo [OK] Da cap nhat ten hien thi ngoai man hinh thanh: !APP_NAME!
)
    
)

REM --------------------------------------------
REM 4. CAI THU VIEN
REM --------------------------------------------
echo [2/9] Dang tai nguyen lieu thu vien...
call npm install
call npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/assets @capgo/capacitor-updater --save

REM --------------------------------------------
REM 5. BUILD GIAO DIEN WEB
REM --------------------------------------------
echo [3/9] Dang ghep noi giao dien Web...
call npm run build
if !errorlevel! neq 0 (
    echo [Loi] Build giao dien Web that bai! Vui long kiem tra code React.
    pause
    exit /b
)

REM --------------------------------------------
REM 6. XU LY ICON & SPLASH
REM --------------------------------------------
echo [4/9] Dang kiem tra Icon va Man hinh cho...
if not exist "assets" mkdir assets
if exist "icon.png" copy /y "icon.png" "assets\icon.png" >nul
if exist "splash.png" copy /y "splash.png" "assets\splash.png" >nul

if exist "assets\icon.png" (
    call npx capacitor-assets generate --android
)

REM --------------------------------------------
REM 7. KHOI TAO ANDROID & CAP QUYEN
REM --------------------------------------------
if not exist android (
    echo [5/9] Dang dung bo khung Android...
    call npx cap add android
    powershell -Command "$p='android\app\src\main\AndroidManifest.xml'; if (Test-Path $p) { $c=Get-Content $p; if($c -notmatch 'android.permission.INTERNET'){ $c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application' | Set-Content $p } }"
    
    REM Bo sung buoc dong bo version vao Android neu day la lan tao dau tien
    if not "!APP_VERSION!"=="" (
        powershell -Command "$file = 'android\app\build.gradle'; $content = Get-Content $file; $content = $content -replace 'versionName\s+\".*?\"', 'versionName \"!APP_VERSION!\"'; Set-Content $file $content"
    )
)

REM --------------------------------------------
REM 8. DONG BO & BUILD APK
REM --------------------------------------------
echo [6/9] Dong bo code vao Android...
call npx cap sync android

echo [7/9] Dang Build APK (Vui long doi)...
if exist "android\gradlew.bat" (
    cd android
    call gradlew.bat assembleDebug --daemon
    if !errorlevel! neq 0 (
        echo [Loi] Build APK that bai!
        cd ..
        pause
        exit /b
    )
    cd ..
)

REM --------------------------------------------
REM 9. TU DONG NEN FILE OTA UPDATE (update.zip)
REM --------------------------------------------
echo [8/9] Dang tao file OTA update.zip...
if exist "dist" (
    if exist "update.zip" del /f /q "update.zip"
    
    cd dist
    REM Thay the PowerShell bang tar.exe de dung chuan duong dan / cua Android
    tar.exe -a -c -f ../update.zip *
    cd ..
    
    echo [OK] Da tao thanh cong file: update.zip bang tar.exe
) else (
    echo [Canh bao] Khong tim thay thu muc dist de nen OTA.
)

REM --------------------------------------------
REM 10. TU DONG UPLOAD LEN GITHUB RELEASES
REM --------------------------------------------
echo.
echo [9/9] Dang day ban cap nhat len GitHub...

where gh >nul 2>nul
if !errorlevel! equ 0 (
    if not "!APP_VERSION!"=="" (
        gh release create v!APP_VERSION! "update.zip" --title "Ban cap nhat v!APP_VERSION!" --notes "Cap nhat bai tap toan moi nhat."
        echo [OK] Da upload thanh cong file update.zip len GitHub Releases!
    )
) else (
    echo [Canh bao] Chua cai dat GitHub CLI gh. Ban phai up file update.zip bang tay.
)

REM --------------------------------------------
REM 11. BAO CAO VERSION LEN GOOGLE SHEETS
REM --------------------------------------------
echo.
if not "!APP_VERSION!"=="" (
    echo [!] Dang cap nhat phien ban !APP_VERSION! len Google Sheets...
    
    REM Da xoa -X POST va doi thanh application/json de Google nhan dien chuan nhat
    curl -s -L -H "Content-Type: application/json" -d "{\"action\":\"update_version\", \"secret\":\"TontonYuta_Dep_Trai_2026\", \"newVersion\":\"!APP_VERSION!\"}" "https://script.google.com/macros/s/AKfycbwtoV7WcEcmhCelfp1UFnA8tb23OgdbF3tx--MVhK7CHQx1MRXmkUUfqpRMU3-ASp4bYA/exec"
    
    echo.
    echo [OK] Da bao cao phien ban moi len he thong!
)

REM --------------------------------------------
REM 12. PHAT AM THANH THONG BAO HOAN TAT
REM --------------------------------------------
powershell -c "[console]::beep(800, 300); [console]::beep(1200, 500)"

echo ==========================================
echo        HOAN TAT XUAT SAC TAT CA!
echo ==========================================
if exist "android\app\build\outputs\apk\debug" start explorer "android\app\build\outputs\apk\debug"

pause