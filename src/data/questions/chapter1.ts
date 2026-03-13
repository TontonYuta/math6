import { Topic } from '../../types';

export const chapter1Topics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Số nguyên âm và Tập hợp các số nguyên',
    description: 'Làm quen trục số, thứ tự trong tập số nguyên.',
    questions: [
      {
        id: 'q1-1-1',
        text: 'Số nguyên âm nhỏ nhất có hai chữ số là:',
        options: ['-10', '-99', '-11', '-98'],
        correctAnswerIndex: 1,
        explanation: 'Số nguyên âm càng xa số 0 thì càng nhỏ. Số nguyên âm có hai chữ số nhỏ nhất là -99.'
      },
      {
        id: 'q1-1-2',
        text: 'Tập hợp các số nguyên Z bao gồm:',
        options: ['Số nguyên dương và số 0', 'Số nguyên âm và số 0', 'Số nguyên âm, số 0 và số nguyên dương', 'Số tự nhiên và số nguyên âm'],
        correctAnswerIndex: 2,
        explanation: 'Tập hợp số nguyên Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}'
      },
      {
        id: 'q1-1-3',
        text: 'Khẳng định nào sau đây là đúng?',
        options: ['-5 > -3', '0 < -1', '-10 < -15', '-2 > -7'],
        correctAnswerIndex: 3,
        explanation: 'Trên trục số, điểm biểu diễn số -2 nằm bên phải điểm biểu diễn số -7 nên -2 > -7.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Cộng và Trừ hai số nguyên',
    description: 'Quy tắc cộng cùng dấu, cộng khác dấu và phép trừ.',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Kết quả của phép tính (-15) + 20 là:',
        options: ['-35', '35', '-5', '5'],
        correctAnswerIndex: 3,
        explanation: 'Cộng hai số nguyên khác dấu: 20 - 15 = 5.'
      },
      {
        id: 'q1-2-2',
        text: 'Kết quả của phép tính 10 - (-5) là:',
        options: ['5', '15', '-15', '-5'],
        correctAnswerIndex: 1,
        explanation: 'Trừ đi một số âm là cộng với số đối của nó: 10 - (-5) = 10 + 5 = 15.'
      },
      {
        id: 'q1-2-3',
        text: 'Nhiệt độ buổi sáng là -2°C, buổi trưa tăng thêm 5°C. Nhiệt độ buổi trưa là:',
        options: ['-7°C', '3°C', '7°C', '-3°C'],
        correctAnswerIndex: 1,
        explanation: 'Nhiệt độ buổi trưa: (-2) + 5 = 3°C.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Quy tắc dấu ngoặc và Quy tắc chuyển vế',
    description: 'Kỹ năng biến đổi biểu thức.',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Bỏ dấu ngoặc biểu thức: a - (b - c + d)',
        options: ['a - b - c + d', 'a - b + c - d', 'a + b - c + d', 'a - b + c + d'],
        correctAnswerIndex: 1,
        explanation: 'Khi bỏ dấu ngoặc có dấu trừ đằng trước, ta phải đổi dấu tất cả các số hạng trong ngoặc.'
      },
      {
        id: 'q1-3-2',
        text: 'Tìm x biết: x - 15 = -20',
        options: ['x = -5', 'x = 5', 'x = -35', 'x = 35'],
        correctAnswerIndex: 0,
        explanation: 'Chuyển vế đổi dấu: x = -20 + 15 = -5.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Nhân và Chia hai số nguyên',
    description: 'Quy tắc dấu của tích và thương.',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Kết quả của phép tính (-8) * (-5) là:',
        options: ['-40', '40', '-13', '13'],
        correctAnswerIndex: 1,
        explanation: 'Tích của hai số nguyên cùng dấu là một số nguyên dương.'
      },
      {
        id: 'q1-4-2',
        text: 'Kết quả của phép tính 36 : (-4) là:',
        options: ['9', '-9', '40', '-32'],
        correctAnswerIndex: 1,
        explanation: 'Thương của hai số nguyên khác dấu là một số nguyên âm.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Bội và Ước của một số nguyên',
    description: 'Tính chất chia hết trong tập số nguyên.',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Tập hợp các ước của 4 trong tập số nguyên là:',
        options: ['{1; 2; 4}', '{-1; -2; -4}', '{-4; -2; -1; 1; 2; 4}', '{-4; -2; 0; 2; 4}'],
        correctAnswerIndex: 2,
        explanation: 'Ước của 4 bao gồm cả số dương và số âm: ±1, ±2, ±4.'
      },
      {
        id: 'q1-5-2',
        text: 'Số nào sau đây là bội của -5?',
        options: ['2', '-10', '3', '12'],
        correctAnswerIndex: 1,
        explanation: '-10 chia hết cho -5 nên -10 là bội của -5.'
      }
    ]
  }
];
