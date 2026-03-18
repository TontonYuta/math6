import { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-step',
    title: 'Bước vào Học viện',
    description: 'Hoàn thành nhiệm vụ đầu tiên',
    icon: '🍃',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 1
  },
  {
    id: 'warm-up',
    title: 'Khơi dậy Chakra',
    description: 'Hoàn thành 10 nhiệm vụ',
    icon: '🔥',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 10
  },
  {
    id: 'steady',
    title: 'Genin Chăm Chỉ',
    description: 'Hoàn thành 50 nhiệm vụ',
    icon: '⭐',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 50
  },
  {
    id: 'century',
    title: 'Chiến Binh Shinobi',
    description: 'Hoàn thành 100 nhiệm vụ',
    icon: '⚔️',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 100
  },
  {
    id: 'half-way',
    title: 'Băng Qua Đại Chiến',
    description: 'Hoàn thành 200 nhiệm vụ',
    icon: '🚀',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 200
  },
  {
    id: 'master',
    title: 'Jounin Tinh Anh',
    description: 'Hoàn thành 300 nhiệm vụ',
    icon: '💎',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 300
  },
  {
    id: 'legend',
    title: 'Hokage Huyền Thoại',
    description: 'Hoàn thành toàn bộ 400 nhiệm vụ',
    icon: '👑',
    condition: (progress) => Object.keys(progress.completedTopics).length >= 400
  },
  {
    id: 'all-round',
    title: 'Shinobi Toàn Năng',
    description: 'Hoàn thành ít nhất 1 nhiệm vụ ở cả 4 cuộn bí kíp',
    icon: '🎯',
    condition: (progress) => {
      const topics = Object.keys(progress.completedTopics);
      return (
        topics.some((id) => id.startsWith('c1-')) &&
        topics.some((id) => id.startsWith('c2-')) &&
        topics.some((id) => id.startsWith('c3-')) &&
        topics.some((id) => id.startsWith('c4-'))
      );
    }
  },
  {
    id: 'chapter-1-master',
    title: 'Thủ Lĩnh Cuộn I',
    description: 'Hoàn thành 100 nhiệm vụ Chương I',
    icon: '📘',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter((id) => id.startsWith('c1-')).length >= 100
  },
  {
    id: 'chapter-2-master',
    title: 'Thủ Lĩnh Cuộn II',
    description: 'Hoàn thành 100 nhiệm vụ Chương II',
    icon: '📗',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter((id) => id.startsWith('c2-')).length >= 100
  },
  {
    id: 'chapter-3-master',
    title: 'Thủ Lĩnh Cuộn III',
    description: 'Hoàn thành 100 nhiệm vụ Chương III',
    icon: '📙',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter((id) => id.startsWith('c3-')).length >= 100
  },
  {
    id: 'chapter-4-master',
    title: 'Thủ Lĩnh Cuộn IV',
    description: 'Hoàn thành 100 nhiệm vụ Chương IV',
    icon: '📕',
    condition: (progress) =>
      Object.keys(progress.completedTopics).filter((id) => id.startsWith('c4-')).length >= 100
  }
];