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
    <div className="w-full max-w-3xl mx-auto p-4 pb-12">
      <div className="flex items-center gap-4 mb-8 sticky top-0 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md z-10 py-4">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Xem lại bài làm</h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm">{topic.title}</p>
        </div>
      </div>

      <div className="space-y-8">
        {topic.questions.map((question, qIndex) => {
          const userAnswer = userAnswers[qIndex];
          const isCorrect = userAnswer === question.correctAnswerIndex;

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: qIndex * 0.1 }}
              className={`bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border-2 ${
                isCorrect ? 'border-green-100 dark:border-green-900/30' : 'border-red-100 dark:border-red-900/30'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  isCorrect ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-400'
                }`}>
                  {qIndex + 1}
                </div>
                <div className="text-lg font-medium text-gray-900 dark:text-slate-100 leading-relaxed pt-1">
                  <MathText content={question.text} />
                </div>
              </div>

              <div className="space-y-3 pl-11 mb-6">
                {question.options.map((option, oIndex) => {
                  const isUserChoice = userAnswer === oIndex;
                  const isActualCorrect = question.correctAnswerIndex === oIndex;
                  
                  let optionClasses = "w-full text-left p-4 rounded-2xl border-2 flex items-center justify-between ";
                  
                  if (isActualCorrect) {
                    optionClasses += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium";
                  } else if (isUserChoice && !isActualCorrect) {
                    optionClasses += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                  } else {
                    optionClasses += "border-gray-100 dark:border-slate-700 opacity-50 text-gray-500 dark:text-slate-500";
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
                <div className="pl-11">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1 text-sm uppercase tracking-wider">Giải thích</h4>
                    <div className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
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
