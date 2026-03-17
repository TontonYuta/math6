import { Topic } from '../../types';
import { chapter3ExamTopics } from './chapter3-exams';

export const chapter3CoreTopics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Khái niệm phân số',
    description: 'Nhận biết phân số, tử số, mẫu số và ý nghĩa của phân số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q3-1-1',
        text: 'Phân số có dạng:',
        options: ['$\\dfrac{a}{b}$ với $b\\ne 0$', '$a+b$', '$a-b$', '$a\\times b$'],
        correctAnswerIndex: 0,
        explanation: 'Phân số có dạng $\\dfrac{a}{b}$ với $a,b\\in\\mathbb{Z}$ và $b\\ne 0$.'
      },
      {
        id: 'q3-1-2',
        text: 'Trong phân số $\\dfrac{3}{5}$, số 3 được gọi là:',
        options: ['Mẫu số', 'Tử số', 'Thương', 'Số đối'],
        correctAnswerIndex: 1,
        explanation: 'Trong phân số $\\dfrac{3}{5}$, 3 là tử số.'
      },
      {
        id: 'q3-1-3',
        text: 'Trong phân số $\\dfrac{3}{5}$, số 5 được gọi là:',
        options: ['Mẫu số', 'Tử số', 'Số chia', 'Số bị chia'],
        correctAnswerIndex: 0,
        explanation: 'Trong phân số $\\dfrac{3}{5}$, 5 là mẫu số.'
      },
      {
        id: 'q3-1-4',
        text: 'Phân số nào sau đây được viết đúng?',
        options: ['$\\dfrac{4}{0}$', '$\\dfrac{0}{4}$', '$\\dfrac{3,5}{2}$', '$\\dfrac{a}{0}$'],
        correctAnswerIndex: 1,
        explanation: 'Phân số phải có mẫu khác 0, nên $\\dfrac{0}{4}$ là hợp lệ.'
      },
      {
        id: 'q3-1-5',
        text: 'Phân số $\\dfrac{2}{3}$ cho biết:',
        options: [
          'Lấy 2 phần khi chia thành 3 phần bằng nhau',
          'Lấy 3 phần khi chia thành 2 phần bằng nhau',
          '2 chia cho 0',
          '3 lớn hơn 2'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phân số $\\dfrac{2}{3}$ biểu thị 2 phần trong 3 phần bằng nhau.'
      },
      {
        id: 'q3-1-6',
        text: 'Số nào sau đây có thể viết dưới dạng phân số?',
        options: ['Mọi số nguyên', 'Chỉ số dương', 'Chỉ số âm', 'Chỉ số nhỏ hơn 1'],
        correctAnswerIndex: 0,
        explanation: 'Mọi số nguyên đều có thể viết dưới dạng phân số với mẫu số bằng 1.'
      },
      {
        id: 'q3-1-7',
        text: 'Số nguyên 7 được viết dưới dạng phân số là:',
        options: ['$\\dfrac{1}{7}$', '$\\dfrac{7}{1}$', '$\\dfrac{0}{7}$', '$\\dfrac{7}{0}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $7=\\dfrac{7}{1}$.'
      },
      {
        id: 'q3-1-8',
        text: 'Số nguyên -4 được viết dưới dạng phân số là:',
        options: ['$\\dfrac{4}{1}$', '$\\dfrac{-4}{1}$', '$\\dfrac{1}{-4}$', '$\\dfrac{0}{4}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $-4=\\dfrac{-4}{1}$.'
      },
      {
        id: 'q3-1-9',
        text: 'Phân số nào sau đây là phân số âm?',
        options: ['$\\dfrac{2}{7}$', '$\\dfrac{-3}{5}$', '$\\dfrac{4}{9}$', '$\\dfrac{0}{6}$'],
        correctAnswerIndex: 1,
        explanation: 'Phân số $\\dfrac{-3}{5}$ là phân số âm.'
      },
      {
        id: 'q3-1-10',
        text: 'Phân số nào sau đây bằng 0?',
        options: ['$\\dfrac{5}{7}$', '$\\dfrac{0}{9}$', '$\\dfrac{9}{0}$', '$\\dfrac{-2}{3}$'],
        correctAnswerIndex: 1,
        explanation: 'Phân số có tử bằng 0 và mẫu khác 0 thì bằng 0.'
      }
    ]
  },
  {
    id: 'c3-t2',
    title: 'Phân số bằng nhau',
    description: 'Nhận biết và tìm các phân số bằng nhau, vận dụng tính chất cơ bản của phân số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q3-2-1',
        text: 'Phân số nào bằng $\\dfrac{1}{2}$?',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{2}{4}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{5}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{2}{4}=\\dfrac{1}{2}$.'
      },
      {
        id: 'q3-2-2',
        text: 'Hai phân số bằng nhau khi:',
        options: [
          'Tích chéo bằng nhau',
          'Tử số bằng nhau',
          'Mẫu số bằng nhau',
          'Cùng là phân số dương'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số $\\dfrac{a}{b}$ và $\\dfrac{c}{d}$ bằng nhau khi $a\\cdot d=b\\cdot c$.'
      },
      {
        id: 'q3-2-3',
        text: 'Điền số thích hợp vào chỗ trống: $\\dfrac{3}{4}=\\dfrac{\\square}{8}$',
        options: ['5', '6', '7', '8'],
        correctAnswerIndex: 1,
        explanation: 'Nhân cả tử và mẫu của $\\dfrac{3}{4}$ với 2 được $\\dfrac{6}{8}$.'
      },
      {
        id: 'q3-2-4',
        text: 'Điền số thích hợp vào chỗ trống: $\\dfrac{2}{5}=\\dfrac{6}{\\square}$',
        options: ['10', '12', '15', '18'],
        correctAnswerIndex: 2,
        explanation: 'Nhân cả tử và mẫu với 3, được $\\dfrac{6}{15}$.'
      },
      {
        id: 'q3-2-5',
        text: 'Phân số $\\dfrac{4}{6}$ rút gọn được thành:',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$\\dfrac{1}{3}$', '$\\dfrac{4}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 2, ta được $\\dfrac{2}{3}$.'
      },
      {
        id: 'q3-2-6',
        text: 'Phân số tối giản là phân số:',
        options: [
          'Có tử và mẫu cùng chia hết cho một số lớn hơn 1',
          'Không rút gọn được nữa',
          'Có mẫu số bằng 1',
          'Có tử số lớn hơn mẫu số'
        ],
        correctAnswerIndex: 1,
        explanation: 'Phân số tối giản là phân số mà tử và mẫu không còn cùng chia hết cho số nào lớn hơn 1.'
      },
      {
        id: 'q3-2-7',
        text: 'Phân số nào sau đây là phân số tối giản?',
        options: ['$\\dfrac{4}{8}$', '$\\dfrac{6}{9}$', '$\\dfrac{5}{7}$', '$\\dfrac{10}{15}$'],
        correctAnswerIndex: 2,
        explanation: '$\\dfrac{5}{7}$ là phân số tối giản.'
      },
      {
        id: 'q3-2-8',
        text: 'Rút gọn phân số $\\dfrac{12}{18}$ ta được:',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$\\dfrac{6}{9}$', '$\\dfrac{4}{9}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 6, ta được $\\dfrac{2}{3}$.'
      },
      {
        id: 'q3-2-9',
        text: 'Khẳng định nào đúng?',
        options: [
          '$\\dfrac{2}{3}=\\dfrac{4}{6}$',
          '$\\dfrac{2}{3}=\\dfrac{3}{2}$',
          '$\\dfrac{2}{3}=\\dfrac{2}{6}$',
          '$\\dfrac{2}{3}=\\dfrac{6}{4}$'
        ],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{4}{6}$ rút gọn được thành $\\dfrac{2}{3}$.'
      },
      {
        id: 'q3-2-10',
        text: 'Muốn tìm phân số bằng với một phân số đã cho, ta có thể:',
        options: [
          'Nhân hoặc chia cả tử và mẫu cho cùng một số khác 0',
          'Chỉ cộng vào tử số',
          'Chỉ cộng vào mẫu số',
          'Đổi chỗ tử số và mẫu số'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đó là tính chất cơ bản của phân số.'
      }
    ]
  },
  {
    id: 'c3-t3',
    title: 'So sánh phân số',
    description: 'So sánh các phân số cùng mẫu, cùng tử và khác mẫu bằng nhiều cách phù hợp.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q3-3-1',
        text: 'Trong hai phân số $\\dfrac{3}{7}$ và $\\dfrac{5}{7}$, phân số lớn hơn là:',
        options: ['$\\dfrac{3}{7}$', '$\\dfrac{5}{7}$', 'Hai phân số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Hai phân số cùng mẫu, phân số có tử lớn hơn thì lớn hơn.'
      },
      {
        id: 'q3-3-2',
        text: 'Trong hai phân số $\\dfrac{2}{5}$ và $\\dfrac{2}{7}$, phân số lớn hơn là:',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{2}{7}$', 'Hai phân số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số cùng tử dương, phân số có mẫu nhỏ hơn thì lớn hơn.'
      },
      {
        id: 'q3-3-3',
        text: 'Phân số nào lớn hơn?',
        options: ['$\\dfrac{1}{3}$ và $\\dfrac{1}{2}$', '$\\dfrac{1}{2}$ và $\\dfrac{1}{3}$', 'Hai phân số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Vì $\\dfrac{1}{2}>\\dfrac{1}{3}$.'
      },
      {
        id: 'q3-3-4',
        text: 'So sánh $\\dfrac{2}{3}$ và $\\dfrac{3}{4}$:',
        options: ['$\\dfrac{2}{3}>\\dfrac{3}{4}$', '$\\dfrac{2}{3}<\\dfrac{3}{4}$', 'Hai phân số bằng nhau', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Quy đồng: $\\dfrac{2}{3}=\\dfrac{8}{12}$, $\\dfrac{3}{4}=\\dfrac{9}{12}$ nên $\\dfrac{2}{3}<\\dfrac{3}{4}$.'
      },
      {
        id: 'q3-3-5',
        text: 'Sắp xếp các phân số $\\dfrac{1}{2}, \\dfrac{3}{4}, \\dfrac{2}{3}$ theo thứ tự tăng dần:',
        options: [
          '$\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}$',
          '$\\dfrac{3}{4}, \\dfrac{2}{3}, \\dfrac{1}{2}$',
          '$\\dfrac{2}{3}, \\dfrac{1}{2}, \\dfrac{3}{4}$',
          '$\\dfrac{1}{2}, \\dfrac{3}{4}, \\dfrac{2}{3}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\dfrac{1}{2}<\\dfrac{2}{3}<\\dfrac{3}{4}$.'
      },
      {
        id: 'q3-3-6',
        text: 'Phân số nào nhỏ hơn 1?',
        options: ['$\\dfrac{7}{5}$', '$\\dfrac{4}{4}$', '$\\dfrac{3}{8}$', '$\\dfrac{9}{2}$'],
        correctAnswerIndex: 2,
        explanation: 'Phân số có tử nhỏ hơn mẫu thì nhỏ hơn 1.'
      },
      {
        id: 'q3-3-7',
        text: 'Phân số nào bằng 1?',
        options: ['$\\dfrac{5}{6}$', '$\\dfrac{7}{7}$', '$\\dfrac{9}{8}$', '$\\dfrac{3}{5}$'],
        correctAnswerIndex: 1,
        explanation: 'Phân số có tử bằng mẫu và mẫu khác 0 thì bằng 1.'
      },
      {
        id: 'q3-3-8',
        text: 'Phân số nào lớn hơn 1?',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{3}{3}$', '$\\dfrac{7}{4}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 2,
        explanation: 'Phân số có tử lớn hơn mẫu thì lớn hơn 1.'
      },
      {
        id: 'q3-3-9',
        text: 'Trong hai phân số $\\dfrac{5}{8}$ và $\\dfrac{6}{8}$, phân số bé hơn là:',
        options: ['$\\dfrac{5}{8}$', '$\\dfrac{6}{8}$', 'Hai phân số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số cùng mẫu, phân số có tử nhỏ hơn thì bé hơn.'
      },
      {
        id: 'q3-3-10',
        text: 'Cách thường dùng để so sánh hai phân số khác mẫu là:',
        options: [
          'Quy đồng mẫu số',
          'Cộng cả tử lẫn mẫu',
          'Đổi chỗ tử và mẫu',
          'Nhân chéo rồi cộng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Muốn so sánh hai phân số khác mẫu, ta thường quy đồng mẫu số.'
      }
    ]
  },
  {
    id: 'c3-t4',
    title: 'Các phép tính với phân số',
    description: 'Thực hiện phép cộng, trừ, nhân, chia phân số và vận dụng trong bài toán đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q3-4-1',
        text: 'Kết quả của phép tính $\\dfrac{1}{3}+\\dfrac{2}{3}$ là:',
        options: ['$\\dfrac{3}{6}$', '$1$', '$\\dfrac{2}{6}$', '$\\dfrac{1}{3}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{3}+\\dfrac{2}{3}=\\dfrac{3}{3}=1$.'
      },
      {
        id: 'q3-4-2',
        text: 'Kết quả của phép tính $\\dfrac{5}{6}-\\dfrac{1}{6}$ là:',
        options: ['$\\dfrac{4}{6}$', '$\\dfrac{5}{12}$', '$\\dfrac{6}{6}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số cùng mẫu nên trừ tử số: $\\dfrac{5}{6}-\\dfrac{1}{6}=\\dfrac{4}{6}$.'
      },
      {
        id: 'q3-4-3',
        text: 'Kết quả của phép tính $\\dfrac{2}{5}\\times\\dfrac{3}{4}$ là:',
        options: ['$\\dfrac{6}{20}$', '$\\dfrac{5}{7}$', '$\\dfrac{2}{9}$', '$\\dfrac{3}{5}$'],
        correctAnswerIndex: 0,
        explanation: 'Nhân tử với tử, mẫu với mẫu: $\\dfrac{2}{5}\\times\\dfrac{3}{4}=\\dfrac{6}{20}$.'
      },
      {
        id: 'q3-4-4',
        text: 'Kết quả của phép tính $\\dfrac{1}{2}:\\dfrac{1}{4}$ là:',
        options: ['$\\dfrac{1}{8}$', '$2$', '$\\dfrac{1}{2}$', '$4$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{2}:\\dfrac{1}{4}=\\dfrac{1}{2}\\times4=2$.'
      },
      {
        id: 'q3-4-5',
        text: 'Muốn cộng hai phân số khác mẫu, ta cần:',
        options: [
          'Quy đồng mẫu số',
          'Cộng tử với mẫu',
          'Nhân chéo',
          'Rút gọn ngay'
        ],
        correctAnswerIndex: 0,
        explanation: 'Cộng hai phân số khác mẫu cần quy đồng mẫu số trước.'
      },
      {
        id: 'q3-4-6',
        text: 'Kết quả của phép tính $\\dfrac{1}{2}+\\dfrac{1}{4}$ là:',
        options: ['$\\dfrac{2}{6}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{8}$', '$1$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{1}{2}=\\dfrac{2}{4}$, nên tổng là $\\dfrac{2}{4}+\\dfrac{1}{4}=\\dfrac{3}{4}$.'
      },
      {
        id: 'q3-4-7',
        text: 'Kết quả của phép tính $\\dfrac{3}{4}-\\dfrac{1}{2}$ là:',
        options: ['$\\dfrac{1}{4}$', '$\\dfrac{2}{2}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{4}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{1}{2}=\\dfrac{2}{4}$, nên $\\dfrac{3}{4}-\\dfrac{2}{4}=\\dfrac{1}{4}$.'
      },
      {
        id: 'q3-4-8',
        text: 'Kết quả của phép tính $\\dfrac{2}{3}\\times 3$ là:',
        options: ['$2$', '$\\dfrac{2}{9}$', '$1$', '$3$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{2}{3}\\times3=2$.'
      },
      {
        id: 'q3-4-9',
        text: 'Muốn chia một phân số cho một phân số, ta:',
        options: [
          'Nhân phân số thứ nhất với phân số nghịch đảo của phân số thứ hai',
          'Cộng hai phân số',
          'Trừ hai phân số',
          'Giữ nguyên mẫu'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đó là quy tắc chia hai phân số.'
      },
      {
        id: 'q3-4-10',
        text: 'Kết quả của phép tính $\\dfrac{3}{5}:\\dfrac{6}{5}$ là:',
        options: ['$\\dfrac{1}{2}$', '$2$', '$\\dfrac{3}{6}$', '$\\dfrac{18}{25}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{3}{5}:\\dfrac{6}{5}=\\dfrac{3}{5}\\times\\dfrac{5}{6}=\\dfrac{3}{6}=\\dfrac{1}{2}$.'
      }
    ]
  },
  {
    id: 'c3-t5',
    title: 'Ôn tập chương Phân số',
    description: 'Củng cố kiến thức về khái niệm phân số, phân số bằng nhau, so sánh và các phép tính với phân số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q3-5-1',
        text: 'Trong phân số $\\dfrac{7}{9}$, tử số là:',
        options: ['7', '9', '16', '2'],
        correctAnswerIndex: 0,
        explanation: 'Trong phân số $\\dfrac{7}{9}$, tử số là 7.'
      },
      {
        id: 'q3-5-2',
        text: 'Phân số nào sau đây bằng $\\dfrac{3}{4}$?',
        options: ['$\\dfrac{6}{8}$', '$\\dfrac{3}{8}$', '$\\dfrac{4}{3}$', '$\\dfrac{9}{16}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{6}{8}$ rút gọn được thành $\\dfrac{3}{4}$.'
      },
      {
        id: 'q3-5-3',
        text: 'Phân số nào nhỏ hơn 1?',
        options: ['$\\dfrac{7}{5}$', '$\\dfrac{5}{5}$', '$\\dfrac{2}{9}$', '$\\dfrac{8}{3}$'],
        correctAnswerIndex: 2,
        explanation: '$\\dfrac{2}{9}$ có tử nhỏ hơn mẫu nên nhỏ hơn 1.'
      },
      {
        id: 'q3-5-4',
        text: 'Tính $\\dfrac{1}{4}+\\dfrac{2}{4}$',
        options: ['$\\dfrac{3}{4}$', '$\\dfrac{2}{8}$', '$\\dfrac{1}{2}$', '$1$'],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số cùng mẫu nên cộng tử số: $\\dfrac{1}{4}+\\dfrac{2}{4}=\\dfrac{3}{4}$.'
      },
      {
        id: 'q3-5-5',
        text: 'Tính $\\dfrac{5}{6}-\\dfrac{2}{6}$',
        options: ['$\\dfrac{3}{6}$', '$\\dfrac{7}{6}$', '$\\dfrac{2}{4}$', '$\\dfrac{1}{6}$'],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số cùng mẫu nên trừ tử số: $\\dfrac{5}{6}-\\dfrac{2}{6}=\\dfrac{3}{6}$.'
      },
      {
        id: 'q3-5-6',
        text: 'Tính $\\dfrac{2}{3}\\times\\dfrac{1}{2}$',
        options: ['$\\dfrac{2}{6}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{5}$', '$1$'],
        correctAnswerIndex: 0,
        explanation: 'Nhân tử với tử, mẫu với mẫu: $\\dfrac{2}{3}\\times\\dfrac{1}{2}=\\dfrac{2}{6}$.'
      },
      {
        id: 'q3-5-7',
        text: 'Tính $\\dfrac{3}{4}:\\dfrac{3}{2}$',
        options: ['$\\dfrac{1}{2}$', '$2$', '$\\dfrac{9}{8}$', '$\\dfrac{3}{8}$'],
        correctAnswerIndex: 0,
        explanation: '$\\dfrac{3}{4}:\\dfrac{3}{2}=\\dfrac{3}{4}\\times\\dfrac{2}{3}=\\dfrac{1}{2}$.'
      },
      {
        id: 'q3-5-8',
        text: 'Phân số tối giản của $\\dfrac{10}{15}$ là:',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{3}{2}$', '$\\dfrac{5}{10}$', '$\\dfrac{10}{5}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 5, được $\\dfrac{2}{3}$.'
      },
      {
        id: 'q3-5-9',
        text: 'So sánh $\\dfrac{1}{2}$ và $\\dfrac{2}{3}$:',
        options: ['$\\dfrac{1}{2}>\\dfrac{2}{3}$', '$\\dfrac{1}{2}<\\dfrac{2}{3}$', 'Hai phân số bằng nhau', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Quy đồng: $\\dfrac{1}{2}=\\dfrac{3}{6}$, $\\dfrac{2}{3}=\\dfrac{4}{6}$ nên $\\dfrac{1}{2}<\\dfrac{2}{3}$.'
      },
      {
        id: 'q3-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Khái niệm phân số và các phép tính với phân số',
          'Số nguyên và trục số',
          'Tia, đoạn thẳng và góc',
          'Biểu đồ thống kê'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào phân số, phân số bằng nhau, so sánh và các phép tính với phân số.'
      }
    ]
  }
];

export const chapter3Topics: Topic[] = [
  ...chapter3CoreTopics,
  ...chapter3ExamTopics
];