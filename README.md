
# 📚 HỆ THỐNG TẠO APP HỌC TẬP TÁI SỬ DỤNG

## Build 1 lần, nhân bản nhiều môn/lớp, cập nhật OTA, lưu điểm tự động

**Phát triển bởi:** TontonYuta
**Mục tiêu:** Dùng một bộ khung duy nhất để tạo nhanh nhiều app học tập khác nhau như:

* Toán 6
* Toán 7
* Lý 6
* Lý 7
* Hoá 8
* Văn 6
* ...

Mỗi app có thể:

* học và làm bài trên điện thoại
* lưu điểm tự động lên Google Sheets
* nhận cập nhật bài mới qua OTA
* tách riêng từng môn/lớp để không bị lẫn dữ liệu

---

# 1. Hệ thống này dùng để làm gì

Bộ khung này giúp bạn không phải làm lại từ đầu mỗi lần tạo app mới.

Thay vì mỗi môn là một project hoàn toàn khác nhau, bạn chỉ cần:

* clone bộ khung
* đổi tên app
* đổi dữ liệu câu hỏi
* đổi cấu hình Google Sheets / OTA
* build lại

Từ đó bạn có thể tạo ra nhiều app cùng kiểu giao diện nhưng khác:

* tên môn
* nội dung bài học
* ngân hàng câu hỏi
* sheet lưu điểm
* repo cập nhật OTA

---

# 2. Mỗi app nên tách riêng những gì

Để dễ quản lý, mỗi app mới nên có riêng:

* **một thư mục project riêng**
* **một repository GitHub riêng**
* **một Google Sheet riêng**
* **một Google Apps Script Web App riêng**
* **một appId riêng**
* **một tên app riêng**
* **một bộ dữ liệu câu hỏi riêng**

Ví dụ:

## App Toán 6

* Repo: `math6`
* appId: `com.tontonyuta.math6`
* Google Sheet: `Diem_Toan_6`
* API Web App: riêng cho Toán 6

## App Lý 7

* Repo: `physics7`
* appId: `com.tontonyuta.physics7`
* Google Sheet: `Diem_Ly_7`
* API Web App: riêng cho Lý 7

Làm vậy sẽ tránh:

* app này đè app kia
* điểm bị trộn giữa các môn
* update OTA sai app
* link update bị lẫn

---

# 3. Cấu trúc thư mục chuẩn

Bạn nên giữ cấu trúc project ổn định như sau:

```bash
project-root/
├─ src/
│  ├─ components/
│  ├─ data/
│  │  ├─ chapters.ts
│  │  └─ questions/
│  │     ├─ chapter1.ts
│  │     ├─ chapter1-exams.ts
│  │     ├─ chapter2.ts
│  │     ├─ chapter2-exams.ts
│  │     └─ ...
│  ├─ services/
│  │  └─ googleSheets.ts
│  ├─ config.ts
│  ├─ types.ts
│  └─ App.tsx
├─ public/
│  └─ question-assets/
├─ android/
├─ capacitor.config.ts hoặc capacitor.config.json
├─ package.json
├─ build.bat
├─ icon.png
├─ splash.png
└─ README.md
```

---

# 4. Những file quan trọng nhất

## `src/config.ts`

Chứa các biến cấu hình như:

* version app
* link kiểm tra phiên bản
* link API Google Script

Ví dụ:

```ts
export const APP_VERSION = '1.0.0';
export const API_URL = 'https://script.google.com/macros/s/xxxxx/exec';
export const VERSION_CHECK_URL = 'https://raw.githubusercontent.com/your-repo/version.json';
```

## `capacitor.config.*`

Chứa:

* `appId`
* `appName`

Ví dụ:

```ts
appId: 'com.tontonyuta.math12',
appName: 'Toán 12',
```

## `src/data/`

Chứa toàn bộ dữ liệu bài học, chương, đề kiểm tra.

## `build.bat`

File build tự động, có thể dùng để:

* đổi version
* build web
* sync android
* nén OTA
* upload release
* báo Google Sheets

## `public/question-assets/`

Chứa ảnh câu hỏi:

* đồ thị
* hình học
* bảng biến thiên
* ảnh đáp án

---

# 5. Cách clone một app mới từ app cũ

Giả sử bạn đã có app **Toán 12**, và giờ muốn tạo **Lý 7**.

## Bước 1: copy nguyên project

Sao chép thư mục project cũ sang thư mục mới.

Ví dụ:

* từ `math12`
* thành `physics7`

## Bước 2: đổi tên thư mục project

Ví dụ:

* `G:/AppDayToan/math12`
* thành `G:/AppDayToan/physics7`

## Bước 3: mở project mới và sửa các thông tin nhận diện

Bạn cần sửa ít nhất các mục sau:

### Trong `capacitor.config.ts` hoặc `capacitor.config.json`

* `appId`
* `appName`

Ví dụ:

```ts
appId: 'com.tontonyuta.physics7',
appName: 'Lý 7',
```

### Trong `src/config.ts`

* version ban đầu
* `API_URL`
* `VERSION_CHECK_URL`

### Trong `package.json`

nếu muốn, đổi:

* `name`
* `description`

Ví dụ:

```json
"name": "physics7-app"
```

### Trong giao diện

Nếu màn hình chính có tiêu đề cứng như:

* Toán 12
* Ứng dụng đạo hàm

thì sửa lại cho đúng môn mới.

---

# 6. Quy trình chuẩn để tạo app mới cho môn khác

## Bước 1: tạo Google Sheet mới

Tạo một file Google Sheets mới cho đúng app đó.

Ví dụ:

* `Diem_Toan_6`
* `Diem_Toan_7`
* `Diem_Ly_6`
* `Diem_Ly_7`

Mỗi app một sheet riêng.

## Bước 2: tạo Apps Script mới

Trong Google Sheet:

* vào **Extensions > Apps Script**
* dán file `Code.gs`

Trong script, sửa:

* email nhận báo cáo
* tên sheet nếu cần
* mật khẩu bảo vệ nếu có

## Bước 3: deploy Web App

Chọn:

* **Deploy > New deployment**
* Type: **Web app**
* Access: **Anyone**

Sau đó copy URL.

## Bước 4: dán URL vào project

Mở `src/config.ts` và thay:

```ts
export const API_URL = '...';
```

bằng URL Web App mới.

## Bước 5: tạo repo GitHub mới

Mỗi app nên có repo riêng.

Ví dụ:

* `math6`
* `math7`
* `physics6`
* `physics7`

Lý do:

* OTA của mỗi app có link riêng
* release riêng
* version riêng
* không lẫn file update

## Bước 6: sửa link OTA

Nếu app của bạn dùng OTA qua GitHub Releases, hãy đổi:

* `VERSION_CHECK_URL`
* hoặc đường dẫn release/update

để trỏ đúng repo mới.

---

# 7. Những thứ bắt buộc phải đổi khi tạo app mới

Đây là checklist rất quan trọng.

## Bắt buộc phải đổi

* tên thư mục project
* `appId`
* `appName`
* `API_URL`
* `VERSION_CHECK_URL`
* repo GitHub
* dữ liệu trong `src/data/`
* icon/splash nếu muốn app nhìn khác nhau

## Nên đổi

* tên package trong `package.json`
* tiêu đề trong README
* tên Google Sheet
* tên Apps Script deployment
* logo app
* màu chủ đạo nếu muốn phân biệt môn

---

# 8. Cách tổ chức dữ liệu để clone dễ nhất

Muốn clone app nhanh, bạn nên tách rõ:

## Phần khung chung

Giữ nguyên cho mọi app:

* `App.tsx`
* `Quiz.tsx`
* `Review.tsx`
* `Result.tsx`
* `types.ts`
* `googleSheets.ts`
* `build.bat`

## Phần thay theo môn/lớp

Đổi theo từng app:

* `src/data/chapters.ts`
* `src/data/questions/...`
* `public/question-assets/...`
* `icon.png`
* `splash.png`
* `src/config.ts`

Như vậy khi clone app mới, bạn chỉ chạm vào đúng vài chỗ cần đổi.

---

# 9. Quy trình làm việc hằng ngày

Khi bạn muốn cập nhật bài mới cho một app:

## Bước 1

Mở đúng project app đó.

Ví dụ:

* muốn cập nhật Toán 7 thì mở project `math7`
* muốn cập nhật Lý 6 thì mở project `physics6`

## Bước 2

Sửa dữ liệu:

* thêm câu hỏi
* thêm đề mới
* thêm ảnh vào `public/question-assets`

## Bước 3

Tăng version trong `src/config.ts`

Ví dụ:

```ts
export const APP_VERSION = '1.0.1';
```

## Bước 4

Chạy `build.bat`

## Bước 5

Đợi script:

* build app
* sync android
* tạo gói update
* upload release
* ghi log nếu có

## Bước 6

Người dùng mở app và nhận cập nhật mới

---

# 10. Quy tắc đặt tên để về sau không rối

## Tên project

* `math6`
* `math7`
* `physics6`
* `physics7`

## appId

* `com.tontonyuta.math6`
* `com.tontonyuta.math7`
* `com.tontonyuta.physics6`
* `com.tontonyuta.physics7`

## Google Sheet

* `Diem_Toan_6`
* `Diem_Toan_7`
* `Diem_Ly_6`
* `Diem_Ly_7`

## File đề

* `chapter1-exams.ts`
* `chapter2-exams.ts`

## ID topic

* topic học: `c1-t1`, `c1-t2`
* đề kiểm tra: `c1-e1`, `c1-e2`

## Ảnh câu hỏi

Ví dụ:

```bash
public/question-assets/c1/de1/p1-q2.png
public/question-assets/c1/de1/p1-q7.png
public/question-assets/c1/de1/p2-q2.png
```

---

# 11. Cách tổ chức để làm nhiều app mà không lẫn

Bạn nên có thư mục cha như này:

```bash
G:/AppDayToan/
├─ math6/
├─ math7/
├─ math12/
├─ physics6/
├─ physics7/
└─ chemistry8/
```

Mỗi app là một project độc lập.

Đừng để:

* nhiều môn chung một repo
* nhiều app chung một `appId`
* nhiều app chung một Google Sheet

Vì rất dễ loạn.

---

# 12. `build.bat` nên làm gì

Một file `build.bat` tốt nên hỗ trợ tối thiểu:

* hỏi version mới
* cập nhật version
* chạy `npm run build`
* chạy `npx cap sync android`
* build Android
* nén OTA thành `update.zip`
* upload lên release
* gọi API log/update nếu cần

Nếu bạn muốn clone dễ, hãy viết `build.bat` sao cho chỉ cần sửa:

* tên repo
* tên app
* link release
* API URL

là dùng lại được.

---

# 13. Cách đổi icon và splash cho app mới

Muốn phân biệt app dễ hơn, mỗi app nên có icon riêng.

Ví dụ:

* Toán 6: icon xanh dương
* Toán 7: icon tím
* Lý 6: icon xanh lá
* Lý 7: icon cam

Thay các file:

* `icon.png`
* `splash.png`

rồi sync/build lại app.

---

# 14. Các lỗi thường gặp

## Lỗi 1: app mới cài đè app cũ

**Nguyên nhân:** `appId` giống nhau
**Cách sửa:** đổi `appId` khác hoàn toàn

## Lỗi 2: điểm Toán 6 lại ghi vào sheet Lý 7

**Nguyên nhân:** `API_URL` chưa đổi
**Cách sửa:** tạo Web App riêng và dán đúng link mới

## Lỗi 3: app hiện sai dữ liệu môn cũ

**Nguyên nhân:** chưa thay `src/data/`
**Cách sửa:** kiểm tra `chapters.ts` và các file câu hỏi

## Lỗi 4: nhận 2 đề giống nhau

**Nguyên nhân:** gộp đề 2 lần
**Cách sửa:** chỉ gộp trong `chapterX.ts`, không gộp lại trong `chapters.ts`

## Lỗi 5: ảnh câu hỏi không hiện

**Nguyên nhân:** sai đường dẫn ảnh
**Cách sửa:** kiểm tra thư mục `public/question-assets/...`

## Lỗi 6: OTA không chạy

**Nguyên nhân:** sai repo hoặc sai release URL
**Cách sửa:** kiểm tra `VERSION_CHECK_URL`, repo, và file update

---

# 15. Mẫu quy trình clone nhanh nhất

Ví dụ bạn muốn tạo **Toán 7** từ app **Toán 6**.

## Làm theo đúng thứ tự này:

1. copy thư mục `math6` thành `math7`
2. đổi `appId` thành `com.tontonyuta.math7`
3. đổi `appName` thành `Toán 7`
4. tạo Google Sheet `Diem_Toan_7`
5. tạo Apps Script Web App mới
6. dán `API_URL` mới vào `src/config.ts`
7. tạo repo GitHub mới `math7`
8. sửa link OTA/version check
9. thay dữ liệu trong `src/data/`
10. chạy build

Nếu giữ đúng checklist này, bạn có thể nhân bản app rất nhanh.

---

# 16. Gợi ý chiến lược lâu dài

Nếu sau này bạn có nhiều app, nên chia thành 2 tầng:

## Tầng 1: bộ khung gốc

Một project “template” sạch, chưa gắn dữ liệu môn nào.

Ví dụ:

* `study-app-template`

## Tầng 2: các app con

Clone từ template ra:

* `math6`
* `math7`
* `physics6`
* `physics7`

Cách này tốt hơn rất nhiều so với clone từ một app đã sửa lung tung.

---

# 17. Ghi chú bảo mật

Nếu bạn đang dùng:

* mật khẩu trong `build.bat`
* token GitHub
* khóa API
* email nhận báo cáo

thì không nên hard-code bừa bãi ở nhiều chỗ.

Nên gom vào:

* file cấu hình riêng
* hoặc biến môi trường
* hoặc file `.env` nếu project hỗ trợ

---

# 18. Kết luận

Muốn clone app thật dễ, bạn chỉ cần nhớ nguyên tắc cốt lõi:

**Một app = một project riêng + một repo riêng + một Google Sheet riêng + một appId riêng.**

Còn code khung thì dùng lại gần như toàn bộ.

Cách tổ chức tốt nhất cho bạn hiện tại là:

* giữ một bộ khung chung
* tách dữ liệu từng môn/lớp
* tách riêng từng app
* không gộp lung tung trong `chapters.ts`
