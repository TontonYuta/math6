

# 📚 HỆ THỐNG QUẢN LÝ HỌC TẬP TỰ ĐỘNG

## OTA Update + Google Sheets Analytics

> **Author:** TontonYuta
> **Purpose:** Tự động hóa việc cập nhật ứng dụng học tập và thu thập dữ liệu điểm số của học sinh thông qua **Google Apps Script + Google Sheets + Github Releases**.

---

# 🎯 1. Tổng quan hệ thống

Hệ thống này cho phép:

* 📱 App học tập tự động gửi điểm số của học sinh lên server
* 📊 Google Sheets tự động lưu và thống kê dữ liệu
* 🔄 App tự động kiểm tra cập nhật OTA
* 📦 Build script tự động tạo bản cập nhật
* 🚀 Github tự động lưu trữ bản update
* 📧 Gmail gửi báo cáo

---

# 🧠 Kiến trúc hệ thống

```
Mobile App
     ↓
Google Apps Script API
     ↓
Google Sheets (Database)
     ↓
Statistics Engine
     ↓
Dashboard + Gmail Report
     ↓
OTA Update System
     ↓
Github Releases
```

Luồng hoạt động:

```
Học sinh làm bài
      ↓
App gửi điểm lên Google Script
      ↓
Script ghi dữ liệu vào Sheet
      ↓
Script cập nhật bảng thống kê
      ↓
Admin xem Dashboard
```

---

# 📁 2. Cấu trúc thư mục dự án

```
project/
│
├── src/
│   └── config.ts
│
├── android/
│   └── Android Studio project
│
├── build.bat
│
├── icon.png
├── splash.png
│
└── README.md
```

### Ý nghĩa từng file

| File         | Chức năng                      |
| ------------ | ------------------------------ |
| `config.ts`  | Chứa API URL và version        |
| `build.bat`  | Script tự động build và deploy |
| `android/`   | Mã nguồn Android               |
| `icon.png`   | Icon ứng dụng                  |
| `splash.png` | Màn hình chờ                   |

---

# ⚙️ 3. Thiết lập hệ thống lần đầu

## Bước 1: Tạo Google Sheets

Tạo một file mới:

```
Diem_Mon_Toan_6
```

Trong file sẽ có 3 sheet:

```
Sheet1
Stats
Config
```

---

## Bước 2: Cài đặt Google Apps Script

Vào

```
Extensions → Apps Script
```

Tạo file:

```
Code.gs
```

Dán toàn bộ script backend vào.

---

## Bước 3: Deploy Web App

Chọn:

```
Deploy → New Deployment
```

Type:

```
Web App
```

Cấu hình:

```
Execute as: Me
Access: Anyone
```

Sau đó copy URL:

```
https://script.google.com/macros/s/XXXX/exec
```

---

# 🔌 4. API Specification

## API gửi điểm học sinh

### Endpoint

```
POST /exec
```

### Header

```
Content-Type: application/json
```

### Request

```json
{
 "studentName": "Hoàng",
 "topicTitle": "Phân số",
 "score": 3,
 "totalQuestions": 5,
 "appVersion": "2.1.0"
}
```

### Response

```json
{
 "status": "success"
}
```

---

# 🔄 5. OTA Update API

App sẽ kiểm tra update bằng request:

```
GET /exec
```

### Response

```json
{
 "version": "2.2.0",
 "message": "Đã có bài tập mới",
 "updateUrl": "https://github.com/username/repo/releases/download/v2.2.0/update.zip"
}
```

---

# 🔐 6. API cập nhật phiên bản (Admin Only)

Script hỗ trợ cập nhật version từ file `.bat`.

### Request

```
POST /exec
```

Body:

```json
{
 "action": "update_version",
 "secret": "TontonYuta_Dep_Trai_2026",
 "newVersion": "2.2.0"
}
```

### Response

```json
{
 "status": "success"
}
```

---

# 📊 7. Cấu trúc Google Sheets

## Sheet1 (Log dữ liệu)

| Thời gian  | Học sinh | Bài học | Điểm | Version |
| ---------- | -------- | ------- | ---- | ------- |
| 14/03/2026 | Hoàng    | Phân số | 3/5  | 2.1.0   |

---

## Stats (Thống kê)

| Học sinh | Số bài | Tổng đúng | Tổng câu | Điểm TB |
| -------- | ------ | --------- | -------- | ------- |
| Hoàng    | 5      | 12        | 20       | 6.0     |

Script sẽ tự động tính toán.

---

## Config (OTA)

| Key     | Value             |
| ------- | ----------------- |
| Version | 2.1.0             |
| Message | Đã có bài tập mới |

---

# ⚡ 8. Quy trình sử dụng hàng ngày

Khi muốn phát hành bài tập mới:

### Bước 1

Chạy

```
build.bat
```

---

### Bước 2

Nhập version mới

```
2.2.0
```

---

### Bước 3

Script tự động:

```
Build APK
Zip update
Upload Github
Update Google Sheets
Send Gmail report
```

---

### Bước 4

Học sinh mở app

App sẽ thấy:

```
Đã có bài tập mới
```

Bấm update → tải file `update.zip`.

---

# 📧 9. Báo cáo Gmail

Hệ thống có thể gửi mail khi:

```
Có version mới
```

Ví dụ:

```
Subject: Update mới

Version: 2.2.0
Repo: math6
Time: 14/03/2026
```

---

# 🛡 10. Security Notes

Để tránh phá hoại hệ thống:

### Không public secret

```
TontonYuta_Dep_Trai_2026
```

---

### Không commit file build.bat lên repo public

Vì file có chứa:

```
Github token
secret update
```

---

### Thay secret định kỳ

Khuyến nghị:

```
Mỗi học kỳ thay secret
```

---

# 🧰 11. Troubleshooting

| Lỗi              | Nguyên nhân          | Cách sửa          |
| ---------------- | -------------------- | ----------------- |
| 401              | Chưa cấp quyền Gmail | Run script 1 lần  |
| 411              | Sai header           | Thêm Content-Type |
| App không update | Sai version          | Kiểm tra Config   |
| Stats lỗi        | Dữ liệu rác          | Xóa dòng sai      |

---

# 💾 12. Backup dữ liệu tự động

Để tránh mất dữ liệu, script backup mỗi tuần.

```javascript
function weeklyBackup(){

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var file = DriveApp.getFileById(ss.getId());

  var backupName = "Backup_" +
    Utilities.formatDate(new Date(),"GMT+7","yyyy-MM-dd");

  file.makeCopy(backupName);
}
```

Trigger:

```
Time Driven → Weekly
```

---

# 📈 13. Mở rộng hệ thống

Có thể nâng cấp thêm:

### Dashboard học sinh

* biểu đồ tiến bộ
* ranking

---

### Learning analytics

* bài nào sai nhiều
* chủ đề khó

---

### Notification

* gửi thông báo khi có bài mới

---

# 🏫 14. Sử dụng cho nhiều môn

Khuyến nghị:

```
Mỗi môn → 1 Repo Github
Mỗi môn → 1 Google Sheet
```

Ví dụ:

```
math6
physics6
chemistry6
```

---

# 🚀 15. Roadmap nâng cấp

Trong tương lai có thể thêm:

* Web Admin Panel
* Firebase push notification
* AI gợi ý bài tập
* thống kê theo lớp

---

# 📜 License

```
MIT License
```

---

# ❤️ Credits

```
Author: TontonYuta
System: OTA Learning Platform
Year: 2026
```

---
