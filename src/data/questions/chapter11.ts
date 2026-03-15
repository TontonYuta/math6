import { Topic } from '../../types';
import { chapter11ExamTopics } from './chapter11-exams';

export const chapter11CoreTopics: Topic[] = [
  {
    id: 'c11-t1',
    title: 'Bài tập về nhà - Số tự nhiên',
    description: 'Bài tập tự luyện về số tự nhiên và các phép tính cơ bản.',
    questions: [
      // dán bài tập về nhà phần số tự nhiên vào đây
    ]
  },
  {
    id: 'c11-t2',
    title: 'Bài tập về nhà - Số nguyên',
    description: 'Bài tập tự luyện về số nguyên và các phép toán với số nguyên.',
    questions: [
      // dán bài tập về nhà phần số nguyên vào đây
    ]
  },
  {
    id: 'c11-t3',
    title: 'Bài tập về nhà - Phân số',
    description: 'Bài tập tự luyện về phân số, so sánh và các phép tính với phân số.',
    questions: [
      // dán bài tập về nhà phần phân số vào đây
    ]
  },
  {
    id: 'c11-t4',
    title: 'Bài tập về nhà - Số thập phân',
    description: 'Bài tập tự luyện về số thập phân và tỉ số phần trăm.',
    questions: [
      // dán bài tập về nhà phần số thập phân vào đây
    ]
  },
  {
    id: 'c11-t5',
    title: 'Bài tập về nhà - Hình học và dữ liệu',
    description: 'Bài tập tự luyện về hình học cơ bản, dữ liệu và xác suất.',
    questions: [
      // dán bài tập về nhà phần hình học, dữ liệu, xác suất vào đây
    ]
  }
];

export const chapter11Topics: Topic[] = [
  ...chapter11CoreTopics,
  ...chapter11ExamTopics
];