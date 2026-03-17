import { Topic } from '../../types';
import { chapter6ExamTopics } from './chapter6-exams';

export const chapter6CoreTopics: Topic[] = [
  {
    id: 'c6-t1',
    title: 'Trục đối xứng',
    description: 'Nhận biết trục đối xứng của một hình phẳng và các hình có trục đối xứng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q6-1-1',
        text: 'Trục đối xứng của một hình là:',
        options: [
          'Đường thẳng chia hình thành hai phần bằng nhau và chồng khít lên nhau',
          'Một đoạn thẳng bất kì trong hình',
          'Một cạnh của hình',
          'Một điểm nằm trong hình'
        ],
        correctAnswerIndex: 0,
        explanation: 'Trục đối xứng là đường thẳng mà khi gấp hình theo đường đó thì hai phần chồng khít lên nhau.'
      },
      {
        id: 'q6-1-2',
        text: 'Hình vuông có bao nhiêu trục đối xứng?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 3,
        explanation: 'Hình vuông có 4 trục đối xứng: 2 đường chéo và 2 đường thẳng đi qua trung điểm các cạnh đối diện.'
      },
      {
        id: 'q6-1-3',
        text: 'Hình chữ nhật có bao nhiêu trục đối xứng?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Hình chữ nhật có 2 trục đối xứng.'
      },
      {
        id: 'q6-1-4',
        text: 'Hình tròn có số trục đối xứng là:',
        options: ['1', '2', '4', 'Vô số'],
        correctAnswerIndex: 3,
        explanation: 'Mọi đường thẳng đi qua tâm đều là trục đối xứng của hình tròn.'
      },
      {
        id: 'q6-1-5',
        text: 'Hình tam giác đều có bao nhiêu trục đối xứng?',
        options: ['1', '2', '3', 'Không có'],
        correctAnswerIndex: 2,
        explanation: 'Hình tam giác đều có 3 trục đối xứng.'
      },
      {
        id: 'q6-1-6',
        text: 'Hình nào sau đây không có trục đối xứng?',
        options: ['Hình vuông', 'Hình chữ nhật', 'Tam giác thường', 'Hình tròn'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác thường không có trục đối xứng.'
      },
      {
        id: 'q6-1-7',
        text: 'Hình thoi có bao nhiêu trục đối xứng?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Hình thoi có 2 trục đối xứng là hai đường chéo.'
      },
      {
        id: 'q6-1-8',
        text: 'Hình nào sau đây có đúng một trục đối xứng?',
        options: ['Hình tròn', 'Tam giác cân', 'Hình vuông', 'Hình chữ nhật'],
        correctAnswerIndex: 1,
        explanation: 'Tam giác cân có đúng 1 trục đối xứng.'
      },
      {
        id: 'q6-1-9',
        text: 'Nếu một hình có trục đối xứng thì hai phần của hình qua trục đó:',
        options: [
          'Có diện tích bằng nhau và chồng khít lên nhau',
          'Luôn khác nhau',
          'Chỉ có chu vi bằng nhau',
          'Không liên quan gì'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai phần đối xứng qua trục có thể chồng khít lên nhau.'
      },
      {
        id: 'q6-1-10',
        text: 'Một chữ cái in hoa có thể có trục đối xứng là:',
        options: ['A', 'F', 'G', 'L'],
        correctAnswerIndex: 0,
        explanation: 'Chữ A in hoa thường có 1 trục đối xứng.'
      }
    ]
  },
  {
    id: 'c6-t2',
    title: 'Tâm đối xứng',
    description: 'Nhận biết tâm đối xứng của một hình phẳng và các hình có tâm đối xứng.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q6-2-1',
        text: 'Tâm đối xứng của một hình là điểm mà khi quay hình quanh điểm đó 180° thì:',
        options: [
          'Hình trùng với chính nó',
          'Hình lớn hơn',
          'Hình nhỏ hơn',
          'Hình biến mất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đó là tính chất của tâm đối xứng.'
      },
      {
        id: 'q6-2-2',
        text: 'Hình bình hành có:',
        options: ['1 tâm đối xứng', '2 tâm đối xứng', 'Không có tâm đối xứng', 'Vô số tâm đối xứng'],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành có 1 tâm đối xứng là giao điểm hai đường chéo.'
      },
      {
        id: 'q6-2-3',
        text: 'Tâm đối xứng của hình chữ nhật là:',
        options: [
          'Giao điểm hai đường chéo',
          'Một đỉnh của hình',
          'Trung điểm một cạnh',
          'Không có'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình chữ nhật có tâm đối xứng là giao điểm hai đường chéo.'
      },
      {
        id: 'q6-2-4',
        text: 'Hình vuông có tâm đối xứng là:',
        options: [
          'Giao điểm hai đường chéo',
          'Trung điểm một cạnh',
          'Một đỉnh',
          'Không có'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông có tâm đối xứng là giao điểm hai đường chéo.'
      },
      {
        id: 'q6-2-5',
        text: 'Hình tròn có tâm đối xứng là:',
        options: ['Tâm của hình tròn', 'Một điểm bất kì trên đường tròn', 'Không có', 'Một đầu đường kính'],
        correctAnswerIndex: 0,
        explanation: 'Tâm của hình tròn là tâm đối xứng.'
      },
      {
        id: 'q6-2-6',
        text: 'Hình nào sau đây không có tâm đối xứng?',
        options: ['Hình bình hành', 'Hình chữ nhật', 'Tam giác đều', 'Hình vuông'],
        correctAnswerIndex: 2,
        explanation: 'Tam giác đều không có tâm đối xứng.'
      },
      {
        id: 'q6-2-7',
        text: 'Hình thoi có tâm đối xứng là:',
        options: [
          'Giao điểm hai đường chéo',
          'Một đỉnh',
          'Trung điểm một cạnh',
          'Không có'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình thoi có tâm đối xứng là giao điểm hai đường chéo.'
      },
      {
        id: 'q6-2-8',
        text: 'Nếu một hình có tâm đối xứng thì khi quay 180° quanh tâm đó, hình sẽ:',
        options: ['Trùng với chính nó', 'Lật ngược hoàn toàn khác', 'Biến mất', 'Chỉ đổi màu'],
        correctAnswerIndex: 0,
        explanation: 'Đó là tính chất của hình có tâm đối xứng.'
      },
      {
        id: 'q6-2-9',
        text: 'Giao điểm hai đường chéo của hình bình hành có vai trò là:',
        options: ['Tâm đối xứng', 'Trục đối xứng', 'Một cạnh', 'Một góc'],
        correctAnswerIndex: 0,
        explanation: 'Giao điểm hai đường chéo là tâm đối xứng của hình bình hành.'
      },
      {
        id: 'q6-2-10',
        text: 'Một ví dụ trong thực tế có tâm đối xứng là:',
        options: ['Bánh xe đạp', 'Cây thước thẳng', 'Tam giác giấy', 'Quyển vở'],
        correctAnswerIndex: 0,
        explanation: 'Bánh xe đạp có dạng gần đúng như hình tròn nên có tâm đối xứng.'
      }
    ]
  },
  {
    id: 'c6-t3',
    title: 'Hình có trục đối xứng và tâm đối xứng',
    description: 'Phân biệt các hình có trục đối xứng, tâm đối xứng hoặc có cả hai.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q6-3-1',
        text: 'Hình vuông có:',
        options: [
          'Chỉ có trục đối xứng',
          'Chỉ có tâm đối xứng',
          'Có cả trục đối xứng và tâm đối xứng',
          'Không có đối xứng'
        ],
        correctAnswerIndex: 2,
        explanation: 'Hình vuông có 4 trục đối xứng và 1 tâm đối xứng.'
      },
      {
        id: 'q6-3-2',
        text: 'Hình chữ nhật có:',
        options: [
          'Có cả trục đối xứng và tâm đối xứng',
          'Chỉ có trục đối xứng',
          'Chỉ có tâm đối xứng',
          'Không có đối xứng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình chữ nhật có 2 trục đối xứng và 1 tâm đối xứng.'
      },
      {
        id: 'q6-3-3',
        text: 'Tam giác cân có:',
        options: [
          '1 trục đối xứng và không có tâm đối xứng',
          '1 tâm đối xứng',
          '2 trục đối xứng',
          'Không có đối xứng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tam giác cân có 1 trục đối xứng nhưng không có tâm đối xứng.'
      },
      {
        id: 'q6-3-4',
        text: 'Hình bình hành có:',
        options: [
          'Chỉ có tâm đối xứng',
          'Chỉ có trục đối xứng',
          'Có cả trục và tâm đối xứng',
          'Không có đối xứng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành thường chỉ có tâm đối xứng.'
      },
      {
        id: 'q6-3-5',
        text: 'Hình thoi có:',
        options: [
          'Chỉ có trục đối xứng',
          'Chỉ có tâm đối xứng',
          'Có cả trục đối xứng và tâm đối xứng',
          'Không có đối xứng'
        ],
        correctAnswerIndex: 2,
        explanation: 'Hình thoi có 2 trục đối xứng và 1 tâm đối xứng.'
      },
      {
        id: 'q6-3-6',
        text: 'Hình tròn có:',
        options: [
          'Vô số trục đối xứng và 1 tâm đối xứng',
          '1 trục đối xứng',
          'Không có tâm đối xứng',
          '2 trục đối xứng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình tròn có vô số trục đối xứng và có tâm đối xứng là tâm hình tròn.'
      },
      {
        id: 'q6-3-7',
        text: 'Tam giác đều có:',
        options: [
          '3 trục đối xứng và không có tâm đối xứng',
          '1 trục đối xứng và 1 tâm đối xứng',
          'Không có trục đối xứng',
          'Chỉ có tâm đối xứng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tam giác đều có 3 trục đối xứng nhưng không có tâm đối xứng.'
      },
      {
        id: 'q6-3-8',
        text: 'Hình nào sau đây chỉ có tâm đối xứng mà không có trục đối xứng?',
        options: ['Hình bình hành', 'Hình vuông', 'Hình chữ nhật', 'Hình tròn'],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành thường chỉ có tâm đối xứng.'
      },
      {
        id: 'q6-3-9',
        text: 'Hình nào sau đây có trục đối xứng nhưng không có tâm đối xứng?',
        options: ['Tam giác cân', 'Hình chữ nhật', 'Hình bình hành', 'Hình tròn'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác cân có trục đối xứng nhưng không có tâm đối xứng.'
      },
      {
        id: 'q6-3-10',
        text: 'Hình nào sau đây có cả trục đối xứng và tâm đối xứng?',
        options: ['Hình vuông', 'Tam giác thường', 'Tam giác cân', 'Hình thang thường'],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông có cả trục đối xứng và tâm đối xứng.'
      }
    ]
  },
  {
    id: 'c6-t4',
    title: 'Đối xứng trong tự nhiên và nghệ thuật',
    description: 'Nhận biết tính đối xứng trong các vật thể, họa tiết và hình ảnh gần gũi trong thực tế.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q6-4-1',
        text: 'Hình ảnh con bướm thường gợi ra loại đối xứng nào?',
        options: ['Đối xứng trục', 'Đối xứng tâm', 'Không đối xứng', 'Đối xứng quay 90°'],
        correctAnswerIndex: 0,
        explanation: 'Con bướm thường có hai cánh đối xứng qua một trục.'
      },
      {
        id: 'q6-4-2',
        text: 'Bông hoa cúc nhìn từ trên xuống thường gợi ra:',
        options: ['Tính đối xứng', 'Không có đối xứng', 'Chỉ có cạnh', 'Chỉ có góc'],
        correctAnswerIndex: 0,
        explanation: 'Nhiều bông hoa có hình dạng đối xứng.'
      },
      {
        id: 'q6-4-3',
        text: 'Một hoa văn lặp lại đều quanh một điểm thường gợi ra:',
        options: ['Tâm đối xứng hoặc đối xứng quay', 'Không đối xứng', 'Chỉ là đoạn thẳng', 'Chỉ là phép cộng'],
        correctAnswerIndex: 0,
        explanation: 'Hoa văn quanh một điểm thường gợi ra tính đối xứng quanh tâm.'
      },
      {
        id: 'q6-4-4',
        text: 'Mặt người nhìn thẳng thường gần đúng có:',
        options: ['Trục đối xứng', 'Tâm đối xứng', 'Không đối xứng nào', 'Chỉ có góc vuông'],
        correctAnswerIndex: 0,
        explanation: 'Khuôn mặt người nhìn thẳng thường gần đúng đối xứng qua một trục dọc.'
      },
      {
        id: 'q6-4-5',
        text: 'Biển báo hình tròn thường có:',
        options: ['Tâm đối xứng', 'Không có đối xứng', 'Chỉ có một cạnh', 'Chỉ có một góc'],
        correctAnswerIndex: 0,
        explanation: 'Hình tròn có tâm đối xứng.'
      },
      {
        id: 'q6-4-6',
        text: 'Một cánh cửa hai bên giống nhau qua đường giữa thường thể hiện:',
        options: ['Đối xứng trục', 'Đối xứng tâm', 'Không đối xứng', 'Đối xứng qua góc'],
        correctAnswerIndex: 0,
        explanation: 'Hai bên giống nhau qua đường giữa là đối xứng trục.'
      },
      {
        id: 'q6-4-7',
        text: 'Một số họa tiết trang trí trên gạch lát nền thường có:',
        options: ['Tính đối xứng', 'Chỉ có phép cộng', 'Không có quy luật', 'Chỉ có số tự nhiên'],
        correctAnswerIndex: 0,
      },
      {
        id: 'q6-4-8',
        text: 'Ý nghĩa của tính đối xứng trong nghệ thuật là:',
        options: [
          'Tạo sự cân đối, hài hòa',
          'Làm hình bị méo',
          'Làm hình ngắn hơn',
          'Không có ý nghĩa'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tính đối xứng tạo cảm giác cân đối và đẹp mắt.'
      },
      {
        id: 'q6-4-9',
        text: 'Một chiếc lá nhìn gần đúng có thể có:',
        options: ['Trục đối xứng', 'Tâm đối xứng chắc chắn', 'Không thể có đối xứng', 'Chỉ có đường tròn'],
        correctAnswerIndex: 0,
        explanation: 'Nhiều chiếc lá có dạng gần đúng đối xứng qua gân chính.'
      },
      {
        id: 'q6-4-10',
        text: 'Việc nhận biết đối xứng trong tự nhiên giúp ta:',
        options: [
          'Quan sát và mô tả sự vật tốt hơn',
          'Chỉ để tính toán số học',
          'Không giúp ích gì',
          'Chỉ dùng trong môn Vật lí'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nhận biết đối xứng giúp ta quan sát và hiểu hình dạng sự vật tốt hơn.'
      }
    ]
  },
  {
    id: 'c6-t5',
    title: 'Ôn tập chương Tính đối xứng của hình phẳng',
    description: 'Củng cố kiến thức về trục đối xứng, tâm đối xứng và ứng dụng trong thực tiễn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q6-5-1',
        text: 'Hình vuông có bao nhiêu trục đối xứng?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 3,
        explanation: 'Hình vuông có 4 trục đối xứng.'
      },
      {
        id: 'q6-5-2',
        text: 'Hình chữ nhật có bao nhiêu trục đối xứng?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Hình chữ nhật có 2 trục đối xứng.'
      },
      {
        id: 'q6-5-3',
        text: 'Hình bình hành có:',
        options: ['1 tâm đối xứng', '2 tâm đối xứng', 'Không có tâm đối xứng', '4 tâm đối xứng'],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành có 1 tâm đối xứng.'
      },
      {
        id: 'q6-5-4',
        text: 'Tam giác cân có:',
        options: ['1 trục đối xứng', '2 trục đối xứng', '1 tâm đối xứng', 'Không có đối xứng'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác cân có 1 trục đối xứng.'
      },
      {
        id: 'q6-5-5',
        text: 'Hình tròn có:',
        options: ['1 trục đối xứng', '2 trục đối xứng', 'Vô số trục đối xứng', 'Không có trục đối xứng'],
        correctAnswerIndex: 2,
        explanation: 'Hình tròn có vô số trục đối xứng.'
      },
      {
        id: 'q6-5-6',
        text: 'Tâm đối xứng của hình chữ nhật là:',
        options: ['Giao điểm hai đường chéo', 'Một đỉnh', 'Trung điểm một cạnh', 'Không có'],
        correctAnswerIndex: 0,
        explanation: 'Giao điểm hai đường chéo là tâm đối xứng của hình chữ nhật.'
      },
      {
        id: 'q6-5-7',
        text: 'Hình nào sau đây chỉ có trục đối xứng mà không có tâm đối xứng?',
        options: ['Tam giác cân', 'Hình bình hành', 'Hình chữ nhật', 'Hình vuông'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác cân có trục đối xứng nhưng không có tâm đối xứng.'
      },
      {
        id: 'q6-5-8',
        text: 'Hình nào sau đây có cả trục đối xứng và tâm đối xứng?',
        options: ['Hình vuông', 'Tam giác thường', 'Hình thang thường', 'Tam giác cân'],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông có cả trục đối xứng và tâm đối xứng.'
      },
      {
        id: 'q6-5-9',
        text: 'Một ví dụ gần gũi về đối xứng trục là:',
        options: ['Con bướm', 'Viên sỏi bất kì', 'Một đám mây', 'Một nét vẽ ngẫu nhiên'],
        correctAnswerIndex: 0,
        explanation: 'Con bướm là ví dụ quen thuộc của đối xứng trục.'
      },
      {
        id: 'q6-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Nhận biết trục đối xứng, tâm đối xứng và tính đối xứng trong thực tế',
          'Cộng trừ số nguyên',
          'Phân số và số thập phân',
          'Tính xác suất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào tính đối xứng của hình phẳng trong toán học và thực tiễn.'
      }
    ]
  }
];

export const chapter6Topics: Topic[] = [
  ...chapter6CoreTopics,
  ...chapter6ExamTopics
];