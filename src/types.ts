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
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}
