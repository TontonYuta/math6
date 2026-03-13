@echo off
setlocal enabledelayedexpansion
REM Chuyen sang UTF-8 de hien thi tieng Viet khong bi loi font
chcp 65001 >nul
REM Chuyen huong den dung thu muc chua file
cd /d "%~dp0"

echo ==========================================
echo        TONTONYUTA - ONE CLICK APK (FINAL)
echo ==========================================

REM --------------------------------------------
REM 1. KIEM TRA DIEU KIEN
REM --------------------------------------------
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [Loi] NodeJS chua duoc cai dat tren may!
    pause
    exit /b
)

REM --------------------------------------------
REM 2. CAI THU VIEN (NODEJS & CAPACITOR)
REM --------------------------------------------
echo [1/6] Dang tai nguyen lieu (npm install)...
call npm install
call npm install @capacitor/core @capacitor/cli @capacitor/android

REM --------------------------------------------
REM 3. BUILD GIAO DIEN WEB TRUOC
REM --------------------------------------------
REM Lam buoc nay truoc de tao ra thu muc 'dist', giup cac buoc sau khong bao loi.
echo [2/6] Dang ghep noi giao dien Web (Vite)...
call npm run build

REM --------------------------------------------
REM 4. XU LY CAU HINH APP
REM --------------------------------------------
echo [3/6] Thiet lap cau hinh he thong...
REM Xoa ngay file .ts de tranh loi "unknown option"
if exist capacitor.config.ts del /f /q capacitor.config.ts

REM Neu la du an moi, hien bang hoi ten
if not exist capacitor.config.json (
    echo.
    echo ==========================================
    echo [!] KHOI TAO APP MOI
    echo ==========================================
    set /p APP_NAME="1. Nhap ten App (VD: English Reading): "
    set /p APP_ID="2. Nhap ID (VD: com.tontonyuta.english): "

    if "!APP_NAME!"=="" set APP_NAME=TontonYuta App
    if "!APP_ID!"=="" set APP_ID=com.tontonyuta.myapp

    (
    echo {
    echo   "appId": "!APP_ID!",
    echo   "appName": "!APP_NAME!",
    echo   "webDir": "dist",
    echo   "bundledWebRuntime": false
    echo }
    ) > capacitor.config.json
    
    if exist android (
        echo Dang xoa khung Android cu de doi ten...
        rd /s /q android
    )
    echo [OK] Da ghi nhan App: !APP_NAME!
) else (
    echo [OK] Da co cau hinh, bo qua buoc nhap ten.
)

REM --------------------------------------------
REM 5. KHOI TAO ANDROID & CAP QUYEN INTERNET
REM --------------------------------------------
if not exist android (
    echo [4/6] Dang dung bo khung Android...
    call npx cap add android
    
    echo [!] Dang cap quyen Internet de khong bi liet nut bam...
    powershell -Command "$p='android\app\src\main\AndroidManifest.xml'; if (Test-Path $p) { $c=Get-Content $p; if($c -notmatch 'android.permission.INTERNET'){ $c -replace '<application', '<uses-permission android:name=\"android.permission.INTERNET\" />`n    <application' | Set-Content $p } }"
) else (
    echo [4/6] Khung Android da san sang.
)

REM --------------------------------------------
REM 6. DONG BO & XUAT XUONG APK
REM --------------------------------------------
echo [5/6] Dong bo code tu Web sang Android...
call npx cap sync android

echo [6/6] Dang tien hanh Build APK (Vui long doi)...
if exist "android\gradlew.bat" (
    cd android
    call gradlew.bat assembleDebug --daemon
    cd ..
) else (
    echo [Loi] Khong tim thay Gradle. Quatrinh bi huy!
    pause
    exit /b
)

echo ==========================================
echo           BUILD APK HOAN TAT!
echo ==========================================

REM Tu dong mo thu muc chua file APK
if exist "android\app\build\outputs\apk\debug" (
    start explorer "android\app\build\outputs\apk\debug"
)

pause