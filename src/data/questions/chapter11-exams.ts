import { Topic } from '../../types';

export const chapter11ExamTopics: Topic[] = [
{
  id: 'c11-e1',
  title: 'Đề thi số 1',
  description: 'Đề thi ôn tập tổng hợp.',
  questions: [
    {
      id: 'c11-e1-q1',
      type: 'single-choice',
      text: 'Một vườn thú ghi lại tuổi thọ của một số loài như sau: thỏ 10 năm, cáo 22 năm, hươu cao cổ 28 năm, cá voi cái 29 năm, sư tử 35 năm, gấu 30 năm. Loài sống thọ nhất là:',
      options: ['Gấu', 'Cá voi cái', 'Sư tử', 'Hươu cao cổ'],
      correctAnswerIndex: 2,
      explanation: 'Trong các số 10, 22, 28, 29, 35, 30 thì 35 là lớn nhất, ứng với sư tử.'
    },
    {
      id: 'c11-e1-q2',
      type: 'single-choice',
      text: 'Theo số liệu trên, tuổi thọ của hươu cao cổ thấp hơn sư tử bao nhiêu năm?',
      options: ['5 năm', '6 năm', '7 năm', '8 năm'],
      correctAnswerIndex: 2,
      explanation: 'Ta có 35 - 28 = 7 (năm).'
    },
    {
      id: 'c11-e1-q3',
      type: 'single-choice',
      text: 'Khi gieo một con xúc xắc 6 mặt một lần, tập hợp các kết quả có thể xảy ra là:',
      options: [
        '$\\{1;2;3;4;5;6\\}$',
        '$\\{0;1;2;3;4;5\\}$',
        '$\\{1;2;3;4;5\\}$',
        '$\\{6\\}$'
      ],
      correctAnswerIndex: 0,
      explanation: 'Xúc xắc 6 mặt có 6 kết quả có thể xảy ra là 1, 2, 3, 4, 5, 6.'
    },
    {
      id: 'c11-e1-q4',
      type: 'single-choice',
      text: 'Tung một đồng xu 12 lần, xuất hiện mặt ngửa 5 lần. Xác suất thực nghiệm của biến cố “xuất hiện mặt ngửa” là:',
      options: ['$\\dfrac{5}{12}$', '$\\dfrac{7}{12}$', '$\\dfrac{12}{5}$', '$\\dfrac{1}{2}$'],
      correctAnswerIndex: 0,
      explanation: 'Xác suất thực nghiệm bằng số lần xuất hiện chia cho tổng số lần thử: $\\dfrac{5}{12}$.'
    },
    {
      id: 'c11-e1-q5',
      type: 'single-choice',
      text: 'Cho bốn điểm phân biệt A, B, C, D. Số đoạn thẳng có thể tạo thành từ bốn điểm đó là:',
      options: ['4', '5', '6', '8'],
      correctAnswerIndex: 2,
      explanation: 'Từ 4 điểm phân biệt, số đoạn thẳng là $\\dfrac{4\\times3}{2}=6$.'
    },
    {
      id: 'c11-e1-q6',
      type: 'single-choice',
      text: 'Điền vào chỗ trống: Nếu điểm M thuộc đường thẳng a thì viết là:',
      options: ['$M \\notin a$', '$M \\in a$', '$a \\in M$', '$a \\notin M$'],
      correctAnswerIndex: 1,
      explanation: 'Kí hiệu điểm M thuộc đường thẳng a là $M \\in a$.'
    },
    {
      id: 'c11-e1-q7',
      type: 'single-choice',
      text: 'Trên một đường thẳng có ba điểm A, B, C phân biệt. Số đoạn thẳng được tạo bởi ba điểm đó là:',
      options: ['2', '3', '4', '6'],
      correctAnswerIndex: 1,
      explanation: 'Ba điểm A, B, C tạo được 3 đoạn thẳng: AB, BC, AC.'
    },
    {
      id: 'c11-e1-q8',
      type: 'single-choice',
      text: 'Điều kiện để điểm M là trung điểm của đoạn thẳng AB là:',
      options: [
        'M nằm ngoài đoạn thẳng AB',
        'M nằm giữa A và B',
        'M nằm giữa A và B và MA = MB',
        'MA > MB'
      ],
      correctAnswerIndex: 2,
      explanation: 'Điểm M là trung điểm của AB khi M nằm giữa A và B và MA = MB.'
    },
    {
      id: 'c11-e1-q9',
      type: 'single-choice',
      text: 'Một cửa hàng bán được số kính theo màu như sau: trắng 6, đen 40, xanh 10, trắng bạc 35, vàng kim 12. Màu kính bán được nhiều nhất là:',
      options: ['Trắng', 'Đen', 'Trắng bạc', 'Vàng kim'],
      correctAnswerIndex: 1,
      explanation: 'Trong các số 6, 40, 10, 35, 12 thì 40 là lớn nhất, ứng với màu đen.'
    },
    {
      id: 'c11-e1-q10',
      type: 'single-choice',
      text: 'Một hộp có 3 quả bóng: 1 đỏ, 1 xanh, 1 vàng. Số kết quả có thể xảy ra khi lấy ngẫu nhiên 1 quả bóng là:',
      options: ['1', '2', '3', '4'],
      correctAnswerIndex: 2,
      explanation: 'Có 3 kết quả có thể xảy ra: lấy được bóng đỏ, xanh hoặc vàng.'
    },
    {
      id: 'c11-e1-q11',
      type: 'single-choice',
      text: 'Nếu lấy bóng 20 lần, trong đó có 10 lần xuất hiện bóng đỏ thì xác suất thực nghiệm để lấy được bóng đỏ là:',
      options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{10}$'],
      correctAnswerIndex: 0,
      explanation: 'Ta có xác suất thực nghiệm là $\\dfrac{10}{20}=\\dfrac{1}{2}$.'
    },
    {
      id: 'c11-e1-q12',
      type: 'single-choice',
      text: 'Cho đoạn thẳng AC dài 8 cm, điểm B là trung điểm của AC. Khi đó độ dài AB là:',
      options: ['2 cm', '3 cm', '4 cm', '5 cm'],
      correctAnswerIndex: 2,
      explanation: 'Vì B là trung điểm của AC nên $AB = AC : 2 = 8 : 2 = 4$ cm.'
    },

    {
      id: 'c11-e1-q13',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về số liệu tuổi thọ các loài động vật: thỏ 10, cáo 22, hươu cao cổ 28, cá voi cái 29, sư tử 35, gấu 30.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Sư tử sống thọ hơn gấu.',
        'Tuổi thọ của thỏ lớn hơn tuổi thọ của cáo.',
        'Cá voi cái sống ít hơn 30 năm.',
        'Hươu cao cổ sống 28 năm.'
      ],
      trueFalseAnswers: [true, false, true, true],
      explanation: 'So sánh trực tiếp các số liệu đã cho.'
    },
    {
      id: 'c11-e1-q14',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về xác suất và phép thử.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Khi tung một đồng xu một lần, có 2 kết quả có thể xảy ra.',
        'Khi gieo một con xúc xắc 6 mặt, số 7 có thể xuất hiện.',
        'Xác suất thực nghiệm luôn được tính bằng số lần biến cố xảy ra chia cho tổng số lần thử.',
        'Xác suất thực nghiệm có thể lớn hơn 1.'
      ],
      trueFalseAnswers: [true, false, true, false],
      explanation: 'Đồng xu có 2 mặt; xúc xắc 6 mặt không có số 7; xác suất thực nghiệm là tỉ số số lần xảy ra trên tổng số lần thử và luôn từ 0 đến 1.'
    },
    {
      id: 'c11-e1-q15',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về điểm, đường thẳng và đoạn thẳng.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Nếu M là trung điểm của AB thì MA = MB.',
        'Ba điểm A, B, C phân biệt luôn thẳng hàng.',
        'Nếu B nằm giữa A và C thì có ba đoạn thẳng AB, BC, AC.',
        'Điểm thuộc đường thẳng được kí hiệu bằng dấu $\\in$.'
      ],
      trueFalseAnswers: [true, false, true, true],
      explanation: 'Trung điểm chia đoạn thẳng thành hai phần bằng nhau; ba điểm phân biệt không phải lúc nào cũng thẳng hàng.'
    },
    {
      id: 'c11-e1-q16',
      type: 'true-false',
      text: 'Xét tính đúng sai của các phát biểu sau về bảng số liệu cửa hàng bán kính: trắng 6, đen 40, xanh 10, trắng bạc 35, vàng kim 12.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Màu trắng bán được ít nhất.',
        'Màu đen bán được nhiều hơn màu trắng bạc.',
        'Tổng số kính bán được là 103 chiếc.',
        'Màu xanh bán được nhiều hơn màu vàng kim.'
      ],
      trueFalseAnswers: [true, true, true, false],
      explanation: 'Ta có 6 là ít nhất, 40 > 35, tổng là 6 + 40 + 10 + 35 + 12 = 103, và 10 < 12.'
    },

    {
      id: 'c11-e1-q17',
      type: 'short-answer',
      text: 'Theo bảng số liệu: trắng 6, đen 40, xanh 10, trắng bạc 35, vàng kim 12. Tính tổng số kính bán được.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '103',
      explanation: 'Ta có $6 + 40 + 10 + 35 + 12 = 103$.'
    },
    {
      id: 'c11-e1-q18',
      type: 'short-answer',
      text: 'Một hộp có 3 quả bóng: 1 đỏ, 1 xanh, 1 vàng. Viết số kết quả có thể xảy ra khi lấy ngẫu nhiên 1 quả bóng.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '3',
      explanation: 'Có 3 kết quả có thể xảy ra.'
    },
    {
      id: 'c11-e1-q19',
      type: 'short-answer',
      text: 'Lấy bóng 20 lần, xuất hiện bóng đỏ 10 lần. Tính xác suất thực nghiệm lấy được bóng đỏ.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '1/2',
      explanation: 'Ta có $\\dfrac{10}{20} = \\dfrac{1}{2}$.'
    },
    {
      id: 'c11-e1-q20',
      type: 'short-answer',
      text: 'Cho đoạn thẳng AC = 8 cm, điểm B là trung điểm của AC. Tính độ dài AB.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '4',
      explanation: 'Vì B là trung điểm của AC nên $AB = 8 : 2 = 4$.'
    },
    {
      id: 'c11-e1-q21',
      type: 'short-answer',
      text: 'Theo bảng tuổi thọ: thỏ 10, cáo 22, hươu cao cổ 28, cá voi cái 29, sư tử 35, gấu 30. Tính tuổi thọ của sư tử nhiều hơn hươu cao cổ bao nhiêu năm.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '7',
      explanation: 'Ta có $35 - 28 = 7$.'
    },
    {
      id: 'c11-e1-q22',
      type: 'short-answer',
      text: 'Tính giá trị của biểu thức $6^2$.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '36',
      explanation: 'Ta có $6^2 = 6 \\times 6 = 36$.'
    }
  ]
},
  {
    id: 'c11-e2',
    title: 'Đề thi số 2',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 2 vào đây
    ]
  },
  {
    id: 'c11-e3',
    title: 'Đề thi số 3',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 3 vào đây
    ]
  },
  {
    id: 'c11-e4',
    title: 'Đề thi số 4',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 4 vào đây
    ]
  },
  {
    id: 'c11-e5',
    title: 'Đề thi số 5',
    description: 'Đề thi ôn tập tổng hợp.',
    questions: [
      // dán đề thi số 5 vào đây
    ]
  }
];