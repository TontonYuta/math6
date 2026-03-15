import { Topic } from '../../types';

export const chapter1ExamTopics: Topic[] = [
{
  id: 'c1-e1',
  title: 'Đề số 1 - Tổng ôn chương số tự nhiên',
  description: 'Đề luyện tập chương số tự nhiên.',
  questions: [
    {
      id: 'c1-e1-q1',
      type: 'single-choice',
      text: 'Tập hợp số tự nhiên được kí hiệu là:',
      options: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
      correctAnswerIndex: 0,
      explanation: 'Tập hợp số tự nhiên được kí hiệu là $\\mathbb{N}$.'
    },
    {
      id: 'c1-e1-q2',
      type: 'single-choice',
      text: 'Số nào sau đây không thuộc tập hợp số tự nhiên?',
      options: ['0', '15', '-2', '103'],
      correctAnswerIndex: 2,
      explanation: 'Số -2 là số nguyên âm nên không thuộc tập hợp số tự nhiên.'
    },
    {
      id: 'c1-e1-q3',
      type: 'single-choice',
      text: 'Kết quả của phép tính $48 + 27$ là:',
      options: ['65', '75', '85', '74'],
      correctAnswerIndex: 1,
      explanation: 'Ta có $48 + 27 = 75$.'
    },
    {
      id: 'c1-e1-q4',
      type: 'single-choice',
      text: 'Kết quả của phép tính $90 - 46$ là:',
      options: ['44', '54', '56', '34'],
      correctAnswerIndex: 0,
      explanation: 'Ta có $90 - 46 = 44$.'
    },
    {
      id: 'c1-e1-q5',
      type: 'single-choice',
      text: 'Kết quả của phép tính $7 \\times 8$ là:',
      options: ['54', '56', '58', '64'],
      correctAnswerIndex: 1,
      explanation: 'Ta có $7 \\times 8 = 56$.'
    },
    {
      id: 'c1-e1-q6',
      type: 'single-choice',
      text: 'Kết quả của phép tính $72 : 9$ là:',
      options: ['6', '7', '8', '9'],
      correctAnswerIndex: 2,
      explanation: 'Ta có $72 : 9 = 8$.'
    },
    {
      id: 'c1-e1-q7',
      type: 'single-choice',
      text: 'Giá trị của biểu thức $15 + 5 \\times 3$ là:',
      options: ['60', '30', '20', '45'],
      correctAnswerIndex: 1,
      explanation: 'Thực hiện phép nhân trước: $5 \\times 3 = 15$, rồi $15 + 15 = 30$.'
    },
    {
      id: 'c1-e1-q8',
      type: 'single-choice',
      text: 'Giá trị của biểu thức $(15 + 5) \\times 3$ là:',
      options: ['45', '50', '60', '75'],
      correctAnswerIndex: 2,
      explanation: 'Tính trong ngoặc trước: $15 + 5 = 20$, rồi $20 \\times 3 = 60$.'
    },
    {
      id: 'c1-e1-q9',
      type: 'single-choice',
      text: 'Số dư của phép chia $38 : 6$ là:',
      options: ['1', '2', '3', '4'],
      correctAnswerIndex: 1,
      explanation: 'Ta có $38 = 6 \\times 6 + 2$, nên số dư là 2.'
    },
    {
      id: 'c1-e1-q10',
      type: 'single-choice',
      text: 'Trong phép chia có dư, số dư luôn:',
      options: [
        'Lớn hơn số chia',
        'Nhỏ hơn số chia',
        'Bằng số chia',
        'Lớn hơn hoặc bằng số chia'
      ],
      correctAnswerIndex: 1,
      explanation: 'Trong phép chia có dư, số dư luôn nhỏ hơn số chia.'
    },
    {
      id: 'c1-e1-q11',
      type: 'single-choice',
      text: 'Giá trị của lũy thừa $2^5$ là:',
      options: ['10', '16', '32', '64'],
      correctAnswerIndex: 2,
      explanation: '$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$.'
    },
    {
      id: 'c1-e1-q12',
      type: 'single-choice',
      text: 'Trong lũy thừa $4^3$, số mũ là:',
      options: ['4', '3', '12', '64'],
      correctAnswerIndex: 1,
      explanation: 'Trong $4^3$, cơ số là 4 và số mũ là 3.'
    },
    {
      id: 'c1-e1-q13',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về số tự nhiên và phép tính.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Số 0 thuộc tập hợp số tự nhiên.',
        'Số tự nhiên lớn nhất là 999.',
        'Ta có $3^2 = 9$.',
        'Trong biểu thức không có dấu ngoặc, ta thực hiện phép cộng trước phép nhân.'
      ],
      trueFalseAnswers: [true, false, true, false],
      explanation: 'Số 0 thuộc tập hợp số tự nhiên; tập hợp số tự nhiên không có số lớn nhất; $3^2 = 9$; trong biểu thức không có dấu ngoặc, phải thực hiện nhân chia trước cộng trừ.'
    },
    {
      id: 'c1-e1-q14',
      type: 'true-false',
      text: 'Cho tập hợp $A = \\{1; 3; 5; 7\\}$. Xét tính đúng sai của các phát biểu sau.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        '$3 \\in A$.',
        '$4 \\in A$.',
        '$7 \\notin A$.',
        '$1 \\in A$.'
      ],
      trueFalseAnswers: [true, false, false, true],
      explanation: 'Trong tập hợp $A = \\{1;3;5;7\\}$ thì 3 và 1 thuộc A, còn 4 không thuộc A, 7 vẫn thuộc A.'
    },
    {
      id: 'c1-e1-q15',
      type: 'short-answer',
      text: 'Tính giá trị của biểu thức $25 + 17$.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '42',
      explanation: 'Ta có $25 + 17 = 42$.'
    },
    {
      id: 'c1-e1-q16',
      type: 'short-answer',
      text: 'Tính giá trị của biểu thức $6^2$.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '36',
      explanation: 'Ta có $6^2 = 6 \\times 6 = 36$.'
    },
    {
      id: 'c1-e1-q17',
      type: 'short-answer',
      text: 'Tìm số tự nhiên $x$ biết $x + 18 = 47$.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '29',
      explanation: 'Ta có $x = 47 - 18 = 29$.'
    }
  ]
},
  {
    id: 'c1-e2',
    title: 'Đề số 2 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 2 vào đây
    ]
  },
  {
    id: 'c1-e3',
    title: 'Đề số 3 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 3 vào đây
    ]
  },
  {
    id: 'c1-e4',
    title: 'Đề số 4 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 4 vào đây
    ]
  },
  {
    id: 'c1-e5',
    title: 'Đề số 5 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 5 vào đây
    ]
  },
  {
    id: 'c1-e6',
    title: 'Đề số 6 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 6 vào đây
    ]
  },
  {
    id: 'c1-e7',
    title: 'Đề số 7 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 7 vào đây
    ]
  },
  {
    id: 'c1-e8',
    title: 'Đề số 8 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 8 vào đây
    ]
  },
  {
    id: 'c1-e9',
    title: 'Đề số 9 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 9 vào đây
    ]
  },
  {
    id: 'c1-e10',
    title: 'Đề số 10 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 10 vào đây
    ]
  },
  {
    id: 'c1-e11',
    title: 'Đề số 11 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 11 vào đây
    ]
  },
  {
    id: 'c1-e12',
    title: 'Đề số 12 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 12 vào đây
    ]
  },
  {
    id: 'c1-e13',
    title: 'Đề số 13 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 13 vào đây
    ]
  },
  {
    id: 'c1-e14',
    title: 'Đề số 14 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 14 vào đây
    ]
  },
  {
    id: 'c1-e15',
    title: 'Đề số 15 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 15 vào đây
    ]
  },
  {
    id: 'c1-e16',
    title: 'Đề số 16 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 16 vào đây
    ]
  },
  {
    id: 'c1-e17',
    title: 'Đề số 17 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 17 vào đây
    ]
  },
  {
    id: 'c1-e18',
    title: 'Đề số 18 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 18 vào đây
    ]
  },
  {
    id: 'c1-e19',
    title: 'Đề số 19 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 19 vào đây
    ]
  },
  {
    id: 'c1-e20',
    title: 'Đề số 20 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 20 vào đây
    ]
  },
  {
    id: 'c1-e21',
    title: 'Đề số 21 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 21 vào đây
    ]
  },
  {
    id: 'c1-e22',
    title: 'Đề số 22 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 22 vào đây
    ]
  },
  {
    id: 'c1-e23',
    title: 'Đề số 23 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 23 vào đây
    ]
  },
  {
    id: 'c1-e24',
    title: 'Đề số 24 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 24 vào đây
    ]
  },
  {
    id: 'c1-e25',
    title: 'Đề số 25 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 25 vào đây
    ]
  },
  {
    id: 'c1-e26',
    title: 'Đề số 26 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 26 vào đây
    ]
  },
  {
    id: 'c1-e27',
    title: 'Đề số 27 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 27 vào đây
    ]
  },
  {
    id: 'c1-e28',
    title: 'Đề số 28 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 28 vào đây
    ]
  },
  {
    id: 'c1-e29',
    title: 'Đề số 29 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 29 vào đây
    ]
  },
  {
    id: 'c1-e30',
    title: 'Đề số 30 - Tổng ôn chương số tự nhiên',
    description: 'Đề luyện tập chương số tự nhiên.',
    questions: [
      // dán đề 30 vào đây
    ]
  }
];