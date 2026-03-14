import { Topic } from '../../types';

export const chapter2Topics: Topic[] = [
  {
    id: 'c2-t1',
    title: 'Mở rộng khái niệm phân số',
    description: 'Phân số có tử và mẫu là số nguyên.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7vVqLQk2D9Y',
    questions: [
      {
        id: 'q2-1-1',
        text: 'Phân số nào sau đây bằng phân số $\\frac{-3}{4}$?',
        options: ['$\\frac{3}{-4}$', '$\\frac{-6}{-8}$', '$\\frac{9}{12}$', '$\\frac{3}{4}$'],
        correctAnswerIndex: 0,
        explanation: 'Nhân cả tử và mẫu với $-1$ ta được phân số bằng nó: $\\frac{(-3)\\times(-1)}{4\\times(-1)} = \\frac{3}{-4}$.'
      },
      {
        id: 'q2-1-2',
        text: 'Điều kiện để $\\frac{a}{b}$ là một phân số là:',
        options: ['$a, b$ là số tự nhiên, $b \\neq 0$', '$a, b$ là số nguyên, $b \\neq 0$', '$a$ là số nguyên, $b$ là số tự nhiên khác $0$', '$a, b$ là số nguyên'],
        correctAnswerIndex: 1,
        explanation: 'Phân số có dạng $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}$ và $b \\neq 0$.'
      },
      {
        id: 'q2-1-3',
        text: 'Phân số nào sau đây không phải là phân số?',
        options: ['$\\frac{3}{5}$', '$\\frac{-2}{7}$', '$\\frac{4}{0}$', '$\\frac{0}{9}$'],
        correctAnswerIndex: 2,
        explanation: 'Mẫu số của phân số phải khác 0 nên $\\frac{4}{0}$ không phải là phân số.'
      },
      {
        id: 'q2-1-4',
        text: 'Trong các phân số sau, phân số nào bằng $\\frac{2}{-5}$?',
        options: ['$\\frac{-2}{5}$', '$\\frac{2}{5}$', '$\\frac{-4}{-10}$', '$\\frac{4}{10}$'],
        correctAnswerIndex: 0,
        explanation: 'Dấu âm có thể đặt ở tử hoặc mẫu: $\\frac{2}{-5} = \\frac{-2}{5}$.'
      },
      {
        id: 'q2-1-5',
        text: 'Phân số $\\frac{0}{-7}$ có giá trị bằng:',
        options: ['-7', '0', '7', 'Không xác định'],
        correctAnswerIndex: 1,
        explanation: 'Tử số bằng 0 và mẫu khác 0 thì phân số có giá trị bằng 0.'
      },
      {
        id: 'q2-1-6',
        text: 'Phân số nào sau đây bằng $\\frac{5}{8}$?',
        options: ['$\\frac{10}{16}$', '$\\frac{15}{16}$', '$\\frac{20}{24}$', '$\\frac{25}{32}$'],
        correctAnswerIndex: 0,
        explanation: 'Nhân cả tử và mẫu với 2: $\\frac{5}{8}=\\frac{10}{16}$.'
      },
      {
        id: 'q2-1-7',
        text: 'Phân số $\\frac{-6}{9}$ và phân số nào dưới đây bằng nhau?',
        options: ['$\\frac{2}{3}$', '$\\frac{-2}{3}$', '$\\frac{6}{-18}$', '$\\frac{-12}{27}$'],
        correctAnswerIndex: 1,
        explanation: 'Rút gọn $\\frac{-6}{9}$ bằng cách chia cả tử và mẫu cho 3 được $\\frac{-2}{3}$.'
      },
      {
        id: 'q2-1-8',
        text: 'Tử số của phân số $\\frac{-11}{13}$ là:',
        options: ['11', '-11', '13', '-13'],
        correctAnswerIndex: 1,
        explanation: 'Tử số là số ở trên dấu gạch ngang, ở đây là -11.'
      },
      {
        id: 'q2-1-9',
        text: 'Mẫu số của phân số $\\frac{-11}{13}$ là:',
        options: ['11', '-11', '13', '-13'],
        correctAnswerIndex: 2,
        explanation: 'Mẫu số là số ở dưới dấu gạch ngang, ở đây là 13.'
      },
      {
        id: 'q2-1-10',
        text: 'Phân số nào sau đây là phân số âm?',
        options: ['$\\frac{3}{7}$', '$\\frac{-4}{9}$', '$\\frac{-5}{-6}$', '$\\frac{0}{8}$'],
        correctAnswerIndex: 1,
        explanation: 'Phân số âm là phân số có giá trị nhỏ hơn 0. $\\frac{-4}{9}$ là phân số âm.'
      },
      {
        id: 'q2-1-11',
        text: 'Phân số nào sau đây là phân số dương?',
        options: ['$\\frac{-3}{4}$', '$\\frac{3}{-4}$', '$\\frac{-3}{-4}$', '$\\frac{0}{5}$'],
        correctAnswerIndex: 2,
        explanation: 'Âm chia âm bằng dương nên $\\frac{-3}{-4}$ là phân số dương.'
      },
      {
        id: 'q2-1-12',
        text: 'Giá trị của phân số $\\frac{-12}{-3}$ là:',
        options: ['-4', '4', '3', '-3'],
        correctAnswerIndex: 1,
        explanation: 'Âm chia âm bằng dương nên $\\frac{-12}{-3}=4$.'
      },
      {
        id: 'q2-1-13',
        text: 'Phân số nào sau đây bằng 1?',
        options: ['$\\frac{5}{-5}$', '$\\frac{-7}{7}$', '$\\frac{9}{9}$', '$\\frac{0}{6}$'],
        correctAnswerIndex: 2,
        explanation: 'Phân số có tử bằng mẫu và mẫu khác 0 thì bằng 1.'
      },
      {
        id: 'q2-1-14',
        text: 'Phân số nào sau đây bằng -1?',
        options: ['$\\frac{-8}{8}$', '$\\frac{8}{8}$', '$\\frac{-8}{-8}$', '$\\frac{0}{8}$'],
        correctAnswerIndex: 0,
        explanation: 'Phân số có tử là số đối của mẫu thì bằng -1.'
      },
      {
        id: 'q2-1-15',
        text: 'Trong các phân số sau, phân số nào có giá trị bằng 0?',
        options: ['$\\frac{0}{15}$', '$\\frac{15}{0}$', '$\\frac{-15}{15}$', '$\\frac{15}{15}$'],
        correctAnswerIndex: 0,
        explanation: 'Phân số có tử bằng 0 và mẫu khác 0 thì có giá trị bằng 0.'
      },
      {
        id: 'q2-1-16',
        text: 'Viết số nguyên $-3$ dưới dạng phân số, ta được:',
        options: ['$\\frac{-3}{1}$', '$\\frac{1}{-3}$', '$\\frac{3}{1}$', '$\\frac{-1}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Mọi số nguyên đều viết được dưới dạng phân số có mẫu bằng 1.'
      },
      {
        id: 'q2-1-17',
        text: 'Phân số $\\frac{14}{-21}$ bằng phân số nào sau đây?',
        options: ['$\\frac{2}{3}$', '$\\frac{-2}{3}$', '$\\frac{2}{-1}$', '$\\frac{-14}{-21}$'],
        correctAnswerIndex: 1,
        explanation: 'Rút gọn $\\frac{14}{-21}$ bằng cách chia cả tử và mẫu cho 7 được $\\frac{2}{-3}=\\frac{-2}{3}$.'
      },
      {
        id: 'q2-1-18',
        text: 'Chọn phát biểu đúng:',
        options: ['Mẫu số của phân số có thể bằng 0', 'Tử số của phân số phải là số tự nhiên', 'Tử và mẫu của phân số đều là số nguyên, mẫu khác 0', 'Mẫu số của phân số luôn dương'],
        correctAnswerIndex: 2,
        explanation: 'Đây là định nghĩa đúng của phân số.'
      },
      {
        id: 'q2-1-19',
        text: 'Phân số nào sau đây bằng $\\frac{-1}{2}$?',
        options: ['$\\frac{2}{-4}$', '$\\frac{1}{2}$', '$\\frac{-2}{-4}$', '$\\frac{4}{-6}$'],
        correctAnswerIndex: 0,
        explanation: '$\\frac{2}{-4}=\\frac{-1}{2}$ sau khi rút gọn.'
      },
      {
        id: 'q2-1-20',
        text: 'Phân số $\\frac{a}{b}$ bằng 0 khi:',
        options: ['$a=0, b\\neq0$', '$a\\neq0, b=0$', '$a=b$', '$a=-b$'],
        correctAnswerIndex: 0,
        explanation: 'Phân số bằng 0 khi tử số bằng 0 và mẫu số khác 0.'
      }
    ]
  },
  {
    id: 'c2-t2',
    title: 'Tính chất cơ bản của phân số',
    description: 'Kỹ năng rút gọn về phân số tối giản.',
    youtubeUrl: 'https://www.youtube.com/watch?v=5mK7Qx9Lr2A',
    questions: [
      {
        id: 'q2-2-1',
        text: 'Phân số tối giản của phân số $\\frac{15}{20}$ là:',
        options: ['$\\frac{3}{4}$', '$\\frac{5}{4}$', '$\\frac{3}{5}$', '$\\frac{1}{2}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho $\\text{ƯCLN}(15, 20) = 5$ ta được $\\frac{3}{4}$.'
      },
      {
        id: 'q2-2-2',
        text: 'Phân số nào sau đây là phân số tối giản?',
        options: ['6/8', '14/21', '5/12', '9/15'],
        correctAnswerIndex: 2,
        explanation: 'Phân số tối giản là phân số mà tử và mẫu chỉ có ước chung là 1 và -1. ƯCLN(5, 12) = 1.'
      },
      {
        id: 'q2-2-3',
        text: 'Rút gọn phân số $\\frac{18}{24}$ ta được:',
        options: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{6}{8}$', '$\\frac{9}{12}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 6: $\\frac{18}{24}=\\frac{3}{4}$.'
      },
      {
        id: 'q2-2-4',
        text: 'Phân số $\\frac{7}{9}$ được nhân cả tử và mẫu với 3 thì được:',
        options: ['$\\frac{10}{12}$', '$\\frac{21}{27}$', '$\\frac{14}{18}$', '$\\frac{7}{27}$'],
        correctAnswerIndex: 1,
        explanation: 'Nhân cả tử và mẫu với 3: $\\frac{7}{9}=\\frac{21}{27}$.'
      },
      {
        id: 'q2-2-5',
        text: 'Phân số $\\frac{20}{28}$ sau khi rút gọn là:',
        options: ['$\\frac{5}{7}$', '$\\frac{10}{14}$', '$\\frac{4}{7}$', '$\\frac{2}{3}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 4 được $\\frac{5}{7}$.'
      },
      {
        id: 'q2-2-6',
        text: 'Phân số nào bằng $\\frac{4}{11}$?',
        options: ['$\\frac{8}{22}$', '$\\frac{12}{22}$', '$\\frac{16}{33}$', '$\\frac{20}{44}$'],
        correctAnswerIndex: 0,
        explanation: 'Nhân cả tử và mẫu với 2: $\\frac{4}{11}=\\frac{8}{22}$.'
      },
      {
        id: 'q2-2-7',
        text: 'Rút gọn phân số $\\frac{-16}{40}$ ta được:',
        options: ['$\\frac{-2}{5}$', '$\\frac{2}{5}$', '$\\frac{-4}{5}$', '$\\frac{4}{10}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 8: $\\frac{-16}{40}=\\frac{-2}{5}$.'
      },
      {
        id: 'q2-2-8',
        text: 'Phân số nào dưới đây không bằng $\\frac{3}{5}$?',
        options: ['$\\frac{6}{10}$', '$\\frac{9}{15}$', '$\\frac{12}{20}$', '$\\frac{15}{20}$'],
        correctAnswerIndex: 3,
        explanation: '$\\frac{15}{20}=\\frac{3}{4}$, không bằng $\\frac{3}{5}$.'
      },
      {
        id: 'q2-2-9',
        text: 'Để được phân số bằng $\\frac{2}{7}$, ta có thể:',
        options: ['Nhân tử với 2, mẫu với 3', 'Chia tử và mẫu cho cùng một số khác 0', 'Cộng tử và mẫu với cùng một số', 'Trừ tử và mẫu với cùng một số'],
        correctAnswerIndex: 1,
        explanation: 'Tính chất cơ bản của phân số là nhân hoặc chia cả tử và mẫu cho cùng một số khác 0.'
      },
      {
        id: 'q2-2-10',
        text: 'Phân số $\\frac{35}{49}$ rút gọn thành:',
        options: ['$\\frac{5}{7}$', '$\\frac{7}{5}$', '$\\frac{15}{21}$', '$\\frac{10}{14}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 7 được $\\frac{5}{7}$.'
      },
      {
        id: 'q2-2-11',
        text: 'ƯCLN của 24 và 36 là:',
        options: ['6', '8', '12', '18'],
        correctAnswerIndex: 2,
        explanation: 'ƯCLN(24, 36) = 12.'
      },
      {
        id: 'q2-2-12',
        text: 'Phân số tối giản của $\\frac{24}{36}$ là:',
        options: ['$\\frac{2}{3}$', '$\\frac{3}{2}$', '$\\frac{4}{6}$', '$\\frac{6}{9}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 12 được $\\frac{2}{3}$.'
      },
      {
        id: 'q2-2-13',
        text: 'Phân số nào sau đây là phân số tối giản?',
        options: ['$\\frac{8}{12}$', '$\\frac{11}{13}$', '$\\frac{18}{24}$', '$\\frac{21}{35}$'],
        correctAnswerIndex: 1,
        explanation: '11 và 13 chỉ có ước chung là 1.'
      },
      {
        id: 'q2-2-14',
        text: 'Phân số $\\frac{-9}{12}$ rút gọn được thành:',
        options: ['$\\frac{-3}{4}$', '$\\frac{3}{4}$', '$\\frac{-9}{4}$', '$\\frac{3}{-12}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 3: $\\frac{-9}{12}=\\frac{-3}{4}$.'
      },
      {
        id: 'q2-2-15',
        text: 'Nếu nhân cả tử và mẫu của một phân số với -2 thì:',
        options: ['Giá trị phân số thay đổi', 'Giá trị phân số không đổi', 'Phân số luôn dương', 'Phân số luôn âm'],
        correctAnswerIndex: 1,
        explanation: 'Nhân cả tử và mẫu với cùng một số khác 0 thì giá trị phân số không đổi.'
      },
      {
        id: 'q2-2-16',
        text: 'Rút gọn $\\frac{45}{60}$ ta được:',
        options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{9}{12}$', '$\\frac{15}{20}$'],
        correctAnswerIndex: 0,
        explanation: 'Chia cả tử và mẫu cho 15 được $\\frac{3}{4}$.'
      },
      {
        id: 'q2-2-17',
        text: 'Phân số nào bằng $\\frac{-5}{6}$?',
        options: ['$\\frac{10}{-12}$', '$\\frac{-10}{10}$', '$\\frac{15}{18}$', '$\\frac{-20}{18}$'],
        correctAnswerIndex: 0,
        explanation: '$\\frac{10}{-12}=\\frac{-5}{6}$.'
      },
      {
        id: 'q2-2-18',
        text: 'Trong các phân số sau, phân số nào bằng nhau?',
        options: ['$\\frac{4}{6}$ và $\\frac{3}{8}$', '$\\frac{6}{9}$ và $\\frac{2}{3}$', '$\\frac{5}{10}$ và $\\frac{3}{4}$', '$\\frac{7}{14}$ và $\\frac{2}{5}$'],
        correctAnswerIndex: 1,
        explanation: '$\\frac{6}{9}$ rút gọn thành $\\frac{2}{3}$.'
      },
      {
        id: 'q2-2-19',
        text: 'Phân số $\\frac{1}{1}$ là phân số:',
        options: ['Tối giản', 'Không tối giản', 'Âm', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: '1 và 1 chỉ có ước chung là 1 nên $\\frac{1}{1}$ là phân số tối giản.'
      },
      {
        id: 'q2-2-20',
        text: 'Muốn tìm phân số tối giản của một phân số, ta thường:',
        options: ['Nhân tử và mẫu với cùng một số', 'Chia tử và mẫu cho ƯCLN của chúng', 'Cộng tử và mẫu với cùng một số', 'Đổi dấu tử và mẫu'],
        correctAnswerIndex: 1,
        explanation: 'Chia cả tử và mẫu cho ƯCLN của chúng để được phân số tối giản.'
      }
    ]
  },
  {
    id: 'c2-t3',
    title: 'Quy đồng mẫu nhiều phân số',
    description: 'Cách tìm Mẫu số chung (thông qua BCNN).',
    youtubeUrl: 'https://www.youtube.com/watch?v=3pT8YkL1mNc',
    questions: [
      {
        id: 'q2-3-1',
        text: 'Mẫu số chung nhỏ nhất của hai phân số $\\frac{1}{6}$ và $\\frac{3}{8}$ là:',
        options: ['14', '24', '48', '12'],
        correctAnswerIndex: 1,
        explanation: 'Mẫu số chung nhỏ nhất là BCNN(6, 8) = 24.'
      },
      {
        id: 'q2-3-2',
        text: 'Quy đồng mẫu số hai phân số $\\frac{2}{3}$ và $\\frac{1}{4}$ ta được:',
        options: ['$\\frac{8}{12}$ và $\\frac{3}{12}$', '$\\frac{2}{12}$ và $\\frac{1}{12}$', '$\\frac{6}{12}$ và $\\frac{4}{12}$', '$\\frac{8}{12}$ và $\\frac{4}{12}$'],
        correctAnswerIndex: 0,
        explanation: 'MSC là $12$. $\\frac{2}{3} = \\frac{8}{12}$ và $\\frac{1}{4} = \\frac{3}{12}$.'
      },
      {
        id: 'q2-3-3',
        text: 'BCNN của 5 và 7 là:',
        options: ['12', '35', '70', '10'],
        correctAnswerIndex: 1,
        explanation: 'Vì 5 và 7 nguyên tố cùng nhau nên BCNN là $5\\times7=35$.'
      },
      {
        id: 'q2-3-4',
        text: 'Quy đồng hai phân số $\\frac{1}{5}$ và $\\frac{2}{7}$ với mẫu số chung là:',
        options: ['10', '12', '35', '14'],
        correctAnswerIndex: 2,
        explanation: 'BCNN(5,7)=35.'
      },
      {
        id: 'q2-3-5',
        text: 'Phân số $\\frac{3}{4}$ quy đồng với mẫu số 20 là:',
        options: ['$\\frac{12}{20}$', '$\\frac{15}{20}$', '$\\frac{16}{20}$', '$\\frac{18}{20}$'],
        correctAnswerIndex: 1,
        explanation: 'Nhân cả tử và mẫu với 5: $\\frac{3}{4}=\\frac{15}{20}$.'
      },
      {
        id: 'q2-3-6',
        text: 'Phân số $\\frac{5}{6}$ quy đồng với mẫu số 24 là:',
        options: ['$\\frac{10}{24}$', '$\\frac{15}{24}$', '$\\frac{20}{24}$', '$\\frac{25}{24}$'],
        correctAnswerIndex: 2,
        explanation: 'Nhân cả tử và mẫu với 4: $\\frac{5}{6}=\\frac{20}{24}$.'
      },
      {
        id: 'q2-3-7',
        text: 'Mẫu số chung nhỏ nhất của $\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{6}$ là:',
        options: ['6', '12', '24', '18'],
        correctAnswerIndex: 1,
        explanation: 'BCNN(3,4,6)=12.'
      },
      {
        id: 'q2-3-8',
        text: 'Quy đồng $\\frac{1}{2}$ và $\\frac{5}{6}$ với mẫu số chung nhỏ nhất, ta được:',
        options: ['$\\frac{3}{6}$ và $\\frac{5}{6}$', '$\\frac{1}{6}$ và $\\frac{5}{6}$', '$\\frac{2}{6}$ và $\\frac{5}{6}$', '$\\frac{6}{12}$ và $\\frac{10}{12}$'],
        correctAnswerIndex: 0,
        explanation: 'MSCNN là 6. $\\frac{1}{2}=\\frac{3}{6}$.'
      },
      {
        id: 'q2-3-9',
        text: 'BCNN của 8 và 12 là:',
        options: ['4', '24', '48', '96'],
        correctAnswerIndex: 1,
        explanation: 'BCNN(8,12)=24.'
      },
      {
        id: 'q2-3-10',
        text: 'Quy đồng $\\frac{3}{8}$ và $\\frac{5}{12}$ với mẫu số chung nhỏ nhất, mẫu chung là:',
        options: ['12', '24', '48', '96'],
        correctAnswerIndex: 1,
        explanation: 'BCNN(8,12)=24.'
      },
      {
        id: 'q2-3-11',
        text: '$\\frac{3}{8}$ được quy đồng thành phân số có mẫu 24 là:',
        options: ['$\\frac{6}{24}$', '$\\frac{9}{24}$', '$\\frac{12}{24}$', '$\\frac{15}{24}$'],
        correctAnswerIndex: 1,
        explanation: 'Nhân cả tử và mẫu với 3: $\\frac{3}{8}=\\frac{9}{24}$.'
      },
      {
        id: 'q2-3-12',
        text: '$\\frac{5}{12}$ được quy đồng thành phân số có mẫu 24 là:',
        options: ['$\\frac{8}{24}$', '$\\frac{9}{24}$', '$\\frac{10}{24}$', '$\\frac{15}{24}$'],
        correctAnswerIndex: 2,
        explanation: 'Nhân cả tử và mẫu với 2: $\\frac{5}{12}=\\frac{10}{24}$.'
      },
      {
        id: 'q2-3-13',
        text: 'Mẫu số chung của $\\frac{2}{9}$ và $\\frac{1}{3}$ có thể là:',
        options: ['3', '6', '9', '12'],
        correctAnswerIndex: 2,
        explanation: '9 là mẫu số chung vì cả 9 và 3 đều chia hết cho 9? Chính xác là 9 chia hết cho 3 nên 9 là MSC.'
      },
      {
        id: 'q2-3-14',
        text: 'Quy đồng $\\frac{1}{3}$ thành phân số có mẫu 9, ta được:',
        options: ['$\\frac{1}{9}$', '$\\frac{2}{9}$', '$\\frac{3}{9}$', '$\\frac{6}{9}$'],
        correctAnswerIndex: 2,
        explanation: 'Nhân cả tử và mẫu với 3: $\\frac{1}{3}=\\frac{3}{9}$.'
      },
      {
        id: 'q2-3-15',
        text: 'BCNN của 4, 6 và 10 là:',
        options: ['20', '40', '60', '120'],
        correctAnswerIndex: 2,
        explanation: 'BCNN(4,6,10)=60.'
      },
      {
        id: 'q2-3-16',
        text: 'Mẫu số chung nhỏ nhất của $\\frac{2}{4}, \\frac{3}{6}, \\frac{5}{10}$ là:',
        options: ['10', '20', '30', '60'],
        correctAnswerIndex: 3,
        explanation: 'BCNN(4,6,10)=60.'
      },
      {
        id: 'q2-3-17',
        text: 'Quy đồng $\\frac{7}{15}$ và $\\frac{2}{5}$ với mẫu số chung nhỏ nhất, ta được:',
        options: ['$\\frac{7}{15}$ và $\\frac{6}{15}$', '$\\frac{14}{30}$ và $\\frac{4}{10}$', '$\\frac{21}{45}$ và $\\frac{18}{45}$', '$\\frac{35}{75}$ và $\\frac{30}{75}$'],
        correctAnswerIndex: 0,
        explanation: 'MSCNN của 15 và 5 là 15, nên $\\frac{2}{5}=\\frac{6}{15}$.'
      },
      {
        id: 'q2-3-18',
        text: 'Quy đồng $\\frac{-1}{2}$ và $\\frac{2}{3}$ với mẫu số 6, ta được:',
        options: ['$\\frac{-3}{6}$ và $\\frac{4}{6}$', '$\\frac{-1}{6}$ và $\\frac{2}{6}$', '$\\frac{3}{6}$ và $\\frac{4}{6}$', '$\\frac{-2}{6}$ và $\\frac{4}{6}$'],
        correctAnswerIndex: 0,
        explanation: '$\\frac{-1}{2}=\\frac{-3}{6}$ và $\\frac{2}{3}=\\frac{4}{6}$.'
      },
      {
        id: 'q2-3-19',
        text: 'Khi quy đồng mẫu số các phân số, ta cần:',
        options: ['Đưa các phân số về cùng tử số', 'Đưa các phân số về cùng mẫu số', 'Đưa các phân số về phân số tối giản', 'Đổi tất cả thành số nguyên'],
        correctAnswerIndex: 1,
        explanation: 'Quy đồng mẫu số là đưa các phân số về cùng một mẫu số.'
      },
      {
        id: 'q2-3-20',
        text: 'Mục đích chính của việc quy đồng mẫu số là để:',
        options: ['Rút gọn phân số', 'So sánh hoặc cộng trừ phân số dễ hơn', 'Đổi phân số thành số nguyên', 'Đổi mẫu số thành 1'],
        correctAnswerIndex: 1,
        explanation: 'Quy đồng giúp so sánh, cộng và trừ các phân số thuận tiện hơn.'
      }
    ]
  },
  {
    id: 'c2-t4',
    title: 'So sánh phân số',
    description: 'Các quy tắc so sánh cùng mẫu và khác mẫu.',
    youtubeUrl: 'https://www.youtube.com/watch?v=9fR2xWq7aBk',
    questions: [
      {
        id: 'q2-4-1',
        text: 'So sánh hai phân số $\\frac{-3}{5}$ và $\\frac{-4}{5}$:',
        options: ['$\\frac{-3}{5} < \\frac{-4}{5}$', '$\\frac{-3}{5} > \\frac{-4}{5}$', '$\\frac{-3}{5} = \\frac{-4}{5}$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Hai phân số cùng mẫu dương, tử nào lớn hơn thì phân số lớn hơn. Vì $-3 > -4$ nên $\\frac{-3}{5} > \\frac{-4}{5}$.'
      },
      {
        id: 'q2-4-2',
        text: 'Phân số nào lớn nhất trong các phân số sau: $\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}$?',
        options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{3}{4}$', 'Bằng nhau'],
        correctAnswerIndex: 2,
        explanation: 'Quy đồng mẫu chung là 12: $\\frac{6}{12}, \\frac{8}{12}, \\frac{9}{12}$. Lớn nhất là $\\frac{3}{4}$.'
      },
      {
        id: 'q2-4-3',
        text: 'Trong hai phân số cùng mẫu dương, phân số nào lớn hơn?',
        options: ['Phân số có tử lớn hơn', 'Phân số có mẫu lớn hơn', 'Phân số có tử nhỏ hơn', 'Không xác định'],
        correctAnswerIndex: 0,
        explanation: 'Hai phân số cùng mẫu dương thì tử lớn hơn cho phân số lớn hơn.'
      },
      {
        id: 'q2-4-4',
        text: 'So sánh $\\frac{2}{7}$ và $\\frac{5}{7}$:',
        options: ['$\\frac{2}{7} > \\frac{5}{7}$', '$\\frac{2}{7} < \\frac{5}{7}$', '$\\frac{2}{7} = \\frac{5}{7}$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Cùng mẫu 7, so sánh tử: 2 < 5 nên $\\frac{2}{7} < \\frac{5}{7}$.'
      },
      {
        id: 'q2-4-5',
        text: 'So sánh $\\frac{3}{4}$ và $\\frac{2}{3}$:',
        options: ['$\\frac{3}{4} > \\frac{2}{3}$', '$\\frac{3}{4} < \\frac{2}{3}$', '$\\frac{3}{4} = \\frac{2}{3}$', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng: $\\frac{3}{4}=\\frac{9}{12}$, $\\frac{2}{3}=\\frac{8}{12}$ nên $\\frac{3}{4}>\\frac{2}{3}$.'
      },
      {
        id: 'q2-4-6',
        text: 'Phân số nào bé nhất?',
        options: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{1}{5}$', '$\\frac{1}{6}$'],
        correctAnswerIndex: 3,
        explanation: 'Các phân số cùng tử 1, mẫu càng lớn thì phân số càng nhỏ.'
      },
      {
        id: 'q2-4-7',
        text: 'Phân số nào lớn hơn 1?',
        options: ['$\\frac{3}{5}$', '$\\frac{7}{7}$', '$\\frac{9}{8}$', '$\\frac{4}{9}$'],
        correctAnswerIndex: 2,
        explanation: 'Phân số lớn hơn 1 khi tử lớn hơn mẫu.'
      },
      {
        id: 'q2-4-8',
        text: 'Phân số nào nhỏ hơn 0?',
        options: ['$\\frac{2}{3}$', '$\\frac{-3}{4}$', '$\\frac{0}{7}$', '$\\frac{5}{5}$'],
        correctAnswerIndex: 1,
        explanation: '$\\frac{-3}{4}$ là phân số âm nên nhỏ hơn 0.'
      },
      {
        id: 'q2-4-9',
        text: 'So sánh $\\frac{-1}{2}$ và $\\frac{1}{3}$:',
        options: ['$\\frac{-1}{2} > \\frac{1}{3}$', '$\\frac{-1}{2} < \\frac{1}{3}$', '$\\frac{-1}{2} = \\frac{1}{3}$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Mọi số âm đều nhỏ hơn mọi số dương.'
      },
      {
        id: 'q2-4-10',
        text: 'So sánh $\\frac{4}{9}$ và $\\frac{5}{12}$:',
        options: ['$\\frac{4}{9} > \\frac{5}{12}$', '$\\frac{4}{9} < \\frac{5}{12}$', '$\\frac{4}{9} = \\frac{5}{12}$', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu 36: $\\frac{4}{9}=\\frac{16}{36}$, $\\frac{5}{12}=\\frac{15}{36}$.'
      },
      {
        id: 'q2-4-11',
        text: 'Trong các phân số sau, phân số nào lớn nhất?',
        options: ['$\\frac{5}{8}$', '$\\frac{7}{8}$', '$\\frac{3}{8}$', '$\\frac{1}{8}$'],
        correctAnswerIndex: 1,
        explanation: 'Cùng mẫu 8 nên tử lớn nhất cho phân số lớn nhất.'
      },
      {
        id: 'q2-4-12',
        text: 'So sánh $\\frac{5}{6}$ và $\\frac{4}{5}$:',
        options: ['$\\frac{5}{6} > \\frac{4}{5}$', '$\\frac{5}{6} < \\frac{4}{5}$', '$\\frac{5}{6} = \\frac{4}{5}$', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu 30: $\\frac{5}{6}=\\frac{25}{30}$, $\\frac{4}{5}=\\frac{24}{30}$.'
      },
      {
        id: 'q2-4-13',
        text: 'Phân số nào bằng 1?',
        options: ['$\\frac{6}{7}$', '$\\frac{7}{6}$', '$\\frac{8}{8}$', '$\\frac{0}{8}$'],
        correctAnswerIndex: 2,
        explanation: 'Phân số có tử bằng mẫu thì bằng 1.'
      },
      {
        id: 'q2-4-14',
        text: 'So sánh $\\frac{-2}{3}$ và $\\frac{-3}{4}$:',
        options: ['$\\frac{-2}{3} > \\frac{-3}{4}$', '$\\frac{-2}{3} < \\frac{-3}{4}$', '$\\frac{-2}{3} = \\frac{-3}{4}$', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu 12: $\\frac{-2}{3}=\\frac{-8}{12}$, $\\frac{-3}{4}=\\frac{-9}{12}$.'
      },
      {
        id: 'q2-4-15',
        text: 'Trong các phân số sau, phân số nào nhỏ nhất?',
        options: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$'],
        correctAnswerIndex: 3,
        explanation: 'Cùng mẫu 5, tử nhỏ nhất cho phân số nhỏ nhất.'
      },
      {
        id: 'q2-4-16',
        text: 'So sánh $\\frac{7}{10}$ và $\\frac{2}{3}$:',
        options: ['$\\frac{7}{10} > \\frac{2}{3}$', '$\\frac{7}{10} < \\frac{2}{3}$', '$\\frac{7}{10} = \\frac{2}{3}$', 'Không so sánh được'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu 30: $\\frac{7}{10}=\\frac{21}{30}$, $\\frac{2}{3}=\\frac{20}{30}$.'
      },
      {
        id: 'q2-4-17',
        text: 'Trong các phân số sau, phân số nào lớn hơn cả $\\frac{1}{2}$ và $\\frac{2}{3}$?',
        options: ['$\\frac{3}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{8}$', '$\\frac{7}{12}$'],
        correctAnswerIndex: 1,
        explanation: '$\\frac{3}{4}=0,75$ lớn hơn $\\frac{2}{3}\\approx0,67$ và lớn hơn $\\frac{1}{2}=0,5$.'
      },
      {
        id: 'q2-4-18',
        text: 'So sánh $\\frac{9}{11}$ và $\\frac{10}{11}$:',
        options: ['$\\frac{9}{11} > \\frac{10}{11}$', '$\\frac{9}{11} < \\frac{10}{11}$', '$\\frac{9}{11} = \\frac{10}{11}$', 'Không so sánh được'],
        correctAnswerIndex: 1,
        explanation: 'Cùng mẫu 11, tử 9 nhỏ hơn tử 10.'
      },
      {
        id: 'q2-4-19',
        text: 'Khi so sánh hai phân số khác mẫu, ta thường:',
        options: ['Quy đồng mẫu số', 'Rút gọn về 0', 'Nhân chéo tùy ý', 'So sánh mẫu số trước'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu số là cách cơ bản để so sánh hai phân số khác mẫu.'
      },
      {
        id: 'q2-4-20',
        text: 'Sắp xếp tăng dần: $\\frac{1}{2}, \\frac{3}{4}, \\frac{2}{3}$',
        options: [
          '$\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}$',
          '$\\frac{2}{3}, \\frac{1}{2}, \\frac{3}{4}$',
          '$\\frac{1}{2}, \\frac{3}{4}, \\frac{2}{3}$',
          '$\\frac{3}{4}, \\frac{2}{3}, \\frac{1}{2}$'
        ],
        correctAnswerIndex: 0,
        explanation: 'So sánh được $\\frac{1}{2} < \\frac{2}{3} < \\frac{3}{4}$.'
      }
    ]
  },
  {
    id: 'c2-t5',
    title: 'Bốn phép tính về phân số',
    description: 'Cộng, Trừ, Nhân, Chia phân số (bao gồm cả hỗn số).',
    youtubeUrl: 'https://www.youtube.com/watch?v=4nL6ZpQe8Hs',
    questions: [
      {
        id: 'q2-5-1',
        text: 'Kết quả của phép tính $\\frac{1}{2} + \\frac{1}{3}$ là:',
        options: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{5}{6}$', '$\\frac{1}{6}$'],
        correctAnswerIndex: 2,
        explanation: 'Quy đồng mẫu số: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.'
      },
      {
        id: 'q2-5-2',
        text: 'Kết quả của phép tính $\\frac{2}{3} \\times \\frac{3}{4}$ là:',
        options: ['$\\frac{6}{12}$', '$\\frac{1}{2}$', '$\\frac{5}{7}$', 'Cả A và B đều đúng'],
        correctAnswerIndex: 3,
        explanation: '$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$.'
      },
      {
        id: 'q2-5-3',
        text: 'Chuyển hỗn số $2\\frac{1}{3}$ thành phân số ta được:',
        options: ['$\\frac{7}{3}$', '$\\frac{5}{3}$', '$\\frac{6}{3}$', '$\\frac{3}{3}$'],
        correctAnswerIndex: 0,
        explanation: '$2\\frac{1}{3} = \\frac{2\\times3 + 1}{3} = \\frac{7}{3}$.'
      },
      {
        id: 'q2-5-4',
        text: 'Kết quả của phép tính $\\frac{3}{4} - \\frac{1}{4}$ là:',
        options: ['$\\frac{2}{4}$', '$\\frac{1}{2}$', 'Cả A và B đều đúng', '$\\frac{1}{4}$'],
        correctAnswerIndex: 2,
        explanation: '$\\frac{3}{4}-\\frac{1}{4}=\\frac{2}{4}=\\frac{1}{2}$.'
      },
      {
        id: 'q2-5-5',
        text: 'Kết quả của phép tính $\\frac{5}{6} + \\frac{1}{6}$ là:',
        options: ['$\\frac{6}{12}$', '$1$', '$\\frac{5}{12}$', '$\\frac{1}{6}$'],
        correctAnswerIndex: 1,
        explanation: 'Cùng mẫu: $\\frac{5}{6}+\\frac{1}{6}=\\frac{6}{6}=1$.'
      },
      {
        id: 'q2-5-6',
        text: 'Kết quả của phép tính $\\frac{7}{8} - \\frac{3}{8}$ là:',
        options: ['$\\frac{4}{8}$', '$\\frac{1}{2}$', 'Cả A và B đều đúng', '$\\frac{10}{8}$'],
        correctAnswerIndex: 2,
        explanation: '$\\frac{7}{8}-\\frac{3}{8}=\\frac{4}{8}=\\frac{1}{2}$.'
      },
      {
        id: 'q2-5-7',
        text: 'Kết quả của phép tính $\\frac{2}{5} + \\frac{1}{10}$ là:',
        options: ['$\\frac{3}{15}$', '$\\frac{1}{2}$', '$\\frac{3}{10}$', '$\\frac{2}{15}$'],
        correctAnswerIndex: 1,
        explanation: 'Quy đồng: $\\frac{2}{5}=\\frac{4}{10}$, nên tổng là $\\frac{5}{10}=\\frac{1}{2}$.'
      },
      {
        id: 'q2-5-8',
        text: 'Kết quả của phép tính $\\frac{3}{7} + \\frac{2}{7}$ là:',
        options: ['$\\frac{5}{7}$', '$\\frac{6}{14}$', '$\\frac{1}{7}$', '$\\frac{5}{14}$'],
        correctAnswerIndex: 0,
        explanation: 'Cùng mẫu số: cộng tử số, giữ nguyên mẫu số.'
      },
      {
        id: 'q2-5-9',
        text: 'Kết quả của phép tính $\\frac{5}{9} - \\frac{2}{9}$ là:',
        options: ['$\\frac{3}{9}$', '$\\frac{1}{3}$', 'Cả A và B đều đúng', '$\\frac{7}{9}$'],
        correctAnswerIndex: 2,
        explanation: '$\\frac{5}{9}-\\frac{2}{9}=\\frac{3}{9}=\\frac{1}{3}$.'
      },
      {
        id: 'q2-5-10',
        text: 'Kết quả của phép tính $\\frac{4}{5} \\times \\frac{10}{12}$ là:',
        options: ['$\\frac{40}{60}$', '$\\frac{2}{3}$', 'Cả A và B đều đúng', '$\\frac{14}{17}$'],
        correctAnswerIndex: 2,
        explanation: '$\\frac{4}{5}\\times\\frac{10}{12}=\\frac{40}{60}=\\frac{2}{3}$.'
      },
      {
        id: 'q2-5-11',
        text: 'Muốn chia hai phân số, ta:',
        options: ['Giữ nguyên phân số thứ nhất, nhân với phân số thứ hai', 'Giữ nguyên phân số thứ nhất, nhân với nghịch đảo của phân số thứ hai', 'Đổi chỗ tử và mẫu của phân số thứ nhất', 'Quy đồng rồi chia'],
        correctAnswerIndex: 1,
        explanation: 'Quy tắc chia phân số là nhân với số nghịch đảo của phân số thứ hai.'
      },
      {
        id: 'q2-5-12',
        text: 'Kết quả của phép tính $\\frac{2}{3} : \\frac{4}{5}$ là:',
        options: ['$\\frac{8}{15}$', '$\\frac{10}{12}$', '$\\frac{5}{6}$', '$\\frac{6}{5}$'],
        correctAnswerIndex: 2,
        explanation: '$\\frac{2}{3}:\\frac{4}{5}=\\frac{2}{3}\\times\\frac{5}{4}=\\frac{10}{12}=\\frac{5}{6}$.'
      },
      {
        id: 'q2-5-13',
        text: 'Nghịch đảo của phân số $\\frac{3}{7}$ là:',
        options: ['$\\frac{7}{3}$', '$\\frac{-3}{7}$', '$\\frac{3}{-7}$', '$\\frac{1}{\\frac{3}{7}}$'],
        correctAnswerIndex: 0,
        explanation: 'Nghịch đảo của $\\frac{a}{b}$ là $\\frac{b}{a}$ với $a,b\\neq0$.'
      },
      {
        id: 'q2-5-14',
        text: 'Kết quả của phép tính $\\frac{7}{10} : \\frac{7}{5}$ là:',
        options: ['$\\frac{1}{2}$', '$2$', '$\\frac{14}{15}$', '$\\frac{7}{50}$'],
        correctAnswerIndex: 0,
        explanation: '$\\frac{7}{10}:\\frac{7}{5}=\\frac{7}{10}\\times\\frac{5}{7}=\\frac{1}{2}$.'
      },
      {
        id: 'q2-5-15',
        text: 'Chuyển hỗn số $1\\frac{2}{5}$ thành phân số ta được:',
        options: ['$\\frac{7}{5}$', '$\\frac{5}{7}$', '$\\frac{3}{5}$', '$\\frac{6}{5}$'],
        correctAnswerIndex: 0,
        explanation: '$1\\frac{2}{5}=\\frac{1\\times5+2}{5}=\\frac{7}{5}$.'
      },
      {
        id: 'q2-5-16',
        text: 'Kết quả của phép tính $1\\frac{1}{2} + \\frac{1}{4}$ là:',
        options: ['$\\frac{7}{4}$', '$1\\frac{3}{4}$', 'Cả A và B đều đúng', '$\\frac{3}{4}$'],
        correctAnswerIndex: 2,
        explanation: '$1\\frac{1}{2}=\\frac{3}{2}=\\frac{6}{4}$, cộng $\\frac{1}{4}$ được $\\frac{7}{4}=1\\frac{3}{4}$.'
      },
      {
        id: 'q2-5-17',
        text: 'Kết quả của phép tính $2 - \\frac{1}{3}$ là:',
        options: ['$\\frac{5}{3}$', '$1\\frac{2}{3}$', 'Cả A và B đều đúng', '$\\frac{1}{3}$'],
        correctAnswerIndex: 2,
        explanation: '$2=\\frac{6}{3}$, nên $\\frac{6}{3}-\\frac{1}{3}=\\frac{5}{3}=1\\frac{2}{3}$.'
      },
      {
        id: 'q2-5-18',
        text: 'Kết quả của phép tính $\\frac{3}{4} + \\frac{2}{5}$ là:',
        options: ['$\\frac{23}{20}$', '$1\\frac{3}{20}$', 'Cả A và B đều đúng', '$\\frac{5}{9}$'],
        correctAnswerIndex: 2,
        explanation: 'Quy đồng mẫu 20: $\\frac{15}{20}+\\frac{8}{20}=\\frac{23}{20}=1\\frac{3}{20}$.'
      },
      {
        id: 'q2-5-19',
        text: 'Kết quả của phép tính $\\frac{5}{6} - \\frac{1}{4}$ là:',
        options: ['$\\frac{7}{12}$', '$\\frac{4}{12}$', '$\\frac{1}{2}$', '$\\frac{6}{10}$'],
        correctAnswerIndex: 0,
        explanation: 'Quy đồng mẫu 12: $\\frac{10}{12}-\\frac{3}{12}=\\frac{7}{12}$.'
      },
      {
        id: 'q2-5-20',
        text: 'Kết quả của phép tính $\\frac{3}{5} \\times 10$ là:',
        options: ['$6$', '$\\frac{30}{5}$', 'Cả A và B đều đúng', '$2$'],
        correctAnswerIndex: 2,
        explanation: '$\\frac{3}{5}\\times10=\\frac{30}{5}=6$.'
      }
    ]
  }
];