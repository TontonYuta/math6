@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

echo ==========================================
echo    TONTONYUTA - ONE CLICK APK (v9.1 FIXED)
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
    REM Da xoa dau ngoac don o chu JDK de tranh loi cu phap
    echo [Loi] Java JDK chua duoc cai dat!
    pause
    exit /b
)

REM --------------------------------------------
REM 2. CAU HINH TEN VA PHIEN BAN APP
REM --------------------------------------------
echo.
echo [!] THIET LAP THONG TIN CAP NHAT
set /p APP_NAME="1. Nhap ten App (VD: MathPath) [De trong de giu cu]: "
set /p APP_VERSION="2. Nhap so phien ban OTA (VD: 1.0.2) [De trong de giu cu]: "

REM Tu dong sua file config.ts cho he thong OTA
if not "!APP_VERSION!"=="" (
    echo [OK] Dang tu dong cap nhat ma nguon len ban !APP_VERSION!...
    
    REM Dung PowerShell de thay the dung dong APP_VERSION ma khong lam mat code khac
    if exist "src\config.ts" (
        powershell -Command "$c = Get-Content 'src\config.ts'; $c = $c -replace 'export const APP_VERSION = ''.*?''', 'export const APP_VERSION = ''!APP_VERSION!'''; Set-Content 'src\config.ts' $c"
    ) else (
        echo [Canh bao] Khong tim thay src\config.ts
    )
    
    REM Cap nhat luon file package.json
    call npm pkg set version="!APP_VERSION!"
)

REM --------------------------------------------
REM 3. XU LY CAU HINH CAPACITOR
REM --------------------------------------------
echo.
echo [1/8] Thiet lap cau hinh he thong...
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
)

REM --------------------------------------------
REM 4. CAI THU VIEN
REM --------------------------------------------
echo [2/8] Dang tai nguyen lieu thu vien...
call npm install
call npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/assets @capgo/capacitor-updater --save

REM --------------------------------------------
REM 5. BUILD GIAO DIEN WEB
REM --------------------------------------------
echo [3/8] Dang ghep noi giao dien Web...
call npm run build
if !errorlevel! neq 0 (
    echo [Loi] Build giao dien Web that bai! Vui long kiem tra code React.
    pause
    exit /b
)

REM --------------------------------------------
REM 6. XU LY ICON & SPLASH
REM --------------------------------------------
echo [4/8] Dang kiem tra Icon va Man hinh cho...
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
    echo [5/8] Dang dung bo khung Android...
    call npx cap add android
    powershell -Command "$p='android\app\src\main\AndroidManifest.xml'; if (Test-Path $p) { $c=Get-Content $p; if($c -notmatch 'android.permission.INTERNET'){ $c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application' | Set-Content $p } }"
)

REM --------------------------------------------
REM 8. DONG BO & BUILD APK
REM --------------------------------------------
echo [6/8] Dong bo code vao Android...
call npx cap sync android

echo [7/8] Dang Build APK (Vui long doi)...
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
echo [8/8] Dang tao file OTA update.zip...
if exist "dist" (
    if exist "update.zip" del /f /q "update.zip"
    powershell -Command "Compress-Archive -Path 'dist\*' -DestinationPath 'update.zip' -Force"
    echo [OK] Da tao thanh cong file: update.zip
) else (
    echo [Canh bao] Khong tim thay thu muc dist de nen OTA.
)

REM --------------------------------------------
REM 10. TU DONG UPLOAD LEN GITHUB RELEASES
REM --------------------------------------------
echo.
echo [!] Dang day ban cap nhat len GitHub...

where gh >nul 2>nul
if !errorlevel! equ 0 (
    if not "!APP_VERSION!"=="" (
        gh release create v!APP_VERSION! "update.zip" --title "Ban cap nhat v!APP_VERSION!" --notes "Cap nhat bai tap toan moi nhat."
        echo [OK] Da upload thanh cong file update.zip len GitHub Releases!
    )
) else (
    REM Da xoa dau ngoac don o chu gh de tranh loi cu phap
    echo [Canh bao] Chua cai dat GitHub CLI gh. Ban phai up file update.zip bang tay.
)

echo ==========================================
echo         HOAN TAT XUAT SAC TAT CA!
echo ==========================================
if exist "android\app\build\outputs\apk\debug" start explorer "android\app\build\outputs\apk\debug"

pause