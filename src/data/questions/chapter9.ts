import { Topic } from '../../types';
import { chapter9ExamTopics } from './chapter9-exams';

export const chapter9CoreTopics: Topic[] = [
  {
    id: 'c9-t1',
    title: 'Đọc và nhận xét dữ liệu từ bảng',
    description: 'Biết đọc dữ liệu từ bảng thống kê và đưa ra các nhận xét đơn giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q9-1-1',
        text: 'Từ một bảng thống kê, ta có thể biết:',
        options: [
          'Số lượng của từng nhóm đối tượng',
          'Cách vẽ tam giác',
          'Cách tính phân số',
          'Số đo một góc bất kì'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng thống kê giúp ta biết số lượng hoặc thông tin của từng nhóm đối tượng.'
      },
      {
        id: 'q9-1-2',
        text: 'Khi đọc bảng thống kê, ta cần chú ý:',
        options: [
          'Tên hàng, tên cột và số liệu',
          'Chỉ màu của bảng',
          'Chỉ khung bảng',
          'Chỉ hình minh họa'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tên hàng, tên cột và số liệu là những thông tin quan trọng nhất trong bảng.'
      },
      {
        id: 'q9-1-3',
        text: 'Nếu bảng cho biết số học sinh của 4 tổ lần lượt là 8, 10, 7, 9 thì tổ có nhiều học sinh nhất là:',
        options: ['Tổ 1', 'Tổ 2', 'Tổ 3', 'Tổ 4'],
        correctAnswerIndex: 1,
        explanation: 'Trong các số 8, 10, 7, 9 thì 10 là lớn nhất, tương ứng với tổ 2.'
      },
      {
        id: 'q9-1-4',
        text: 'Nếu bảng cho biết số cây của 3 lớp là 12, 15, 9 thì lớp có ít cây nhất có số cây là:',
        options: ['12', '15', '9', '6'],
        correctAnswerIndex: 2,
        explanation: 'Trong các số 12, 15, 9 thì 9 là nhỏ nhất.'
      },
      {
        id: 'q9-1-5',
        text: 'Từ bảng dữ liệu, ta có thể:',
        options: [
          'So sánh các giá trị với nhau',
          'Dựng hình đối xứng',
          'Tính chu vi hình tròn',
          'Tìm số đối của số nguyên'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng dữ liệu giúp ta so sánh các giá trị dễ dàng.'
      },
      {
        id: 'q9-1-6',
        text: 'Một nhận xét đúng từ bảng số liệu là:',
        options: [
          'Nhóm có số lớn hơn thì nhiều hơn',
          'Mọi nhóm luôn bằng nhau',
          'Không thể so sánh',
          'Số liệu không có ý nghĩa'
        ],
        correctAnswerIndex: 0,
        explanation: 'Từ bảng số liệu, ta có thể nhận xét nhóm nào có số lượng lớn hơn hoặc nhỏ hơn.'
      },
      {
        id: 'q9-1-7',
        text: 'Nếu bảng cho biết số quả bóng của các bạn là 3, 5, 5, 2 thì số lượng xuất hiện nhiều nhất là:',
        options: ['2', '3', '5', '10'],
        correctAnswerIndex: 2,
        explanation: 'Số 5 xuất hiện hai lần, nhiều hơn các số khác.'
      },
      {
        id: 'q9-1-8',
        text: 'Mục đích của việc đọc bảng thống kê là:',
        options: [
          'Hiểu và rút ra thông tin từ dữ liệu',
          'Chỉ để nhìn bảng',
          'Chỉ để tô màu',
          'Không có mục đích gì'
        ],
        correctAnswerIndex: 0,
        explanation: 'Việc đọc bảng nhằm hiểu dữ liệu và rút ra thông tin cần thiết.'
      },
      {
        id: 'q9-1-9',
        text: 'Nếu bảng dữ liệu về số bạn thích từng môn học, ta có thể biết:',
        options: [
          'Môn nào được thích nhiều nhất',
          'Chiều cao từng bạn',
          'Chu vi lớp học',
          'Số đo góc vuông'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng dữ liệu này cho biết môn nào được nhiều bạn lựa chọn nhất.'
      },
      {
        id: 'q9-1-10',
        text: 'Một bảng số liệu rõ ràng giúp ta:',
        options: [
          'Nhận xét dễ hơn',
          'Khó hiểu hơn',
          'Không dùng được',
          'Chỉ để trang trí'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng rõ ràng sẽ giúp ta quan sát và nhận xét dễ dàng hơn.'
      }
    ]
  },
  {
    id: 'c9-t2',
    title: 'Đọc và nhận xét dữ liệu từ biểu đồ',
    description: 'Biết đọc thông tin từ biểu đồ tranh, biểu đồ cột và đưa ra nhận xét phù hợp.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q9-2-1',
        text: 'Biểu đồ cột giúp ta:',
        options: [
          'So sánh số lượng giữa các nhóm',
          'Dựng đường tròn',
          'Tính diện tích tam giác',
          'Giải phương trình'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ cột dùng để biểu diễn và so sánh số lượng giữa các nhóm.'
      },
      {
        id: 'q9-2-2',
        text: 'Trong biểu đồ cột, cột cao hơn thường cho biết:',
        options: [
          'Giá trị lớn hơn',
          'Giá trị nhỏ hơn',
          'Không có ý nghĩa',
          'Giá trị bằng 0'
        ],
        correctAnswerIndex: 0,
        explanation: 'Cột cao hơn thường biểu thị giá trị lớn hơn.'
      },
      {
        id: 'q9-2-3',
        text: 'Biểu đồ tranh có ưu điểm là:',
        options: [
          'Trực quan, dễ nhìn',
          'Khó hiểu hơn bảng',
          'Không biểu diễn được dữ liệu',
          'Chỉ dùng cho số rất lớn'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ tranh thường trực quan và dễ nhìn.'
      },
      {
        id: 'q9-2-4',
        text: 'Khi đọc biểu đồ, ta cần chú ý:',
        options: [
          'Tên biểu đồ, các nhãn và số liệu',
          'Chỉ màu sắc',
          'Chỉ khung biểu đồ',
          'Chỉ hình vẽ bên ngoài'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tên biểu đồ, nhãn và số liệu là thông tin quan trọng nhất khi đọc biểu đồ.'
      },
      {
        id: 'q9-2-5',
        text: 'Từ biểu đồ cột về số cây trồng của các lớp, ta có thể biết:',
        options: [
          'Lớp nào trồng nhiều cây nhất',
          'Lớp nào học giỏi nhất',
          'Chiều cao lớp học',
          'Số đo góc trong lớp'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ cột giúp ta biết lớp nào có số cây nhiều nhất.'
      },
      {
        id: 'q9-2-6',
        text: 'Nếu hai cột trong biểu đồ cao bằng nhau thì:',
        options: [
          'Hai nhóm có giá trị bằng nhau',
          'Hai nhóm không thể so sánh',
          'Một nhóm lớn hơn',
          'Một nhóm nhỏ hơn'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai cột cao bằng nhau thì biểu thị hai giá trị bằng nhau.'
      },
      {
        id: 'q9-2-7',
        text: 'Biểu đồ tranh thường dùng:',
        options: [
          'Hình ảnh lặp lại để thể hiện số lượng',
          'Đường chéo để đo góc',
          'Số âm để biểu diễn hình học',
          'Phân số để thay cho tên'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ tranh thường dùng các hình ảnh lặp lại để biểu diễn số lượng.'
      },
      {
        id: 'q9-2-8',
        text: 'Khi phân tích biểu đồ, ta có thể:',
        options: [
          'Đưa ra so sánh và nhận xét',
          'Chỉ đọc tên biểu đồ',
          'Không kết luận được gì',
          'Chỉ tô màu lại biểu đồ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Phân tích biểu đồ giúp ta đưa ra nhận xét và so sánh giữa các nhóm.'
      },
      {
        id: 'q9-2-9',
        text: 'Một biểu đồ dễ hiểu thường có:',
        options: [
          'Tiêu đề rõ ràng và số liệu hợp lí',
          'Không có tiêu đề',
          'Không có số liệu',
          'Chỉ có hình vẽ trang trí'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ rõ ràng cần có tiêu đề và số liệu hợp lí.'
      },
      {
        id: 'q9-2-10',
        text: 'Từ biểu đồ cột, ta dễ nhận ra:',
        options: [
          'Nhóm lớn nhất và nhóm nhỏ nhất',
          'Trục đối xứng của hình',
          'Số đo góc vuông',
          'Chu vi hình chữ nhật'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ cột giúp ta dễ nhận ra giá trị lớn nhất và nhỏ nhất.'
      }
    ]
  },
  {
    id: 'c9-t3',
    title: 'So sánh và rút ra nhận xét từ dữ liệu',
    description: 'Biết so sánh số liệu và rút ra những kết luận đơn giản từ bảng hoặc biểu đồ.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q9-3-1',
        text: 'Nếu số bạn thích kem vani là 12 và số bạn thích kem socola là 9 thì:',
        options: [
          'Kem vani được thích nhiều hơn',
          'Kem socola được thích nhiều hơn',
          'Hai loại bằng nhau',
          'Không so sánh được'
        ],
        correctAnswerIndex: 0,
        explanation: 'Vì 12 > 9 nên kem vani được thích nhiều hơn.'
      },
      {
        id: 'q9-3-2',
        text: 'Nếu số sách của tổ 1 là 15, tổ 2 là 11 thì tổ 1 nhiều hơn tổ 2:',
        options: ['2 quyển', '3 quyển', '4 quyển', '5 quyển'],
        correctAnswerIndex: 2,
        explanation: 'Tổ 1 nhiều hơn tổ 2 là $15 - 11 = 4$ quyển.'
      },
      {
        id: 'q9-3-3',
        text: 'Từ dữ liệu, nhận xét nào là hợp lí?',
        options: [
          'Nhóm có số lớn hơn thì nhiều hơn',
          'Mọi nhóm đều giống nhau',
          'Số liệu không dùng được',
          'Không thể nhận xét'
        ],
        correctAnswerIndex: 0,
        explanation: 'Khi số liệu lớn hơn thì thường biểu thị số lượng hoặc giá trị nhiều hơn.'
      },
      {
        id: 'q9-3-4',
        text: 'Nếu số cây lớp 6A là 20, lớp 6B là 20 thì:',
        options: [
          'Hai lớp trồng số cây bằng nhau',
          'Lớp 6A nhiều hơn',
          'Lớp 6B nhiều hơn',
          'Không xác định'
        ],
        correctAnswerIndex: 0,
        explanation: 'Hai lớp đều có 20 cây nên số cây bằng nhau.'
      },
      {
        id: 'q9-3-5',
        text: 'So sánh dữ liệu giúp ta:',
        options: [
          'Biết sự giống nhau hoặc khác nhau giữa các nhóm',
          'Làm mất dữ liệu',
          'Không dùng được bảng',
          'Chỉ dùng cho hình học'
        ],
        correctAnswerIndex: 0,
        explanation: 'So sánh dữ liệu giúp ta thấy sự giống nhau và khác nhau giữa các nhóm.'
      },
      {
        id: 'q9-3-6',
        text: 'Từ dữ liệu về số học sinh từng tổ, ta có thể biết:',
        options: [
          'Tổ nào đông nhất',
          'Tổ nào vẽ đẹp nhất',
          'Tổ nào có góc vuông',
          'Tổ nào có đường tròn'
        ],
        correctAnswerIndex: 0,
        explanation: 'Dữ liệu về số học sinh giúp ta biết tổ nào đông nhất.'
      },
      {
        id: 'q9-3-7',
        text: 'Nếu cột của nhóm A thấp hơn cột của nhóm B thì:',
        options: [
          'Nhóm A có giá trị nhỏ hơn nhóm B',
          'Nhóm A lớn hơn nhóm B',
          'Hai nhóm bằng nhau',
          'Không thể kết luận'
        ],
        correctAnswerIndex: 0,
        explanation: 'Trong biểu đồ cột, cột thấp hơn biểu thị giá trị nhỏ hơn.'
      },
      {
        id: 'q9-3-8',
        text: 'Một kết luận đúng từ bảng số liệu phải:',
        options: [
          'Dựa trên số liệu đã cho',
          'Dựa trên phỏng đoán không cần số liệu',
          'Không cần đọc bảng',
          'Chỉ dựa vào màu sắc'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mọi kết luận cần dựa trên dữ liệu đã cho.'
      },
      {
        id: 'q9-3-9',
        text: 'Nếu số liệu của bốn bạn là 2, 2, 5, 7 thì giá trị nhỏ nhất là:',
        options: ['2', '5', '7', '4'],
        correctAnswerIndex: 0,
        explanation: 'Trong các số 2, 2, 5, 7 thì giá trị nhỏ nhất là 2.'
      },
      {
        id: 'q9-3-10',
        text: 'Nếu số liệu của bốn bạn là 2, 2, 5, 7 thì giá trị lớn nhất là:',
        options: ['2', '5', '7', '9'],
        correctAnswerIndex: 2,
        explanation: 'Trong các số 2, 2, 5, 7 thì giá trị lớn nhất là 7.'
      }
    ]
  },
  {
    id: 'c9-t4',
    title: 'Một số đại lượng đặc trưng đơn giản',
    description: 'Làm quen với giá trị lớn nhất, nhỏ nhất và tổng đơn giản của dãy số liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q9-4-1',
        text: 'Trong dãy số 3, 5, 2, 8, giá trị lớn nhất là:',
        options: ['2', '3', '5', '8'],
        correctAnswerIndex: 3,
        explanation: 'Trong các số 3, 5, 2, 8 thì 8 là lớn nhất.'
      },
      {
        id: 'q9-4-2',
        text: 'Trong dãy số 3, 5, 2, 8, giá trị nhỏ nhất là:',
        options: ['2', '3', '5', '8'],
        correctAnswerIndex: 0,
        explanation: 'Trong các số 3, 5, 2, 8 thì 2 là nhỏ nhất.'
      },
      {
        id: 'q9-4-3',
        text: 'Tổng của các số 2, 4, 6 là:',
        options: ['10', '11', '12', '13'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $2 + 4 + 6 = 12$.'
      },
      {
        id: 'q9-4-4',
        text: 'Nếu số cây của ba lớp lần lượt là 10, 12, 8 thì tổng số cây là:',
        options: ['28', '30', '32', '34'],
        correctAnswerIndex: 1,
        explanation: 'Tổng số cây là $10 + 12 + 8 = 30$.'
      },
      {
        id: 'q9-4-5',
        text: 'Nếu số bạn của các nhóm là 6, 7, 9 thì nhóm đông nhất có:',
        options: ['6 bạn', '7 bạn', '9 bạn', '22 bạn'],
        correctAnswerIndex: 2,
        explanation: 'Nhóm đông nhất là nhóm có số lớn nhất, tức là 9 bạn.'
      },
      {
        id: 'q9-4-6',
        text: 'Nếu số bạn của các nhóm là 6, 7, 9 thì nhóm ít nhất có:',
        options: ['6 bạn', '7 bạn', '9 bạn', '3 bạn'],
        correctAnswerIndex: 0,
        explanation: 'Nhóm ít nhất là nhóm có số nhỏ nhất, tức là 6 bạn.'
      },
      {
        id: 'q9-4-7',
        text: 'Để tìm giá trị lớn nhất trong một dãy số liệu, ta cần:',
        options: [
          'So sánh các giá trị với nhau',
          'Cộng tất cả lại',
          'Nhân tất cả lại',
          'Đổi sang phân số'
        ],
        correctAnswerIndex: 0,
        explanation: 'Muốn tìm giá trị lớn nhất, ta so sánh các giá trị trong dãy.'
      },
      {
        id: 'q9-4-8',
        text: 'Để tìm tổng số lượng của nhiều nhóm, ta cần:',
        options: [
          'Cộng các số liệu lại',
          'Lấy số lớn nhất trừ số nhỏ nhất',
          'Chỉ chọn số lớn nhất',
          'Chỉ chọn số nhỏ nhất'
        ],
        correctAnswerIndex: 0,
        explanation: 'Muốn tìm tổng, ta cộng các số liệu lại.'
      },
      {
        id: 'q9-4-9',
        text: 'Nếu dữ liệu là 4, 4, 6, 10 thì tổng là:',
        options: ['18', '20', '22', '24'],
        correctAnswerIndex: 3,
        explanation: 'Ta có $4 + 4 + 6 + 10 = 24$.'
      },
      {
        id: 'q9-4-10',
        text: 'Giá trị lớn nhất và nhỏ nhất của dãy 9, 1, 5, 7 lần lượt là:',
        options: ['1 và 9', '9 và 1', '7 và 1', '9 và 5'],
        correctAnswerIndex: 1,
        explanation: 'Giá trị lớn nhất là 9, giá trị nhỏ nhất là 1.'
      }
    ]
  },
  {
    id: 'c9-t5',
    title: 'Ôn tập chương Phân tích và xử lí dữ liệu',
    description: 'Củng cố cách đọc bảng, biểu đồ, so sánh và rút ra nhận xét từ dữ liệu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=gVtCC8a5sDE',
    questions: [
      {
        id: 'q9-5-1',
        text: 'Từ bảng thống kê, ta có thể:',
        options: [
          'Đọc và so sánh số liệu',
          'Dựng hình vuông',
          'Chỉ tính chu vi',
          'Chỉ vẽ đường tròn'
        ],
        correctAnswerIndex: 0,
        explanation: 'Bảng thống kê giúp ta đọc và so sánh số liệu.'
      },
      {
        id: 'q9-5-2',
        text: 'Biểu đồ cột giúp ta:',
        options: [
          'So sánh số lượng các nhóm',
          'Tính diện tích hình tam giác',
          'Đo góc vuông',
          'Viết phân số'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ cột rất thuận tiện cho việc so sánh các nhóm dữ liệu.'
      },
      {
        id: 'q9-5-3',
        text: 'Nếu cột của nhóm A cao hơn nhóm B thì:',
        options: [
          'Nhóm A nhiều hơn nhóm B',
          'Nhóm A ít hơn nhóm B',
          'Hai nhóm bằng nhau',
          'Không thể biết'
        ],
        correctAnswerIndex: 0,
        explanation: 'Cột cao hơn biểu thị giá trị lớn hơn.'
      },
      {
        id: 'q9-5-4',
        text: 'Nếu số liệu là 3, 8, 5 thì giá trị lớn nhất là:',
        options: ['3', '5', '8', '16'],
        correctAnswerIndex: 2,
        explanation: 'Trong các số 3, 8, 5 thì 8 là lớn nhất.'
      },
      {
        id: 'q9-5-5',
        text: 'Nếu số liệu là 3, 8, 5 thì giá trị nhỏ nhất là:',
        options: ['3', '5', '8', '0'],
        correctAnswerIndex: 0,
        explanation: 'Trong các số 3, 8, 5 thì 3 là nhỏ nhất.'
      },
      {
        id: 'q9-5-6',
        text: 'Tổng của 4, 6, 7 là:',
        options: ['15', '16', '17', '18'],
        correctAnswerIndex: 2,
        explanation: 'Ta có $4 + 6 + 7 = 17$.'
      },
      {
        id: 'q9-5-7',
        text: 'Một nhận xét đúng phải:',
        options: [
          'Dựa trên dữ liệu đã cho',
          'Dựa trên đoán mò',
          'Không cần bảng hay biểu đồ',
          'Chỉ dựa trên màu sắc'
        ],
        correctAnswerIndex: 0,
        explanation: 'Mọi nhận xét đúng đều phải dựa trên dữ liệu đã cho.'
      },
      {
        id: 'q9-5-8',
        text: 'Biểu đồ tranh có ưu điểm:',
        options: [
          'Sinh động, dễ nhìn',
          'Khó đọc hơn mọi trường hợp',
          'Không thể dùng cho dữ liệu',
          'Chỉ dùng để trang trí'
        ],
        correctAnswerIndex: 0,
        explanation: 'Biểu đồ tranh thường sinh động và dễ nhìn.'
      },
      {
        id: 'q9-5-9',
        text: 'Từ dữ liệu, ta có thể biết nhóm nào:',
        options: [
          'Nhiều nhất hoặc ít nhất',
          'Có góc vuông',
          'Có đoạn thẳng dài hơn',
          'Có hình tròn'
        ],
        correctAnswerIndex: 0,
        explanation: 'Từ dữ liệu, ta có thể xác định nhóm lớn nhất hoặc nhỏ nhất.'
      },
      {
        id: 'q9-5-10',
        text: 'Nội dung trọng tâm của chương này là:',
        options: [
          'Đọc, phân tích và xử lí dữ liệu từ bảng và biểu đồ',
          'Phân số và số thập phân',
          'Hình học cơ bản',
          'Tính đối xứng'
        ],
        correctAnswerIndex: 0,
        explanation: 'Chương này tập trung vào phân tích và xử lí dữ liệu từ bảng và biểu đồ.'
      }
    ]
  }
];

export const chapter9Topics: Topic[] = [
  ...chapter9CoreTopics,
  ...chapter9ExamTopics
];