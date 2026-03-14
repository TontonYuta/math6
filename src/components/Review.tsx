import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Topic } from '../types';
import { MathText } from './MathText';

interface ReviewProps {
  topic: Topic;
  userAnswers: number[];
  onBack: () => void;
}

export const Review: React.FC<ReviewProps> = ({ topic, userAnswers, onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 pb-12 antialiased">
      {/* Header chuẩn Apple với hiệu ứng kính mờ đặc trưng */}
      <div className="flex items-center gap-4 mb-8 sticky top-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl z-30 py-6 px-2 -mx-2">
        <button
          onClick={onBack}
          className="p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:scale-90"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Xem lại bài làm</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">{topic.title}</p>
        </div>
      </div>

      <div className="space-y-10">
        {topic.questions.map((question, qIndex) => {
          const userAnswer = userAnswers[qIndex];
          const isCorrect = userAnswer === question.correctAnswerIndex;

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qIndex * 0.05 }}
              className={`bg-white dark:bg-slate-800/50 p-6 rounded-[2rem] border shadow-sm ${
                isCorrect 
                  ? 'border-green-100 dark:border-green-900/20' 
                  : 'border-red-100 dark:border-red-900/20'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Số thứ tự câu hỏi kiểu Badge Apple */}
                <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                  isCorrect 
                    ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400'
                }`}>
                  {qIndex + 1}
                </div>
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug pt-0.5">
                  <MathText content={question.text} />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {question.options.map((option, oIndex) => {
                  const isUserChoice = userAnswer === oIndex;
                  const isActualCorrect = question.correctAnswerIndex === oIndex;
                  
                  let optionClasses = "w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ";
                  
                  if (isActualCorrect) {
                    optionClasses += "border-green-500 bg-green-50/50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-bold";
                  } else if (isUserChoice && !isActualCorrect) {
                    optionClasses += "border-red-500 bg-red-50/50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                  } else {
                    optionClasses += "border-slate-100 dark:border-slate-700 opacity-60 text-slate-500 dark:text-slate-500";
                  }

                  return (
                    <div key={oIndex} className={optionClasses}>
                      <MathText content={option} className="text-base flex-1" />
                      {isActualCorrect && <CheckCircle2 className="text-green-500 shrink-0 ml-2" size={20} />}
                      {isUserChoice && !isActualCorrect && <XCircle className="text-red-500 shrink-0 ml-2" size={20} />}
                    </div>
                  );
                })}
              </div>

              {question.explanation && (
                <div className="mt-6">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-[1.5rem] border border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-4 bg-indigo-500 rounded-full"></div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-200 text-sm uppercase tracking-widest">Giải thích</h4>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      <MathText content={question.explanation} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};