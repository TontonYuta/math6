# Ứng dụng Học Toán Trắc Nghiệm Lớp 6

Ứng dụng được thiết kế hoàn toàn offline, tối giản và thân thiện với học sinh. Không yêu cầu kết nối mạng (sau khi đã tải trang) và không sử dụng AI, giúp học sinh tập trung tối đa vào việc học và luyện tập.

## 📂 Cấu trúc dữ liệu

Toàn bộ nội dung bài học và câu hỏi được lưu trữ trong thư mục `src/data/`. Bạn có thể dễ dàng chỉnh sửa các file này bằng bất kỳ trình soạn thảo văn bản nào (như VS Code, Notepad) để cập nhật nội dung.

- `src/data/chapters.ts`: Chứa danh sách các chương lớn (Ví dụ: Chương I, Chương II).
- `src/data/questions/`: Thư mục chứa các file câu hỏi chi tiết cho từng chương.
  - `chapter1.ts`: Câu hỏi Chương I (Số nguyên)
  - `chapter2.ts`: Câu hỏi Chương II (Phân số)
  - `chapter3.ts`: Câu hỏi Chương III (Số thập phân)
  - `chapter4.ts`: Câu hỏi Chương IV (Toán có lời văn)

---

## 📝 Hướng dẫn định dạng Công thức Toán học (KaTeX)

Ứng dụng hỗ trợ hiển thị công thức toán học tuyệt đẹp theo chuẩn LaTeX thông qua thư viện KaTeX. Để viết công thức toán học, bạn chỉ cần kẹp mã LaTeX vào giữa các dấu `$` (cho công thức cùng dòng) hoặc `$$` (cho công thức đứng riêng một dòng).

**Một số ví dụ phổ biến:**
- Phân số: `$\frac{a}{b}$` hiển thị thành $\frac{a}{b}$
- Số mũ: `$x^2$` hiển thị thành $x^2$
- Chỉ số dưới: `$a_1$` hiển thị thành $a_1$
- Dấu nhân: `$\times$` hiển thị thành $\times$
- Dấu chia: `$\div$` hiển thị thành $\div$
- Dấu khác: `$\neq$` hiển thị thành $\neq$
- Tập hợp số: `$\mathbb{Z}$` (Số nguyên), `$\mathbb{N}$` (Số tự nhiên)
- Căn bậc hai: `$\sqrt{x}$` hiển thị thành $\sqrt{x}$
- Góc, tam giác: `$\angle ABC$`, `$\Delta ABC$`

*Ví dụ áp dụng trong câu hỏi:*
```typescript
text: 'Kết quả của phép tính $\frac{1}{2} + \frac{1}{3}$ là:',
options: ['$\frac{2}{5}$', '$\frac{5}{6}$', '$1$', '$\frac{1}{6}$'],
```

---

## 📝 Hướng dẫn thêm/sửa câu hỏi

Để thêm hoặc sửa câu hỏi, bạn mở file tương ứng trong thư mục `src/data/questions/` (ví dụ: `chapter1.ts`).

Mỗi chủ đề (Topic) sẽ có một danh sách `questions`. Bạn copy cấu trúc của một câu hỏi có sẵn và dán vào, sau đó thay đổi nội dung theo mẫu sau:

```typescript
{
  id: 'q1-1-4', // ID duy nhất cho câu hỏi (bạn có thể tự đặt, miễn là không trùng)
  text: 'Nội dung câu hỏi của bạn viết ở đây?',
  options: [
    'Đáp án A', 
    'Đáp án B', 
    'Đáp án C', 
    'Đáp án D'
  ],
  correctAnswerIndex: 1, // Vị trí của đáp án đúng (Bắt đầu từ 0. 0=A, 1=B, 2=C, 3=D)
  explanation: 'Giải thích chi tiết vì sao lại chọn đáp án này để học sinh hiểu bài.'
}
```

**Lưu ý quan trọng:**
- `correctAnswerIndex` đếm từ `0`. Nếu đáp án đúng là phương án đầu tiên, giá trị là `0`. Nếu là phương án thứ hai, giá trị là `1`.
- `explanation` (lời giải thích) là phần rất quan trọng giúp học sinh tự học, hệ thống sẽ hiển thị dòng này khi học sinh chọn xong đáp án.

---

## 📚 Hướng dẫn thêm chuyên đề (Topic) mới

Trong cùng file của chương đó (ví dụ `chapter1.ts`), bạn có thể thêm một chuyên đề mới bằng cách thêm một đoạn code sau vào danh sách:

```typescript
{
  id: 'c1-t6', // QUAN TRỌNG: ID phải bắt đầu bằng c1- (Chương 1), c2- (Chương 2), c3- (Chương 3), c4- (Chương 4) để hệ thống tính thành tích chính xác.
  title: 'Tên chuyên đề mới',
  description: 'Mô tả ngắn gọn về chuyên đề này.',
  questions: [
    // Thêm các câu hỏi của chuyên đề này vào đây (theo cấu trúc ở phần trên)
  ]
}
```

---

## 📖 Hướng dẫn thêm Chương (Chapter) mới

Để thêm một chương hoàn toàn mới (ví dụ: Chương 5), bạn cần làm theo 3 bước:

1. **Tạo file dữ liệu mới:** Tạo một file mới trong thư mục `src/data/questions/`, ví dụ `chapter5.ts`.
2. **Định nghĩa các chuyên đề:** Trong file `chapter5.ts`, tạo danh sách các chuyên đề tương tự như các chương khác:
   ```typescript
   import { Topic } from '../../types';
   export const chapter5Topics: Topic[] = [
     {
       id: 'c5-t1', // Lưu ý tiền tố c5-
       title: 'Chuyên đề 1 của Chương 5',
       description: 'Mô tả...',
       questions: [ /* ... */ ]
     }
   ];
   ```
3. **Đăng ký chương mới vào hệ thống:** Mở file `src/data/chapters.ts`, import file vừa tạo và thêm vào mảng `chapters`:
   ```typescript
   import { chapter5Topics } from './questions/chapter5';
   
   export const chapters: Chapter[] = [
     // ... các chương cũ ...
     {
       id: 'c5',
       title: 'CHƯƠNG V: TÊN CHƯƠNG MỚI',
       description: 'Mô tả chương mới',
       topics: chapter5Topics,
     }
   ];
   ```

---

## 🚀 Cách chạy ứng dụng trên máy tính cá nhân

Nếu bạn tải mã nguồn (source code) này về máy tính để chạy offline hoàn toàn:

1. Cài đặt phần mềm [Node.js](https://nodejs.org/).
2. Mở Terminal (hoặc Command Prompt) tại thư mục chứa code.
3. Chạy lệnh cài đặt các thư viện cần thiết: 
   ```bash
   npm install
   ```
4. Khởi động ứng dụng: 
   ```bash
   npm run dev
   ```
5. Mở trình duyệt web (Chrome, Cốc Cốc, Safari...) và truy cập vào đường dẫn hiển thị trên màn hình (thường là `http://localhost:5173` hoặc `http://localhost:3000`).
