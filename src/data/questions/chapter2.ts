import { Topic } from '../../types';
import { chapter2ExamTopics } from './chapter2-exams';

export const chapter2CoreTopics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Tập hợp các số nguyên',
    description: 'Nhận biết số nguyên dương, số nguyên âm, số 0 và biểu diễn trên trục số.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Tập hợp số nguyên được kí hiệu là:',
        options: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R}$'],
        correctAnswerIndex: 1,
        explanation: 'Tập hợp số nguyên được kí hiệu là $\\mathbb{Z}$.'
      },
      {
        id: 'q2-1-2',
        text: 'Số nào sau đây là số nguyên âm?',
        options: ['0', '5', '-3', '8'],
        correctAnswerIndex: 2,
        explanation: 'Số -3 là số nguyên âm.'
      },
      {
        id: 'q2-1-3',
        text: 'Số nào sau đây không phải là số nguyên?',
        options: ['-5', '0', '7', '1,5'],
        correctAnswerIndex: 3,
        explanation: 'Số 1,5 không phải là số nguyên.'
      },
      {
        id: 'q2-1-4',
        text: 'Trong các số sau, số nào lớn hơn 0?',
        options: ['-7', '-1', '0', '4'],
        correctAnswerIndex: 3,
        explanation: 'Số 4 là số nguyên dương nên lớn hơn 0.'
      },
      {
        id: 'q2-1-5',
        text: 'Trên trục số, điểm biểu diễn số -2 nằm:',
        options: ['Bên phải số 0', 'Trùng với số 0', 'Bên trái số 0', 'Không xác định'],
        correctAnswerIndex: 2,
        explanation: 'Các số âm nằm bên trái số 0 trên trục số.'
      },
      {
        id: 'q2-1-6',
        text: 'Số đối của 6 là:',
        options: ['-6', '6', '0', '1/6'],
        correctAnswerIndex: 0,
        explanation: 'Số đối của 6 là -6.'
      },
      {
        id: 'q2-1-7',
        text: 'Số đối của -9 là:',
        options: ['9', '-9', '0', '1'],
        correctAnswerIndex: 0,
        explanation: 'Số đối của -9 là 9.'
      },
      {
        id: 'q2-1-8',
        text: 'Giá trị tuyệt đối của -8 là:',
        options: ['-8', '8', '0', '16'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị tuyệt đối của -8 là 8.'
      },
      {
        id: 'q2-1-9',
        text: 'Giá trị tuyệt đối của 0 là:',
        options: ['0', '1', '-1', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Giá trị tuyệt đối của 0 bằng 0.'
      },
      {
        id: 'q2-1-10',
        text: 'Sắp xếp đúng theo thứ tự tăng dần:',
        options: ['-5, -2, 0, 3', '3, 0, -2, -5', '-2, -5, 0, 3', '0, -5, -2, 3'],
        correctAnswerIndex: 0,
        explanation: 'Theo thứ tự tăng dần: -5 < -2 < 0 < 3.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'So sánh các số nguyên',
    description: 'So sánh số nguyên trên trục số và vận dụng dấu lớn hơn, nhỏ hơn.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Trong hai số -3 và 2, số lớn hơn là:',
        options: ['-3', '2', 'Hai số bằng nhau', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Số 2 nằm bên phải số -3 trên trục số nên lớn hơn.'
      },
      {
        id: 'q2-2-2',
        text: 'Khẳng định nào đúng?',
        options: ['-7 > -5', '-7 < -5', '-7 = -5', '-7 > 5'],
        correctAnswerIndex: 1,
        explanation: 'Trong các số âm, số nào có giá trị tuyệt đối lớn hơn thì bé hơn.'
      },
      {
        id: 'q2-2-3',
        text: 'Số nào nhỏ nhất trong các số: 0, -4, 3, -2?',
        options: ['0', '-4', '3', '-2'],
        correctAnswerIndex: 1,
        explanation: 'Số -4 là số nhỏ nhất.'
      },
      {
        id: 'q2-2-4',
        text: 'Số nào lớn nhất trong các số: -1, -8, 0, -3?',
        options: ['-1', '-8', '0', '-3'],
        correctAnswerIndex: 2,
        explanation: 'Số 0 lớn hơn mọi số âm.'
      },
      {
        id: 'q2-2-5',
        text: 'Điền dấu thích hợp: $-6 \\; ... \\; -9$',
        options: ['>', '<', '=', '≤'],
        correctAnswerIndex: 0,
        explanation: 'Vì -6 nằm bên phải -9 trên trục số nên -6 > -9.'
      },
      {
        id: 'q2-2-6',
        text: 'Điền dấu thích hợp: $-2 \\; ... \\; 0$',
        options: ['>', '<', '=', '≥'],
        correctAnswerIndex: 1,
        explanation: 'Mọi số âm đều nhỏ hơn 0.'
      },
      {
        id: 'q2-2-7',
        text: 'Điền dấu thích hợp: $5 \\; ... \\; -1$',
        options: ['>', '<', '=', '≤'],
        correctAnswerIndex: 0,
        explanation: 'Mọi số dương đều lớn hơn số âm.'
      },
      {
        id: 'q2-2-8',
        text: 'Trong hai số âm, số nào lớn hơn?',
        options: [
          'Số có giá trị tuyệt đối lớn hơn',
          'Số có giá trị tuyệt đối nhỏ hơn',
          'Luôn là số đứng bên trái',
          'Không có quy tắc'
        ],
        correctAnswerIndex: 1,
        explanation: 'Trong hai số âm, số có giá trị tuyệt đối nhỏ hơn thì lớn hơn.'
      },
      {
        id: 'q2-2-9',
        text: 'Khẳng định nào sau đây đúng?',
        options: ['-10 > -2', '-10 < -2', '-10 = -2', '-2 < -10'],
        correctAnswerIndex: 1,
        explanation: '-10 nằm bên trái -2 trên trục số nên -10 < -2.'
      },
      {
        id: 'q2-2-10',
        text: 'Sắp xếp các số -1, 4, -7, 0 theo thứ tự giảm dần:',
        options: ['4, 0, -1, -7', '-7, -1, 0, 4', '0, 4, -1, -7', '4, -1, -7, 0'],
        correctAnswerIndex: 0,
        explanation: 'Thứ tự giảm dần là từ lớn đến bé: 4, 0, -1, -7.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Phép cộng và phép trừ số nguyên',
    description: 'Thực hiện phép cộng, trừ số nguyên và vận dụng trong các tình huống thực tế.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Kết quả của phép tính $(-3)+(-5)$ là:',
        options: ['8', '-8', '2', '-2'],
        correctAnswerIndex: 1,
        explanation: 'Tổng của hai số âm là một số âm có giá trị tuyệt đối bằng tổng các giá trị tuyệt đối.'
      },
      {
        id: 'q2-3-2',
        text: 'Kết quả của phép tính $7+(-4)$ là:',
        options: ['11', '-11', '3', '-3'],
        correctAnswerIndex: 2,
        explanation: '$7+(-4)=7-4=3$.'
      },
      {
        id: 'q2-3-3',
        text: 'Kết quả của phép tính $(-6)+9$ là:',
        options: ['15', '3', '-3', '-15'],
        correctAnswerIndex: 1,
        explanation: '$(-6)+9=9-6=3$.'
      },
      {
        id: 'q2-3-4',
        text: 'Kết quả của phép tính $(-8)-(-2)$ là:',
        options: ['-10', '-6', '6', '10'],
        correctAnswerIndex: 1,
        explanation: '$(-8)-(-2)=(-8)+2=-6$.'
      },
      {
        id: 'q2-3-5',
        text: 'Kết quả của phép tính $5-9$ là:',
        options: ['4', '-4', '14', '-14'],
        correctAnswerIndex: 1,
        explanation: '$5-9=5+(-9)=-4$.'
      },
      {
        id: 'q2-3-6',
        text: 'Kết quả của phép tính $(-7)-3$ là:',
        options: ['-10', '10', '-4', '4'],
        correctAnswerIndex: 0,
        explanation: '$(-7)-3=(-7)+(-3)=-10$.'
      },
      {
        id: 'q2-3-7',
        text: 'Tính $12+(-12)$',
        options: ['24', '0', '12', '-24'],
        correctAnswerIndex: 1,
        explanation: 'Một số cộng với số đối của nó bằng 0.'
      },
      {
        id: 'q2-3-8',
        text: 'Tính $(-15)+7$',
        options: ['8', '-8', '22', '-22'],
        correctAnswerIndex: 1,
        explanation: '$(-15)+7=-(15-7)=-8$.'
      },
      {
        id: 'q2-3-9',
        text: 'Kết quả của phép tính $3-[5+(-2)]$ là:',
        options: ['0', '-6', '-2', '4'],
        correctAnswerIndex: 0,
        explanation: 'Trong ngoặc: $5+(-2)=3$, nên $3-3=0$.'
      },
      {
        id: 'q2-3-10',
        text: 'Nhiệt độ buổi sáng là $-2^\\circ C$, buổi trưa tăng thêm $5^\\circ C$. Nhiệt độ buổi trưa là:',
        options: ['$3^\\circ C$', '$-3^\\circ C$', '$7^\\circ C$', '$-7^\\circ C$'],
        correctAnswerIndex: 0,
        explanation: '$-2+5=3$, nên nhiệt độ buổi trưa là $3^\\circ C$.'
      }
    ]
  },
  {
    id: 'c2-t4',
    title: 'Phép nhân và phép chia số nguyên',
    description: 'Thực hiện phép nhân, chia số nguyên và vận dụng quy tắc dấu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q2-4-1',
        text: 'Kết quả của phép tính $(-3)\\times4$ là:',
        options: ['12', '-12', '7', '-7'],
        correctAnswerIndex: 1,
        explanation: 'Âm nhân dương bằng âm.'
      },
      {
        id: 'q2-4-2',
        text: 'Kết quả của phép tính $(-5)\\times(-2)$ là:',
        options: ['-10', '10', '7', '-7'],
        correctAnswerIndex: 1,
        explanation: 'Âm nhân âm bằng dương.'
      },
      {
        id: 'q2-4-3',
        text: 'Kết quả của phép tính $6\\times(-3)$ là:',
        options: ['18', '-18', '9', '-9'],
        correctAnswerIndex: 1,
        explanation: 'Dương nhân âm bằng âm.'
      },
      {
        id: 'q2-4-4',
        text: 'Kết quả của phép tính $(-24):6$ là:',
        options: ['4', '-4', '6', '-6'],
        correctAnswerIndex: 1,
        explanation: 'Âm chia dương bằng âm.'
      },
      {
        id: 'q2-4-5',
        text: 'Kết quả của phép tính $(-24):(-6)$ là:',
        options: ['4', '-4', '6', '-6'],
        correctAnswerIndex: 0,
        explanation: 'Âm chia âm bằng dương.'
      },
      {
        id: 'q2-4-6',
        text: 'Kết quả của phép tính $0\\times(-15)$ là:',
        options: ['0', '-15', '15', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Số 0 nhân với bất kì số nào cũng bằng 0.'
      },
      {
        id: 'q2-4-7',
        text: 'Kết quả của phép tính $(-2)\\times3\\times(-4)$ là:',
        options: ['24', '-24', '12', '-12'],
        correctAnswerIndex: 0,
        explanation: '$(-2)\\times3=-6$, rồi $-6\\times(-4)=24$.'
      },
      {
        id: 'q2-4-8',
        text: 'Dấu của tích $(-a)\\times(-b)$ với $a,b>0$ là:',
        options: ['Dương', 'Âm', 'Bằng 0', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Âm nhân âm bằng dương.'
      },
      {
        id: 'q2-4-9',
        text: 'Kết quả của phép tính $18:(-3)$ là:',
        options: ['6', '-6', '9', '-9'],
        correctAnswerIndex: 1,
        explanation: 'Dương chia âm bằng âm.'
      },
      {
        id: 'q2-4-10',
        text: 'Một tàu ngầm đang ở độ sâu 20 m dưới mực nước biển, rồi lặn thêm 5 m nữa. Độ sâu mới được biểu diễn bởi số:',
        options: ['-15', '-25', '25', '15'],
        correctAnswerIndex: 1,
        explanation: 'Ban đầu là -20, lặn thêm 5 m tức là cộng -5, được -25.'
      }
    ]
  },
  {
    id: 'c2-t5',
    title: 'Ôn tập chương Số nguyên',
    description: 'Củng cố kiến thức về số nguyên, so sánh số nguyên và các phép tính với số nguyên.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nZtFlrwCbs4&t=2504s',
    questions: [
      {
        id: 'q2-5-1',
        text: 'Số nào sau đây là số nguyên?',
        options: ['-4', '2,5', '1/2', '3,7'],
        correctAnswerIndex: 0,
        explanation: 'Số -4 là số nguyên.'
      },
      {
        id: 'q2-5-2',
        text: 'Số đối của -11 là:',
        options: ['11', '-11', '0', '1'],
        correctAnswerIndex: 0,
        explanation: 'Số đối của -11 là 11.'
      },
      {
        id: 'q2-5-3',
        text: 'Giá trị tuyệt đối của -13 là:',
        options: ['-13', '13', '0', '26'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị tuyệt đối của -13 là 13.'
      },
      {
        id: 'q2-5-4',
        text: 'Trong hai số -9 và -4, số lớn hơn là:',
        options: ['-9', '-4', 'Hai số bằng nhau', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Trong hai số âm, số có giá trị tuyệt đối nhỏ hơn thì lớn hơn.'
      },
      {
        id: 'q2-5-5',
        text: 'Tính $(-7)+12$',
        options: ['5', '-5', '19', '-19'],
        correctAnswerIndex: 0,
        explanation: '$(-7)+12=12-7=5$.'
      },
      {
        id: 'q2-5-6',
        text: 'Tính $(-8)-(-3)$',
        options: ['-11', '-5', '5', '11'],
        correctAnswerIndex: 1,
        explanation: '$(-8)-(-3)=(-8)+3=-5$.'
      },
      {
        id: 'q2-5-7',
        text: 'Tính $(-4)\\times(-6)$',
        options: ['-24', '24', '10', '-10'],
        correctAnswerIndex: 1,
        explanation: 'Âm nhân âm bằng dương, nên kết quả là 24.'
      },
      {
        id: 'q2-5-8',
        text: 'Tính $21:(-7)$',
        options: ['3', '-3', '14', '-14'],
        correctAnswerIndex: 1,
        explanation: 'Dương chia âm bằng âm, nên kết quả là -3.'
      },
      {
        id: 'q2-5-9',
        text: 'Tính $(-2)\\times5+6$',
        options: ['-4', '4', '-16', '16'],
        correctAnswerIndex: 0,
        explanation: '$(-2)\\times5=-10$, rồi $-10+6=-4$.'
      },
      {
        id: 'q2-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Số nguyên và các phép tính với số nguyên',
          'Phân số và số thập phân',
          'Biểu đồ và xác suất',
          'Chu vi và diện tích'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào tập hợp số nguyên, so sánh và các phép tính với số nguyên.'
      }
    ]
  }
];

export const chapter2Topics: Topic[] = [
  ...chapter2CoreTopics,
  ...chapter2ExamTopics
];