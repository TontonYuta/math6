import { Topic } from '../../types';
import { chapter1ExamTopics } from './chapter1-exams';

export const chapter1CoreTopics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Tập hợp số tự nhiên',
    description: 'Nhận biết tập hợp số tự nhiên, cách viết, kí hiệu và thứ tự trong tập hợp số tự nhiên.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Tập hợp số tự nhiên được kí hiệu là:',
        options: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
        correctAnswerIndex: 0,
        explanation: 'Tập hợp số tự nhiên được kí hiệu là $\\mathbb{N}$.'
      },
      {
        id: 'q1-1-2',
        text: 'Số nào sau đây thuộc tập hợp số tự nhiên?',
        options: ['-3', '1,5', '0', '-1'],
        correctAnswerIndex: 2,
        explanation: 'Số 0 là một số tự nhiên.'
      },
      {
        id: 'q1-1-3',
        text: 'Trong các số sau, số nào không thuộc tập hợp số tự nhiên?',
        options: ['12', '0', '-5', '103'],
        correctAnswerIndex: 2,
        explanation: 'Số -5 là số nguyên âm nên không thuộc tập hợp số tự nhiên.'
      },
      {
        id: 'q1-1-4',
        text: 'Số tự nhiên nhỏ nhất là:',
        options: ['0', '1', '-1', 'Không có'],
        correctAnswerIndex: 0,
        explanation: 'Trong chương trình lớp 6, tập hợp số tự nhiên có chứa số 0 và 0 là số nhỏ nhất.'
      },
      {
        id: 'q1-1-5',
        text: 'Cho tập hợp $A=\\{1;3;5;7\\}$. Khẳng định nào đúng?',
        options: ['$3\\in A$', '$4\\in A$', '$7\\notin A$', '$1\\notin A$'],
        correctAnswerIndex: 0,
        explanation: 'Số 3 là phần tử của tập hợp $A$.'
      },
      {
        id: 'q1-1-6',
        text: 'Dãy số tự nhiên liên tiếp sau 8 là:',
        options: ['7', '9', '10', '11'],
        correctAnswerIndex: 1,
        explanation: 'Số tự nhiên liền sau 8 là 9.'
      },
      {
        id: 'q1-1-7',
        text: 'Dãy số tự nhiên liên tiếp trước 20 là:',
        options: ['18', '19', '21', '22'],
        correctAnswerIndex: 1,
        explanation: 'Số tự nhiên liền trước 20 là 19.'
      },
      {
        id: 'q1-1-8',
        text: 'Trong các cách viết sau, cách viết đúng là:',
        options: ['$5 \\subset \\mathbb{N}$', '$5 \\in \\mathbb{N}$', '$\\mathbb{N} \\in 5$', '$0 \\notin \\mathbb{N}$'],
        correctAnswerIndex: 1,
        explanation: 'Số 5 là một phần tử của tập hợp số tự nhiên nên viết $5 \\in \\mathbb{N}$.'
      },
      {
        id: 'q1-1-9',
        text: 'Sắp xếp các số 12, 3, 25, 9 theo thứ tự tăng dần:',
        options: ['3, 9, 12, 25', '25, 12, 9, 3', '3, 12, 9, 25', '9, 3, 12, 25'],
        correctAnswerIndex: 0,
        explanation: 'Thứ tự tăng dần là từ bé đến lớn: 3, 9, 12, 25.'
      },
      {
        id: 'q1-1-10',
        text: 'Số tự nhiên lớn nhất là:',
        options: ['999', '1000000', 'Không có', '0'],
        correctAnswerIndex: 2,
        explanation: 'Tập hợp số tự nhiên kéo dài không giới hạn nên không có số tự nhiên lớn nhất.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Các phép tính với số tự nhiên',
    description: 'Thực hiện phép cộng, trừ, nhân, chia và vận dụng thứ tự thực hiện phép tính.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Kết quả của phép tính $27+15$ là:',
        options: ['42', '32', '52', '41'],
        correctAnswerIndex: 0,
        explanation: '$27+15=42$.'
      },
      {
        id: 'q1-2-2',
        text: 'Kết quả của phép tính $56-19$ là:',
        options: ['47', '37', '27', '35'],
        correctAnswerIndex: 1,
        explanation: '$56-19=37$.'
      },
      {
        id: 'q1-2-3',
        text: 'Kết quả của phép tính $8\\times 7$ là:',
        options: ['54', '56', '48', '64'],
        correctAnswerIndex: 1,
        explanation: '$8\\times 7=56$.'
      },
      {
        id: 'q1-2-4',
        text: 'Kết quả của phép tính $81:9$ là:',
        options: ['8', '7', '9', '10'],
        correctAnswerIndex: 2,
        explanation: '$81:9=9$.'
      },
      {
        id: 'q1-2-5',
        text: 'Giá trị của biểu thức $12+3\\times 4$ là:',
        options: ['60', '24', '20', '18'],
        correctAnswerIndex: 1,
        explanation: 'Thực hiện phép nhân trước: $3\\times 4=12$, sau đó $12+12=24$.'
      },
      {
        id: 'q1-2-6',
        text: 'Giá trị của biểu thức $(12+3)\\times 4$ là:',
        options: ['48', '60', '36', '24'],
        correctAnswerIndex: 1,
        explanation: 'Trong ngoặc trước: $12+3=15$, rồi $15\\times 4=60$.'
      },
      {
        id: 'q1-2-7',
        text: 'Số dư trong phép chia $29:6$ là:',
        options: ['3', '4', '5', '2'],
        correctAnswerIndex: 2,
        explanation: '$29=6\\times 4+5$, nên số dư là 5.'
      },
      {
        id: 'q1-2-8',
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
        id: 'q1-2-9',
        text: 'Giá trị của biểu thức $50-18:3$ là:',
        options: ['44', '32', '16', '10'],
        correctAnswerIndex: 0,
        explanation: 'Thực hiện phép chia trước: $18:3=6$, rồi $50-6=44$.'
      },
      {
        id: 'q1-2-10',
        text: 'Tìm $x$ biết $x+25=63$.',
        options: ['38', '88', '48', '36'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $x=63-25=38$.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Lũy thừa với số mũ tự nhiên',
    description: 'Nhận biết lũy thừa, cơ số, số mũ và tính giá trị các lũy thừa đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Biểu thức $2^3$ có giá trị là:',
        options: ['5', '6', '8', '9'],
        correctAnswerIndex: 2,
        explanation: '$2^3=2\\times2\\times2=8$.'
      },
      {
        id: 'q1-3-2',
        text: 'Trong lũy thừa $5^2$, cơ số là:',
        options: ['2', '5', '10', '25'],
        correctAnswerIndex: 1,
        explanation: 'Trong $5^2$, cơ số là 5.'
      },
      {
        id: 'q1-3-3',
        text: 'Trong lũy thừa $5^2$, số mũ là:',
        options: ['2', '5', '10', '25'],
        correctAnswerIndex: 0,
        explanation: 'Trong $5^2$, số mũ là 2.'
      },
      {
        id: 'q1-3-4',
        text: 'Giá trị của $10^2$ là:',
        options: ['20', '100', '1000', '12'],
        correctAnswerIndex: 1,
        explanation: '$10^2=10\\times10=100$.'
      },
      {
        id: 'q1-3-5',
        text: 'Giá trị của $3^3$ là:',
        options: ['6', '9', '27', '12'],
        correctAnswerIndex: 2,
        explanation: '$3^3=3\\times3\\times3=27$.'
      },
      {
        id: 'q1-3-6',
        text: 'Cách viết dưới dạng lũy thừa của $4\\times4\\times4$ là:',
        options: ['$4^2$', '$4^3$', '$3^4$', '$12^4$'],
        correctAnswerIndex: 1,
        explanation: '$4\\times4\\times4=4^3$.'
      },
      {
        id: 'q1-3-7',
        text: 'Giá trị của biểu thức $2^2+3^2$ là:',
        options: ['13', '25', '10', '12'],
        correctAnswerIndex: 0,
        explanation: '$2^2=4$, $3^2=9$, nên tổng là 13.'
      },
      {
        id: 'q1-3-8',
        text: 'Giá trị của biểu thức $2\\times3^2$ là:',
        options: ['18', '12', '9', '6'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $3^2=9$, nên $2\\times9=18$.'
      },
      {
        id: 'q1-3-9',
        text: 'Kết quả của $1^5$ là:',
        options: ['1', '5', '0', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Mọi lũy thừa của 1 đều bằng 1.'
      },
      {
        id: 'q1-3-10',
        text: 'Số nào sau đây bằng $2^4$?',
        options: ['8', '12', '16', '14'],
        correctAnswerIndex: 2,
        explanation: '$2^4=2\\times2\\times2\\times2=16$.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Thứ tự thực hiện phép tính',
    description: 'Thực hiện đúng thứ tự phép tính có ngoặc, lũy thừa, nhân chia, cộng trừ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Trong một biểu thức không có dấu ngoặc, ta thực hiện:',
        options: [
          'Cộng, trừ trước rồi nhân, chia sau',
          'Nhân, chia trước rồi cộng, trừ sau',
          'Từ trái sang phải với mọi phép tính',
          'Lũy thừa sau cùng'
        ],
        correctAnswerIndex: 1,
        explanation: 'Không có ngoặc thì thực hiện lũy thừa trước, rồi nhân chia, cuối cùng cộng trừ.'
      },
      {
        id: 'q1-4-2',
        text: 'Giá trị của $18-6\\times2$ là:',
        options: ['24', '12', '6', '20'],
        correctAnswerIndex: 2,
        explanation: 'Thực hiện phép nhân trước: $6\\times2=12$, rồi $18-12=6$.'
      },
      {
        id: 'q1-4-3',
        text: 'Giá trị của $(18-6)\\times2$ là:',
        options: ['12', '24', '30', '6'],
        correctAnswerIndex: 1,
        explanation: 'Trong ngoặc trước: $18-6=12$, sau đó $12\\times2=24$.'
      },
      {
        id: 'q1-4-4',
        text: 'Giá trị của $2+3\\times4-5$ là:',
        options: ['9', '14', '15', '5'],
        correctAnswerIndex: 0,
        explanation: '$3\\times4=12$, nên $2+12-5=9$.'
      },
      {
        id: 'q1-4-5',
        text: 'Giá trị của $2^3+5$ là:',
        options: ['11', '13', '15', '9'],
        correctAnswerIndex: 1,
        explanation: '$2^3=8$, nên $8+5=13$.'
      },
      {
        id: 'q1-4-6',
        text: 'Giá trị của $20:(3+2)$ là:',
        options: ['4', '5', '10', '15'],
        correctAnswerIndex: 0,
        explanation: 'Trong ngoặc trước: $3+2=5$, rồi $20:5=4$.'
      },
      {
        id: 'q1-4-7',
        text: 'Giá trị của $36:6\\times2$ là:',
        options: ['3', '12', '1', '18'],
        correctAnswerIndex: 1,
        explanation: 'Chia và nhân cùng thứ tự ưu tiên nên tính từ trái sang phải: $36:6=6$, $6\\times2=12$.'
      },
      {
        id: 'q1-4-8',
        text: 'Giá trị của $5+(12-8)\\times3$ là:',
        options: ['17', '9', '12', '15'],
        correctAnswerIndex: 0,
        explanation: 'Trong ngoặc: $12-8=4$, rồi $4\\times3=12$, cuối cùng $5+12=17$.'
      },
      {
        id: 'q1-4-9',
        text: 'Giá trị của $24-[3\\times(5-1)]$ là:',
        options: ['9', '12', '15', '18'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $(5-1)=4$, rồi $3\\times4=12$, cuối cùng $24-12=12$.'
      },
      {
        id: 'q1-4-10',
        text: 'Khi thực hiện phép tính, bước nào sau đây đúng?',
        options: [
          'Tính trong ngoặc trước',
          'Cộng trước rồi nhân',
          'Chia trước ngoặc',
          'Cứ tính từ phải sang trái'
        ],
        correctAnswerIndex: 0,
        explanation: 'Trong biểu thức có ngoặc thì luôn ưu tiên tính trong ngoặc trước.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Ôn tập chương Số tự nhiên',
    description: 'Củng cố kiến thức về tập hợp số tự nhiên, phép tính, lũy thừa và thứ tự thực hiện phép tính.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Số nào sau đây là số tự nhiên?',
        options: ['-8', '0', '1,2', '-1'],
        correctAnswerIndex: 1,
        explanation: 'Số 0 thuộc tập hợp số tự nhiên.'
      },
      {
        id: 'q1-5-2',
        text: 'Kết quả của phép tính $45+17$ là:',
        options: ['62', '52', '72', '63'],
        correctAnswerIndex: 0,
        explanation: '$45+17=62$.'
      },
      {
        id: 'q1-5-3',
        text: 'Kết quả của phép tính $90-38$ là:',
        options: ['52', '58', '48', '62'],
        correctAnswerIndex: 0,
        explanation: '$90-38=52$.'
      },
      {
        id: 'q1-5-4',
        text: 'Giá trị của $4^2$ là:',
        options: ['8', '12', '16', '20'],
        correctAnswerIndex: 2,
        explanation: '$4^2=16$.'
      },
      {
        id: 'q1-5-5',
        text: 'Giá trị của biểu thức $6+2\\times5$ là:',
        options: ['40', '16', '20', '50'],
        correctAnswerIndex: 1,
        explanation: '$2\\times5=10$, nên $6+10=16$.'
      },
      {
        id: 'q1-5-6',
        text: 'Giá trị của biểu thức $(6+2)\\times5$ là:',
        options: ['40', '16', '35', '30'],
        correctAnswerIndex: 0,
        explanation: 'Trong ngoặc trước: $6+2=8$, rồi $8\\times5=40$.'
      },
      {
        id: 'q1-5-7',
        text: 'Số dư của phép chia $17:5$ là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: '$17=5\\times3+2$, nên số dư là 2.'
      },
      {
        id: 'q1-5-8',
        text: 'Tập hợp nào sau đây chỉ gồm các số tự nhiên?',
        options: ['$\\{0;1;2;3\\}$', '$\\{-1;0;1\\}$', '$\\{1;2;3,5\\}$', '$\\{-2;-1;0\\}$'],
        correctAnswerIndex: 0,
        explanation: 'Chỉ tập hợp $\\{0;1;2;3\\}$ gồm toàn số tự nhiên.'
      },
      {
        id: 'q1-5-9',
        text: 'Biểu thức nào sau đây có giá trị bằng 25?',
        options: ['$5^2$', '$2^5$', '$3^2$', '$4^2$'],
        correctAnswerIndex: 0,
        explanation: '$5^2=25$.'
      },
      {
        id: 'q1-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Số tự nhiên và các phép tính cơ bản',
          'Phân số và số thập phân',
          'Xác suất thực nghiệm',
          'Đường tròn và hình hộp chữ nhật'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào số tự nhiên, phép tính, lũy thừa và thứ tự thực hiện phép tính.'
      }
    ]
  }
];

export const chapter1Topics: Topic[] = [
  ...chapter1CoreTopics,
  ...chapter1ExamTopics
];