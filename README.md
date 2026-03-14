# 📱 Ứng Dụng Học Toán Lớp 6 (Kèm Hệ Thống OTA & Google Sheets)

Dự án này là một ứng dụng di động đa nền tảng được xây dựng bằng ReactJS (Vite) và Capacitor. Tính năng "ăn tiền" nhất của dự án là hệ thống **Tự động cập nhật không cần qua CH Play (OTA Update)** và **Lưu điểm học sinh miễn phí qua Google Sheets**.

---

## 1. Ý Tưởng Chính & Kiến Trúc Hệ Thống

Ứng dụng hoạt động dựa trên 3 trụ cột chính:
1. **Frontend (Giao diện):** Viết bằng ReactJS, Vite, TailwindCSS.
2. **Mobile & OTA (Đóng gói & Cập nhật):** Dùng Capacitor để chuyển Web thành App Android. Dùng thư viện `@capgo/capacitor-updater` để tải và bung file `update.zip` ngay bên trong App.
3. **Backend & Database (Máy chủ & Cơ sở dữ liệu):** Dùng Google Apps Script làm API. App sẽ hỏi Google Script xem có bản mới không, đồng thời gửi điểm lên để Google Script ghi vào file Google Sheets (Excel).

---

## 2. Yêu Cầu Cài Đặt Ban Đầu (Prerequisites)

Để hệ thống tự động hóa `.bat` hoạt động trơn tru, máy tính của bạn bắt buộc phải có:
* **Node.js:** Để chạy các lệnh `npm`.
* **Java JDK:** Để biên dịch code Android.
* **Android Studio:** Để lấy bộ công cụ Build APK.
* **GitHub CLI (`gh`):** Công cụ dòng lệnh của GitHub để file `.bat` tự động đẩy bản cập nhật lên mạng.

---

## 3. Hướng Dẫn Thiết Lập Backend (Google Sheets)

Hệ thống cần một file Google Sheets làm "Trung tâm điều khiển".

**Bước 1: Tạo file Google Sheets**
1. Tạo một bảng tính mới, đặt tên tùy ý.
2. Tạo 2 trang tính (sheet) bên dưới:
   * `Sheet1`: Nơi hệ thống tự động lưu điểm học sinh.
   * `Config`: Nơi bạn điều khiển phiên bản OTA.
3. Tại trang tính `Config`:
   * Ô **A1** gõ: `Version` | Ô **B1** gõ số phiên bản hiện tại (VD: `2.0.8`).
   * Ô **A2** gõ: `Message` | Ô **B2** gõ lời nhắn (VD: `Da co bai tap moi!`).

**Bước 2: Gắn mã Google Apps Script**
1. Vào `Tiện ích mở rộng` -> `Apps Script`.
2. Dán mã nguồn (gồm hàm `doGet` và `doPost`) vào.
3. Nhấn **Deploy** -> **New deployment** -> Chọn loại **Web app**.
4. Quyền truy cập: Chọn **Anyone** (Bất kỳ ai).
5. Copy đường link URL Web App được cấp.

**Bước 3: Kết nối App với Google**
Mở file `src/config.ts` trong mã nguồn React và dán link vừa copy vào:
```typescript
// src/config.ts
export const APP_VERSION = '2.0.8';
export const VERSION_CHECK_URL = 'LINK_GOOGLE_SCRIPT_CUA_BAN';
export const GOOGLE_SHEET_API_URL = 'LINK_GOOGLE_SCRIPT_CUA_BAN';