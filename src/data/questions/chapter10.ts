import { Topic } from '../../types';
import { chapter10ExamTopics } from './chapter10-exams';

export const chapter10CoreTopics: Topic[] = [
  {
    id: 'c10-t1',
    title: 'Phép thử ngẫu nhiên',
    description: 'Nhận biết phép thử ngẫu nhiên và các kết quả có thể xảy ra trong những tình huống đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q10-1-1',
        text: 'Phép thử ngẫu nhiên là phép thử mà:',
        options: [
          'Không biết trước chắc chắn kết quả nào sẽ xảy ra',
          'Luôn cho cùng một kết quả',
          'Chỉ có một kết quả duy nhất',
          'Không thể thực hiện được'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phép thử ngẫu nhiên là phép thử có nhiều khả năng xảy ra và không biết chắc trước kết quả.'
      },
      {
        id: 'q10-1-2',
        text: 'Tung một đồng xu một lần là:',
        options: ['Một phép thử ngẫu nhiên', 'Một phép tính', 'Một hình học', 'Một số liệu cố định'],
        correctAnswerIndex: 0,
        explanation: 'Khi tung đồng xu, kết quả có thể là sấp hoặc ngửa nên đó là phép thử ngẫu nhiên.'
      },
      {
        id: 'q10-1-3',
        text: 'Gieo một con xúc xắc một lần có thể thu được:',
        options: [
          'Một trong các số từ 1 đến 6',
          'Chỉ số 6',
          'Chỉ số chẵn',
          'Chỉ số lẻ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xúc xắc có 6 mặt nên có thể thu được một trong các số từ 1 đến 6.'
      },
      {
        id: 'q10-1-4',
        text: 'Rút một thẻ từ hộp có ghi các số 1, 2, 3 là:',
        options: ['Một phép thử ngẫu nhiên', 'Một phép cộng', 'Một biểu đồ', 'Một góc'],
        correctAnswerIndex: 0,
        explanation: 'Ta không biết trước sẽ rút được thẻ nào nên đây là phép thử ngẫu nhiên.'
      },
      {
        id: 'q10-1-5',
        text: 'Kết quả của phép thử ngẫu nhiên là:',
        options: [
          'Một khả năng có thể xảy ra',
          'Một công thức',
          'Một biểu đồ cột',
          'Một đoạn thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mỗi kết quả của phép thử ngẫu nhiên là một khả năng có thể xảy ra.'
      },
      {
        id: 'q10-1-6',
        text: 'Khi tung đồng xu một lần, số kết quả có thể xảy ra là:',
        options: ['1', '2', '3', '4'],
        correctAnswerIndex: 1,
        explanation: 'Có hai kết quả có thể xảy ra: sấp hoặc ngửa.'
      },
      {
        id: 'q10-1-7',
        text: 'Khi gieo xúc xắc một lần, kết quả nào sau đây có thể xảy ra?',
        options: ['7', '0', '3', '8'],
        correctAnswerIndex: 2,
        explanation: 'Xúc xắc có thể cho kết quả 1, 2, 3, 4, 5 hoặc 6.'
      },
      {
        id: 'q10-1-8',
        text: 'Một ví dụ về phép thử ngẫu nhiên trong thực tế là:',
        options: [
          'Chọn ngẫu nhiên một bạn trong lớp',
          'Tính 2 + 3',
          'Vẽ một đoạn thẳng',
          'Đọc một số tự nhiên'
        ],
        correctAnswerIndex: 0,
        explanation: 'Việc chọn ngẫu nhiên một bạn trong lớp là một phép thử ngẫu nhiên.'
      },
      {
        id: 'q10-1-9',
        text: 'Phép thử “ngày mai mặt trời mọc” là:',
        options: [
          'Không phải phép thử ngẫu nhiên theo nghĩa đơn giản',
          'Là phép thử ngẫu nhiên',
          'Có hai kết quả như nhau',
          'Không có kết quả'
        ],
        correctAnswerIndex: 0,
        explanation: 'Đây là một hiện tượng chắc chắn gần như luôn xảy ra, không phải ví dụ điển hình của phép thử ngẫu nhiên đơn giản.'
      },
      {
        id: 'q10-1-10',
        text: 'Điều quan trọng của phép thử ngẫu nhiên là:',
        options: [
          'Có nhiều khả năng xảy ra',
          'Luôn chỉ có một kết quả',
          'Không cần quan sát kết quả',
          'Không cần thực hiện'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phép thử ngẫu nhiên có nhiều khả năng xảy ra và không biết chắc trước kết quả.'
      }
    ]
  },
  {
    id: 'c10-t2',
    title: 'Biến cố trong phép thử ngẫu nhiên',
    description: 'Nhận biết biến cố, phân biệt biến cố chắc chắn, không thể và biến cố đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q10-2-1',
        text: 'Biến cố là:',
        options: [
          'Một hoặc một số kết quả của phép thử ngẫu nhiên',
          'Một phép tính',
          'Một biểu đồ',
          'Một đoạn thẳng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố là điều có thể xảy ra gắn với kết quả của phép thử ngẫu nhiên.'
      },
      {
        id: 'q10-2-2',
        text: 'Khi tung đồng xu, biến cố “xuất hiện mặt ngửa” là:',
        options: ['Một biến cố', 'Một phép cộng', 'Một số tự nhiên', 'Một hình tròn'],
        correctAnswerIndex: 0,
        explanation: '“Xuất hiện mặt ngửa” là một biến cố trong phép thử tung đồng xu.'
      },
      {
        id: 'q10-2-3',
        text: 'Biến cố chắc chắn là biến cố:',
        options: [
          'Luôn xảy ra',
          'Không bao giờ xảy ra',
          'Chỉ xảy ra một lần',
          'Không xác định'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố chắc chắn là biến cố luôn xảy ra.'
      },
      {
        id: 'q10-2-4',
        text: 'Biến cố không thể là biến cố:',
        options: [
          'Không bao giờ xảy ra',
          'Luôn xảy ra',
          'Có thể xảy ra',
          'Xảy ra nhiều lần'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố không thể là biến cố không bao giờ xảy ra.'
      },
      {
        id: 'q10-2-5',
        text: 'Gieo một con xúc xắc. Biến cố “xuất hiện số lớn hơn 6” là:',
        options: [
          'Biến cố không thể',
          'Biến cố chắc chắn',
          'Biến cố có thể',
          'Biến cố đơn giản'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xúc xắc chỉ có các số từ 1 đến 6 nên không thể xuất hiện số lớn hơn 6.'
      },
      {
        id: 'q10-2-6',
        text: 'Gieo một con xúc xắc. Biến cố “xuất hiện số nhỏ hơn 7” là:',
        options: [
          'Biến cố chắc chắn',
          'Biến cố không thể',
          'Biến cố ngẫu nhiên',
          'Không phải biến cố'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mọi kết quả của xúc xắc đều nhỏ hơn 7 nên đây là biến cố chắc chắn.'
      },
      {
        id: 'q10-2-7',
        text: 'Tung đồng xu. Biến cố “xuất hiện mặt sấp” là:',
        options: [
          'Biến cố có thể xảy ra',
          'Biến cố không thể',
          'Biến cố chắc chắn',
          'Không phải biến cố'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mặt sấp là một trong các kết quả có thể xảy ra khi tung đồng xu.'
      },
      {
        id: 'q10-2-8',
        text: 'Gieo một con xúc xắc. Biến cố “xuất hiện số chẵn” gồm các kết quả:',
        options: [
          '2, 4, 6',
          '1, 3, 5',
          '1, 2, 3',
          '4, 5, 6'
        ],
        correctAnswerIndex: 0,
        explanation: 'Các số chẵn trên xúc xắc là 2, 4, 6.'
      },
      {
        id: 'q10-2-9',
        text: 'Biến cố “xuất hiện số lẻ” khi gieo xúc xắc gồm:',
        options: [
          '1, 3, 5',
          '2, 4, 6',
          '1, 2, 3',
          '3, 4, 5'
        ],
        correctAnswerIndex: 0,
        explanation: 'Các số lẻ trên xúc xắc là 1, 3, 5.'
      },
      {
        id: 'q10-2-10',
        text: 'Một biến cố có thể xảy ra nhưng cũng có thể không xảy ra được gọi là:',
        options: [
          'Biến cố ngẫu nhiên',
          'Biến cố chắc chắn',
          'Biến cố không thể',
          'Biến cố hình học'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố ngẫu nhiên là biến cố có thể xảy ra hoặc không xảy ra.'
      }
    ]
  },
  {
    id: 'c10-t3',
    title: 'Xác suất thực nghiệm',
    description: 'Làm quen với xác suất thực nghiệm thông qua số lần xuất hiện của biến cố trong nhiều lần thử.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q10-3-1',
        text: 'Xác suất thực nghiệm của một biến cố được tính gần đúng bằng:',
        options: [
          'Số lần biến cố xảy ra chia cho tổng số lần thử',
          'Tổng số lần thử chia cho số lần biến cố xảy ra',
          'Số lần biến cố xảy ra cộng tổng số lần thử',
          'Số lần thử nhân số lần xảy ra'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xác suất thực nghiệm được tính bằng tỉ số giữa số lần biến cố xảy ra và tổng số lần thử.'
      },
      {
        id: 'q10-3-2',
        text: 'Một biến cố xảy ra 6 lần trong 10 lần thử. Xác suất thực nghiệm là:',
        options: ['0,4', '0,5', '0,6', '0,7'],
        correctAnswerIndex: 2,
        explanation: 'Xác suất thực nghiệm là $\\dfrac{6}{10}=0,6$.'
      },
      {
        id: 'q10-3-3',
        text: 'Một biến cố xảy ra 3 lần trong 12 lần thử. Xác suất thực nghiệm là:',
        options: ['0,2', '0,25', '0,3', '0,4'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{3}{12}=0,25$.'
      },
      {
        id: 'q10-3-4',
        text: 'Nếu tung đồng xu 20 lần và xuất hiện mặt ngửa 11 lần thì xác suất thực nghiệm của biến cố “ra ngửa” là:',
        options: ['0,45', '0,5', '0,55', '0,6'],
        correctAnswerIndex: 2,
        explanation: 'Xác suất thực nghiệm là $\\dfrac{11}{20}=0,55$.'
      },
      {
        id: 'q10-3-5',
        text: 'Xác suất thực nghiệm luôn có giá trị:',
        options: [
          'Từ 0 đến 1',
          'Lớn hơn 1',
          'Nhỏ hơn 0',
          'Là một số âm'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì là tỉ số giữa số lần xảy ra và tổng số lần thử nên xác suất thực nghiệm nằm trong khoảng từ 0 đến 1.'
      },
      {
        id: 'q10-3-6',
        text: 'Một biến cố không xảy ra lần nào trong 15 lần thử thì xác suất thực nghiệm là:',
        options: ['0', '1', '15', 'Không tính được'],
        correctAnswerIndex: 0,
        explanation: 'Ta có $\\dfrac{0}{15}=0$.'
      },
      {
        id: 'q10-3-7',
        text: 'Một biến cố xảy ra trong tất cả 8 lần thử thì xác suất thực nghiệm là:',
        options: ['0', '0,5', '1', '8'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\dfrac{8}{8}=1$.'
      },
      {
        id: 'q10-3-8',
        text: 'Nếu một biến cố xảy ra 9 lần trong 30 lần thử thì xác suất thực nghiệm là:',
        options: ['0,2', '0,25', '0,3', '0,35'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\dfrac{9}{30}=0,3$.'
      },
      {
        id: 'q10-3-9',
        text: 'Xác suất thực nghiệm được tính dựa trên:',
        options: [
          'Kết quả thực hiện nhiều lần thử',
          'Chỉ suy đoán',
          'Chỉ một lần thử',
          'Không cần dữ liệu'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xác suất thực nghiệm dựa trên dữ liệu thu được sau nhiều lần thực hiện phép thử.'
      },
      {
        id: 'q10-3-10',
        text: 'Nếu gieo xúc xắc 50 lần, mặt 6 xuất hiện 8 lần thì xác suất thực nghiệm của biến cố “ra mặt 6” là:',
        options: ['0,08', '0,16', '0,6', '0,24'],
        correctAnswerIndex: 1,
        explanation: 'Ta có $\\dfrac{8}{50}=0,16$.'
      }
    ]
  },
  {
    id: 'c10-t4',
    title: 'So sánh khả năng xảy ra của các biến cố',
    description: 'Nhận biết biến cố nào có khả năng xảy ra nhiều hơn, ít hơn hoặc như nhau trong các tình huống đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q10-4-1',
        text: 'Khi gieo một con xúc xắc cân đối, biến cố “ra số chẵn” so với biến cố “ra số lẻ”:',
        options: [
          'Có khả năng xảy ra như nhau',
          'Chẵn dễ xảy ra hơn',
          'Lẻ dễ xảy ra hơn',
          'Không thể so sánh'
        ],
        correctAnswerIndex: 0,
        explanation: 'Có 3 số chẵn và 3 số lẻ nên hai biến cố có khả năng xảy ra như nhau.'
      },
      {
        id: 'q10-4-2',
        text: 'Trong hộp có 8 bi đỏ và 2 bi xanh. Khi lấy ngẫu nhiên 1 bi, biến cố “lấy được bi đỏ” là:',
        options: [
          'Có khả năng xảy ra nhiều hơn',
          'Có khả năng xảy ra ít hơn',
          'Không thể xảy ra',
          'Chắc chắn bằng nhau với bi xanh'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì số bi đỏ nhiều hơn bi xanh nên khả năng lấy được bi đỏ lớn hơn.'
      },
      {
        id: 'q10-4-3',
        text: 'Trong hộp có 5 bi vàng và 5 bi trắng. Khi lấy ngẫu nhiên 1 bi, hai biến cố “lấy bi vàng” và “lấy bi trắng”:',
        options: [
          'Có khả năng xảy ra như nhau',
          'Bi vàng dễ hơn',
          'Bi trắng dễ hơn',
          'Đều không thể xảy ra'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai màu có số lượng bằng nhau nên khả năng xảy ra như nhau.'
      },
      {
        id: 'q10-4-4',
        text: 'Trong hộp có 1 bi đỏ, 4 bi xanh. Biến cố nào dễ xảy ra hơn?',
        options: [
          'Lấy được bi xanh',
          'Lấy được bi đỏ',
          'Hai biến cố như nhau',
          'Không xác định'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì số bi xanh nhiều hơn số bi đỏ nên biến cố lấy bi xanh dễ xảy ra hơn.'
      },
      {
        id: 'q10-4-5',
        text: 'Gieo xúc xắc. Biến cố “ra số lớn hơn 4” gồm:',
        options: ['2 kết quả', '3 kết quả', '4 kết quả', '5 kết quả'],
        correctAnswerIndex: 0,
        explanation: 'Các số lớn hơn 4 là 5 và 6 nên có 2 kết quả.'
      },
      {
        id: 'q10-4-6',
        text: 'Gieo xúc xắc. Biến cố “ra số nhỏ hơn 5” gồm:',
        options: ['2 kết quả', '3 kết quả', '4 kết quả', '5 kết quả'],
        correctAnswerIndex: 2,
        explanation: 'Các số nhỏ hơn 5 là 1, 2, 3, 4 nên có 4 kết quả.'
      },
      {
        id: 'q10-4-7',
        text: 'Khi gieo xúc xắc, biến cố “ra số nhỏ hơn 5” so với biến cố “ra số lớn hơn 4”:',
        options: [
          'Dễ xảy ra hơn',
          'Khó xảy ra hơn',
          'Khả năng như nhau',
          'Không thể so sánh'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biến cố “ra số nhỏ hơn 5” có 4 kết quả, còn “ra số lớn hơn 4” có 2 kết quả.'
      },
      {
        id: 'q10-4-8',
        text: 'Trong một hộp không có bi xanh, biến cố “lấy được bi xanh” là:',
        options: [
          'Biến cố không thể',
          'Biến cố chắc chắn',
          'Biến cố ngẫu nhiên',
          'Biến cố dễ xảy ra'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nếu trong hộp không có bi xanh thì không thể lấy được bi xanh.'
      },
      {
        id: 'q10-4-9',
        text: 'Trong một hộp chỉ có bi đỏ, biến cố “lấy được bi đỏ” là:',
        options: [
          'Biến cố chắc chắn',
          'Biến cố không thể',
          'Biến cố ngẫu nhiên',
          'Biến cố khó xảy ra'
        ],
        correctAnswerIndex: 0,
        explanation: 'Nếu hộp chỉ có bi đỏ thì chắc chắn lấy được bi đỏ.'
      },
      {
        id: 'q10-4-10',
        text: 'So sánh khả năng xảy ra của các biến cố giúp ta:',
        options: [
          'Dự đoán hợp lí hơn trong thực tế',
          'Không có ý nghĩa gì',
          'Chỉ dùng cho hình học',
          'Chỉ để vẽ biểu đồ'
        ],
        correctAnswerIndex: 0,
        explanation: 'So sánh khả năng xảy ra giúp ta dự đoán hợp lí hơn trong nhiều tình huống thực tế.'
      }
    ]
  },
  {
    id: 'c10-t5',
    title: 'Ôn tập chương Một số yếu tố xác suất',
    description: 'Củng cố kiến thức về phép thử ngẫu nhiên, biến cố, xác suất thực nghiệm và so sánh khả năng xảy ra.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q10-5-1',
        text: 'Tung một đồng xu một lần là:',
        options: ['Phép thử ngẫu nhiên', 'Phép cộng', 'Một biểu đồ', 'Một hình học'],
        correctAnswerIndex: 0,
        explanation: 'Tung đồng xu một lần là một phép thử ngẫu nhiên.'
      },
      {
        id: 'q10-5-2',
        text: 'Biến cố “ra số 7” khi gieo một con xúc xắc là:',
        options: [
          'Biến cố không thể',
          'Biến cố chắc chắn',
          'Biến cố ngẫu nhiên',
          'Biến cố dễ xảy ra'
        ],
        correctAnswerIndex: 0,
        explanation: 'Xúc xắc chỉ có các số từ 1 đến 6 nên không thể ra số 7.'
      },
      {
        id: 'q10-5-3',
        text: 'Biến cố “ra số nhỏ hơn 7” khi gieo một con xúc xắc là:',
        options: [
          'Biến cố chắc chắn',
          'Biến cố không thể',
          'Biến cố hiếm gặp',
          'Không phải biến cố'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mọi kết quả của xúc xắc đều nhỏ hơn 7.'
      },
      {
        id: 'q10-5-4',
        text: 'Một biến cố xảy ra 4 lần trong 10 lần thử. Xác suất thực nghiệm là:',
        options: ['0,2', '0,3', '0,4', '0,5'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\dfrac{4}{10}=0,4$.'
      },
      {
        id: 'q10-5-5',
        text: 'Một biến cố xảy ra 15 lần trong 30 lần thử. Xác suất thực nghiệm là:',
        options: ['0,15', '0,3', '0,5', '0,75'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $\\dfrac{15}{30}=0,5$.'
      },
      {
        id: 'q10-5-6',
        text: 'Trong hộp có 7 bi đỏ, 3 bi xanh. Biến cố dễ xảy ra hơn là:',
        options: [
          'Lấy được bi đỏ',
          'Lấy được bi xanh',
          'Hai biến cố như nhau',
          'Không xác định'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì số bi đỏ nhiều hơn số bi xanh nên biến cố lấy bi đỏ dễ xảy ra hơn.'
      },
      {
        id: 'q10-5-7',
        text: 'Gieo xúc xắc. Biến cố “ra số chẵn” gồm:',
        options: [
          '2, 4, 6',
          '1, 3, 5',
          '1, 2, 3',
          '4, 5, 6'
        ],
        correctAnswerIndex: 0,
        explanation: 'Các số chẵn trên xúc xắc là 2, 4, 6.'
      },
      {
        id: 'q10-5-8',
        text: 'Gieo xúc xắc. Biến cố “ra số lẻ” gồm:',
        options: [
          '1, 3, 5',
          '2, 4, 6',
          '1, 2, 3',
          '3, 4, 5'
        ],
        correctAnswerIndex: 0,
        explanation: 'Các số lẻ trên xúc xắc là 1, 3, 5.'
      },
      {
        id: 'q10-5-9',
        text: 'Xác suất thực nghiệm luôn nằm trong khoảng:',
        options: ['Từ 0 đến 1', 'Lớn hơn 1', 'Nhỏ hơn 0', 'Từ -1 đến 1'],
        correctAnswerIndex: 0,
        explanation: 'Xác suất thực nghiệm là tỉ số giữa số lần xảy ra và tổng số lần thử nên luôn từ 0 đến 1.'
      },
      {
        id: 'q10-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Phép thử ngẫu nhiên, biến cố và xác suất thực nghiệm',
          'Số nguyên và phân số',
          'Đối xứng hình phẳng',
          'Chu vi và diện tích'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào phép thử ngẫu nhiên, biến cố và xác suất thực nghiệm.'
      }
    ]
  }
];

export const chapter10Topics: Topic[] = [
  ...chapter10CoreTopics,
  ...chapter10ExamTopics
];