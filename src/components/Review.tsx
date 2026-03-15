import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Topic, QuestionImage, UserAnswer } from '../types';
import { MathText } from './MathText';

interface ReviewProps {
  topic: Topic;
  userAnswers: UserAnswer[];
  onBack: () => void;
}

const normalizeString = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(',', '.')
    .replace(/\.$/, '');

const renderQuestionImages = (images?: QuestionImage[]) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4 mb-6 mt-4">
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

export const Review: React.FC<ReviewProps> = ({ topic, userAnswers, onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 pb-12 antialiased">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 sticky top-0 bg-white/70 dark:bg-black/70 backdrop-blur-xl z-30 py-4 sm:py-6 px-2 -mx-2">
        <button
          onClick={onBack}
          className="p-2 sm:p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all active:scale-90 shrink-0"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1">
          <h2 className="text-[clamp(20px,5vw,24px)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Xem lại bài làm
          </h2>
          <p className="text-[clamp(12px,3vw,14px)] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider line-clamp-1">
            {topic.title}
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-10">
        {topic.questions.map((question, qIndex) => {
          const userAnswer = userAnswers[qIndex];
          const questionType = question.type ?? 'single-choice';

          let isCorrect = false;

          if (questionType === 'single-choice') {
            isCorrect = userAnswer === question.correctAnswerIndex;
          } else if (questionType === 'true-false') {
            const tfUserAnswer = Array.isArray(userAnswer) ? userAnswer : [];
            isCorrect =
              question.trueFalseAnswers?.every((ans, idx) => ans === tfUserAnswer[idx]) ?? false;
          } else if (questionType === 'short-answer') {
            isCorrect = normalizeString(String(userAnswer || '')) === normalizeString(question.answerText || '');
          }

          return (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qIndex * 0.05 }}
              className={`bg-white dark:bg-slate-800/50 p-5 sm:p-6 rounded-[2rem] border shadow-sm ${
                isCorrect
                  ? 'border-green-100 dark:border-green-900/20'
                  : 'border-red-100 dark:border-red-900/20'
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-2">
                <div
                  className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-[clamp(13px,3.5vw,14px)] mt-0.5 ${
                    isCorrect
                      ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400'
                  }`}
                >
                  {qIndex + 1}
                </div>
                <div className="text-[clamp(16px,4.5vw,18px)] font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  <MathText content={question.text} />
                </div>
              </div>

              {renderQuestionImages(question.images)}

              {questionType === 'single-choice' && (
                <div className="space-y-3 mb-6 mt-6">
                  {question.options.map((option, oIndex) => {
                    const isUserChoice = userAnswer === oIndex;
                    const isActualCorrect = question.correctAnswerIndex === oIndex;
                    const optionImage = question.optionImages?.[oIndex] ?? null;

                    let optionClasses =
                      'w-full text-left p-3 sm:p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ';

                    if (isActualCorrect) {
                      optionClasses +=
                        'border-green-500 bg-green-50/50 dark:bg-green-900/20 text-green-800 dark:text-green-300 font-bold';
                    } else if (isUserChoice && !isActualCorrect) {
                      optionClasses +=
                        'border-red-500 bg-red-50/50 dark:bg-red-900/20 text-red-800 dark:text-red-300';
                    } else {
                      optionClasses +=
                        'border-slate-100 dark:border-slate-700 opacity-60 text-slate-500 dark:text-slate-500';
                    }

                    return (
                      <div key={oIndex} className={optionClasses}>
                        <div className="flex-1 min-w-0">
                          <MathText content={option} className="text-[clamp(14px,4vw,16px)] pt-0.5" />

                          {optionImage && (
                            <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 dark:border-slate-600">
                              <img
                                src={optionImage.src}
                                alt={optionImage.alt || `Hình đáp án ${oIndex + 1}`}
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

                        {isActualCorrect && (
                          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5 sm:mt-1" size={20} />
                        )}
                        {isUserChoice && !isActualCorrect && (
                          <XCircle className="text-red-500 shrink-0 mt-0.5 sm:mt-1" size={20} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {questionType === 'true-false' && question.trueFalseStatements && (
                <div className="space-y-3 mb-6 mt-6">
                  {question.trueFalseStatements.map((stmt, idx) => {
                    const tfUserAnswer = Array.isArray(userAnswer) ? userAnswer : [];
                    const uChoice = tfUserAnswer[idx];
                    const aChoice = question.trueFalseAnswers?.[idx];
                    const isChoiceCorrect = uChoice === aChoice;

                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row gap-3 ${
                          isChoiceCorrect
                            ? 'border-green-100 bg-green-50/30 dark:border-green-900/30 dark:bg-green-900/10'
                            : 'border-red-100 bg-red-50/30 dark:border-red-900/30 dark:bg-red-900/10'
                        }`}
                      >
                        <div className="flex-1 text-[clamp(14px,4vw,16px)] text-gray-800 dark:text-slate-200">
                          <div className="font-bold mb-1 text-indigo-500 uppercase tracking-widest text-xs">
                            Đáp án {String.fromCharCode(97 + idx)}
                          </div>
                          <MathText content={stmt} />
                        </div>

                        <div className="flex flex-col gap-2 shrink-0 text-[13px] font-bold">
                          <div
                            className={`px-3 py-1.5 rounded-lg flex items-center justify-between gap-2 ${
                              isChoiceCorrect
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                                : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300'
                            }`}
                          >
                            <span>
                              Bạn chọn: {uChoice === true ? 'Đúng' : uChoice === false ? 'Sai' : 'Trống'}
                            </span>
                            {isChoiceCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                          </div>

                          {!isChoiceCorrect && (
                            <div className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 flex items-center justify-between gap-2">
                              <span>Đáp án: {aChoice ? 'Đúng' : 'Sai'}</span>
                              <CheckCircle2 size={16} />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {questionType === 'short-answer' && (
                <div className="mb-6 mt-6 flex flex-col sm:flex-row gap-4">
                  <div
                    className={`flex-1 p-4 rounded-2xl border-2 text-center ${
                      isCorrect
                        ? 'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-300'
                        : 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-300'
                    }`}
                  >
                    <div className="text-xs uppercase tracking-widest mb-1 opacity-70">Bạn đã nhập</div>
                    <div className="font-black text-xl">{String(userAnswer || '(Để trống)')}</div>
                  </div>

                  {!isCorrect && (
                    <div className="flex-1 p-4 rounded-2xl border-2 border-green-500 bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-300 text-center">
                      <div className="text-xs uppercase tracking-widest mb-1 opacity-70">Đáp án chính xác</div>
                      <div className="font-black text-xl">{question.answerText}</div>
                    </div>
                  )}
                </div>
              )}

              {question.explanation && (
                <div className="mt-4 sm:mt-6">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-5 rounded-[1.5rem] border border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="w-1.5 h-4 bg-indigo-500 rounded-full"></div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[clamp(12px,3vw,14px)] uppercase tracking-widest">
                        Giải thích
                      </h4>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-[clamp(13px,3.5vw,15px)] leading-relaxed">
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