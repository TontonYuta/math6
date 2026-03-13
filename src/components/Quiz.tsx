import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Topic, Question } from '../types';

interface QuizProps {
  topic: Topic;
  onBack: () => void;
  onComplete: (score: number, total: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ topic, onBack, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = topic.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(score + (selectedOption === question.correctAnswerIndex ? 1 : 0), topic.questions.length);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
          Câu {currentQuestionIndex + 1} / {topic.questions.length}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h2>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-indigo-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / topic.questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
          <h3 className="text-lg font-medium text-gray-900 leading-relaxed mb-6">
            {question.text}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === question.correctAnswerIndex;
              
              let optionClasses = "w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ";
              
              if (!isAnswered) {
                optionClasses += "border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/50 text-gray-700";
              } else if (isCorrect) {
                optionClasses += "border-green-500 bg-green-50 text-green-800 font-medium";
              } else if (isSelected && !isCorrect) {
                optionClasses += "border-red-500 bg-red-50 text-red-800";
              } else {
                optionClasses += "border-gray-100 opacity-50 text-gray-500";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={optionClasses}
                >
                  <span className="text-base">{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-green-500 shrink-0" size={20} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500 shrink-0" size={20} />}
                </button>
              );
            })}
          </div>
        </div>

        {isAnswered && question.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 p-5 rounded-2xl border border-blue-100 mb-6"
          >
            <h4 className="font-semibold text-blue-900 mb-1 text-sm uppercase tracking-wider">Giải thích</h4>
            <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
          </motion.div>
        )}
      </motion.div>

      <div className="mt-auto pt-6 pb-8">
        {isAnswered && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp theo'}
            <ArrowRight size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
};
