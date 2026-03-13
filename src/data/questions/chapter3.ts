import { Topic } from '../../types';

export const chapter3Topics: Topic[] = [
  {
    id: 'c3-t1',
    title: 'Số thập phân và các phép tính',
    description: 'Cách chuyển đổi giữa phân số và số thập phân.',
    questions: [
      {
        id: 'q3-1-1',
        text: 'Phân số thập phân $\\frac{15}{100}$ được viết dưới dạng số thập phân là:',
        options: ['$1.5$', '$0.15$', '$0.015$', '$15.0$'],
        correctAnswerIndex: 1,
        explanation: '$\\frac{15}{100} = 0.15$'
      },
      {
        id: 'q3-1-2',
        text: 'Kết quả của phép tính $2.5 + 3.75$ là:',
        options: ['$5.25$', '$6.25$', '$6.00$', '$5.75$'],
        correctAnswerIndex: 1,
        explanation: '$2.50 + 3.75 = 6.25$'
      },
      {
        id: 'q3-1-3',
        text: 'Số thập phân $0.04$ được viết dưới dạng phân số tối giản là:',
        options: ['$\\frac{4}{100}$', '$\\frac{1}{25}$', '$\\frac{2}{50}$', '$\\frac{1}{20}$'],
        correctAnswerIndex: 1,
        explanation: '$0.04 = \\frac{4}{100}$. Rút gọn cho $4$ ta được $\\frac{1}{25}$.'
      }
    ]
  },
  {
    id: 'c3-t2',
    title: 'Làm tròn số và Ước lượng',
    description: 'Kỹ năng tính toán nhanh trong đời sống.',
    questions: [
      {
        id: 'q3-2-1',
        text: 'Làm tròn số $12.345$ đến chữ số thập phân thứ hai là:',
        options: ['$12.34$', '$12.35$', '$12.30$', '$12.40$'],
        correctAnswerIndex: 1,
        explanation: 'Chữ số thập phân thứ ba là $5$ nên ta cộng $1$ vào chữ số hàng phần trăm: $12.35$.'
      },
      {
        id: 'q3-2-2',
        text: 'Làm tròn số 9876 đến hàng trăm là:',
        options: ['9800', '9900', '9870', '10000'],
        correctAnswerIndex: 1,
        explanation: 'Chữ số hàng chục là 7 > 5 nên ta cộng 1 vào chữ số hàng trăm: 9900.'
      }
    ]
  },
  {
    id: 'c3-t3',
    title: 'Tỉ số và Tỉ số phần trăm',
    description: 'Nền tảng cho các bài toán kinh tế, lãi suất.',
    questions: [
      {
        id: 'q3-3-1',
        text: 'Tỉ số phần trăm của $3$ và $4$ là:',
        options: ['$34\\%$', '$43\\%$', '$75\\%$', '$25\\%$'],
        correctAnswerIndex: 2,
        explanation: 'Tỉ số phần trăm = $\\frac{3}{4} \\times 100\\% = 75\\%$.'
      },
      {
        id: 'q3-3-2',
        text: 'Viết tỉ số phần trăm $20\\%$ dưới dạng phân số tối giản:',
        options: ['$\\frac{2}{10}$', '$\\frac{1}{5}$', '$\\frac{20}{100}$', '$\\frac{1}{4}$'],
        correctAnswerIndex: 1,
        explanation: '$20\\% = \\frac{20}{100} = \\frac{1}{5}$.'
      },
      {
        id: 'q3-3-3',
        text: 'Tỉ số của hai số $a = 1.5$ và $b = 3$ là:',
        options: ['$\\frac{1}{2}$', '$\\frac{2}{1}$', '$\\frac{1.5}{3}$', '$\\frac{1}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Tỉ số $\\frac{a}{b} = \\frac{1.5}{3} = \\frac{15}{30} = \\frac{1}{2}$.'
      }
    ]
  }
];
