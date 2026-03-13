import { Topic } from '../../types';

export const chapter2Topics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Mở rộng khái niệm phân số',
    description: 'Phân số có tử và mẫu là số nguyên.',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Phân số nào sau đây bằng phân số -3/4?',
        options: ['3/-4', '-6/-8', '9/12', '3/4'],
        correctAnswerIndex: 0,
        explanation: 'Nhân cả tử và mẫu với -1 ta được phân số bằng nó: (-3)*(-1) / 4*(-1) = 3/-4.'
      },
      {
        id: 'q2-1-2',
        text: 'Điều kiện để a/b là một phân số là:',
        options: ['a, b là số tự nhiên, b khác 0', 'a, b là số nguyên, b khác 0', 'a là số nguyên, b là số tự nhiên khác 0', 'a, b là số nguyên'],
        correctAnswerIndex: 1,
        explanation: 'Phân số có dạng a/b với a, b thuộc Z và b ≠ 0.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'Tính chất cơ bản của phân số',
    description: 'Kỹ năng rút gọn về phân số tối giản.',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Phân số tối giản của phân số 15/20 là:',
        options: ['3/4', '5/4', '3/5', '1/2'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho ƯCLN(15, 20) = 5 ta được 3/4.'
      },
      {
        id: 'q2-2-2',
        text: 'Phân số nào sau đây là phân số tối giản?',
        options: ['6/8', '14/21', '5/12', '9/15'],
        correctAnswerIndex: 2,
        explanation: 'Phân số tối giản là phân số mà tử và mẫu chỉ có ước chung là 1 và -1. ƯCLN(5, 12) = 1.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Quy đồng mẫu nhiều phân số',
    description: 'Cách tìm Mẫu số chung (thông qua BCNN).',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Mẫu số chung nhỏ nhất của hai phân số 1/6 và 3/8 là:',
        options: ['14', '24', '48', '12'],
        correctAnswerIndex: 1,
        explanation: 'Mẫu số chung nhỏ nhất là BCNN(6, 8) = 24.'
      },
      {
        id: 'q2-3-2',
        text: 'Quy đồng mẫu số hai phân số 2/3 và 1/4 ta được:',
        options: ['8/12 và 3/12', '2/12 và 1/12', '6/12 và 4/12', '8/12 và 4/12'],
        correctAnswerIndex: 0,
        explanation: 'MSC là 12. 2/3 = (2*4)/(3*4) = 8/12. 1/4 = (1*3)/(4*3) = 3/12.'
      }
    ]
  },
  {
    id: 'c2-t4',
    title: 'So sánh phân số',
    description: 'Các quy tắc so sánh cùng mẫu và khác mẫu.',
    questions: [
      {
        id: 'q2-4-1',
        text: 'So sánh hai phân số -3/5 và -4/5:',
        options: ['-3/5 < -4/5', '-3/5 > -4/5', '-3/5 = -4/5', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Hai phân số cùng mẫu dương, tử nào lớn hơn thì phân số lớn hơn. Vì -3 > -4 nên -3/5 > -4/5.'
      },
      {
        id: 'q2-4-2',
        text: 'Phân số nào lớn nhất trong các phân số sau: 1/2, 2/3, 3/4?',
        options: ['1/2', '2/3', '3/4', 'Bằng nhau'],
        correctAnswerIndex: 2,
        explanation: 'Quy đồng mẫu chung là 12: 6/12, 8/12, 9/12. Phân số lớn nhất là 9/12 tức 3/4.'
      }
    ]
  },
  {
    id: 'c2-t5',
    title: 'Bốn phép tính về phân số',
    description: 'Cộng, Trừ, Nhân, Chia phân số (bao gồm cả hỗn số).',
    questions: [
      {
        id: 'q2-5-1',
        text: 'Kết quả của phép tính 1/2 + 1/3 là:',
        options: ['2/5', '1/5', '5/6', '1/6'],
        correctAnswerIndex: 2,
        explanation: 'Quy đồng mẫu số: 3/6 + 2/6 = 5/6.'
      },
      {
        id: 'q2-5-2',
        text: 'Kết quả của phép tính 2/3 * 3/4 là:',
        options: ['6/12', '1/2', '5/7', 'Cả A và B đều đúng'],
        correctAnswerIndex: 3,
        explanation: '2/3 * 3/4 = (2*3)/(3*4) = 6/12. Rút gọn 6/12 = 1/2.'
      },
      {
        id: 'q2-5-3',
        text: 'Chuyển hỗn số 2 1/3 thành phân số ta được:',
        options: ['7/3', '5/3', '6/3', '3/3'],
        correctAnswerIndex: 0,
        explanation: '2 1/3 = (2*3 + 1)/3 = 7/3.'
      }
    ]
  }
];
