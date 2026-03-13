import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-step',
    title: 'Khởi đầu nan',
    description: 'Hoàn thành bài tập đầu tiên',
    icon: '🌱',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 1
  },
  {
    id: 'warm-up',
    title: 'Làm nóng máy',
    description: 'Hoàn thành 10 bài tập',
    icon: '🔥',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 10
  },
  {
    id: 'steady',
    title: 'Chăm chỉ',
    description: 'Hoàn thành 50 bài tập',
    icon: '⭐',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 50
  },
  {
    id: 'century',
    title: 'Chiến thần',
    description: 'Hoàn thành 100 bài tập',
    icon: '⚔️',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 100
  },
  {
    id: 'half-way',
    title: 'Nửa chặng đường',
    description: 'Hoàn thành 200 bài tập',
    icon: '🚀',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 200
  },
  {
    id: 'master',
    title: 'Đại cao thủ',
    description: 'Hoàn thành 300 bài tập',
    icon: '💎',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 300
  },
  {
    id: 'legend',
    title: 'Huyền thoại',
    description: 'Hoàn thành toàn bộ 400 bài tập',
    icon: '👑',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 400
  },
  {
    id: 'all-round',
    title: 'Đa tài',
    description: 'Hoàn thành ít nhất 1 bài ở cả 4 chương',
    icon: '🎯',
    condition: (progress) => {
      const topics = Object.keys(progress.completedTopics);
      return topics.some(id => id.startsWith('c1-')) &&
             topics.some(id => id.startsWith('c2-')) &&
             topics.some(id => id.startsWith('c3-')) &&
             topics.some(id => id.startsWith('c4-'));
    }
  },
  {
    id: 'chapter-1-master',
    title: 'Bá chủ Chương I',
    description: 'Hoàn thành 100 bài tập Chương I',
    icon: '📘',
    condition: (progress) => Object.keys(progress.completedTopics).filter(id => id.startsWith('c1-')).length >= 100
  },
  {
    id: 'chapter-2-master',
    title: 'Bá chủ Chương II',
    description: 'Hoàn thành 100 bài tập Chương II',
    icon: '📗',
    condition: (progress) => Object.keys(progress.completedTopics).filter(id => id.startsWith('c2-')).length >= 100
  },
  {
    id: 'chapter-3-master',
    title: 'Bá chủ Chương III',
    description: 'Hoàn thành 100 bài tập Chương III',
    icon: '📙',
    condition: (progress) => Object.keys(progress.completedTopics).filter(id => id.startsWith('c3-')).length >= 100
  },
  {
    id: 'chapter-4-master',
    title: 'Bá chủ Chương IV',
    description: 'Hoàn thành 100 bài tập Chương IV',
    icon: '📕',
    condition: (progress) => Object.keys(progress.completedTopics).filter(id => id.startsWith('c4-')).length >= 100
  }
];
