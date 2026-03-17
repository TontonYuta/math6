import { Topic } from '../../types';
import { chapter7ExamTopics } from './chapter7-exams';

export const chapter7CoreTopics: Topic[] = [
  {
    id: 'c7-t1',
    title: 'Điểm và đường thẳng',
    description: 'Nhận biết điểm, đường thẳng và các quan hệ cơ bản giữa điểm với đường thẳng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q7-1-1',
        text: 'Trong hình học, điểm được kí hiệu bằng:',
        options: ['Chữ cái in hoa', 'Chữ cái in thường', 'Số tự nhiên', 'Dấu cộng'],
        correctAnswerIndex: 0,
        explanation: 'Điểm thường được kí hiệu bằng chữ cái in hoa như A, B, C.'
      },
      {
        id: 'q7-1-2',
        text: 'Đường thẳng thường được kí hiệu bằng:',
        options: ['Chữ cái in hoa', 'Chữ cái in thường', 'Số nguyên', 'Phân số'],
        correctAnswerIndex: 1,
        explanation: 'Đường thẳng thường được kí hiệu bằng chữ cái in thường như a, b, c.'
      },
      {
        id: 'q7-1-3',
        text: 'Qua hai điểm phân biệt, ta vẽ được:',
        options: ['Một đường thẳng duy nhất', 'Hai đường thẳng', 'Vô số đường thẳng', 'Không vẽ được đường thẳng nào'],
        correctAnswerIndex: 0,
        explanation: 'Qua hai điểm phân biệt chỉ vẽ được một đường thẳng duy nhất.'
      },
      {
        id: 'q7-1-4',
        text: 'Nếu điểm A nằm trên đường thẳng d thì ta viết:',
        options: ['$A \\in d$', '$A \\notin d$', '$d \\in A$', '$d \\notin A$'],
        correctAnswerIndex: 0,
        explanation: 'Nếu điểm A nằm trên đường thẳng d thì ta viết $A \\in d$.'
      },
      {
        id: 'q7-1-5',
        text: 'Nếu điểm B không nằm trên đường thẳng m thì ta viết:',
        options: ['$B \\in m$', '$B \\notin m$', '$m \\in B$', '$m = B$'],
        correctAnswerIndex: 1,
        explanation: 'Nếu B không thuộc đường thẳng m thì viết $B \\notin m$.'
      },
      {
        id: 'q7-1-6',
        text: 'Một đường thẳng có:',
        options: ['Một đầu mút', 'Hai đầu mút', 'Không có đầu mút', 'Ba đầu mút'],
        correctAnswerIndex: 2,
        explanation: 'Đường thẳng kéo dài mãi về hai phía nên không có đầu mút.'
      },
      {
        id: 'q7-1-7',
        text: 'Trong ba điểm A, B, C thẳng hàng thì:',
        options: [
          'Ba điểm cùng nằm trên một đường thẳng',
          'Ba điểm cùng nằm trên ba đường thẳng khác nhau',
          'Chỉ có hai điểm nằm trên một đường thẳng',
          'Không có điểm nào chung đường thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ba điểm thẳng hàng là ba điểm cùng nằm trên một đường thẳng.'
      },
      {
        id: 'q7-1-8',
        text: 'Trong các bộ ba điểm sau, bộ ba điểm nào có thể thẳng hàng?',
        options: [
          'Ba điểm cùng nằm trên một cạnh thước',
          'Ba đỉnh của một tam giác',
          'Ba góc của một hình vuông',
          'Ba điểm bất kì không xác định'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ba điểm cùng nằm trên một cạnh thước có thể thẳng hàng.'
      },
      {
        id: 'q7-1-9',
        text: 'Điểm nào sau đây luôn thuộc đường thẳng a?',
        options: ['Điểm được cho nằm trên a', 'Mọi điểm trong hình', 'Mọi đỉnh của tam giác', 'Điểm bất kì'],
        correctAnswerIndex: 0,
        explanation: 'Chỉ điểm được xác định là nằm trên a mới chắc chắn thuộc đường thẳng a.'
      },
      {
        id: 'q7-1-10',
        text: 'Hình ảnh gần đúng của đường thẳng trong thực tế là:',
        options: ['Mép thước kẻ', 'Quả bóng', 'Mặt đồng hồ', 'Chiếc lá'],
        correctAnswerIndex: 0,
        explanation: 'Mép thước kẻ là hình ảnh gần đúng của đường thẳng.'
      }
    ]
  },
  {
    id: 'c7-t2',
    title: 'Tia',
    description: 'Nhận biết tia, gốc của tia và phân biệt tia với đường thẳng, đoạn thẳng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q7-2-1',
        text: 'Tia là hình gồm:',
        options: [
          'Một điểm gốc và kéo dài mãi về một phía',
          'Hai điểm mút',
          'Không có điểm gốc',
          'Ba điểm phân biệt'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tia có một điểm gốc và kéo dài mãi về một phía.'
      },
      {
        id: 'q7-2-2',
        text: 'Tia AB có gốc là:',
        options: ['A', 'B', 'C', 'Không có gốc'],
        correctAnswerIndex: 0,
        explanation: 'Tia AB có gốc là A.'
      },
      {
        id: 'q7-2-3',
        text: 'Tia BA có gốc là:',
        options: ['A', 'B', 'AB', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Tia BA có gốc là B.'
      },
      {
        id: 'q7-2-4',
        text: 'Hai tia đối nhau là hai tia:',
        options: [
          'Chung gốc và tạo thành một đường thẳng',
          'Khác gốc và chung phương',
          'Có cùng chiều',
          'Không có điểm chung'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai tia đối nhau phải chung gốc và nằm trên cùng một đường thẳng.'
      },
      {
        id: 'q7-2-5',
        text: 'Hai tia trùng nhau là hai tia:',
        options: [
          'Chung gốc và cùng hướng',
          'Không chung gốc',
          'Đối nhau',
          'Vuông góc nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai tia trùng nhau nếu có cùng gốc và cùng hướng.'
      },
      {
        id: 'q7-2-6',
        text: 'Tia khác đường thẳng ở chỗ:',
        options: [
          'Tia có một gốc còn đường thẳng không có đầu mút',
          'Tia có hai đầu mút',
          'Đường thẳng có một đầu mút',
          'Không có điểm nào khác nhau'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tia có một gốc, còn đường thẳng không có đầu mút.'
      },
      {
        id: 'q7-2-7',
        text: 'Hình ảnh gần đúng của tia trong thực tế là:',
        options: ['Tia nắng mặt trời', 'Viên bi', 'Cái đĩa tròn', 'Mặt bàn'],
        correctAnswerIndex: 0,
        explanation: 'Tia nắng mặt trời là hình ảnh gần đúng của tia.'
      },
      {
        id: 'q7-2-8',
        text: 'Nếu điểm B nằm trên tia Ax thì:',
        options: [
          'B thuộc tia Ax',
          'B không thuộc tia Ax',
          'A không là gốc của tia',
          'Tia Ax không tồn tại'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nếu B nằm trên tia Ax thì B thuộc tia Ax.'
      },
      {
        id: 'q7-2-9',
        text: 'Trong một đường thẳng, một điểm chia đường thẳng thành:',
        options: ['Hai tia đối nhau', 'Hai đoạn thẳng', 'Một tia và một đoạn thẳng', 'Ba tia'],
        correctAnswerIndex: 0,
        explanation: 'Một điểm trên đường thẳng chia nó thành hai tia đối nhau.'
      },
      {
        id: 'q7-2-10',
        text: 'Muốn gọi tên một tia ta cần:',
        options: [
          'Một điểm gốc và một điểm thuộc tia',
          'Hai điểm mút',
          'Ba điểm phân biệt',
          'Một đoạn thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tên tia thường được gọi bằng gốc và một điểm thuộc tia.'
      }
    ]
  },
  {
    id: 'c7-t3',
    title: 'Đoạn thẳng',
    description: 'Nhận biết đoạn thẳng, hai đầu mút, độ dài đoạn thẳng và các quan hệ cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q7-3-1',
        text: 'Đoạn thẳng AB là hình gồm:',
        options: [
          'Hai điểm A, B và các điểm nằm giữa A, B',
          'Chỉ hai điểm A và B',
          'Một điểm A và kéo dài mãi',
          'Một đường tròn qua A và B'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đoạn thẳng AB gồm hai điểm mút A, B và các điểm nằm giữa chúng.'
      },
      {
        id: 'q7-3-2',
        text: 'Đoạn thẳng có:',
        options: ['Một đầu mút', 'Hai đầu mút', 'Không có đầu mút', 'Ba đầu mút'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn thẳng có hai đầu mút.'
      },
      {
        id: 'q7-3-3',
        text: 'Độ dài đoạn thẳng luôn là:',
        options: ['Một số âm', 'Một số không âm', 'Luôn bằng 0', 'Luôn là số lẻ'],
        correctAnswerIndex: 1,
        explanation: 'Độ dài đoạn thẳng luôn không âm.'
      },
      {
        id: 'q7-3-4',
        text: 'Nếu hai điểm A và B trùng nhau thì độ dài AB bằng:',
        options: ['1', '0', '2', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Khoảng cách giữa hai điểm trùng nhau bằng 0.'
      },
      {
        id: 'q7-3-5',
        text: 'Để đo độ dài đoạn thẳng, ta thường dùng:',
        options: ['Thước thẳng', 'Compa', 'Êke', 'Bút chì'],
        correctAnswerIndex: 0,
        explanation: 'Thước thẳng là dụng cụ thường dùng để đo độ dài đoạn thẳng.'
      },
      {
        id: 'q7-3-6',
        text: 'Nếu điểm M nằm giữa A và B thì:',
        options: [
          '$AM + MB = AB$',
          '$AM = AB + MB$',
          '$AB + MB = AM$',
          '$AM = MB = 0$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nếu M nằm giữa A và B thì tổng hai đoạn AM và MB bằng AB.'
      },
      {
        id: 'q7-3-7',
        text: 'Một đoạn dây dài 12 cm bị cắt thành hai đoạn 5 cm và 7 cm. Điều này cho thấy:',
        options: [
          '$5 + 7 = 12$',
          '$5 - 7 = 12$',
          '$5 \\times 7 = 12$',
          '$12 : 5 = 7$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tổng độ dài hai đoạn sau khi cắt bằng độ dài đoạn ban đầu.'
      },
      {
        id: 'q7-3-8',
        text: 'Trong các hình sau, hình nào gần đúng là đoạn thẳng?',
        options: ['Cạnh của quyển sách', 'Tia nắng', 'Mặt đồng hồ', 'Bánh xe'],
        correctAnswerIndex: 0,
        explanation: 'Cạnh của quyển sách là hình ảnh gần đúng của đoạn thẳng.'
      },
      {
        id: 'q7-3-9',
        text: 'Đoạn thẳng khác tia ở chỗ:',
        options: [
          'Đoạn thẳng có hai đầu mút',
          'Đoạn thẳng không có đầu mút',
          'Tia có hai đầu mút',
          'Tia ngắn hơn đoạn thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đoạn thẳng có hai đầu mút, còn tia chỉ có một gốc.'
      },
      {
        id: 'q7-3-10',
        text: 'Nếu AB = 8 cm, AC = 3 cm và C nằm giữa A và B thì CB bằng:',
        options: ['5 cm', '11 cm', '24 cm', '3 cm'],
        correctAnswerIndex: 0,
        explanation: 'Vì C nằm giữa A và B nên $AC + CB = AB$, do đó $CB = 8 - 3 = 5$ cm.'
      }
    ]
  },
  {
    id: 'c7-t4',
    title: 'Góc',
    description: 'Nhận biết góc, đỉnh góc, cạnh góc và phân loại một số góc cơ bản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q7-4-1',
        text: 'Góc là hình gồm:',
        options: [
          'Hai tia chung gốc',
          'Hai đoạn thẳng song song',
          'Hai điểm phân biệt',
          'Một đường thẳng và một đoạn thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Góc là hình gồm hai tia chung gốc.'
      },
      {
        id: 'q7-4-2',
        text: 'Trong góc xOy, điểm O là:',
        options: ['Đỉnh góc', 'Một cạnh góc', 'Điểm ngoài góc', 'Tâm đối xứng'],
        correctAnswerIndex: 0,
        explanation: 'Trong góc xOy, O là đỉnh góc.'
      },
      {
        id: 'q7-4-3',
        text: 'Trong góc xOy, hai tia Ox và Oy là:',
        options: ['Hai cạnh của góc', 'Hai đường tròn', 'Hai đoạn thẳng bằng nhau', 'Hai trung điểm'],
        correctAnswerIndex: 0,
        explanation: 'Hai tia Ox và Oy là hai cạnh của góc.'
      },
      {
        id: 'q7-4-4',
        text: 'Góc vuông có số đo là:',
        options: ['45°', '60°', '90°', '180°'],
        correctAnswerIndex: 2,
        explanation: 'Góc vuông có số đo 90°.'
      },
      {
        id: 'q7-4-5',
        text: 'Góc bẹt có số đo là:',
        options: ['90°', '120°', '180°', '360°'],
        correctAnswerIndex: 2,
        explanation: 'Góc bẹt có số đo 180°.'
      },
      {
        id: 'q7-4-6',
        text: 'Góc nhọn là góc có số đo:',
        options: [
          'Nhỏ hơn 90°',
          'Bằng 90°',
          'Lớn hơn 90° và nhỏ hơn 180°',
          'Bằng 180°'
        ],
        correctAnswerIndex: 0,
        explanation: 'Góc nhọn là góc có số đo nhỏ hơn 90°.'
      },
      {
        id: 'q7-4-7',
        text: 'Góc tù là góc có số đo:',
        options: [
          'Nhỏ hơn 90°',
          'Bằng 90°',
          'Lớn hơn 90° và nhỏ hơn 180°',
          'Bằng 180°'
        ],
        correctAnswerIndex: 2,
        explanation: 'Góc tù có số đo lớn hơn 90° và nhỏ hơn 180°.'
      },
      {
        id: 'q7-4-8',
        text: 'Dụng cụ thường dùng để đo góc là:',
        options: ['Thước đo góc', 'Compa', 'Thước thẳng', 'Máy tính'],
        correctAnswerIndex: 0,
        explanation: 'Thước đo góc dùng để đo số đo góc.'
      },
      {
        id: 'q7-4-9',
        text: 'Một góc 90° là:',
        options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'],
        correctAnswerIndex: 1,
        explanation: 'Góc có số đo 90° là góc vuông.'
      },
      {
        id: 'q7-4-10',
        text: 'Một góc 150° là:',
        options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'],
        correctAnswerIndex: 2,
        explanation: '150° lớn hơn 90° và nhỏ hơn 180° nên là góc tù.'
      }
    ]
  },
  {
    id: 'c7-t5',
    title: 'Ôn tập chương Hình học cơ bản',
    description: 'Củng cố kiến thức về điểm, đường thẳng, tia, đoạn thẳng và góc.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q7-5-1',
        text: 'Qua hai điểm phân biệt, ta vẽ được:',
        options: ['Một đường thẳng duy nhất', 'Hai đường thẳng', 'Ba đường thẳng', 'Vô số đường thẳng'],
        correctAnswerIndex: 0,
        explanation: 'Qua hai điểm phân biệt chỉ có một đường thẳng duy nhất.'
      },
      {
        id: 'q7-5-2',
        text: 'Tia AB có gốc là:',
        options: ['A', 'B', 'AB', 'Không có'],
        correctAnswerIndex: 0,
        explanation: 'Tia AB có gốc là A.'
      },
      {
        id: 'q7-5-3',
        text: 'Đoạn thẳng AB có:',
        options: ['Một đầu mút', 'Hai đầu mút', 'Không có đầu mút', 'Ba đầu mút'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn thẳng có hai đầu mút là A và B.'
      },
      {
        id: 'q7-5-4',
        text: 'Nếu M nằm giữa A và B thì:',
        options: ['$AM + MB = AB$', '$AM = AB + MB$', '$AB + MB = AM$', '$AM = 0$'],
        correctAnswerIndex: 0,
        explanation: 'Nếu M nằm giữa A và B thì tổng độ dài AM và MB bằng AB.'
      },
      {
        id: 'q7-5-5',
        text: 'Góc là hình gồm:',
        options: ['Hai tia chung gốc', 'Hai đường thẳng song song', 'Một đoạn thẳng', 'Ba điểm'],
        correctAnswerIndex: 0,
        explanation: 'Góc là hình gồm hai tia chung gốc.'
      },
      {
        id: 'q7-5-6',
        text: 'Góc vuông có số đo:',
        options: ['45°', '60°', '90°', '180°'],
        correctAnswerIndex: 2,
        explanation: 'Góc vuông có số đo 90°.'
      },
      {
        id: 'q7-5-7',
        text: 'Góc bẹt có số đo:',
        options: ['90°', '120°', '180°', '360°'],
        correctAnswerIndex: 2,
        explanation: 'Góc bẹt có số đo 180°.'
      },
      {
        id: 'q7-5-8',
        text: 'Một góc 40° là:',
        options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'],
        correctAnswerIndex: 0,
        explanation: '40° nhỏ hơn 90° nên là góc nhọn.'
      },
      {
        id: 'q7-5-9',
        text: 'Một góc 120° là:',
        options: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'],
        correctAnswerIndex: 2,
        explanation: '120° lớn hơn 90° và nhỏ hơn 180° nên là góc tù.'
      },
      {
        id: 'q7-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Điểm, đường thẳng, tia, đoạn thẳng và góc',
          'Số nguyên và số thập phân',
          'Phân số và tỉ số phần trăm',
          'Biểu đồ và xác suất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào các khái niệm hình học cơ bản.'
      }
    ]
  }
];

export const chapter7Topics: Topic[] = [
  ...chapter7CoreTopics,
  ...chapter7ExamTopics
];