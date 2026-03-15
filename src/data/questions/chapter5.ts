import { Topic } from '../../types';
import { chapter5ExamTopics } from './chapter5-exams';

export const chapter5CoreTopics: Topic[] = [
  {
    id: 'c5-t1',
    title: 'Điểm, đoạn thẳng và các hình cơ bản',
    description: 'Nhận biết điểm, đoạn thẳng và một số hình phẳng quen thuộc trong thực tiễn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q5-1-1',
        text: 'Hình nào sau đây không phải là hình phẳng cơ bản đã học?',
        options: ['Hình tam giác', 'Hình vuông', 'Hình chữ nhật', 'Hình cầu'],
        correctAnswerIndex: 3,
        explanation: 'Hình cầu là hình không gian, không phải hình phẳng.'
      },
      {
        id: 'q5-1-2',
        text: 'Một đoạn thẳng được xác định bởi:',
        options: ['Một điểm', 'Hai điểm', 'Ba điểm', 'Bốn điểm'],
        correctAnswerIndex: 1,
        explanation: 'Đoạn thẳng được xác định bởi hai điểm đầu mút.'
      },
      {
        id: 'q5-1-3',
        text: 'Trong thực tế, mặt bảng học thường có dạng:',
        options: ['Hình tròn', 'Hình chữ nhật', 'Hình tam giác', 'Hình thoi'],
        correctAnswerIndex: 1,
        explanation: 'Mặt bảng học thường có dạng hình chữ nhật.'
      },
      {
        id: 'q5-1-4',
        text: 'Một biển báo giao thông cảnh báo thường có thể có dạng:',
        options: ['Hình tam giác', 'Hình cầu', 'Hình lập phương', 'Hình trụ'],
        correctAnswerIndex: 0,
        explanation: 'Nhiều biển báo cảnh báo có dạng tam giác.'
      },
      {
        id: 'q5-1-5',
        text: 'Hình có 4 cạnh bằng nhau và 4 góc vuông là:',
        options: ['Hình chữ nhật', 'Hình bình hành', 'Hình vuông', 'Hình thang'],
        correctAnswerIndex: 2,
        explanation: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.'
      },
      {
        id: 'q5-1-6',
        text: 'Hình có 3 cạnh là:',
        options: ['Hình vuông', 'Hình tam giác', 'Hình chữ nhật', 'Hình thoi'],
        correctAnswerIndex: 1,
        explanation: 'Hình tam giác là hình có 3 cạnh.'
      },
      {
        id: 'q5-1-7',
        text: 'Hai đầu của một đoạn thẳng được gọi là:',
        options: ['Hai cạnh', 'Hai góc', 'Hai đỉnh', 'Hai điểm mút'],
        correctAnswerIndex: 3,
        explanation: 'Đoạn thẳng có hai điểm mút.'
      },
      {
        id: 'q5-1-8',
        text: 'Hình nào sau đây có 4 góc vuông?',
        options: ['Hình chữ nhật', 'Hình thang', 'Hình tam giác', 'Hình bình hành bất kì'],
        correctAnswerIndex: 0,
        explanation: 'Hình chữ nhật có 4 góc vuông.'
      },
      {
        id: 'q5-1-9',
        text: 'Mặt đồng hồ treo tường thường có dạng gần đúng là:',
        options: ['Hình tròn', 'Hình tam giác', 'Hình thoi', 'Hình thang'],
        correctAnswerIndex: 0,
        explanation: 'Mặt đồng hồ thường có dạng hình tròn.'
      },
      {
        id: 'q5-1-10',
        text: 'Hình nào có các cạnh đối song song và bằng nhau?',
        options: ['Hình bình hành', 'Hình tam giác', 'Hình tròn', 'Hình thang cân'],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành có các cạnh đối song song và bằng nhau.'
      }
    ]
  },
  {
    id: 'c5-t2',
    title: 'Hình tam giác, hình vuông, hình chữ nhật',
    description: 'Nhận biết đặc điểm của tam giác, hình vuông và hình chữ nhật.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q5-2-1',
        text: 'Hình tam giác có bao nhiêu cạnh?',
        options: ['2', '3', '4', '5'],
        correctAnswerIndex: 1,
        explanation: 'Hình tam giác có 3 cạnh.'
      },
      {
        id: 'q5-2-2',
        text: 'Hình chữ nhật có bao nhiêu góc vuông?',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 3,
        explanation: 'Hình chữ nhật có 4 góc vuông.'
      },
      {
        id: 'q5-2-3',
        text: 'Hình vuông có bao nhiêu cạnh bằng nhau?',
        options: ['2', '3', '4', 'Không có cạnh nào'],
        correctAnswerIndex: 2,
        explanation: 'Hình vuông có 4 cạnh bằng nhau.'
      },
      {
        id: 'q5-2-4',
        text: 'Khẳng định nào đúng?',
        options: [
          'Mọi hình vuông đều là hình chữ nhật',
          'Mọi hình chữ nhật đều là hình vuông',
          'Mọi hình tam giác đều là hình vuông',
          'Mọi hình thang đều là hình chữ nhật'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông là trường hợp đặc biệt của hình chữ nhật.'
      },
      {
        id: 'q5-2-5',
        text: 'Khăn tay hình vuông có đặc điểm:',
        options: [
          '4 cạnh bằng nhau',
          'Chỉ có 2 cạnh bằng nhau',
          'Không có góc vuông',
          'Có 3 cạnh'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông có 4 cạnh bằng nhau.'
      },
      {
        id: 'q5-2-6',
        text: 'Cửa lớp học thường có dạng:',
        options: ['Hình tam giác', 'Hình chữ nhật', 'Hình tròn', 'Hình thoi'],
        correctAnswerIndex: 1,
        explanation: 'Cửa lớp học thường có dạng hình chữ nhật.'
      },
      {
        id: 'q5-2-7',
        text: 'Trong các hình sau, hình nào có 4 cạnh bằng nhau?',
        options: ['Hình chữ nhật', 'Hình vuông', 'Hình thang', 'Hình tam giác'],
        correctAnswerIndex: 1,
        explanation: 'Hình vuông có 4 cạnh bằng nhau.'
      },
      {
        id: 'q5-2-8',
        text: 'Trong các hình sau, hình nào chắc chắn có 4 góc vuông?',
        options: ['Hình chữ nhật', 'Hình bình hành', 'Hình thoi', 'Hình thang'],
        correctAnswerIndex: 0,
        explanation: 'Hình chữ nhật có 4 góc vuông.'
      },
      {
        id: 'q5-2-9',
        text: 'Tam giác là hình có:',
        options: ['3 cạnh và 3 đỉnh', '4 cạnh và 4 đỉnh', '4 góc vuông', '2 cạnh bằng nhau bắt buộc'],
        correctAnswerIndex: 0,
        explanation: 'Tam giác có 3 cạnh và 3 đỉnh.'
      },
      {
        id: 'q5-2-10',
        text: 'Một viên gạch lát nền hình vuông có cạnh 20 cm. Chu vi viên gạch là:',
        options: ['40 cm', '60 cm', '80 cm', '100 cm'],
        correctAnswerIndex: 2,
        explanation: 'Chu vi hình vuông bằng 4 lần cạnh: $4\\times20=80$ cm.'
      }
    ]
  },
  {
    id: 'c5-t3',
    title: 'Hình bình hành, hình thoi, hình thang',
    description: 'Nhận biết các đặc điểm cơ bản của hình bình hành, hình thoi và hình thang.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q5-3-1',
        text: 'Hình bình hành có đặc điểm nào sau đây?',
        options: [
          'Hai cặp cạnh đối song song',
          '4 góc vuông',
          '3 cạnh bằng nhau',
          'Chỉ có một cặp cạnh song song'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành có hai cặp cạnh đối song song.'
      },
      {
        id: 'q5-3-2',
        text: 'Hình thoi có đặc điểm nổi bật là:',
        options: [
          '4 cạnh bằng nhau',
          '4 góc vuông',
          'Chỉ có 2 cạnh bằng nhau',
          'Có 3 cạnh'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình thoi có 4 cạnh bằng nhau.'
      },
      {
        id: 'q5-3-3',
        text: 'Hình thang là hình có:',
        options: [
          'Một cặp cạnh đối song song',
          'Hai cặp cạnh đối song song',
          '4 cạnh bằng nhau',
          '4 góc vuông'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình thang có một cặp cạnh đối song song.'
      },
      {
        id: 'q5-3-4',
        text: 'Trong các hình sau, hình nào có 4 cạnh bằng nhau nhưng không nhất thiết có 4 góc vuông?',
        options: ['Hình chữ nhật', 'Hình thoi', 'Hình thang', 'Hình tam giác'],
        correctAnswerIndex: 1,
        explanation: 'Hình thoi có 4 cạnh bằng nhau, nhưng không nhất thiết có 4 góc vuông.'
      },
      {
        id: 'q5-3-5',
        text: 'Một hình bình hành có hai cạnh kề lần lượt là 6 cm và 4 cm. Chu vi hình đó là:',
        options: ['10 cm', '20 cm', '24 cm', '12 cm'],
        correctAnswerIndex: 1,
        explanation: 'Chu vi hình bình hành là $2\\times(6+4)=20$ cm.'
      },
      {
        id: 'q5-3-6',
        text: 'Khẳng định nào đúng?',
        options: [
          'Mọi hình vuông đều là hình thoi',
          'Mọi hình thang đều là hình bình hành',
          'Mọi hình thoi đều là hình chữ nhật',
          'Mọi hình tam giác đều là hình thang'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông có 4 cạnh bằng nhau nên cũng là hình thoi.'
      },
      {
        id: 'q5-3-7',
        text: 'Trong hình thang, hai cạnh song song gọi là:',
        options: ['Hai cạnh bên', 'Hai đường chéo', 'Hai đáy', 'Hai góc'],
        correctAnswerIndex: 2,
        explanation: 'Trong hình thang, hai cạnh song song được gọi là hai đáy.'
      },
      {
        id: 'q5-3-8',
        text: 'Một tấm biển trang trí có dạng hình thoi cạnh 7 cm. Chu vi của tấm biển là:',
        options: ['14 cm', '21 cm', '28 cm', '35 cm'],
        correctAnswerIndex: 2,
        explanation: 'Chu vi hình thoi bằng $4\\times7=28$ cm.'
      },
      {
        id: 'q5-3-9',
        text: 'Hình nào sau đây chắc chắn là hình bình hành?',
        options: ['Hình chữ nhật', 'Hình thang', 'Tam giác đều', 'Hình tròn'],
        correctAnswerIndex: 0,
        explanation: 'Hình chữ nhật là một trường hợp đặc biệt của hình bình hành.'
      },
      {
        id: 'q5-3-10',
        text: 'Hình có đúng một cặp cạnh đối song song là:',
        options: ['Hình bình hành', 'Hình thoi', 'Hình thang', 'Hình vuông'],
        correctAnswerIndex: 2,
        explanation: 'Hình thang có đúng một cặp cạnh đối song song.'
      }
    ]
  },
  {
    id: 'c5-t4',
    title: 'Chu vi và diện tích một số hình phẳng',
    description: 'Tính chu vi, diện tích của hình vuông, hình chữ nhật và vận dụng vào thực tiễn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q5-4-1',
        text: 'Chu vi hình vuông cạnh 5 cm là:',
        options: ['10 cm', '20 cm', '25 cm', '15 cm'],
        correctAnswerIndex: 1,
        explanation: 'Chu vi hình vuông bằng 4 lần cạnh: $4\\times5=20$ cm.'
      },
      {
        id: 'q5-4-2',
        text: 'Diện tích hình vuông cạnh 6 cm là:',
        options: ['12 cm²', '24 cm²', '36 cm²', '18 cm²'],
        correctAnswerIndex: 2,
        explanation: 'Diện tích hình vuông bằng cạnh nhân cạnh: $6\\times6=36$ cm².'
      },
      {
        id: 'q5-4-3',
        text: 'Chu vi hình chữ nhật có chiều dài 8 cm, chiều rộng 3 cm là:',
        options: ['11 cm', '22 cm', '24 cm', '16 cm'],
        correctAnswerIndex: 1,
        explanation: 'Chu vi hình chữ nhật là $2\\times(8+3)=22$ cm.'
      },
      {
        id: 'q5-4-4',
        text: 'Diện tích hình chữ nhật có chiều dài 7 cm, chiều rộng 4 cm là:',
        options: ['11 cm²', '28 cm²', '22 cm²', '14 cm²'],
        correctAnswerIndex: 1,
        explanation: 'Diện tích hình chữ nhật là $7\\times4=28$ cm².'
      },
      {
        id: 'q5-4-5',
        text: 'Một sân hình vuông có cạnh 9 m. Chu vi của sân là:',
        options: ['18 m', '27 m', '36 m', '81 m'],
        correctAnswerIndex: 2,
        explanation: 'Chu vi hình vuông là $4\\times9=36$ m.'
      },
      {
        id: 'q5-4-6',
        text: 'Một tấm bìa hình chữ nhật dài 10 cm, rộng 5 cm. Diện tích tấm bìa là:',
        options: ['15 cm²', '50 cm²', '30 cm²', '25 cm²'],
        correctAnswerIndex: 1,
        explanation: 'Diện tích hình chữ nhật là $10\\times5=50$ cm².'
      },
      {
        id: 'q5-4-7',
        text: 'Công thức tính chu vi hình chữ nhật là:',
        options: [
          '$C=d\\times r$',
          '$C=2\\times(d+r)$',
          '$C=4\\times d$',
          '$C=d+r$'
        ],
        correctAnswerIndex: 1,
        explanation: 'Chu vi hình chữ nhật bằng hai lần tổng chiều dài và chiều rộng.'
      },
      {
        id: 'q5-4-8',
        text: 'Công thức tính diện tích hình vuông là:',
        options: ['$S=a\\times a$', '$S=4\\times a$', '$S=2\\times a$', '$S=a+a$'],
        correctAnswerIndex: 0,
        explanation: 'Diện tích hình vuông bằng cạnh nhân cạnh.'
      },
      {
        id: 'q5-4-9',
        text: 'Một ô gạch hình vuông cạnh 4 cm có diện tích là:',
        options: ['8 cm²', '12 cm²', '16 cm²', '20 cm²'],
        correctAnswerIndex: 2,
        explanation: 'Diện tích là $4\\times4=16$ cm².'
      },
      {
        id: 'q5-4-10',
        text: 'Một khung ảnh hình chữ nhật dài 12 cm, rộng 8 cm. Chu vi khung ảnh là:',
        options: ['20 cm', '40 cm', '96 cm', '48 cm'],
        correctAnswerIndex: 1,
        explanation: 'Chu vi là $2\\times(12+8)=40$ cm.'
      }
    ]
  },
  {
    id: 'c5-t5',
    title: 'Ôn tập chương Các hình phẳng trong thực tiễn',
    description: 'Củng cố nhận biết các hình phẳng và vận dụng tính chu vi, diện tích trong thực tế.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q5-5-1',
        text: 'Hình có 4 cạnh bằng nhau và 4 góc vuông là:',
        options: ['Hình vuông', 'Hình chữ nhật', 'Hình thoi', 'Hình thang'],
        correctAnswerIndex: 0,
        explanation: 'Hình vuông có 4 cạnh bằng nhau và 4 góc vuông.'
      },
      {
        id: 'q5-5-2',
        text: 'Hình có 3 cạnh là:',
        options: ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình chữ nhật'],
        correctAnswerIndex: 2,
        explanation: 'Hình tam giác có 3 cạnh.'
      },
      {
        id: 'q5-5-3',
        text: 'Chu vi hình vuông cạnh 7 cm là:',
        options: ['14 cm', '21 cm', '28 cm', '49 cm'],
        correctAnswerIndex: 2,
        explanation: 'Chu vi bằng $4\\times7=28$ cm.'
      },
      {
        id: 'q5-5-4',
        text: 'Diện tích hình vuông cạnh 5 cm là:',
        options: ['10 cm²', '15 cm²', '20 cm²', '25 cm²'],
        correctAnswerIndex: 3,
        explanation: 'Diện tích bằng $5\\times5=25$ cm².'
      },
      {
        id: 'q5-5-5',
        text: 'Chu vi hình chữ nhật dài 9 cm, rộng 4 cm là:',
        options: ['13 cm', '26 cm', '36 cm', '18 cm'],
        correctAnswerIndex: 1,
        explanation: 'Chu vi bằng $2\\times(9+4)=26$ cm.'
      },
      {
        id: 'q5-5-6',
        text: 'Diện tích hình chữ nhật dài 9 cm, rộng 4 cm là:',
        options: ['13 cm²', '26 cm²', '36 cm²', '45 cm²'],
        correctAnswerIndex: 2,
        explanation: 'Diện tích bằng $9\\times4=36$ cm².'
      },
      {
        id: 'q5-5-7',
        text: 'Hình nào có một cặp cạnh đối song song?',
        options: ['Hình vuông', 'Hình bình hành', 'Hình thang', 'Hình chữ nhật'],
        correctAnswerIndex: 2,
        explanation: 'Hình thang có một cặp cạnh đối song song.'
      },
      {
        id: 'q5-5-8',
        text: 'Hình nào có hai cặp cạnh đối song song?',
        options: ['Hình bình hành', 'Hình tam giác', 'Hình tròn', 'Hình thang'],
        correctAnswerIndex: 0,
        explanation: 'Hình bình hành có hai cặp cạnh đối song song.'
      },
      {
        id: 'q5-5-9',
        text: 'Một hình thoi có cạnh 6 cm thì chu vi là:',
        options: ['12 cm', '18 cm', '24 cm', '36 cm'],
        correctAnswerIndex: 2,
        explanation: 'Chu vi hình thoi bằng $4\\times6=24$ cm.'
      },
      {
        id: 'q5-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Nhận biết các hình phẳng và tính chu vi, diện tích đơn giản',
          'Phép cộng số nguyên',
          'Phân số và số thập phân',
          'Xác suất thực nghiệm'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào các hình phẳng trong thực tiễn và các tính toán cơ bản liên quan.'
      }
    ]
  }
];

export const chapter5Topics: Topic[] = [
  ...chapter5CoreTopics,
  ...chapter5ExamTopics
];