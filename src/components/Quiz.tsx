/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, Check } from 'lucide-react';
import { Topic, QuestionImage, UserAnswer } from '../types';
import { MathText } from './MathText';

interface QuizProps {
  topic: Topic;
  onBack: () => void;
  onComplete: (score: number, total: number, userAnswers: UserAnswer[]) => void;
}

const renderQuestionImages = (images?: QuestionImage[]) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4 mb-6">
      {images.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900"
        >
          <img
            src={image.src}
            alt={image.alt || `Hình minh họa ${index + 1}`}
            className="w-full h-auto object-contain max-h-80"
            loading="lazy"
          />
          {image.caption && (
            <figcaption className="px-4 py-3 text-sm text-gray-600 dark:text-slate-300 border-t border-gray-200 dark:border-slate-700 text-center italic">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

const normalizeString = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(',', '.')
    .replace(/\.$/, '');

export const Quiz: React.FC<QuizProps> = ({ topic, onBack, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [tfSelections, setTfSelections] = useState<(boolean | null)[]>([]);
  const [shortAnswerInput, setShortAnswerInput] = useState('');

  const question = topic.questions[currentQuestionIndex];

  useEffect(() => {
    if (!question) return;

    const questionType = question.type ?? 'single-choice';
    if (questionType === 'true-false' && question.trueFalseStatements) {
      setTfSelections(new Array(question.trueFalseStatements.length).fill(null));
    } else {
      setTfSelections([]);
    }
  }, [currentQuestionIndex, question]);

  const playCorrectSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const playIncorrectSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  if (!topic.questions || topic.questions.length === 0 || !question) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="p-2 -ml-2 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-full transition-colors shrink-0"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 text-center max-w-lg w-full">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Bài này chưa có câu hỏi
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Hãy quay lại và chọn bài khác hoặc thêm dữ liệu câu hỏi cho chủ đề này.
            </p>
            <button
              onClick={onBack}
              className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all active:scale-[0.98]"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;
  const questionType = question.type ?? 'single-choice';

  const handleOptionSelect = (index: number) => {
    if (isAnswered || questionType !== 'single-choice') return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctAnswerIndex) {
      setScore((prev) => prev + 1);
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  };

  const handleCheckAnswer = () => {
    if (isAnswered) return;
    setIsAnswered(true);

    let isCorrect = false;

    if (questionType === 'true-false') {
      isCorrect = question.trueFalseAnswers?.every((ans, idx) => ans === tfSelections[idx]) ?? false;
    } else if (questionType === 'short-answer') {
      isCorrect = normalizeString(shortAnswerInput) === normalizeString(question.answerText || '');
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  };

  const handleNext = () => {
    let currentAnswer: UserAnswer = null;

    if (questionType === 'single-choice') {
      currentAnswer = selectedOption;
    } else if (questionType === 'true-false') {
      currentAnswer = tfSelections as boolean[];
    } else if (questionType === 'short-answer') {
      currentAnswer = shortAnswerInput;
    }

    const newAnswers = [...userAnswers, currentAnswer];
    setUserAnswers(newAnswers);

    if (isLastQuestion) {
      onComplete(score, topic.questions.length, newAnswers);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setShortAnswerInput('');
      setTfSelections([]);
    }
  };

  const isSubmitDisabled = () => {
    if (questionType === 'true-false') return tfSelections.some((val) => val === null);
    if (questionType === 'short-answer') return shortAnswerInput.trim() === '';
    return false;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-full transition-colors shrink-0"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full whitespace-nowrap">
          Câu {currentQuestionIndex + 1} / {topic.questions.length}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-[clamp(18px,5vw,22px)] font-bold text-gray-800 dark:text-white mb-3 text-wrap balance">
          {topic.title}
        </h2>
        <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
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
        <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
          <div className="text-[clamp(16px,4.5vw,20px)] font-medium text-gray-900 dark:text-slate-100 leading-relaxed mb-6">
            <MathText content={question.text} />
          </div>

          {renderQuestionImages(question.images)}

          {questionType === 'single-choice' && (
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === question.correctAnswerIndex;
                const optionImage = question.optionImages?.[index] ?? null;

                let optionClasses =
                  'w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-start justify-between gap-3 ';

                if (!isAnswered) {
                  optionClasses +=
                    'border-gray-100 dark:border-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 text-gray-700 dark:text-slate-300';
                } else if (isCorrect) {
                  optionClasses +=
                    'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-medium';
                } else if (isSelected && !isCorrect) {
                  optionClasses +=
                    'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300';
                } else {
                  optionClasses += 'border-gray-100 dark:border-slate-700 opacity-50 text-gray-500';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={optionClasses}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-[clamp(14px,4vw,16px)] pt-0.5">
                        <MathText content={option} />
                      </div>

                      {optionImage && (
                        <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 dark:border-slate-600">
                          <img
                            src={optionImage.src}
                            alt={optionImage.alt || `Hình đáp án ${index + 1}`}
                            className="w-full h-auto object-contain max-h-72"
                            loading="lazy"
                          />
                          {optionImage.caption && (
                            <div className="px-3 py-2 text-xs text-gray-600 dark:text-slate-300 border-t border-gray-200 dark:border-slate-700">
                              {optionImage.caption}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {questionType === 'true-false' && question.trueFalseStatements && (
            <div className="space-y-3">
              {question.trueFalseStatements.map((stmt, idx) => {
                const userChoice = tfSelections[idx];
                const correctChoice = question.trueFalseAnswers?.[idx];

                const getBtnClass = (isTrueBtn: boolean) => {
                  if (!isAnswered) {
                    return userChoice === isTrueBtn
                      ? 'bg-indigo-500 text-white border-indigo-500 shadow-md scale-105'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300';
                  }

                  if (correctChoice === isTrueBtn) return 'bg-green-500 text-white border-green-500 shadow-sm';
                  if (userChoice === isTrueBtn) return 'bg-red-500 text-white border-red-500 shadow-sm';
                  return 'bg-slate-50 border-slate-200 text-slate-300 opacity-50 dark:bg-slate-800 dark:border-slate-700';
                };

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border-2 border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800/50"
                  >
                    <div className="flex-1 text-[clamp(14px,4vw,16px)] text-gray-800 dark:text-slate-200">
                      <div className="font-bold mb-1 text-indigo-500 uppercase tracking-widest text-xs">
                        Đáp án {String.fromCharCode(97 + idx)}
                      </div>
                      <MathText content={stmt} />
                    </div>
                    <div className="flex gap-2 shrink-0 self-start sm:self-center">
                      <button
                        onClick={() => {
                          const newSelections = [...tfSelections];
                          newSelections[idx] = true;
                          setTfSelections(newSelections);
                        }}
                        disabled={isAnswered}
                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all duration-200 ${getBtnClass(true)}`}
                      >
                        Đúng
                      </button>
                      <button
                        onClick={() => {
                          const newSelections = [...tfSelections];
                          newSelections[idx] = false;
                          setTfSelections(newSelections);
                        }}
                        disabled={isAnswered}
                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all duration-200 ${getBtnClass(false)}`}
                      >
                        Sai
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {questionType === 'short-answer' && (
            <div className="mt-2">
              <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                Nhập đáp án của bạn:
              </label>
              <input
                type="text"
                value={shortAnswerInput}
                onChange={(e) => setShortAnswerInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isAnswered && !isSubmitDisabled()) {
                    handleCheckAnswer();
                  }
                }}
                disabled={isAnswered}
                placeholder="Ví dụ: 15, -2.5, 1/2..."
                className={`w-full p-4 border-2 rounded-xl text-center font-bold text-xl outline-none transition-all ${
                  !isAnswered
                    ? 'border-indigo-200 focus:border-indigo-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white'
                    : normalizeString(shortAnswerInput) === normalizeString(question.answerText || '')
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                }`}
              />

              {isAnswered &&
                normalizeString(shortAnswerInput) !== normalizeString(question.answerText || '') && (
                  <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                    <p className="text-sm text-green-600 font-bold uppercase mb-1">Đáp án chính xác</p>
                    <p className="text-xl font-black text-green-700">{question.answerText}</p>
                  </div>
                )}
            </div>
          )}
        </div>

        {isAnswered && question.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-800/30 mb-6"
          >
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 text-sm uppercase tracking-wider">
              Giải thích
            </h4>
            <div className="text-blue-800 dark:text-blue-200 text-[clamp(13px,3.5vw,15px)] leading-relaxed">
              <MathText content={question.explanation} />
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="mt-auto pt-4 pb-8">
        {!isAnswered && questionType !== 'single-choice' && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleCheckAnswer}
            disabled={isSubmitDisabled()}
            className={`w-full font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
              isSubmitDisabled()
                ? 'bg-gray-200 text-gray-400 dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-200 dark:shadow-none'
            }`}
          >
            <Check size={20} />
            Kiểm tra đáp án
          </motion.button>
        )}

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