import { Topic } from '../../types';

export const chapter1Topics: Topic[] = [
  {
    id: 'c1-t1',
    title: 'Số nguyên âm và Tập hợp các số nguyên',
    description: 'Làm quen trục số, thứ tự trong tập số nguyên.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1b9Z_2_T000',
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
        text: 'Tập hợp các số nguyên $\\mathbb{Z}$ bao gồm:',
        options: [
          'Số nguyên dương và số 0',
          'Số nguyên âm và số 0',
          'Số nguyên âm, số 0 và số nguyên dương',
          'Số tự nhiên và số nguyên âm'
        ],
        correctAnswerIndex: 2,
        explanation: 'Tập hợp số nguyên $\\mathbb{Z} = \\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}$.'
      },
      {
        id: 'q1-1-3',
        text: 'Khẳng định nào sau đây là đúng?',
        options: ['-5 > -3', '0 < -1', '-10 < -15', '-2 > -7'],
        correctAnswerIndex: 3,
        explanation: 'Trên trục số, điểm biểu diễn số -2 nằm bên phải điểm biểu diễn số -7 nên -2 > -7.'
      },
      {
        id: 'q1-1-4',
        text: 'Số đối của số -8 là:',
        options: ['8', '-8', '0', '-16'],
        correctAnswerIndex: 0,
        explanation: 'Số đối của -8 là 8 vì tổng của chúng bằng 0.'
      },
      {
        id: 'q1-1-5',
        text: 'Trong các số sau, số nào là số nguyên âm?',
        options: ['0', '7', '-4', '12'],
        correctAnswerIndex: 2,
        explanation: 'Số nguyên âm là các số nhỏ hơn 0, nên -4 là số nguyên âm.'
      },
      {
        id: 'q1-1-6',
        text: 'Trên trục số, số nào nằm bên trái số -3?',
        options: ['-2', '0', '1', '-5'],
        correctAnswerIndex: 3,
        explanation: 'Trên trục số, số nằm bên trái thì nhỏ hơn. -5 < -3.'
      },
      {
        id: 'q1-1-7',
        text: 'Số lớn nhất trong các số sau là:',
        options: ['-1', '0', '2', '-3'],
        correctAnswerIndex: 2,
        explanation: 'So sánh các số: 2 lớn hơn 0, -1 và -3.'
      },
      {
        id: 'q1-1-8',
        text: 'Số nhỏ nhất trong các số sau là:',
        options: ['-12', '-2', '0', '5'],
        correctAnswerIndex: 0,
        explanation: 'Trong các số đã cho, -12 là số nhỏ nhất vì nằm xa 0 nhất về bên trái.'
      },
      {
        id: 'q1-1-9',
        text: 'Giá trị tuyệt đối của -15 là:',
        options: ['-15', '15', '0', '1'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị tuyệt đối là khoảng cách đến số 0 nên $|-15| = 15$.'
      },
      {
        id: 'q1-1-10',
        text: 'Số nào sau đây không thuộc tập hợp số nguyên?',
        options: ['-7', '0', '3', '1,5'],
        correctAnswerIndex: 3,
        explanation: '1,5 là số thập phân, không phải số nguyên.'
      },
      {
        id: 'q1-1-11',
        text: 'Số đối của 0 là:',
        options: ['1', '-1', '0', 'Không có'],
        correctAnswerIndex: 2,
        explanation: 'Số đối của 0 là 0.'
      },
      {
        id: 'q1-1-12',
        text: 'Trong các cặp số sau, cặp nào gồm hai số đối nhau?',
        options: ['3 và 3', '-2 và 2', '-4 và -4', '0 và 1'],
        correctAnswerIndex: 1,
        explanation: 'Hai số đối nhau có tổng bằng 0. -2 và 2 là hai số đối nhau.'
      },
      {
        id: 'q1-1-13',
        text: 'Số nguyên liền trước của 0 là:',
        options: ['1', '-1', '-2', '0'],
        correctAnswerIndex: 1,
        explanation: 'Số nguyên liền trước 0 là -1.'
      },
      {
        id: 'q1-1-14',
        text: 'Số nguyên liền sau của -6 là:',
        options: ['-7', '-5', '5', '6'],
        correctAnswerIndex: 1,
        explanation: 'Số liền sau -6 là -5.'
      },
      {
        id: 'q1-1-15',
        text: 'Thứ tự đúng từ bé đến lớn là:',
        options: ['-1; -3; 0; 2', '-3; -1; 0; 2', '0; -1; -3; 2', '2; 0; -1; -3'],
        correctAnswerIndex: 1,
        explanation: 'Sắp xếp tăng dần: -3 < -1 < 0 < 2.'
      },
      {
        id: 'q1-1-16',
        text: 'Khẳng định nào sau đây sai?',
        options: ['-8 < -2', '0 > -5', '4 < 7', '-1 > 1'],
        correctAnswerIndex: 3,
        explanation: '-1 nhỏ hơn 1 nên khẳng định "-1 > 1" là sai.'
      },
      {
        id: 'q1-1-17',
        text: 'Số có giá trị tuyệt đối bằng 9 là:',
        options: ['Chỉ có 9', 'Chỉ có -9', '9 và -9', '0 và 9'],
        correctAnswerIndex: 2,
        explanation: '$|9| = 9$ và $|-9| = 9$.'
      },
      {
        id: 'q1-1-18',
        text: 'Điền dấu thích hợp: -14 ... -9',
        options: ['>', '<', '=', '≥'],
        correctAnswerIndex: 1,
        explanation: '-14 nhỏ hơn -9 vì nằm bên trái -9 trên trục số.'
      },
      {
        id: 'q1-1-19',
        text: 'Trong các số sau, số nào gần 0 nhất?',
        options: ['-10', '-1', '3', '5'],
        correctAnswerIndex: 1,
        explanation: 'Khoảng cách đến 0 lần lượt là 10, 1, 3, 5 nên -1 gần 0 nhất.'
      },
      {
        id: 'q1-1-20',
        text: 'Nếu nhiệt độ là 5°C dưới 0°C thì nhiệt độ được viết là:',
        options: ['5°C', '-5°C', '0°C', '10°C'],
        correctAnswerIndex: 1,
        explanation: '5 độ dưới 0 được biểu diễn bằng số -5.'
      }
    ]
  },
  {
    id: 'c1-t2',
    title: 'Cộng và Trừ hai số nguyên',
    description: 'Quy tắc cộng cùng dấu, cộng khác dấu và phép trừ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    questions: [
      {
        id: 'q1-2-1',
        text: 'Kết quả của phép tính (-15) + 20 là:',
        options: ['-35', '35', '-5', '5'],
        correctAnswerIndex: 3,
        explanation: 'Cộng hai số nguyên khác dấu: $20 - 15 = 5$.'
      },
      {
        id: 'q1-2-2',
        text: 'Kết quả của phép tính 10 - (-5) là:',
        options: ['5', '15', '-15', '-5'],
        correctAnswerIndex: 1,
        explanation: 'Trừ đi một số âm là cộng với số đối của nó: $10 - (-5) = 10 + 5 = 15$.'
      },
      {
        id: 'q1-2-3',
        text: 'Nhiệt độ buổi sáng là -2°C, buổi trưa tăng thêm 5°C. Nhiệt độ buổi trưa là:',
        options: ['-7°C', '3°C', '7°C', '-3°C'],
        correctAnswerIndex: 1,
        explanation: 'Nhiệt độ buổi trưa: $(-2) + 5 = 3\\,^{\\circ}\\mathrm{C}$.'
      },
      {
        id: 'q1-2-4',
        text: 'Kết quả của phép tính $(-7) + (-8)$ là:',
        options: ['15', '-15', '1', '-1'],
        correctAnswerIndex: 1,
        explanation: 'Cộng hai số âm: cộng phần số rồi giữ dấu âm. Kết quả là -15.'
      },
      {
        id: 'q1-2-5',
        text: 'Kết quả của phép tính $14 + (-9)$ là:',
        options: ['23', '-23', '5', '-5'],
        correctAnswerIndex: 2,
        explanation: 'Cộng khác dấu: $14 - 9 = 5$.'
      },
      {
        id: 'q1-2-6',
        text: 'Kết quả của phép tính $(-12) + 12$ là:',
        options: ['24', '-24', '0', '1'],
        correctAnswerIndex: 2,
        explanation: 'Một số cộng với số đối của nó bằng 0.'
      },
      {
        id: 'q1-2-7',
        text: 'Kết quả của phép tính $6 - 11$ là:',
        options: ['5', '-5', '17', '-17'],
        correctAnswerIndex: 1,
        explanation: '$6 - 11 = 6 + (-11) = -5$.'
      },
      {
        id: 'q1-2-8',
        text: 'Kết quả của phép tính $(-20) - (-3)$ là:',
        options: ['-23', '-17', '17', '23'],
        correctAnswerIndex: 1,
        explanation: '$(-20) - (-3) = -20 + 3 = -17$.'
      },
      {
        id: 'q1-2-9',
        text: 'Kết quả của phép tính $(-9) + 4$ là:',
        options: ['-13', '13', '-5', '5'],
        correctAnswerIndex: 2,
        explanation: 'Cộng khác dấu: $9 - 4 = 5$, giữ dấu của số có giá trị tuyệt đối lớn hơn là dấu âm.'
      },
      {
        id: 'q1-2-10',
        text: 'Kết quả của phép tính $0 - (-8)$ là:',
        options: ['-8', '8', '0', '16'],
        correctAnswerIndex: 1,
        explanation: '$0 - (-8) = 0 + 8 = 8$.'
      },
      {
        id: 'q1-2-11',
        text: 'Kết quả của phép tính $(-13) - 7$ là:',
        options: ['-20', '20', '-6', '6'],
        correctAnswerIndex: 0,
        explanation: '$(-13) - 7 = (-13) + (-7) = -20$.'
      },
      {
        id: 'q1-2-12',
        text: 'Kết quả của phép tính $25 + (-25)$ là:',
        options: ['50', '0', '-50', '1'],
        correctAnswerIndex: 1,
        explanation: 'Hai số đối nhau cộng lại bằng 0.'
      },
      {
        id: 'q1-2-13',
        text: 'Kết quả của phép tính $(-4) - (-10)$ là:',
        options: ['-14', '14', '6', '-6'],
        correctAnswerIndex: 2,
        explanation: '$(-4) - (-10) = -4 + 10 = 6$.'
      },
      {
        id: 'q1-2-14',
        text: 'Một thợ lặn đang ở độ sâu -6 m, sau đó lặn xuống thêm 4 m. Vị trí mới là:',
        options: ['-2 m', '-10 m', '10 m', '2 m'],
        correctAnswerIndex: 1,
        explanation: 'Lặn xuống thêm nghĩa là cộng với số âm: $-6 + (-4) = -10$.'
      },
      {
        id: 'q1-2-15',
        text: 'Một người đang ở tầng hầm -2, đi lên 5 tầng. Người đó đến tầng:',
        options: ['3', '-7', '7', '-3'],
        correctAnswerIndex: 0,
        explanation: '$-2 + 5 = 3$.'
      },
      {
        id: 'q1-2-16',
        text: 'Tổng của hai số nguyên -18 và -2 là:',
        options: ['20', '-20', '16', '-16'],
        correctAnswerIndex: 1,
        explanation: 'Cộng hai số âm: $-18 + (-2) = -20$.'
      },
      {
        id: 'q1-2-17',
        text: 'Hiệu của 7 và -9 là:',
        options: ['-2', '2', '16', '-16'],
        correctAnswerIndex: 2,
        explanation: '$7 - (-9) = 7 + 9 = 16$.'
      },
      {
        id: 'q1-2-18',
        text: 'Kết quả của phép tính $(-30) + 12$ là:',
        options: ['-18', '18', '-42', '42'],
        correctAnswerIndex: 0,
        explanation: 'Cộng khác dấu: $30 - 12 = 18$, giữ dấu âm nên kết quả là -18.'
      },
      {
        id: 'q1-2-19',
        text: 'Kết quả của phép tính $(-5) - 9$ là:',
        options: ['4', '-4', '-14', '14'],
        correctAnswerIndex: 2,
        explanation: '$(-5) - 9 = (-5) + (-9) = -14$.'
      },
      {
        id: 'q1-2-20',
        text: 'Kết quả của phép tính $18 - 27$ là:',
        options: ['9', '-9', '45', '-45'],
        correctAnswerIndex: 1,
        explanation: '$18 - 27 = 18 + (-27) = -9$.'
      }
    ]
  },
  {
    id: 'c1-t3',
    title: 'Quy tắc dấu ngoặc và Quy tắc chuyển vế',
    description: 'Kỹ năng biến đổi biểu thức.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8xN7XxM4Q8k',
    questions: [
      {
        id: 'q1-3-1',
        text: 'Bỏ dấu ngoặc biểu thức: $a - (b - c + d)$',
        options: ['$a - b - c + d$', '$a - b + c - d$', '$a + b - c + d$', '$a - b + c + d$'],
        correctAnswerIndex: 1,
        explanation: 'Khi bỏ dấu ngoặc có dấu trừ đằng trước, ta phải đổi dấu tất cả các số hạng trong ngoặc.'
      },
      {
        id: 'q1-3-2',
        text: 'Tìm $x$ biết: $x - 15 = -20$',
        options: ['$x = -5$', '$x = 5$', '$x = -35$', '$x = 35$'],
        correctAnswerIndex: 0,
        explanation: 'Chuyển vế đổi dấu: $x = -20 + 15 = -5$.'
      },
      {
        id: 'q1-3-3',
        text: 'Bỏ dấu ngoặc: $5 + (a - b)$',
        options: ['$5 + a - b$', '$5 - a - b$', '$5 + a + b$', '$5 - a + b$'],
        correctAnswerIndex: 0,
        explanation: 'Trước ngoặc là dấu cộng nên giữ nguyên dấu các số hạng trong ngoặc.'
      },
      {
        id: 'q1-3-4',
        text: 'Bỏ dấu ngoặc: $m - (n + p)$',
        options: ['$m - n + p$', '$m + n + p$', '$m - n - p$', '$m + n - p$'],
        correctAnswerIndex: 2,
        explanation: 'Dấu trừ trước ngoặc làm đổi dấu các số hạng: $m - n - p$.'
      },
      {
        id: 'q1-3-5',
        text: 'Tìm $x$ biết: $x + 7 = -3$',
        options: ['$x = 10$', '$x = -10$', '$x = 4$', '$x = -4$'],
        correctAnswerIndex: 1,
        explanation: 'Chuyển 7 sang vế phải: $x = -3 - 7 = -10$.'
      },
      {
        id: 'q1-3-6',
        text: 'Tìm $x$ biết: $x - (-8) = 3$',
        options: ['$x = -5$', '$x = 5$', '$x = 11$', '$x = -11$'],
        correctAnswerIndex: 0,
        explanation: '$x - (-8) = x + 8 = 3$ nên $x = 3 - 8 = -5$.'
      },
      {
        id: 'q1-3-7',
        text: 'Tìm $x$ biết: $-12 + x = 5$',
        options: ['$x = -17$', '$x = 17$', '$x = -7$', '$x = 7$'],
        correctAnswerIndex: 1,
        explanation: 'Chuyển $-12$ sang vế phải thành $+12$: $x = 5 + 12 = 17$.'
      },
      {
        id: 'q1-3-8',
        text: 'Bỏ dấu ngoặc: $-(a + b - c)$',
        options: ['$-a + b - c$', '$-a - b + c$', '$a + b - c$', '$a - b + c$'],
        correctAnswerIndex: 1,
        explanation: 'Dấu trừ trước ngoặc làm đổi dấu từng số hạng.'
      },
      {
        id: 'q1-3-9',
        text: 'Tìm $x$ biết: $x + (-6) = -10$',
        options: ['$x = -4$', '$x = 4$', '$x = -16$', '$x = 16$'],
        correctAnswerIndex: 0,
        explanation: '$x - 6 = -10$ nên $x = -10 + 6 = -4$.'
      },
      {
        id: 'q1-3-10',
        text: 'Bỏ dấu ngoặc: $12 - (5 - 3)$',
        options: ['$12 - 5 - 3$', '$12 - 5 + 3$', '$12 + 5 - 3$', '$12 + 5 + 3$'],
        correctAnswerIndex: 1,
        explanation: 'Đổi dấu trong ngoặc: $12 - 5 + 3$.'
      },
      {
        id: 'q1-3-11',
        text: 'Tìm $x$ biết: $x - 9 = 14$',
        options: ['$x = 5$', '$x = -5$', '$x = 23$', '$x = -23$'],
        correctAnswerIndex: 2,
        explanation: 'Chuyển $-9$ sang vế phải: $x = 14 + 9 = 23$.'
      },
      {
        id: 'q1-3-12',
        text: 'Tìm $x$ biết: $-3 + x = -11$',
        options: ['$x = -14$', '$x = 14$', '$x = -8$', '$x = 8$'],
        correctAnswerIndex: 2,
        explanation: '$x = -11 + 3 = -8$.'
      },
      {
        id: 'q1-3-13',
        text: 'Biểu thức nào bằng với $a - (b - c - d)$?',
        options: ['$a - b - c - d$', '$a - b + c + d$', '$a + b - c + d$', '$a - b + c - d$'],
        correctAnswerIndex: 1,
        explanation: 'Khi bỏ ngoặc có dấu trừ, đổi dấu các số hạng trong ngoặc.'
      },
      {
        id: 'q1-3-14',
        text: 'Tìm $x$ biết: $x + 15 = 0$',
        options: ['$x = 15$', '$x = -15$', '$x = 0$', '$x = 1$'],
        correctAnswerIndex: 1,
        explanation: '$x = 0 - 15 = -15$.'
      },
      {
        id: 'q1-3-15',
        text: 'Tìm $x$ biết: $x - (-4) = -9$',
        options: ['$x = -13$', '$x = 13$', '$x = -5$', '$x = 5$'],
        correctAnswerIndex: 0,
        explanation: '$x + 4 = -9$ nên $x = -9 - 4 = -13$.'
      },
      {
        id: 'q1-3-16',
        text: 'Bỏ dấu ngoặc: $-(-a + b - c)$',
        options: ['$a + b - c$', '$a - b + c$', '$-a - b + c$', '$-a + b - c$'],
        correctAnswerIndex: 1,
        explanation: 'Đổi dấu từng số hạng: $-(-a + b - c) = a - b + c$.'
      },
      {
        id: 'q1-3-17',
        text: 'Tìm $x$ biết: $7 - x = 10$',
        options: ['$x = -3$', '$x = 3$', '$x = 17$', '$x = -17$'],
        correctAnswerIndex: 0,
        explanation: '$7 - x = 10$ nên $-x = 3$, do đó $x = -3$.'
      },
      {
        id: 'q1-3-18',
        text: 'Tìm $x$ biết: $x - 2 = -2$',
        options: ['$x = -4$', '$x = 0$', '$x = 4$', '$x = -1$'],
        correctAnswerIndex: 1,
        explanation: '$x = -2 + 2 = 0$.'
      },
      {
        id: 'q1-3-19',
        text: 'Bỏ dấu ngoặc: $8 + (-3 + x)$',
        options: ['$8 - 3 + x$', '$8 + 3 + x$', '$8 - 3 - x$', '$8 + 3 - x$'],
        correctAnswerIndex: 0,
        explanation: 'Dấu cộng trước ngoặc nên giữ nguyên các số hạng: $8 + (-3) + x = 8 - 3 + x$.'
      },
      {
        id: 'q1-3-20',
        text: 'Tìm $x$ biết: $-20 = x + 6$',
        options: ['$x = -14$', '$x = 14$', '$x = -26$', '$x = 26$'],
        correctAnswerIndex: 2,
        explanation: '$x = -20 - 6 = -26$.'
      }
    ]
  },
  {
    id: 'c1-t4',
    title: 'Nhân và Chia hai số nguyên',
    description: 'Quy tắc dấu của tích và thương.',
    youtubeUrl: 'https://www.youtube.com/watch?v=6Bqg6C8b0aY',
    questions: [
      {
        id: 'q1-4-1',
        text: 'Kết quả của phép tính $(-8) \\times (-5)$ là:',
        options: ['-40', '40', '-13', '13'],
        correctAnswerIndex: 1,
        explanation: 'Tích của hai số nguyên cùng dấu là một số nguyên dương.'
      },
      {
        id: 'q1-4-2',
        text: 'Kết quả của phép tính $36 : (-4)$ là:',
        options: ['9', '-9', '40', '-32'],
        correctAnswerIndex: 1,
        explanation: 'Thương của hai số nguyên khác dấu là một số nguyên âm.'
      },
      {
        id: 'q1-4-3',
        text: 'Kết quả của phép tính $(-6) \\times 7$ là:',
        options: ['42', '-42', '13', '-13'],
        correctAnswerIndex: 1,
        explanation: 'Tích của hai số khác dấu là số âm.'
      },
      {
        id: 'q1-4-4',
        text: 'Kết quả của phép tính $(-45) : (-5)$ là:',
        options: ['-9', '9', '-40', '40'],
        correctAnswerIndex: 1,
        explanation: 'Hai số cùng dấu chia nhau cho kết quả dương.'
      },
      {
        id: 'q1-4-5',
        text: 'Kết quả của phép tính $0 \\times (-9)$ là:',
        options: ['-9', '9', '0', '1'],
        correctAnswerIndex: 2,
        explanation: 'Bất cứ số nào nhân với 0 đều bằng 0.'
      },
      {
        id: 'q1-4-6',
        text: 'Kết quả của phép tính $(-24) : 6$ là:',
        options: ['-4', '4', '-30', '30'],
        correctAnswerIndex: 0,
        explanation: 'Hai số khác dấu chia nhau cho kết quả âm: $-24 : 6 = -4$.'
      },
      {
        id: 'q1-4-7',
        text: 'Kết quả của phép tính $9 \\times (-3)$ là:',
        options: ['27', '-27', '6', '-6'],
        correctAnswerIndex: 1,
        explanation: '$9 \\times (-3) = -27$.'
      },
      {
        id: 'q1-4-8',
        text: 'Kết quả của phép tính $(-7) \\times (-2)$ là:',
        options: ['-14', '14', '-9', '9'],
        correctAnswerIndex: 1,
        explanation: 'Hai số âm nhân nhau được số dương.'
      },
      {
        id: 'q1-4-9',
        text: 'Kết quả của phép tính $56 : (-7)$ là:',
        options: ['8', '-8', '49', '-49'],
        correctAnswerIndex: 1,
        explanation: '$56 : (-7) = -8$.'
      },
      {
        id: 'q1-4-10',
        text: 'Kết quả của phép tính $(-81) : 9$ là:',
        options: ['9', '-9', '-72', '72'],
        correctAnswerIndex: 1,
        explanation: '$-81 : 9 = -9$.'
      },
      {
        id: 'q1-4-11',
        text: 'Kết quả của phép tính $(-11) \\times 0$ là:',
        options: ['11', '-11', '0', '1'],
        correctAnswerIndex: 2,
        explanation: 'Số nào nhân với 0 cũng bằng 0.'
      },
      {
        id: 'q1-4-12',
        text: 'Kết quả của phép tính $(-32) : (-8)$ là:',
        options: ['-4', '4', '-24', '24'],
        correctAnswerIndex: 1,
        explanation: 'Hai số âm chia nhau được số dương: 4.'
      },
      {
        id: 'q1-4-13',
        text: 'Kết quả của phép tính $12 \\times (-4)$ là:',
        options: ['48', '-48', '16', '-16'],
        correctAnswerIndex: 1,
        explanation: 'Hai số khác dấu nhân nhau được số âm.'
      },
      {
        id: 'q1-4-14',
        text: 'Kết quả của phép tính $(-63) : (-9)$ là:',
        options: ['-7', '7', '-54', '54'],
        correctAnswerIndex: 1,
        explanation: '$(-63) : (-9) = 7$.'
      },
      {
        id: 'q1-4-15',
        text: 'Số thích hợp điền vào chỗ trống: $(-5) \\times \\ldots = 35$',
        options: ['7', '-7', '5', '-5'],
        correctAnswerIndex: 1,
        explanation: 'Để tích bằng 35 và một thừa số là -5 thì thừa số còn lại phải là -7.'
      },
      {
        id: 'q1-4-16',
        text: 'Số thích hợp điền vào chỗ trống: $\\ldots : (-6) = 8$',
        options: ['48', '-48', '14', '-14'],
        correctAnswerIndex: 1,
        explanation: 'Muốn thương là 8 khi chia cho -6 thì số bị chia là -48.'
      },
      {
        id: 'q1-4-17',
        text: 'Kết quả của phép tính $(-3) \\times (-4) \\times 2$ là:',
        options: ['24', '-24', '12', '-12'],
        correctAnswerIndex: 0,
        explanation: '$(-3) \\times (-4) = 12$; $12 \\times 2 = 24$.'
      },
      {
        id: 'q1-4-18',
        text: 'Kết quả của phép tính $72 : (-8) : 3$ là:',
        options: ['-3', '3', '-27', '27'],
        correctAnswerIndex: 0,
        explanation: '$72 : (-8) = -9$; $-9 : 3 = -3$.'
      },
      {
        id: 'q1-4-19',
        text: 'Dấu của tích $(-a) \\times b$ với $a > 0, b > 0$ là:',
        options: ['Dương', 'Âm', 'Bằng 0', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Một số âm nhân với một số dương cho kết quả âm.'
      },
      {
        id: 'q1-4-20',
        text: 'Khẳng định nào sau đây đúng?',
        options: [
          'Tích của hai số âm là số âm',
          'Thương của hai số cùng dấu là số âm',
          'Tích của hai số khác dấu là số âm',
          'Số 0 chia cho 0 bằng 0'
        ],
        correctAnswerIndex: 2,
        explanation: 'Tích của hai số khác dấu là số âm. Các khẳng định còn lại sai.'
      }
    ]
  },
  {
    id: 'c1-t5',
    title: 'Bội và Ước của một số nguyên',
    description: 'Tính chất chia hết trong tập số nguyên.',
    youtubeUrl: 'https://www.youtube.com/watch?v=2w7l9Vqj5mE',
    questions: [
      {
        id: 'q1-5-1',
        text: 'Tập hợp các ước của 4 trong tập số nguyên là:',
        options: ['{1; 2; 4}', '{-1; -2; -4}', '{-4; -2; -1; 1; 2; 4}', '{-4; -2; 0; 2; 4}'],
        correctAnswerIndex: 2,
        explanation: 'Ước của 4 bao gồm cả số dương và số âm: $\\pm 1, \\pm 2, \\pm 4$.'
      },
      {
        id: 'q1-5-2',
        text: 'Số nào sau đây là bội của -5?',
        options: ['2', '-10', '3', '12'],
        correctAnswerIndex: 1,
        explanation: '-10 chia hết cho -5 nên -10 là bội của -5.'
      },
      {
        id: 'q1-5-3',
        text: 'Số nào sau đây là ước của -12?',
        options: ['5', '6', '7', '8'],
        correctAnswerIndex: 1,
        explanation: '-12 chia hết cho 6 nên 6 là ước của -12.'
      },
      {
        id: 'q1-5-4',
        text: 'Tập hợp các bội của 3 là:',
        options: ['{0; 3; 6; 9}', 'Các số chia hết cho 3', 'Các số lớn hơn 3', 'Các số lẻ'],
        correctAnswerIndex: 1,
        explanation: 'Bội của 3 là các số nguyên chia hết cho 3.'
      },
      {
        id: 'q1-5-5',
        text: 'Trong các số sau, số nào không phải là bội của 4?',
        options: ['-8', '0', '12', '10'],
        correctAnswerIndex: 3,
        explanation: '10 không chia hết cho 4.'
      },
      {
        id: 'q1-5-6',
        text: 'Ước của 1 trong tập số nguyên là:',
        options: ['{1}', '{-1; 1}', '{0; 1}', '{-1; 0; 1}'],
        correctAnswerIndex: 1,
        explanation: '1 có hai ước nguyên là -1 và 1.'
      },
      {
        id: 'q1-5-7',
        text: 'Số 0 là:',
        options: ['Ước của mọi số nguyên', 'Bội của mọi số nguyên khác 0', 'Không là ước, không là bội', 'Chỉ là ước của 0'],
        correctAnswerIndex: 1,
        explanation: 'Với mọi số nguyên khác 0, ta có $0 = a \\times 0$ nên 0 là bội của $a$.'
      },
      {
        id: 'q1-5-8',
        text: 'Trong các số sau, số nào là bội của 7?',
        options: ['21', '22', '24', '25'],
        correctAnswerIndex: 0,
        explanation: '$21 = 7 \\times 3$ nên 21 là bội của 7.'
      },
      {
        id: 'q1-5-9',
        text: 'Số nào sau đây là ước của 18?',
        options: ['4', '5', '6', '7'],
        correctAnswerIndex: 2,
        explanation: '18 chia hết cho 6 nên 6 là ước của 18.'
      },
      {
        id: 'q1-5-10',
        text: 'Tập hợp các ước của -3 trong tập số nguyên là:',
        options: ['{-3; 3}', '{-1; 1; -3; 3}', '{1; 3}', '{-1; -3}'],
        correctAnswerIndex: 1,
        explanation: 'Các ước nguyên của -3 là $\\pm 1, \\pm 3$.'
      },
      {
        id: 'q1-5-11',
        text: 'Nếu $a$ là bội của $b$ thì:',
        options: ['a chia hết cho b', 'b chia hết cho a', 'a nhỏ hơn b', 'b bằng 0'],
        correctAnswerIndex: 0,
        explanation: 'Định nghĩa: $a$ là bội của $b$ khi $a$ chia hết cho $b$.'
      },
      {
        id: 'q1-5-12',
        text: 'Trong các số sau, số nào là ước của 30?',
        options: ['8', '9', '10', '11'],
        correctAnswerIndex: 2,
        explanation: '30 chia hết cho 10.'
      },
      {
        id: 'q1-5-13',
        text: 'Trong các số sau, số nào là bội của -6?',
        options: ['18', '20', '25', '31'],
        correctAnswerIndex: 0,
        explanation: '18 chia hết cho -6 nên 18 là bội của -6.'
      },
      {
        id: 'q1-5-14',
        text: 'Số nào sau đây không phải là ước của 20?',
        options: ['-4', '5', '10', '6'],
        correctAnswerIndex: 3,
        explanation: '20 không chia hết cho 6.'
      },
      {
        id: 'q1-5-15',
        text: 'Các ước nguyên của 2 là:',
        options: ['{-2; -1; 1; 2}', '{1; 2}', '{-1; 1; 2}', '{-2; 2}'],
        correctAnswerIndex: 0,
        explanation: 'Ước nguyên của 2 gồm $\\pm 1$ và $\\pm 2$.'
      },
      {
        id: 'q1-5-16',
        text: 'Trong các số sau, số nào là bội chung của 2 và 3?',
        options: ['8', '10', '12', '14'],
        correctAnswerIndex: 2,
        explanation: '12 chia hết cho cả 2 và 3.'
      },
      {
        id: 'q1-5-17',
        text: 'Khẳng định nào sau đây đúng?',
        options: [
          'Mọi số nguyên đều là ước của 0',
          '0 là ước của mọi số nguyên',
          'Mọi số nguyên khác 0 đều là ước của chính nó',
          '1 không phải là ước của số nào'
        ],
        correctAnswerIndex: 2,
        explanation: 'Mỗi số nguyên khác 0 đều chia hết cho chính nó.'
      },
      {
        id: 'q1-5-18',
        text: 'Trong các số sau, số nào là ước của -25?',
        options: ['4', '5', '6', '8'],
        correctAnswerIndex: 1,
        explanation: '-25 chia hết cho 5 nên 5 là ước của -25.'
      },
      {
        id: 'q1-5-19',
        text: 'Một số là bội của 9 nếu số đó:',
        options: ['Chia hết cho 9', 'Lớn hơn 9', 'Là số lẻ', 'Là số âm'],
        correctAnswerIndex: 0,
        explanation: 'Định nghĩa bội của 9 là các số chia hết cho 9.'
      },
      {
        id: 'q1-5-20',
        text: 'Trong các số sau, số nào vừa là bội của 4 vừa là bội của 5?',
        options: ['10', '15', '20', '25'],
        correctAnswerIndex: 2,
        explanation: '20 chia hết cho cả 4 và 5.'
      }
    ]
  }
];