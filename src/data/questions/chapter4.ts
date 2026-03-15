import { Topic } from '../../types';
import { chapter4ExamTopics } from './chapter4-exams';

export const chapter4CoreTopics: Topic[] = [
  {
    id: 'c4-t1',
    title: 'Khái niệm số thập phân',
    description: 'Nhận biết số thập phân, phần nguyên, phần thập phân và cách đọc, viết số thập phân.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-1-1',
        text: 'Số nào sau đây là số thập phân?',
        options: ['12', '3,5', '-7', '25'],
        correctAnswerIndex: 1,
        explanation: 'Số 3,5 là số thập phân.'
      },
      {
        id: 'q4-1-2',
        text: 'Trong số thập phân 12,34, phần nguyên là:',
        options: ['12', '34', '1', '2'],
        correctAnswerIndex: 0,
        explanation: 'Trong số 12,34 thì phần nguyên là 12.'
      },
      {
        id: 'q4-1-3',
        text: 'Trong số thập phân 12,34, phần thập phân là:',
        options: ['12', '34', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Trong số 12,34 thì phần thập phân là 34.'
      },
      {
        id: 'q4-1-4',
        text: 'Cách đọc đúng của số 4,08 là:',
        options: ['Bốn phẩy tám', 'Bốn phẩy không tám', 'Bốn phẩy tám mươi', 'Bốn trăm linh tám'],
        correctAnswerIndex: 1,
        explanation: 'Số 4,08 được đọc là bốn phẩy không tám.'
      },
      {
        id: 'q4-1-5',
        text: 'Số 7,5 được viết dưới dạng phân số thập phân là:',
        options: ['$\\dfrac{75}{10}$', '$\\dfrac{7}{5}$', '$\\dfrac{5}{7}$', '$\\dfrac{75}{100}$'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $7,5=\\dfrac{75}{10}$.'
      },
      {
        id: 'q4-1-6',
        text: 'Số 0,25 có bao nhiêu chữ số ở phần thập phân?',
        options: ['0', '1', '2', '3'],
        correctAnswerIndex: 2,
        explanation: 'Phần thập phân của 0,25 có hai chữ số là 2 và 5.'
      },
      {
        id: 'q4-1-7',
        text: 'Số thập phân nào bằng với phân số $\\dfrac{3}{10}$?',
        options: ['0,03', '0,3', '3,0', '30,0'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{3}{10}=0,3$.'
      },
      {
        id: 'q4-1-8',
        text: 'Số thập phân nào bằng với phân số $\\dfrac{27}{100}$?',
        options: ['2,7', '0,27', '27,0', '0,027'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{27}{100}=0,27$.'
      },
      {
        id: 'q4-1-9',
        text: 'Viết số “mười hai phẩy không năm” ta được:',
        options: ['12,5', '12,05', '12,50', '120,5'],
        correctAnswerIndex: 1,
        explanation: '“Mười hai phẩy không năm” được viết là 12,05.'
      },
      {
        id: 'q4-1-10',
        text: 'Số 5,0 có giá trị bằng:',
        options: ['0,5', '50', '5', '5,00 chỉ lớn hơn 5'],
        correctAnswerIndex: 2,
        explanation: 'Số 5,0 bằng 5.'
      }
    ]
  },
  {
    id: 'c4-t2',
    title: 'So sánh và sắp xếp số thập phân',
    description: 'So sánh số thập phân và sắp xếp theo thứ tự tăng dần hoặc giảm dần.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-2-1',
        text: 'Trong hai số 3,5 và 3,8, số lớn hơn là:',
        options: ['3,5', '3,8', 'Hai số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Hai số có cùng phần nguyên, so sánh phần thập phân: 8 > 5 nên 3,8 > 3,5.'
      },
      {
        id: 'q4-2-2',
        text: 'Trong hai số 4,09 và 4,9, số lớn hơn là:',
        options: ['4,09', '4,9', 'Hai số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Ta có 4,09 = 4,090 nên 4,9 > 4,09.'
      },
      {
        id: 'q4-2-3',
        text: 'Khẳng định nào đúng?',
        options: ['2,45 > 2,5', '2,45 < 2,5', '2,45 = 2,5', '2,45 > 3,5'],
        correctAnswerIndex: 1,
        explanation: 'Ta có 2,45 < 2,50 nên 2,45 < 2,5.'
      },
      {
        id: 'q4-2-4',
        text: 'Số lớn nhất trong các số 1,2; 1,02; 1,22; 1,202 là:',
        options: ['1,2', '1,02', '1,22', '1,202'],
        correctAnswerIndex: 2,
        explanation: 'So sánh các số thập phân cho thấy 1,22 là lớn nhất.'
      },
      {
        id: 'q4-2-5',
        text: 'Số nhỏ nhất trong các số 0,7; 0,07; 0,17; 0,707 là:',
        options: ['0,7', '0,07', '0,17', '0,707'],
        correctAnswerIndex: 1,
        explanation: '0,07 là số nhỏ nhất.'
      },
      {
        id: 'q4-2-6',
        text: 'Sắp xếp các số 2,3; 2,03; 2,13 theo thứ tự tăng dần:',
        options: [
          '2,03; 2,13; 2,3',
          '2,3; 2,13; 2,03',
          '2,13; 2,03; 2,3',
          '2,03; 2,3; 2,13'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ta có 2,03 < 2,13 < 2,30.'
      },
      {
        id: 'q4-2-7',
        text: 'Điền dấu thích hợp: 5,6 ... 5,60',
        options: ['>', '<', '=', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation: 'Thêm chữ số 0 vào bên phải phần thập phân không làm thay đổi giá trị số.'
      },
      {
        id: 'q4-2-8',
        text: 'Điền dấu thích hợp: 7,08 ... 7,8',
        options: ['>', '<', '=', '≤'],
        correctAnswerIndex: 1,
        explanation: 'Ta có 7,08 = 7,080 < 7,800 = 7,8.'
      },
      {
        id: 'q4-2-9',
        text: 'Trong các số 9,1; 9,01; 9,11; 9,001, số lớn nhất là:',
        options: ['9,1', '9,01', '9,11', '9,001'],
        correctAnswerIndex: 2,
        explanation: 'So sánh các phần thập phân, ta được 9,11 là lớn nhất.'
      },
      {
        id: 'q4-2-10',
        text: 'Muốn so sánh hai số thập phân, trước hết ta so sánh:',
        options: [
          'Phần nguyên',
          'Phần thập phân',
          'Số chữ số',
          'Chữ số tận cùng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Muốn so sánh hai số thập phân, trước hết ta so sánh phần nguyên.'
      }
    ]
  },
  {
    id: 'c4-t3',
    title: 'Các phép tính với số thập phân',
    description: 'Thực hiện phép cộng, trừ, nhân, chia số thập phân trong các tình huống cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-3-1',
        text: 'Kết quả của phép tính 2,5 + 1,3 là:',
        options: ['3,8', '3,7', '2,8', '4,8'],
        correctAnswerIndex: 0,
        explanation: '2,5 + 1,3 = 3,8.'
      },
      {
        id: 'q4-3-2',
        text: 'Kết quả của phép tính 7,2 - 3,1 là:',
        options: ['4,1', '4,3', '3,1', '10,3'],
        correctAnswerIndex: 0,
        explanation: '7,2 - 3,1 = 4,1.'
      },
      {
        id: 'q4-3-3',
        text: 'Kết quả của phép tính 1,5 × 2 là:',
        options: ['2,5', '3,0', '3,5', '1,0'],
        correctAnswerIndex: 1,
        explanation: '1,5 × 2 = 3,0.'
      },
      {
        id: 'q4-3-4',
        text: 'Kết quả của phép tính 4,8 : 2 là:',
        options: ['2,4', '2,8', '24', '0,24'],
        correctAnswerIndex: 0,
        explanation: '4,8 : 2 = 2,4.'
      },
      {
        id: 'q4-3-5',
        text: 'Giá trị của biểu thức 3,2 + 1,8 là:',
        options: ['4,0', '5,0', '4,8', '3,0'],
        correctAnswerIndex: 1,
        explanation: '3,2 + 1,8 = 5,0.'
      },
      {
        id: 'q4-3-6',
        text: 'Giá trị của biểu thức 6,5 - 2,5 là:',
        options: ['3,0', '4,0', '5,0', '4,5'],
        correctAnswerIndex: 1,
        explanation: '6,5 - 2,5 = 4,0.'
      },
      {
        id: 'q4-3-7',
        text: 'Kết quả của phép tính 0,4 × 10 là:',
        options: ['0,04', '4', '40', '0,4'],
        correctAnswerIndex: 1,
        explanation: '0,4 × 10 = 4.'
      },
      {
        id: 'q4-3-8',
        text: 'Kết quả của phép tính 8,4 : 4 là:',
        options: ['2,1', '2,4', '21', '0,21'],
        correctAnswerIndex: 0,
        explanation: '8,4 : 4 = 2,1.'
      },
      {
        id: 'q4-3-9',
        text: 'Giá trị của biểu thức 2,5 + 3,5 - 1 là:',
        options: ['5', '6', '4', '7'],
        correctAnswerIndex: 0,
        explanation: '2,5 + 3,5 = 6, rồi 6 - 1 = 5.'
      },
      {
        id: 'q4-3-10',
        text: 'Một sợi dây dài 3,5 m, cắt đi 1,2 m. Độ dài còn lại là:',
        options: ['2,3 m', '2,5 m', '1,3 m', '4,7 m'],
        correctAnswerIndex: 0,
        explanation: '3,5 - 1,2 = 2,3 (m).'
      }
    ]
  },
  {
    id: 'c4-t4',
    title: 'Tỉ số phần trăm',
    description: 'Nhận biết tỉ số phần trăm, cách viết và vận dụng trong các bài toán đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-4-1',
        text: '50% được viết dưới dạng phân số là:',
        options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{5}$', '$\\dfrac{5}{2}$', '$\\dfrac{50}{1}$'],
        correctAnswerIndex: 0,
        explanation: '50% = $\\dfrac{50}{100}=\\dfrac{1}{2}$.'
      },
      {
        id: 'q4-4-2',
        text: '25% được viết dưới dạng số thập phân là:',
        options: ['0,25', '2,5', '25,0', '0,025'],
        correctAnswerIndex: 0,
        explanation: '25% = $\\dfrac{25}{100}=0,25$.'
      },
      {
        id: 'q4-4-3',
        text: '0,5 được viết dưới dạng phần trăm là:',
        options: ['5%', '50%', '500%', '0,5%'],
        correctAnswerIndex: 1,
        explanation: '0,5 = 50%.'
      },
      {
        id: 'q4-4-4',
        text: '1% bằng:',
        options: ['$\\dfrac{1}{10}$', '$\\dfrac{1}{100}$', '$\\dfrac{10}{100}$', '$\\dfrac{1}{1000}$'],
        correctAnswerIndex: 1,
        explanation: '1% = $\\dfrac{1}{100}$.'
      },
      {
        id: 'q4-4-5',
        text: 'Trong 100 học sinh có 60 học sinh nữ. Tỉ số phần trăm học sinh nữ là:',
        options: ['6%', '60%', '0,6%', '600%'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{60}{100}=60\\%$.'
      },
      {
        id: 'q4-4-6',
        text: '75% được viết dưới dạng phân số tối giản là:',
        options: ['$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$\\dfrac{75}{10}$', '$\\dfrac{7}{5}$'],
        correctAnswerIndex: 0,
        explanation: '75% = $\\dfrac{75}{100}=\\dfrac{3}{4}$.'
      },
      {
        id: 'q4-4-7',
        text: '0,2 được viết dưới dạng phần trăm là:',
        options: ['2%', '20%', '200%', '0,2%'],
        correctAnswerIndex: 1,
        explanation: '0,2 = 20%.'
      },
      {
        id: 'q4-4-8',
        text: '40% của 50 là:',
        options: ['20', '25', '40', '10'],
        correctAnswerIndex: 0,
        explanation: '40% của 50 là $0,4\\times50=20$.'
      },
      {
        id: 'q4-4-9',
        text: 'Một lớp có 20 học sinh, trong đó 5 học sinh đạt điểm 10. Tỉ số phần trăm học sinh đạt điểm 10 là:',
        options: ['20%', '25%', '30%', '15%'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{5}{20}=\\dfrac{1}{4}=25\\%$.'
      },
      {
        id: 'q4-4-10',
        text: '100% biểu thị:',
        options: ['Một nửa', 'Toàn bộ', 'Một phần tư', 'Không có gì'],
        correctAnswerIndex: 1,
        explanation: '100% biểu thị toàn bộ.'
      }
    ]
  },
  {
    id: 'c4-t5',
    title: 'Ôn tập chương Số thập phân',
    description: 'Củng cố kiến thức về số thập phân, phép tính với số thập phân và tỉ số phần trăm.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q4-5-1',
        text: 'Số nào sau đây là số thập phân?',
        options: ['8', '0,8', '-3', '12'],
        correctAnswerIndex: 1,
        explanation: '0,8 là số thập phân.'
      },
      {
        id: 'q4-5-2',
        text: 'Trong số 15,27, phần nguyên là:',
        options: ['15', '27', '1', '5'],
        correctAnswerIndex: 0,
        explanation: 'Phần nguyên của 15,27 là 15.'
      },
      {
        id: 'q4-5-3',
        text: 'Số lớn hơn trong hai số 6,04 và 6,4 là:',
        options: ['6,04', '6,4', 'Hai số bằng nhau', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Ta có 6,04 = 6,040 < 6,400 = 6,4.'
      },
      {
        id: 'q4-5-4',
        text: 'Tính 2,7 + 1,2',
        options: ['3,9', '3,8', '4,9', '2,9'],
        correctAnswerIndex: 0,
        explanation: '2,7 + 1,2 = 3,9.'
      },
      {
        id: 'q4-5-5',
        text: 'Tính 5,6 - 2,1',
        options: ['3,5', '3,7', '4,5', '2,5'],
        correctAnswerIndex: 0,
        explanation: '5,6 - 2,1 = 3,5.'
      },
      {
        id: 'q4-5-6',
        text: 'Tính 1,5 × 4',
        options: ['4,5', '5', '6', '7'],
        correctAnswerIndex: 2,
        explanation: '1,5 × 4 = 6.'
      },
      {
        id: 'q4-5-7',
        text: 'Tính 7,2 : 3',
        options: ['2,4', '2,1', '24', '0,24'],
        correctAnswerIndex: 0,
        explanation: '7,2 : 3 = 2,4.'
      },
      {
        id: 'q4-5-8',
        text: '0,75 viết dưới dạng phần trăm là:',
        options: ['7,5%', '75%', '750%', '0,75%'],
        correctAnswerIndex: 1,
        explanation: '0,75 = 75%.'
      },
      {
        id: 'q4-5-9',
        text: '50% của 80 là:',
        options: ['20', '30', '40', '50'],
        correctAnswerIndex: 2,
        explanation: '50% của 80 là $0,5\\times80=40$.'
      },
      {
        id: 'q4-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Số thập phân, các phép tính và tỉ số phần trăm',
          'Số nguyên và trục số',
          'Phân số và quy đồng mẫu',
          'Điểm, tia, đoạn thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào số thập phân, phép tính với số thập phân và tỉ số phần trăm.'
      }
    ]
  }
];

export const chapter4Topics: Topic[] = [
  ...chapter4CoreTopics,
  ...chapter4ExamTopics
];