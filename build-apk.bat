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
REM 2.1. DONG BO PHIEN BAN & EP ANDROID LAM MOI (FIX CACHE)
REM --------------------------------------------
if not "!APP_VERSION!"=="" (
    if exist "android\app\build.gradle" (
        echo [OK] Dang bom phien ban !APP_VERSION! va tang so dinh danh...
        
        REM Tang versionCode tu dong dua tren thoi gian
        powershell -Command "$file = 'android\app\build.gradle'; $c = Get-Content $file; $vCode = [int](Get-Date -UFormat '%%m%%d%%H%%M'); $c = $c -replace 'versionCode\s+\d+', \"versionCode $vCode\"; $c = $c -replace 'versionName\s+\".*?\"', \"versionName '!APP_VERSION!'\"; Set-Content $file $c"
    )
)

REM --------------------------------------------
REM 3. XU LY TEN APP
REM --------------------------------------------
echo.
if not "!APP_NAME!"=="" (
    set APP_ID=com.tontonyuta.math6
    
    REM 1. Cap nhat capacitor.config.json
    if exist "capacitor.config.json" (
        powershell -Command "$c = Get-Content 'capacitor.config.json'; $c = $c -replace '\"appName\":\s*\".*?\"', '\"appName\": \"!APP_NAME!\"'; Set-Content 'capacitor.config.json' $c -Encoding UTF8"
    )

    REM 2. Sua strings.xml
    set STRINGS_XML=android\app\src\main\res\values\strings.xml
    if exist "!STRINGS_XML!" (
        echo [OK] Dang cap nhat ten "!APP_NAME!" vao Android...
        
        powershell -Command "$xml = [xml](Get-Content '!STRINGS_XML!'); $nodes = $xml.resources.string | Where-Object { $_.name -match 'app_name|title_activity_main|launcher_name' }; foreach ($n in $nodes) { $n.InnerText = '!APP_NAME!' }; $xml.Save('!STRINGS_XML!')"
    )
)

REM --------------------------------------------
REM 4. CAI THU VIEN
REM --------------------------------------------
echo [2/9] Dang tai thu vien...
call npm install
call npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/assets @capgo/capacitor-updater --save

REM --------------------------------------------
REM 5. BUILD GIAO DIEN WEB
REM --------------------------------------------
echo [3/9] Dang build giao dien Web...
call npm run build
if !errorlevel! neq 0 (
    echo [Loi] Build giao dien Web that bai! Vui long kiem tra code React.
    pause
    exit /b
)

REM --------------------------------------------
REM 6. XU LY ICON & SPLASH
REM --------------------------------------------
echo [4/9] Dang kiem tra icon va splash...
if not exist "assets" mkdir assets
if exist "icon.png" copy /y "icon.png" "assets\icon.png" >nul
if exist "splash.png" copy /y "splash.png" "assets\splash.png" >nul

if exist "assets\icon.png" (
    call npx capacitor-assets generate --android
)

REM --------------------------------------------
REM 7. KHOI TAO ANDROID
REM --------------------------------------------
if not exist android (
    echo [5/9] Dang tao bo khung Android...
    call npx cap add android
    powershell -Command "$p='android\app\src\main\AndroidManifest.xml'; if (Test-Path $p) { $c=Get-Content $p; if($c -notmatch 'android.permission.INTERNET'){ $c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application' | Set-Content $p } }"
    
    if not "!APP_VERSION!"=="" (
        powershell -Command "$file = 'android\app\build.gradle'; $content = Get-Content $file; $content = $content -replace 'versionName\s+\".*?\"', 'versionName \"!APP_VERSION!\"'; Set-Content $file $content"
    )
)

REM --------------------------------------------
REM 8. BUILD APK
REM --------------------------------------------
echo [6/9] Dong bo code vao Android...
call npx cap sync android

echo [7/9] Dang build APK (Vui long doi)...
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
REM 9. TAO FILE OTA UPDATE
REM --------------------------------------------
echo [8/9] Dang tao file OTA update.zip...
if exist "dist" (
    if exist "update.zip" del /f /q "update.zip"
    
    cd dist
    tar.exe -a -c -f ../update.zip *
    cd ..
    
    echo [OK] Da tao thanh cong file update.zip
) else (
    echo [Canh bao] Khong tim thay thu muc dist
)

REM --------------------------------------------
REM 10. UPLOAD GITHUB RELEASE
REM --------------------------------------------
echo.
echo [9/9] Dang upload len GitHub...

where gh >nul 2>nul
if !errorlevel! equ 0 (
    if not "!APP_VERSION!"=="" (
        gh release create v!APP_VERSION! "update.zip" --title "Ban cap nhat v!APP_VERSION!" --notes "Cap nhat bai tap toan moi."
        echo [OK] Upload thanh cong update.zip len GitHub Releases!
    )
) else (
    echo [Canh bao] Chua cai GitHub CLI gh. Hay upload tay.
)

REM --------------------------------------------
REM 11. BAO CAO VERSION LEN GOOGLE SHEETS
REM --------------------------------------------
echo.
if not "!APP_VERSION!"=="" (
    echo [!] Dang cap nhat phien ban !APP_VERSION! len Google Sheets...
    
    curl -s -L -H "Content-Type: application/json" -d "{\"action\":\"update_version\", \"secret\":\"TontonYuta_Dep_Trai_2026\", \"newVersion\":\"!APP_VERSION!\"}" "https://script.google.com/macros/s/AKfycbwtoV7WcEcmhCelfp1UFnA8tb23OgdbF3tx--MVhK7CHQx1MRXmkUUfqpRMU3-ASp4bYA/exec"
    
    echo.
    echo [OK] Da bao cao phien ban moi len he thong!
)

REM --------------------------------------------
REM 12. AM THANH HOAN TAT
REM --------------------------------------------
powershell -c "[console]::beep(800, 300); [console]::beep(1200, 500)"

echo ==========================================
echo        HOAN TAT TAT CA!
echo ==========================================

if exist "android\app\build\outputs\apk\debug" start explorer "android\app\build\outputs\apk\debug"

pause