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
  description: 'Đề thi nâng cao - Dạng toán phần trăm trong mua bán (khuyến mãi, lợi nhuận) và dạng toán tính ngược từ cuối với phân số/phần trăm.',
  questions: [
    {
      id: 'c11-e3-q1',
      type: 'single-choice',
      text: 'Một chiếc tivi được niêm yết tại cửa hàng với giá 12 000 000 đồng. Nhân dịp khai trương, siêu thị giảm giá 15% so với giá niêm yết. Hỏi sau khi giảm giá, khách hàng phải trả bao nhiêu tiền (tính theo đơn vị triệu đồng)?',
      options: ['10,2', '10,5', '11,2', '10,8'],
      correctAnswerIndex: 0,
      explanation: 'Giá tiền khách hàng phải trả chiếm $100\\% - 15\\% = 85\\%$ giá niêm yết. Số tiền thực tế phải trả là $12 \\times 85\\% = 10,2$ (triệu đồng).'
    },
    {
      id: 'c11-e3-q2',
      type: 'single-choice',
      text: 'Một cửa hàng bán một chiếc điện thoại với giá 7 200 000 đồng và đạt mức lợi nhuận 20% so với giá nhập. Giá nhập của chiếc điện thoại đó là:',
      options: ['5 760 000 đồng', '6 000 000 đồng', '5 800 000 đồng', '6 200 000 đồng'],
      correctAnswerIndex: 1,
      explanation: 'Giá bán bằng tổng của giá nhập (100%) và lợi nhuận (20%), tức là chiếm $100\\% + 20\\% = 120\\%$ giá nhập. Giá nhập của chiếc điện thoại là $7 200 000 : 120\\% = 6 000 000$ (đồng).'
    },
    {
      id: 'c11-e3-q3',
      type: 'short-answer',
      text: 'Một siêu thị điện máy nhập về một mẫu máy giặt với giá vốn là 8 500 000 đồng. Siêu thị muốn bán mẫu máy giặt này với mức lợi nhuận 18% so với giá vốn. Hỏi siêu thị phải bán chiếc máy giặt đó với giá bao nhiêu (đơn vị: đồng)?',
      options: [],
      correctAnswerIndex: 0,
      answerText: '10030000',
      explanation: 'Mức giá bán ra sẽ chiếm $100\\% + 18\\% = 118\\%$ giá vốn. Giá bán của máy giặt là $8 500 000 \\times 118\\% = 10 030 000$ (đồng).'
    },
    {
      id: 'c11-e3-q4',
      type: 'true-false',
      text: 'Một cửa hàng nhập về một lô áo sơ mi. Cửa hàng định giá bán (giá niêm yết) cho mỗi chiếc áo sao cho đạt lợi nhuận 25% so với giá nhập. Cuối năm, cửa hàng xả hàng và giảm giá 10% trên giá niêm yết. Xét tính đúng sai của các phát biểu sau:',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Giá niêm yết bằng 125% giá nhập.',
        'Giá bán thực tế sau khi giảm bằng 90% giá niêm yết.',
        'Giá bán thực tế sau khi giảm bằng 115% giá nhập.',
        'Cửa hàng vẫn có lãi 12,5% so với giá nhập đối với những chiếc áo bán giảm giá.'
      ],
      trueFalseAnswers: [true, true, false, true],
      explanation: 'Giá niêm yết = 125% giá nhập. Giá sau giảm = 90% giá niêm yết = $90\\% \\times 125\\% = 112,5\\%$ giá nhập (phát biểu c sai). Do thu về 112,5% giá nhập nên cửa hàng vẫn lãi $112,5\\% - 100\\% = 12,5\\%$ so với giá nhập.'
    },
    {
      id: 'c11-e3-q5',
      type: 'single-choice',
      text: 'Một chiếc laptop được bán với giá 24 000 000 đồng sau khi đã giảm giá 20% so với giá niêm yết. Biết rằng với mức giá bán này, cửa hàng vẫn đang lãi 25% so với giá nhập. Hỏi giá niêm yết và giá nhập của chiếc laptop lần lượt là bao nhiêu?',
      options: ['30 000 000 đồng và 19 200 000 đồng', '28 800 000 đồng và 19 200 000 đồng', '30 000 000 đồng và 18 000 000 đồng', '28 800 000 đồng và 18 000 000 đồng'],
      correctAnswerIndex: 0,
      explanation: 'Giá niêm yết là $24 000 000 : (100\\% - 20\\%) = 30 000 000$ (đồng). Giá nhập là $24 000 000 : (100\\% + 25\\%) = 19 200 000$ (đồng).'
    },
    {
      id: 'c11-e3-q6',
      type: 'single-choice',
      text: 'Một người nông dân mang trứng ra chợ bán. Lần thứ nhất người đó bán $\\dfrac{1}{3}$ số trứng và thêm 5 quả. Lần thứ hai người đó bán $\\dfrac{1}{5}$ số trứng còn lại và thêm 10 quả. Sau hai lần bán, trong rổ còn lại 50 quả trứng. Tổng số trứng ban đầu người đó mang đi là:',
      options: ['120 quả', '150 quả', '90 quả', '100 quả'],
      correctAnswerIndex: 0,
      explanation: 'Tính ngược từ cuối: Số trứng trước lần bán thứ hai (sau lần 1) là $(50 + 10) : (1 - \\dfrac{1}{5}) = 75$ (quả). Số trứng ban đầu mang đi là $(75 + 5) : (1 - \\dfrac{1}{3}) = 120$ (quả).'
    },
    {
      id: 'c11-e3-q7',
      type: 'single-choice',
      text: 'Một kho chứa gạo xuất hàng trong 3 đợt. Đợt 1 xuất 25% số gạo trong kho. Đợt 2 xuất $\\dfrac{1}{3}$ số gạo còn lại và thêm 4 tấn. Đợt 3 xuất $\\dfrac{1}{2}$ số gạo còn lại sau đợt 2 và thêm 2 tấn thì trong kho vừa hết gạo. Hỏi ban đầu kho có bao nhiêu tấn gạo?',
      options: ['16 tấn', '20 tấn', '24 tấn', '12 tấn'],
      correctAnswerIndex: 0,
      explanation: 'Số gạo trước đợt 3: $(0 + 2) : (1 - \\dfrac{1}{2}) = 4$ (tấn). Số gạo trước đợt 2: $(4 + 4) : (1 - \\dfrac{1}{3}) = 12$ (tấn). Số gạo ban đầu là: $12 : (1 - 25\\%) = 16$ (tấn).'
    },
    {
      id: 'c11-e3-q8',
      type: 'short-answer',
      text: 'Bạn Hân đọc một cuốn tiểu thuyết trong 3 ngày. Ngày thứ nhất Hân đọc được $\\dfrac{1}{4}$ số trang và thêm 12 trang. Ngày thứ hai Hân đọc được 40% số trang còn lại và thêm 15 trang. Ngày thứ ba Hân đọc nốt 75 trang cuối cùng. Hỏi cuốn tiểu thuyết đó dày bao nhiêu trang?',
      options: [],
      correctAnswerIndex: 0,
      answerText: '216',
      explanation: 'Số trang sách còn lại trước khi đọc ngày 2 là $(75 + 15) : (1 - 40\\%) = 150$ (trang). Tổng số trang sách ban đầu là $(150 + 12) : (1 - \\dfrac{1}{4}) = 216$ (trang).'
    },
    {
      id: 'c11-e3-q9',
      type: 'true-false',
      text: 'Một xí nghiệp may xuất khẩu trang thành 3 đợt. Đợt 1 xuất $\\dfrac{1}{5}$ số khẩu trang và thêm 400 chiếc. Đợt 2 xuất 25% số khẩu trang còn lại và thêm 300 chiếc. Đợt 3 xuất $\\dfrac{1}{3}$ số khẩu trang còn lại sau đợt 2. Cuối cùng trong kho còn 800 chiếc. Xét tính đúng sai của các phát biểu sau:',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Số khẩu trang còn lại ngay sau đợt 2 là 1 200 chiếc.',
        'Đợt 2 đã xuất tất cả 800 chiếc khẩu trang.',
        'Tổng số khẩu trang xí nghiệp có ban đầu là 2 500 chiếc.',
        'Đợt 1 đã xuất 1 000 chiếc khẩu trang.'
      ],
      trueFalseAnswers: [true, true, false, true],
      explanation: 'Tính ngược: Trước đợt 3 có $800 : (1 - \\dfrac{1}{3}) = 1200$ (chiếc). Trước đợt 2 có $(1200 + 300) : (1 - 25\\%) = 2000$ (chiếc). Đợt 2 xuất: $25\\% \\times 2000 + 300 = 800$ (chiếc). Ban đầu có $(2000 + 400) : (1 - \\dfrac{1}{5}) = 3000$ (chiếc). Đợt 1 xuất: $\\dfrac{1}{5} \\times 3000 + 400 = 1000$ (chiếc).'
    },
    {
      id: 'c11-e3-q10',
      type: 'single-choice',
      text: 'Mẹ cho Nam một số tiền tiêu vặt. Ngày thứ nhất Nam mua đồ dùng học tập hết $\\dfrac{1}{4}$ số tiền. Ngày thứ hai Nam mua sách hết 40% số tiền còn lại. Ngày thứ ba Nam ủng hộ quỹ từ thiện 60 000 đồng thì Nam nhận thấy mình còn lại đúng 30 000 đồng. Hỏi lúc đầu mẹ cho Nam bao nhiêu tiền?',
      options: ['150 000 đồng', '200 000 đồng', '250 000 đồng', '300 000 đồng'],
      correctAnswerIndex: 1,
      explanation: 'Số tiền Nam có trước khi ủng hộ từ thiện là $60 000 + 30 000 = 90 000$ (đồng). Số tiền Nam có trước ngày thứ hai là $90 000 : (1 - 40\\%) = 150 000$ (đồng). Số tiền lúc đầu mẹ cho Nam là $150 000 : (1 - \\dfrac{1}{4}) = 200 000$ (đồng).'
    },
    {
      id: 'c11-e3-q11',
      type: 'single-choice',
      text: 'Một chiếc máy tính xách tay được siêu thị điện máy giảm giá 10%. Tuy nhiên, nếu là khách hàng thành viên (VIP), khách sẽ được giảm thêm 5% tính trên "mức giá đã giảm" đó. Một khách hàng VIP đã mua chiếc máy này với giá 17 100 000 đồng. Hỏi giá niêm yết ban đầu của máy là bao nhiêu?',
      options: ['19 000 000 đồng', '20 000 000 đồng', '19 500 000 đồng', '18 000 000 đồng'],
      correctAnswerIndex: 1,
      explanation: 'Bài toán giảm giá kép, cần tính ngược từng bước. Bước 1: Trước khi giảm 5% cho VIP, giá máy là $17 100 000 : (100\\% - 5\\%) = 18 000 000$ (đồng). Bước 2: Đây là mức giá sau khi đã giảm 10% từ giá niêm yết. Vậy giá niêm yết gốc là $18 000 000 : (100\\% - 10\\%) = 20 000 000$ (đồng).'
    },
    {
      id: 'c11-e3-q12',
      type: 'single-choice',
      text: 'Một cửa hàng nhập về một món đồ chơi giáo dục với giá vốn là 120 000 đồng. Cửa hàng muốn bán sao cho tiền lãi thu được bằng đúng 20% "GIÁ BÁN RA" (lưu ý: không phải 20% giá vốn). Hỏi cửa hàng phải định giá bán là bao nhiêu?',
      options: ['144 000 đồng', '150 000 đồng', '140 000 đồng', '160 000 đồng'],
      correctAnswerIndex: 1,
      explanation: 'Ý tưởng chính: Coi "Giá bán" là mốc 100%. Tiền lãi chiếm 20% giá bán. Bước 1: Suy ra tiền vốn sẽ chiếm $100\\% - 20\\% = 80\\%$ giá bán. Bước 2: Ta đã biết tiền vốn là 120 000 đồng (tương ứng 80%). Vậy giá bán ra phải là: $120 000 : 80\\% = 150 000$ (đồng).'
    },
    {
      id: 'c11-e3-q13',
      type: 'short-answer',
      text: 'Một siêu thị nhập một chiếc túi xách về. Để kích cầu, siêu thị định giá bán (giá niêm yết) cao hơn giá nhập 40%. Sau đó, trong ngày Black Friday, siêu thị lại giảm giá 20% trên giá niêm yết. Hỏi thực tế siêu thị đã lãi bao nhiêu phần trăm so với giá nhập? (Chỉ điền con số, không ghi kí hiệu %)',
      options: [],
      correctAnswerIndex: 0,
      answerText: '12',
      explanation: 'Bước 1: Coi giá nhập là 100%. Giá niêm yết dán trên túi sẽ là $100\\% + 40\\% = 140\\%$. Bước 2: Siêu thị bán giảm 20% so với giá niêm yết, tức là thu về 80% của con số 140% này. Bước 3: Giá bán thực tế so với giá nhập là $140\\% \\times 80\\% = 112\\%$. Vậy siêu thị lãi $112\\% - 100\\% = 12\\%$.'
    },
    {
      id: 'c11-e3-q14',
      type: 'true-false',
      text: 'Một người buôn trái cây mua 100 kg cam với cùng một mức giá nhập. Người đó chọn ra 60 kg quả to đẹp và bán với mức giá lãi 30% so với giá nhập. 40 kg còn lại quả nhỏ hơn nên đành bán lỗ 15% so với giá nhập. Xét tính đúng sai của các phát biểu sau:',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Tiền thu về từ 60 kg quả to bằng 130% tiền vốn của 60 kg đó.',
        'Tiền thu về từ 40 kg quả nhỏ bằng 85% tiền vốn của 40 kg đó.',
        'Tổng doanh thu từ việc bán 100 kg cam đúng bằng tổng tiền vốn ban đầu (tức là hòa vốn).',
        'Người đó lãi tổng cộng 12% trên toàn bộ vốn mua lô cam.'
      ],
      trueFalseAnswers: [true, true, false, true],
      explanation: 'Doanh thu 60kg đầu: $60 \\times 130\\% = 78$ (phần vốn). Doanh thu 40kg sau: $40 \\times 85\\% = 34$ (phần vốn). Tổng thu về là $78 + 34 = 112$ (phần vốn so với 100 phần ban đầu). Thu về 112% nghĩa là lãi 12%. Phát biểu C sai vì thu về nhiều hơn vốn ban đầu.'
    },
    {
      id: 'c11-e3-q15',
      type: 'single-choice',
      text: 'Một khách hàng mua một chiếc máy lọc nước và trả tổng cộng 13 200 000 đồng (số tiền này đã bao gồm 10% thuế VAT). Biết rằng cửa hàng đã bán chiếc máy này với mức lãi 20% so với giá nhập (lãi tính trên giá trước thuế). Giá nhập của chiếc máy lọc nước là:',
      options: ['10 000 000 đồng', '11 000 000 đồng', '10 500 000 đồng', '9 600 000 đồng'],
      correctAnswerIndex: 0,
      explanation: 'Bước 1: Bóc tách phần thuế VAT. Giá bán thực tế của cửa hàng (trước khi cộng 10% thuế) là: $13 200 000 : (100\\% + 10\\%) = 12 000 000$ (đồng). Bước 2: Tìm giá vốn. Cửa hàng lãi 20% so với giá vốn, nên giá vốn là: $12 000 000 : (100\\% + 20\\%) = 10 000 000$ (đồng).'
    },
    {
      id: 'c11-e3-q16',
      type: 'single-choice',
      text: 'Một học sinh đọc cuốn sách tham khảo Toán. Ngày 1 đọc được $\\dfrac{1}{3}$ TỔNG số trang sách. Ngày 2 đọc được $\\dfrac{1}{4}$ số trang CÒN LẠI. Ngày 3 đọc được $\\dfrac{1}{2}$ số trang còn lại sau ngày 2. Cuối cùng, sách còn đúng 60 trang chưa đọc. Hỏi cuốn sách dày bao nhiêu trang?',
      options: ['240 trang', '180 trang', '360 trang', '300 trang'],
      correctAnswerIndex: 0,
      explanation: 'Tính ngược từng bước từ dưới lên. Bước 1: Số trang trước ngày 3 là $60 : (1 - \\dfrac{1}{2}) = 120$. Bước 2: Số trang trước ngày 2 là $120 : (1 - \\dfrac{1}{4}) = 160$. Bước 3: Số trang ban đầu (trước ngày 1) là $160 : (1 - \\dfrac{1}{3}) = 240$ (trang).'
    },
    {
      id: 'c11-e3-q17',
      type: 'short-answer',
      text: 'Một quả bóng cao su được thả rơi tự do. Mỗi lần chạm đất, quả bóng nảy lên một độ cao bằng $\\dfrac{2}{3}$ độ cao của lần rơi ngay trước đó. Sau khi chạm đất lần thứ 3, quả bóng nảy lên đạt độ cao 24 cm. Hỏi lúc đầu quả bóng được thả từ độ cao bao nhiêu xen-ti-mét?',
      options: [],
      correctAnswerIndex: 0,
      answerText: '81',
      explanation: 'Tính ngược lại theo tỷ lệ. Bước 1: Độ cao trước khi chạm đất lần 3 là $24 : \\dfrac{2}{3} = 36$ (cm). Bước 2: Độ cao trước lần chạm đất thứ 2 là $36 : \\dfrac{2}{3} = 54$ (cm). Bước 3: Độ cao lúc thả ban đầu (trước lần chạm đất 1) là $54 : \\dfrac{2}{3} = 81$ (cm).'
    },
    {
      id: 'c11-e3-q18',
      type: 'true-false',
      text: 'Có một rổ cam. Ngày thứ nhất ăn $\\dfrac{1}{2}$ số cam và ăn thêm $\\dfrac{1}{2}$ quả. Ngày thứ hai ăn $\\dfrac{1}{2}$ số cam còn lại và ăn thêm $\\dfrac{1}{2}$ quả. Ngày thứ ba cũng ăn $\\dfrac{1}{2}$ số cam còn lại và ăn thêm $\\dfrac{1}{2}$ quả thì vừa hết số cam trong rổ (không phải cắt đôi quả nào). Xét tính đúng sai của các phát biểu sau:',
      options: [],
      correctAnswerIndex: 0,
      trueFalseStatements: [
        'Trước ngày thứ ba, trong rổ có đúng 1 quả cam.',
        'Số cam trước ngày thứ hai là 4 quả.',
        'Tổng số cam ban đầu trong rổ là 7 quả.',
        'Ngày thứ nhất đã ăn tổng cộng 4 quả cam.'
      ],
      trueFalseAnswers: [true, false, true, true],
      explanation: 'Quy luật tính ngược: Lấy số cam còn lại CỘNG $\\dfrac{1}{2}$, sau đó CHIA cho $\\dfrac{1}{2}$ (tức là nhân 2). Trước ngày 3: $(0 + 0,5) \\times 2 = 1$ quả. Trước ngày 2: $(1 + 0,5) \\times 2 = 3$ quả. Ban đầu (trước ngày 1): $(3 + 0,5) \\times 2 = 7$ quả. Ngày 1 ăn: $7 - 3 = 4$ quả. Suy ra phát biểu B sai.'
    },
    {
      id: 'c11-e3-q19',
      type: 'single-choice',
      text: 'Tàu khách khởi hành từ ga A. Tại ga A, $\\dfrac{1}{3}$ số hành khách xuống tàu và có 30 người lên tàu. Đến ga B, $\\dfrac{1}{4}$ số khách hiện tại xuống tàu và có 50 người lên tàu. Đến ga C, $\\dfrac{1}{5}$ số khách xuống tàu và 30 người lên tàu. Cuối cùng, tàu đến ga cuối với 214 khách. Hỏi ban đầu khi chưa tới ga A, trên tàu có bao nhiêu khách?',
      options: ['315 người', '240 người', '300 người', '285 người'],
      correctAnswerIndex: 0,
      explanation: 'Tính ngược từ ga cuối. Trước ga C (lúc chưa có 30 người lên và $\\dfrac{1}{5}$ người xuống): $(214 - 30) : (1 - \\dfrac{1}{5}) = 230$ người. Trước ga B: $(230 - 50) : (1 - \\dfrac{1}{4}) = 240$ người. Ban đầu trước khi có thay đổi ở ga A: $(240 - 30) : (1 - \\dfrac{1}{3}) = 315$ người.'
    },
    {
      id: 'c11-e3-q20',
      type: 'short-answer',
      text: 'Một đàn chim đậu trên hai cành cây. Đầu tiên, có 10 con chim bay từ cành dưới lên cành trên. Sau đó, $\\dfrac{1}{3}$ số chim ở cành trên bay đi kiếm ăn. Cuối cùng, số chim còn lại ở cành trên đúng bằng $\\dfrac{1}{2}$ số chim ở cành dưới. Biết hiện tại cành dưới có 24 con chim. Hỏi ban đầu lúc chưa có sự dịch chuyển nào, cành trên có bao nhiêu con chim?',
      options: [],
      correctAnswerIndex: 0,
      answerText: '8',
      explanation: 'Bước 1: Lúc cuối, cành trên có số chim là $24 \\times \\dfrac{1}{2} = 12$ (con). Bước 2: Trước khi bay đi kiếm ăn, cành trên có: $12 : (1 - \\dfrac{1}{3}) = 18$ (con). Bước 3: Đảo ngược sự việc "10 con bay từ dưới lên trên", số chim cành trên lúc ban đầu là: $18 - 10 = 8$ (con).'
    }
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