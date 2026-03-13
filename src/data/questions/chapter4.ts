import { Topic } from '../../types';

export const chapter4Topics: Topic[] = [
  {
    id: 'c4-t1',
    title: 'Hai bài toán cơ bản về phân số',
    description: 'Tìm giá trị phân số của một số cho trước và ngược lại.',
    questions: [
      {
        id: 'q4-1-1',
        text: 'Tìm 3/4 của 20:',
        options: ['10', '15', '25', '30'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị phân số của một số = Số đó * Phân số = 20 * (3/4) = 15.'
      },
      {
        id: 'q4-1-2',
        text: 'Tìm một số biết 2/5 của nó bằng 10:',
        options: ['4', '20', '25', '50'],
        correctAnswerIndex: 2,
        explanation: 'Số cần tìm = Giá trị / Phân số = 10 : (2/5) = 10 * (5/2) = 25.'
      },
      {
        id: 'q4-1-3',
        text: 'Lớp 6A có 40 học sinh, trong đó 1/4 là học sinh giỏi. Số học sinh giỏi là:',
        options: ['10', '20', '30', '40'],
        correctAnswerIndex: 0,
        explanation: 'Số học sinh giỏi = 40 * (1/4) = 10.'
      }
    ]
  },
  {
    id: 'c4-t2',
    title: 'Các bài toán về Tỉ số phần trăm',
    description: 'Tìm phần trăm của một số, tìm một số khi biết giá trị phần trăm.',
    questions: [
      {
        id: 'q4-2-1',
        text: 'Tìm 20% của 50:',
        options: ['5', '10', '15', '20'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị phần trăm = Số đó * Phần trăm = 50 * 20% = 50 * (20/100) = 10.'
      },
      {
        id: 'q4-2-2',
        text: 'Tìm một số biết 15% của nó bằng 30:',
        options: ['150', '200', '300', '450'],
        correctAnswerIndex: 1,
        explanation: 'Số cần tìm = Giá trị / Phần trăm = 30 : 15% = 30 : (15/100) = 30 * (100/15) = 200.'
      },
      {
        id: 'q4-2-3',
        text: 'Một chiếc áo giảm giá 10% còn 90.000 đồng. Giá gốc của chiếc áo là:',
        options: ['81.000', '99.000', '100.000', '110.000'],
        correctAnswerIndex: 2,
        explanation: 'Giá sau khi giảm bằng 90% giá gốc. Giá gốc = 90.000 : 90% = 100.000 đồng.'
      }
    ]
  },
  {
    id: 'c4-t3',
    title: 'Toán chuyển động cơ bản',
    description: 'Mối liên hệ giữa Quãng đường (s), Vận tốc (v), Thời gian (t).',
    questions: [
      {
        id: 'q4-3-1',
        text: 'Công thức tính quãng đường s khi biết vận tốc v và thời gian t là:',
        options: ['s = v / t', 's = t / v', 's = v * t', 's = v + t'],
        correctAnswerIndex: 2,
        explanation: 'Quãng đường bằng vận tốc nhân với thời gian.'
      },
      {
        id: 'q4-3-2',
        text: 'Một ô tô đi với vận tốc 50 km/h trong 2.5 giờ. Quãng đường ô tô đi được là:',
        options: ['100 km', '125 km', '150 km', '20 km'],
        correctAnswerIndex: 1,
        explanation: 's = v * t = 50 * 2.5 = 125 km.'
      },
      {
        id: 'q4-3-3',
        text: 'Một người đi xe đạp quãng đường 30 km hết 2 giờ. Vận tốc của người đó là:',
        options: ['15 km/h', '30 km/h', '60 km/h', '10 km/h'],
        correctAnswerIndex: 0,
        explanation: 'v = s / t = 30 / 2 = 15 km/h.'
      }
    ]
  }
];
