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
          className="overflow-hidden rounded-[1.5rem] border-2 border-orange-100 dark:border-orange-900/40 bg-white/80 dark:bg-[#1a120c]/80 shadow-sm"
        >
          <img
            src={image.src}
            alt={image.alt || `Hình minh họa ${index + 1}`}
            className="w-full h-auto object-contain max-h-80"
            loading="lazy"
          />
          {image.caption && (
            <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-orange-100/75 border-t border-orange-100 dark:border-orange-900/40 text-center italic">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

const normalizeString = (s: string) =>
  s.trim().toLowerCase().replace(/\s+/g, '').replace(',', '.').replace(/\.$/, '');

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
      <div className="w-full max-w-2xl mx-auto p-4 min-h-[85vh] flex flex-col bg-transparent">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="p-2 -ml-2 text-slate-500 dark:text-orange-100/70 hover:text-orange-600 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-[#24160b] rounded-full transition-colors shrink-0"
            aria-label="Quay lại"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white/75 dark:bg-[#1b120b]/75 backdrop-blur-md p-6 rounded-[2rem] shadow-[0_10px_24px_rgba(0,0,0,0.12)] border-2 border-orange-200 dark:border-orange-800 text-center max-w-lg w-full">
            <div className="text-5xl mb-3">🍃</div>
            <h2 className="text-xl font-black text-orange-700 dark:text-orange-200 mb-3">
              Bài này chưa có câu hỏi
            </h2>
            <p className="text-slate-600 dark:text-orange-100/70 mb-6 font-medium">
              Hãy quay lại và chọn nhiệm vụ khác hoặc thêm dữ liệu câu hỏi cho chủ đề này.
            </p>
            <button
              onClick={onBack}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:brightness-110 text-white font-bold transition-all active:scale-[0.98] shadow-lg"
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
    <div className="w-full max-w-2xl mx-auto p-4 min-h-[85vh] flex flex-col bg-transparent">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-slate-500 dark:text-orange-100/70 hover:text-orange-600 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-[#24160b] rounded-full transition-colors shrink-0"
          aria-label="Quay lại"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="text-sm font-black text-orange-700 dark:text-orange-200 bg-white/80 dark:bg-[#2a180d]/80 backdrop-blur-md px-4 py-1.5 rounded-full whitespace-nowrap border-2 border-orange-200 dark:border-orange-800 shadow-sm">
          Nhiệm vụ {currentQuestionIndex + 1} / {topic.questions.length}
        </div>
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-black uppercase tracking-[0.2em] mb-3">
          <span>🍥</span>
          <span>Phòng luyện tập</span>
        </div>

        <h2 className="text-[clamp(20px,5vw,26px)] font-black text-slate-900 dark:text-orange-100 mb-3 text-wrap balance">
          {topic.title}
        </h2>

        <div className="w-full bg-orange-100/80 dark:bg-[#2e1b0f] h-3 rounded-full overflow-hidden shadow-inner">
          <div
            className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 h-full transition-all duration-300 ease-out"
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
        <div className="bg-white/75 dark:bg-[#1b120b]/75 backdrop-blur-md p-5 sm:p-6 rounded-[2rem] shadow-[0_10px_24px_rgba(0,0,0,0.12)] border-2 border-orange-200/80 dark:border-orange-800/70 mb-6">
          <div className="text-[clamp(16px,4.5vw,20px)] font-semibold text-slate-900 dark:text-orange-50 leading-relaxed mb-6 overflow-visible">
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
                  'w-full text-left px-4 py-3 rounded-[1.5rem] border-2 transition-all duration-200 flex items-start justify-between gap-3 overflow-visible ';

                if (!isAnswered) {
                  optionClasses +=
                    'border-orange-100 dark:border-orange-900/40 hover:border-orange-300 dark:hover:border-orange-700 hover:bg-orange-50/70 dark:hover:bg-orange-950/20 text-slate-700 dark:text-orange-100';
                } else if (isCorrect) {
                  optionClasses +=
                    'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-semibold';
                } else if (isSelected && !isCorrect) {
                  optionClasses +=
                    'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300';
                } else {
                  optionClasses +=
                    'border-orange-100 dark:border-orange-900/40 opacity-50 text-slate-500 dark:text-orange-100/50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={optionClasses}
                  >
                    <div className="flex-1 min-w-0 overflow-visible">
                      <div className="text-[clamp(14px,4vw,16px)] leading-7 overflow-visible">
                        <MathText content={option} />
                      </div>

                      {optionImage && (
                        <div className="mt-3 overflow-hidden rounded-xl border-2 border-orange-100 dark:border-orange-900/40">
                          <img
                            src={optionImage.src}
                            alt={optionImage.alt || `Hình đáp án ${index + 1}`}
                            className="w-full h-auto object-contain max-h-72"
                            loading="lazy"
                          />
                          {optionImage.caption && (
                            <div className="px-3 py-2 text-xs text-slate-600 dark:text-orange-100/75 border-t border-orange-100 dark:border-orange-900/40">
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
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white border-orange-500 shadow-md scale-105'
                      : 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 dark:bg-[#2a180d] dark:border-orange-800 dark:text-orange-100';
                  }

                  if (correctChoice === isTrueBtn) return 'bg-green-500 text-white border-green-500 shadow-sm';
                  if (userChoice === isTrueBtn) return 'bg-red-500 text-white border-red-500 shadow-sm';
                  return 'bg-slate-50 border-slate-200 text-slate-300 opacity-50 dark:bg-slate-800 dark:border-slate-700';
                };

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-[1.5rem] border-2 border-orange-100 dark:border-orange-900/40 bg-white/70 dark:bg-[#140d08]/40"
                  >
                    <div className="flex-1 text-[clamp(14px,4vw,16px)] text-slate-800 dark:text-orange-100 overflow-visible">
                      <div className="font-black mb-1 text-orange-500 uppercase tracking-widest text-xs">
                        Mệnh đề {String.fromCharCode(97 + idx)}
                      </div>
                      <div className="leading-7 overflow-visible">
                        <MathText content={stmt} />
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0 self-start sm:self-center">
                      <button
                        onClick={() => {
                          const newSelections = [...tfSelections];
                          newSelections[idx] = true;
                          setTfSelections(newSelections);
                        }}
                        disabled={isAnswered}
                        className={`px-4 py-2 rounded-xl font-black border-2 transition-all duration-200 ${getBtnClass(true)}`}
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
                        className={`px-4 py-2 rounded-xl font-black border-2 transition-all duration-200 ${getBtnClass(false)}`}
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
              <label className="block text-sm font-black text-orange-700 dark:text-orange-200 mb-3 uppercase tracking-wider">
                Nhập đáp án của shinobi:
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
                className={`w-full p-4 border-2 rounded-xl text-center font-black text-xl outline-none transition-all ${
                  !isAnswered
                    ? 'border-orange-200 focus:border-orange-500 bg-white dark:bg-[#120c07] text-slate-900 dark:text-orange-50'
                    : normalizeString(shortAnswerInput) === normalizeString(question.answerText || '')
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-red-500 bg-red-50 text-red-700'
                }`}
              />

              {isAnswered &&
                normalizeString(shortAnswerInput) !== normalizeString(question.answerText || '') && (
                  <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                    <p className="text-sm text-green-600 font-black uppercase mb-1">Đáp án chuẩn</p>
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
            className="bg-gradient-to-r from-orange-50/75 to-amber-50/75 dark:from-orange-950/20 dark:to-amber-950/10 backdrop-blur-sm p-5 rounded-[1.5rem] border-2 border-orange-100 dark:border-orange-900/30 mb-6"
          >
            <h4 className="font-black text-orange-800 dark:text-orange-300 mb-2 text-sm uppercase tracking-wider">
              Bí kíp giải
            </h4>
            <div className="text-slate-700 dark:text-orange-100 text-[clamp(13px,3.5vw,15px)] leading-relaxed overflow-visible">
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
            className={`w-full font-black py-4 px-6 rounded-[1.5rem] flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
              isSubmitDisabled()
                ? 'bg-gray-200 text-gray-400 dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 hover:brightness-110 text-white shadow-lg'
            }`}
          >
            <Check size={20} />
            Kiểm tra nhẫn thuật
          </motion.button>
        )}

        {isAnswered && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:brightness-110 text-white font-black py-4 px-6 rounded-[1.5rem] shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {isLastQuestion ? 'Hoàn thành nhiệm vụ' : 'Câu tiếp theo'}
            <ArrowRight size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
};