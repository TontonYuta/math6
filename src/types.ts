// types.ts

export type QuestionType = 'single-choice' | 'true-false' | 'short-answer';
export type UserAnswer = number | boolean[] | string | null;

export interface QuestionImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface QuestionSource {
  title?: string;
  page?: number;
  exam?: string;
  provider?: string;
  url?: string;
}

export interface Question {
  id: string;
  type?: QuestionType;

  text: string;

  // Tương thích với dữ liệu cũ và câu trắc nghiệm 4 đáp án
  options: string[];
  correctAnswerIndex: number;

  explanation?: string;

  // Ảnh minh họa trong thân câu hỏi
  images?: QuestionImage[];

  // Ảnh cho từng đáp án, cùng thứ tự với options
  optionImages?: (QuestionImage | null)[];

  // Dành cho câu trả lời ngắn
  answerText?: string;

  // Dành cho câu đúng/sai
  trueFalseStatements?: string[];
  trueFalseAnswers?: boolean[];

  // Nguồn gốc câu hỏi
  source?: QuestionSource;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  youtubeUrl?: string;
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (progress: UserProgress) => boolean;
}

export interface UserProgress {
  // topicId -> bestScore
  completedTopics: { [topicId: string]: number };

  // achievementIds
  unlockedAchievements: string[];
}