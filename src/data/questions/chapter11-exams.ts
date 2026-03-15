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
      text: 'Bạn An tìm kiếm thông tin trên mạng Internet và lập được bảng về số tuổi của một số loài động vật trong vườn thú như sau. Động vật sống thọ nhất trong các loài trên là:',
      options: ['Gấu', 'Cá voi cái', 'Sư tử', 'Hươu cao cổ'],
      correctAnswerIndex: 2,
      explanation: 'Trong các số 10, 22, 28, 29, 35, 30 thì 35 là lớn nhất, tương ứng với sư tử.',
      images: [
        {
          src: '/question-assets/c11/de1/q1-bang-tuoi-tho.png',
          alt: 'Bảng số tuổi của các loài động vật trong vườn thú',
          caption: 'Bảng số liệu câu 1'
        }
      ]
    },
    {
      id: 'c11-e1-q2',
      type: 'single-choice',
      text: 'Tuổi thọ của hươu cao cổ thấp hơn sư tử là:',
      options: ['2 năm', '5 năm', '7 năm', '10 năm'],
      correctAnswerIndex: 2,
      explanation: 'Ta có 35 - 28 = 7 (năm).'
    },
    {
      id: 'c11-e1-q3',
      type: 'single-choice',
      text: 'Tập hợp các kết quả có thể xảy ra khi gieo một con xúc xắc 6 mặt là:',
      options: ['1; 2; 3; 4; 5; 6', 'Y = 6', '6', 'Y = {1; 2; 3; 4; 5; 6}'],
      correctAnswerIndex: 3,
      explanation: 'Tập hợp kết quả có thể xảy ra phải được viết dưới dạng một tập hợp gồm 6 phần tử {1; 2; 3; 4; 5; 6}.'
    },
    {
      id: 'c11-e1-q4',
      type: 'single-choice',
      text: 'Nếu tung một đồng xu 12 lần liên tiếp, có 5 lần xuất hiện mặt N thì xác suất thực nghiệm xuất hiện mặt N bằng bao nhiêu?',
      options: ['$\\dfrac{5}{12}$', '$\\dfrac{12}{5}$', '$\\dfrac{12}{7}$', '$\\dfrac{7}{12}$'],
      correctAnswerIndex: 0,
      explanation: 'Xác suất thực nghiệm bằng số lần xuất hiện chia cho tổng số lần thử: $\\dfrac{5}{12}$.'
    },
    {
      id: 'c11-e1-q5',
      type: 'single-choice',
      text: 'Cho hình vẽ 1 sau. Trên hình vẽ 1 có bao nhiêu điểm và đường thẳng?',
      options: [
        '3 điểm và 2 đường thẳng',
        '3 điểm và 3 đường thẳng',
        '4 điểm và 3 đường thẳng',
        '2 điểm và 3 đường thẳng'
      ],
      correctAnswerIndex: 2,
      explanation: 'Hình có 4 điểm được kí hiệu và 3 đường thẳng.',
      images: [
        {
          src: '/question-assets/c11/de1/q5-hinh-1.png',
          alt: 'Hình 1 gồm các điểm P, Q, K, I và các đường thẳng m, n',
          caption: 'Hình vẽ câu 5'
        }
      ]
    },
    {
      id: 'c11-e1-q6',
      type: 'single-choice',
      text: 'Cũng từ hình 1 trên. Chọn câu đúng trong các câu sau:',
      options: ['Q ∈ m', 'P ∈ m; I ∈ m', 'K ∈ n', 'K ∈ n; Q ∈ n'],
      correctAnswerIndex: 3,
      explanation: 'Theo đáp án chính thức của đề, phương án đúng là D.'
    },
    {
      id: 'c11-e1-q7',
      type: 'single-choice',
      text: 'Cho ba điểm A, B, C thuộc đường thẳng xy như hình vẽ. Trên hình vẽ có bao nhiêu đoạn thẳng?',
      options: ['1', '2', '3', '4'],
      correctAnswerIndex: 2,
      explanation: 'Có 3 đoạn thẳng là AB, BC và AC.',
      images: [
        {
          src: '/question-assets/c11/de1/q7-doan-thang-abc.png',
          alt: 'Ba điểm A, B, C nằm trên đường thẳng xy',
          caption: 'Hình vẽ câu 7'
        }
      ]
    },
    {
      id: 'c11-e1-q8',
      type: 'single-choice',
      text: 'Cho hình vẽ bên. Hình biểu diễn điểm M là trung điểm của đoạn thẳng AB là:',
      options: ['Hình 3', 'Hình 1 và Hình 3', 'Hình 1 và Hình 4', 'Hình 2 và Hình 3'],
      correctAnswerIndex: 1,
      explanation: 'Theo đáp án chính thức của đề, phương án đúng là B.',
      images: [
        {
          src: '/question-assets/c11/de1/q8-4-hinh-trung-diem.png',
          alt: 'Bốn hình minh họa vị trí điểm M trên đoạn thẳng AB',
          caption: 'Các hình minh họa câu 8'
        }
      ]
    },
    {
      id: 'c11-e1-q9',
      type: 'true-false',
      text: 'Cho biểu đồ tranh: số học sinh khối lớp 6 được điểm 10 môn Toán trong tuần như sau. Xét tính đúng sai của các phát biểu sau.',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Ngày thứ Ba số học sinh đạt điểm 10 môn Toán ít nhất.',
        'Học sinh đạt điểm 10 môn Toán ngày thứ Hai và thứ Năm là như nhau.',
        'Xác suất để học sinh đạt điểm 10 vào ngày thứ Năm là 2/7.',
        'Tổng điểm 10 môn Toán cả tuần là 14 học sinh.'
      ],
      trueFalseAnswers: [true, true, false, true],
      explanation: 'Theo hướng dẫn chấm: a) Đúng, b) Đúng, c) Sai, d) Đúng.',
      images: [
        {
          src: '/question-assets/c11/de1/q9-bieu-do-tranh.png',
          alt: 'Biểu đồ tranh số học sinh lớp 6 được điểm 10 môn Toán trong tuần',
          caption: 'Biểu đồ tranh câu 9'
        }
      ]
    },
    {
      id: 'c11-e1-q10',
      type: 'short-answer',
      text: 'Dùng kí hiệu ∈, ∉ để ghi lại cách diễn đạt sau: “Đường thẳng a chứa điểm M và không chứa điểm P. Điểm O thuộc đường thẳng a và không thuộc đường thẳng b.”',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'M ∈ a; P ∉ a; O ∈ a; O ∉ b',
      explanation: 'Viết đúng các quan hệ thuộc và không thuộc theo đề bài.'
    },
    {
      id: 'c11-e1-q11',
      type: 'short-answer',
      text: 'Một cửa hàng bán kính ghi lại số màu kính đã bán được trong tháng bằng bảng số liệu sau. Hãy nêu đối tượng thống kê và tiêu chí thống kê.',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'Đối tượng: số màu kính đã bán trong tháng của một cửa hàng; Tiêu chí: số lượng kính đã bán được của mỗi màu kính',
      explanation: 'Theo hướng dẫn chấm: đối tượng là số màu kính đã bán trong tháng; tiêu chí là số lượng kính bán được của mỗi màu.',
      images: [
        {
          src: '/question-assets/c11/de1/q11-bang-mau-kinh.png',
          alt: 'Bảng số liệu màu kính và số lượng kính bán được',
          caption: 'Bảng số liệu câu 11'
        }
      ]
    },
    {
      id: 'c11-e1-q12',
      type: 'short-answer',
      text: 'Một hộp có 3 quả bóng: 1 quả bóng xanh, 1 quả bóng đỏ, 1 quả bóng vàng. Lấy ngẫu nhiên 1 quả bóng trong hộp. Hãy cho biết những kết quả có thể xảy ra với quả bóng được lấy ra.',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'Đỏ; xanh; vàng',
      explanation: 'Có 3 kết quả có thể xảy ra tương ứng 3 màu của quả bóng.'
    },
    {
      id: 'c11-e1-q13',
      type: 'short-answer',
      text: 'Với bảng số liệu về số màu kính đã bán: Trắng 6; Đen 40; Xanh 10; Trắng bạc 35; Vàng kim 12. Tính tổng số lượng kính bán được trong tháng.',
      options: [],
      correctAnswerIndex: 0,
      answerText: '103',
      explanation: 'Ta có 6 + 40 + 10 + 35 + 12 = 103.',
      images: [
        {
          src: '/question-assets/c11/de1/q11-bang-mau-kinh.png',
          alt: 'Bảng số liệu màu kính và số lượng kính bán được',
          caption: 'Bảng số liệu dùng cho câu 13'
        }
      ]
    },
    {
      id: 'c11-e1-q14',
      type: 'short-answer',
      text: 'Với bảng số liệu về số màu kính đã bán: Trắng 6; Đen 40; Xanh 10; Trắng bạc 35; Vàng kim 12. Cửa hàng nên nhập về nhiều hơn những loại kính màu nào để bán trong tháng tiếp theo?',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'Màu đen và màu trắng bạc',
      explanation: 'Vì đây là hai loại kính bán được nhiều nhất trong tháng.'
    },
    {
      id: 'c11-e1-q15',
      type: 'short-answer',
      text: 'Nếu lấy bóng 20 lần liên tiếp có 10 lần xuất hiện bóng đỏ, 7 lần xuất hiện bóng vàng, 3 lần xuất hiện bóng xanh. Hãy dùng phân số để mô tả xác suất thực nghiệm lấy được mỗi màu bóng.',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'Đỏ: 1/2; vàng: 7/20; xanh: 3/20',
      explanation: 'Xác suất thực nghiệm bằng số lần xuất hiện chia cho tổng số lần thử.'
    },
    {
      id: 'c11-e1-q16',
      type: 'short-answer',
      text: 'Vẫn với thí nghiệm trên, bạn An được 1 điểm nếu lấy được bóng đỏ. Hỏi xác suất thực nghiệm để An được điểm là bao nhiêu?',
      options: [],
      correctAnswerIndex: 0,
      answerText: '1/2',
      explanation: 'An được điểm khi lấy được bóng đỏ, nên xác suất thực nghiệm là 10/20 = 1/2.'
    },
    {
      id: 'c11-e1-q17',
      type: 'short-answer',
      text: 'Cho đường thẳng xy và 3 điểm A, B, C như hình vẽ sau. Điểm nào nằm giữa hai điểm còn lại?',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'B',
      explanation: 'Theo hình vẽ, điểm B nằm giữa hai điểm A và C.',
      images: [
        {
          src: '/question-assets/c11/de1/q13-duong-thang-abc.png',
          alt: 'Ba điểm A, B, C trên đường thẳng xy với B nằm giữa A và C',
          caption: 'Hình vẽ câu 13'
        }
      ]
    },
    {
      id: 'c11-e1-q18',
      type: 'short-answer',
      text: 'Cho đường thẳng xy và 3 điểm A, B, C như hình vẽ sau. Vì sao 3 điểm A, B, C thẳng hàng?',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'Vì 3 điểm A, B, C cùng thuộc đường thẳng xy',
      explanation: 'Ba điểm cùng thuộc một đường thẳng nên thẳng hàng.'
    },
    {
      id: 'c11-e1-q19',
      type: 'short-answer',
      text: 'Cho đường thẳng xy và 3 điểm A, B, C như hình vẽ sau. Vì sao B là trung điểm của đoạn thẳng AC?',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'Vì B nằm giữa A và C và AB = BC',
      explanation: 'Điểm B là trung điểm của AC khi B nằm giữa A, C và AB = BC.'
    },
    {
      id: 'c11-e1-q20',
      type: 'short-answer',
      text: 'Cho đường thẳng xy và 3 điểm A, B, C như hình vẽ sau. Biết AC = 8 cm. Tính độ dài AB và BC.',
      options: [],
      correctAnswerIndex: 0,
      answerText: 'AB = BC = 4 cm',
      explanation: 'Vì B là trung điểm của AC nên AB = BC = AC / 2 = 4 cm.'
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