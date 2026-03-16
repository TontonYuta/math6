import { Topic } from '../../types';
import { chapter11ExamTopics } from './chapter11-exams';

export const chapter11CoreTopics: Topic[] = [
  {
    id: 'c11-t1',
    title: 'Bài tập về nhà - Số tự nhiên',
    description: 'Bài tập tự luyện về số tự nhiên và các phép tính cơ bản.',
    questions: [
      {
        id: 'c11-t1-q1',
        type: 'single-choice',
        text: 'Số nào sau đây thuộc tập hợp số tự nhiên?',
        options: ['-3', '-1', '0', '-5'],
        correctAnswerIndex: 2,
        explanation: 'Số 0 thuộc tập hợp số tự nhiên.'
      },
      {
        id: 'c11-t1-q2',
        type: 'single-choice',
        text: 'Kết quả của phép tính $27 + 35$ là:',
        options: ['52', '62', '72', '82'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $27 + 35 = 62$.'
      },
      {
        id: 'c11-t1-q3',
        type: 'short-answer',
        text: 'Tính giá trị của biểu thức $8^2$.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '64',
        explanation: 'Ta có $8^2 = 8 \\times 8 = 64$.'
      }
    ]
  },
  {
    id: 'c11-t2',
    title: 'Bài tập về nhà - Số nguyên',
    description: 'Bài tập tự luyện về số nguyên và các phép toán với số nguyên.',
    questions: [
      {
        id: 'c11-t2-q1',
        type: 'single-choice',
        text: 'Trong các số sau, số nào là số nguyên âm?',
        options: ['0', '4', '-7', '9'],
        correctAnswerIndex: 2,
        explanation: 'Số -7 là số nguyên âm.'
      },
      {
        id: 'c11-t2-q2',
        type: 'single-choice',
        text: 'Kết quả của phép tính $(-3) + 8$ là:',
        options: ['-11', '11', '5', '-5'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $(-3) + 8 = 5$.'
      },
      {
        id: 'c11-t2-q3',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau về số nguyên.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Số đối của 5 là -5.',
          'Số đối của -3 là -3.',
          '0 là số nguyên.',
          'Mọi số tự nhiên đều là số nguyên.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation: 'Số đối của 5 là -5; số đối của -3 là 3; 0 là số nguyên; mọi số tự nhiên đều thuộc tập số nguyên.'
      }
    ]
  },
  {
    id: 'c11-t3',
    title: 'Bài tập về nhà - Phân số',
    description: 'Bài tập tự luyện về phân số, so sánh và các phép tính với phân số.',
    questions: [
      {
        id: 'c11-t3-q1',
        type: 'single-choice',
        text: 'Phân số nào bằng $\\dfrac{1}{2}$?',
        options: ['$\\dfrac{2}{3}$', '$\\dfrac{2}{4}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{3}$'],
        correctAnswerIndex: 1,
        explanation: '$\\dfrac{2}{4} = \\dfrac{1}{2}$.'
      },
      {
        id: 'c11-t3-q2',
        type: 'single-choice',
        text: 'Kết quả của phép cộng $\\dfrac{1}{3} + \\dfrac{1}{3}$ là:',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{2}{3}$', '$\\dfrac{2}{6}$', '$1$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{1}{3} + \\dfrac{1}{3} = \\dfrac{2}{3}$.'
      },
      {
        id: 'c11-t3-q3',
        type: 'short-answer',
        text: 'Viết phân số $\\dfrac{6}{8}$ dưới dạng tối giản.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '3/4',
        explanation: '$\\dfrac{6}{8} = \\dfrac{3}{4}$ khi chia cả tử và mẫu cho 2.'
      }
    ]
  },
  {
    id: 'c11-t4',
    title: 'Bài tập về nhà - Số thập phân',
    description: 'Bài tập tự luyện về số thập phân và tỉ số phần trăm.',
    questions: [
      {
        id: 'c11-t4-q1',
        type: 'single-choice',
        text: 'Số thập phân nào sau đây lớn nhất?',
        options: ['3,25', '3,205', '3,5', '3,15'],
        correctAnswerIndex: 2,
        explanation: 'Trong các số đã cho, 3,5 là lớn nhất.'
      },
      {
        id: 'c11-t4-q2',
        type: 'single-choice',
        text: 'Kết quả của phép tính $2,5 + 1,2$ là:',
        options: ['3,5', '3,6', '3,7', '3,8'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $2,5 + 1,2 = 3,7$.'
      },
      {
        id: 'c11-t4-q3',
        type: 'short-answer',
        text: 'Đổi 25% thành phân số tối giản.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '1/4',
        explanation: '25% = 25/100 = 1/4.'
      }
    ]
  },
  {
    id: 'c11-t5',
    title: 'Bài tập về nhà - Hình học và dữ liệu',
    description: 'Bài tập tự luyện về hình học cơ bản, dữ liệu và xác suất.',
    questions: [
      {
        id: 'c11-t5-q1',
        type: 'single-choice',
        text: 'Hình có 4 cạnh bằng nhau và 4 góc vuông là:',
        options: ['Hình chữ nhật', 'Hình vuông', 'Hình thoi', 'Hình thang'],
        correctAnswerIndex: 1,
        explanation: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.'
      },
      {
        id: 'c11-t5-q2',
        type: 'single-choice',
        text: 'Khi tung một đồng xu một lần, số kết quả có thể xảy ra là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Có 2 kết quả có thể xảy ra: sấp hoặc ngửa.'
      },
      {
        id: 'c11-t5-q3',
        type: 'true-false',
        text: 'Xét tính đúng sai của các phát biểu sau.',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Biểu đồ cột giúp so sánh số lượng giữa các nhóm.',
          'Hình tam giác có 4 cạnh.',
          'Khi gieo một con xúc xắc, có 6 kết quả có thể xảy ra.',
          'Hình chữ nhật có 4 góc vuông.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation: 'Biểu đồ cột dùng để so sánh; tam giác có 3 cạnh; xúc xắc có 6 mặt; hình chữ nhật có 4 góc vuông.'
      }
    ]
  }
];

export const chapter11Topics: Topic[] = [
  ...chapter11CoreTopics,
  ...chapter11ExamTopics
];