export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
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
  completedTopics: { [topicId: string]: number }; // topicId -> bestScore
  unlockedAchievements: string[]; // achievementIds
}
