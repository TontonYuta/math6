import { Chapter } from '../types';
import { chapter1Topics } from './questions/chapter1';
import { chapter2Topics } from './questions/chapter2';
import { chapter3Topics } from './questions/chapter3';
import { chapter4Topics } from './questions/chapter4';

export const chapters: Chapter[] = [
  {
    id: 'c1',
    title: 'CHƯƠNG I: SỐ NGUYÊN',
    description: 'Nền tảng tư duy',
    topics: chapter1Topics,
  },
  {
    id: 'c2',
    title: 'CHƯƠNG II: PHÂN SỐ',
    description: 'Nền tảng tính toán',
    topics: chapter2Topics,
  },
  {
    id: 'c3',
    title: 'CHƯƠNG III: SỐ THẬP PHÂN',
    description: 'Ứng dụng thực tế',
    topics: chapter3Topics,
  },
  {
    id: 'c4',
    title: 'CHƯƠNG IV: TOÁN CÓ LỜI VĂN',
    description: 'Kỹ năng giải quyết vấn đề',
    topics: chapter4Topics,
  }
];
