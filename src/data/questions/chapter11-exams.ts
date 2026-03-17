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
    description: 'Đề thi học kì 2 môn Toán lớp 6 - bài toán có lời văn về phân số, xác suất và đường thẳng/tia.',
    questions: [
      {
        id: 'c11-e2-q1',
        type: 'single-choice',
        text: 'Một bể nước đã chứa được $\\dfrac{3}{5}$ dung tích bể. Người ta bơm thêm $\\dfrac{1}{5}$ dung tích bể. Hỏi khi đó bể nước chứa được bao nhiêu phần dung tích bể?',
        options: ['$\\dfrac{2}{5}$', '$\\dfrac{3}{10}$', '$\\dfrac{4}{5}$', '$\\dfrac{4}{10}$'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\dfrac{3}{5}+\\dfrac{1}{5}=\\dfrac{4}{5}$. Vậy bể chứa được $\\dfrac{4}{5}$ dung tích.'
      },
      {
        id: 'c11-e2-q2',
        type: 'single-choice',
        text: 'Một tấm vải dài $\\dfrac{7}{8}$ m. Người bán đã cắt đi $\\dfrac{3}{8}$ m. Hỏi tấm vải còn lại dài bao nhiêu mét?',
        options: ['$\\dfrac{6}{8}$ m', '$\\dfrac{5}{8}$ m', '$\\dfrac{3}{8}$ m', '$\\dfrac{1}{2}$ m'],
        correctAnswerIndex: 3,
        explanation: 'Ta có $\\dfrac{7}{8}-\\dfrac{3}{8}=\\dfrac{4}{8}=\\dfrac{1}{2}$.'
      },
      {
        id: 'c11-e2-q3',
        type: 'single-choice',
        text: 'Một lớp học có $\\dfrac{2}{3}$ số học sinh tham gia câu lạc bộ bóng đá, trong đó $\\dfrac{1}{2}$ số học sinh của câu lạc bộ là nam. Hỏi số học sinh nam trong câu lạc bộ chiếm bao nhiêu phần số học sinh cả lớp?',
        options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{5}$', '$\\dfrac{3}{5}$'],
        correctAnswerIndex: 1,
        explanation: 'Số học sinh nam trong câu lạc bộ chiếm $\\dfrac{2}{3}\\times\\dfrac{1}{2}=\\dfrac{1}{3}$ số học sinh cả lớp.'
      },
      {
        id: 'c11-e2-q4',
        type: 'single-choice',
        text: 'Một hộp có 8 tấm thẻ giống nhau, được đánh số từ 1 đến 8. Rút ngẫu nhiên 1 thẻ. Sau 40 lần thử, có 18 lần rút được thẻ mang số chẵn. Xác suất thực nghiệm của biến cố “rút được thẻ mang số chẵn” là:',
        options: ['$\\dfrac{18}{40}$', '$\\dfrac{22}{40}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{5}$'],
        correctAnswerIndex: 0,
        explanation: 'Xác suất thực nghiệm bằng số lần xảy ra biến cố chia cho tổng số lần thử, nên bằng $\\dfrac{18}{40}$.'
      },
      {
        id: 'c11-e2-q5',
        type: 'single-choice',
        text: 'Trên một con đường thẳng, người ta cắm ba cọc tiêu A, B, C sao cho điểm B nằm giữa A và C. Khi đó số đoạn thẳng tạo thành từ ba điểm đó là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 2,
        explanation: 'Ba điểm A, B, C tạo được 3 đoạn thẳng là AB, BC và AC.'
      },
      {
        id: 'c11-e2-q6',
        type: 'single-choice',
        text: 'Một tia sáng xuất phát từ điểm O và đi qua điểm M. Cách viết đúng là:',
        options: ['Tia MO', 'Tia OM', 'Đường thẳng OM', 'Đoạn thẳng OM'],
        correctAnswerIndex: 1,
        explanation: 'Tia có gốc là O và đi qua M được viết là tia OM.'
      },
      {
        id: 'c11-e2-q7',
        type: 'single-choice',
        text: 'Một sợi dây dài 12 m được đánh dấu điểm M chính giữa hai đầu A và B. Hỏi độ dài đoạn AM là bao nhiêu?',
        options: ['3 m', '4 m', '5 m', '6 m'],
        correctAnswerIndex: 3,
        explanation: 'Vì M là điểm chính giữa nên $AM = MB = 12:2 = 6$ (m).'
      },
      {
        id: 'c11-e2-q8',
        type: 'single-choice',
        text: 'Một cửa hàng bán được $\\dfrac{1}{4}$ số bánh trong buổi sáng và $\\dfrac{1}{2}$ số bánh trong buổi chiều. Hỏi cả ngày cửa hàng đã bán được bao nhiêu phần số bánh?',
        options: ['$\\dfrac{2}{6}$', '$\\dfrac{3}{4}$', '$\\dfrac{1}{4}$', '$\\dfrac{2}{4}$'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{1}{4}+\\dfrac{1}{2}=\\dfrac{1}{4}+\\dfrac{2}{4}=\\dfrac{3}{4}$.'
      },

      {
        id: 'c11-e2-q9',
        type: 'true-false',
        text: 'Một hộp có 20 viên bi gồm: 8 viên bi đỏ, 5 viên bi xanh, 7 viên bi vàng. Chọn ngẫu nhiên 1 viên bi từ hộp. Xét tính đúng sai của các phát biểu sau:',
        options: [],
        correctAnswerIndex: 0,
        trueFalseStatements: [
          'Xác suất lấy được viên bi đỏ là $\\dfrac{8}{20}$.',
          'Xác suất lấy được viên bi xanh lớn hơn xác suất lấy được viên bi vàng.',
          'Tổng ba phân số $\\dfrac{8}{20}$, $\\dfrac{5}{20}$ và $\\dfrac{7}{20}$ bằng 1.',
          'Xác suất lấy được viên bi vàng là $\\dfrac{7}{20}$.'
        ],
        trueFalseAnswers: [true, false, true, true],
        explanation: 'Ta có số bi đỏ là 8, xanh là 5, vàng là 7 trên tổng 20 viên. Vì $\\dfrac{5}{20}<\\dfrac{7}{20}$ nên phát biểu b sai; còn $\\dfrac{8}{20}+\\dfrac{5}{20}+\\dfrac{7}{20}=1$.'
      },

      {
        id: 'c11-e2-q10',
        type: 'short-answer',
        text: 'Một bạn học sinh đọc được $\\dfrac{2}{5}$ quyển truyện trong ngày thứ nhất và đọc tiếp $\\dfrac{1}{4}$ quyển truyện trong ngày thứ hai. Hỏi sau hai ngày, bạn đó đã đọc được bao nhiêu phần quyển truyện?',
        options: [],
        correctAnswerIndex: 0,
        answerText: '13/20',
        explanation: 'Ta có $\\dfrac{2}{5}+\\dfrac{1}{4}=\\dfrac{8}{20}+\\dfrac{5}{20}=\\dfrac{13}{20}$.'
      },
      {
        id: 'c11-e2-q11',
        type: 'short-answer',
        text: 'Một thùng gạo nặng 30 kg. Buổi sáng cửa hàng bán được $\\dfrac{1}{3}$ số gạo trong thùng, buổi chiều bán tiếp $\\dfrac{1}{5}$ số gạo trong thùng. Hỏi cả ngày cửa hàng bán được bao nhiêu ki-lô-gam gạo?',
        options: [],
        correctAnswerIndex: 0,
        answerText: '16',
        explanation: 'Buổi sáng bán $30\\times\\dfrac{1}{3}=10$ (kg), buổi chiều bán $30\\times\\dfrac{1}{5}=6$ (kg). Cả ngày bán $10+6=16$ (kg).'
      },
      {
        id: 'c11-e2-q12',
        type: 'short-answer',
        text: 'Trong một trò chơi, bạn Nam quay 24 lần thì thấy kim chỉ vào màu đỏ 10 lần. Nếu mỗi lần kim chỉ vào màu đỏ thì Nam được 1 điểm, các trường hợp khác không được điểm. Hỏi xác suất thực nghiệm để Nam được điểm là bao nhiêu?',
        options: [],
        correctAnswerIndex: 0,
        answerText: '5/12',
        explanation: 'Xác suất thực nghiệm để Nam được điểm là $\\dfrac{10}{24}=\\dfrac{5}{12}$.'
      },
      {
        id: 'c11-e2-q13',
        type: 'short-answer',
        text: 'Trên một con đường thẳng có ba điểm A, B, C theo thứ tự đó. Biết AC dài 18 m và B là trung điểm của đoạn thẳng AC. Tính độ dài AB.',
        options: [],
        correctAnswerIndex: 0,
        answerText: '9',
        explanation: 'Vì B là trung điểm của AC nên $AB = BC = AC:2 = 18:2 = 9$ (m).'
      }
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