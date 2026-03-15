import { Chapter } from '../types';
import { chapter1Topics } from './questions/chapter1';
import { chapter2Topics } from './questions/chapter2';
import { chapter3Topics } from './questions/chapter3';
import { chapter4Topics } from './questions/chapter4';
import { chapter5Topics } from './questions/chapter5';
import { chapter6Topics } from './questions/chapter6';
import { chapter7Topics } from './questions/chapter7';
import { chapter8Topics } from './questions/chapter8';
import { chapter9Topics } from './questions/chapter9';
import { chapter10Topics } from './questions/chapter10';
import { chapter11Topics } from './questions/chapter11';

export const chapters: Chapter[] = [
  {
    id: 'c1',
    title: 'CHƯƠNG I: SỐ TỰ NHIÊN',
    description: 'Tập hợp số tự nhiên, các phép tính và tính chia hết.',
    topics: chapter1Topics,
  },
  {
    id: 'c2',
    title: 'CHƯƠNG II: SỐ NGUYÊN',
    description: 'Làm quen số nguyên âm và các phép toán với số nguyên.',
    topics: chapter2Topics,
  },
  {
    id: 'c3',
    title: 'CHƯƠNG III: PHÂN SỐ',
    description: 'Khái niệm phân số, phân số bằng nhau và các phép tính.',
    topics: chapter3Topics,
  },
  {
    id: 'c4',
    title: 'CHƯƠNG IV: SỐ THẬP PHÂN',
    description: 'Số thập phân, các phép tính và tỉ số phần trăm.',
    topics: chapter4Topics,
  },
  {
    id: 'c5',
    title: 'CHƯƠNG V: CÁC HÌNH PHẲNG TRONG THỰC TIỄN',
    description: 'Tam giác, hình vuông, hình chữ nhật, bình hành, thoi, thang.',
    topics: chapter5Topics,
  },
  {
    id: 'c6',
    title: 'CHƯƠNG VI: TÍNH ĐỐI XỨNG CỦA HÌNH PHẲNG',
    description: 'Trục đối xứng và tâm đối xứng trong tự nhiên.',
    topics: chapter6Topics,
  },
  {
    id: 'c7',
    title: 'CHƯƠNG VII: HÌNH HỌC CƠ BẢN',
    description: 'Điểm, đường thẳng, tia, đoạn thẳng và góc.',
    topics: chapter7Topics,
  },
  {
    id: 'c8',
    title: 'CHƯƠNG VIII: THU THẬP VÀ TỔ CHỨC DỮ LIỆU',
    description: 'Thu thập, phân loại và biểu diễn dữ liệu thống kê.',
    topics: chapter8Topics,
  },
  {
    id: 'c9',
    title: 'CHƯƠNG IX: PHÂN TÍCH VÀ XỬ LÍ DỮ LIỆU',
    description: 'Phân tích dữ liệu từ bảng thống kê và biểu đồ.',
    topics: chapter9Topics,
  },
  {
    id: 'c10',
    title: 'CHƯƠNG X: MỘT SỐ YẾU TỐ XÁC SUẤT',
    description: 'Phép thử nghiệm, sự kiện và xác suất thực nghiệm.',
    topics: chapter10Topics,
  },
  {
    id: 'c11',
    title: 'CHƯƠNG XI: BÀI TẬP VỀ NHÀ VÀ ĐỀ THI',
    description: 'Tổng hợp bài tập tự luyện, đề kiểm tra và đề thi ôn tập.',
    topics: chapter11Topics,
  }
];