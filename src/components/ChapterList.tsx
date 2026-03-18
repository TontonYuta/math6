import React from 'react';
import { motion } from 'motion/react';
import { Star, Lock, Play, Youtube } from 'lucide-react';
import { Chapter, Topic, UserProgress } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectTopic: (topic: Topic) => void;
  progress: UserProgress;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectTopic, progress }) => {
  const allTopics = chapters.flatMap((c) => c.topics);

  const unlockedTopics = new Set<string>();
  let isPreviousCompleted = true;

  allTopics.forEach((topic) => {
    if (isPreviousCompleted) {
      unlockedTopics.add(topic.id);
    }
    const isCompleted = progress.completedTopics[topic.id] !== undefined;
    isPreviousCompleted = isCompleted;
  });

  const currentTopicId = allTopics.find(
    (t) => unlockedTopics.has(t.id) && progress.completedTopics[t.id] === undefined
  )?.id;

  const getOffset = (index: number) => {
    const offsets = [0, 24, 42, 24, 0, -24, -42, -24];
    return offsets[index % offsets.length];
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 relative">
      <div className="text-center mb-10 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/75 dark:bg-[#2a180d]/75 backdrop-blur-md border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 shadow-sm mb-4">
          <span className="text-lg">🍃</span>
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em]">
            Học viện Konoha
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-black text-orange-500 dark:text-orange-300 drop-shadow-sm mb-3 tracking-tight"
          style={{ WebkitTextStroke: '1px rgba(154,52,18,0.65)' }}
        >
          Hành Trình Shinobi
        </h1>

        <p className="text-slate-600 dark:text-orange-100/70 font-bold text-sm sm:text-base bg-white/60 dark:bg-[#1f140c]/70 inline-block px-4 py-2 rounded-full border-2 border-orange-100 dark:border-orange-900/40">
          Vượt từng nhiệm vụ để thăng cấp ninja
        </p>
      </div>

      <div className="relative py-6">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 border-l-[10px] border-dashed border-orange-200/90 dark:border-orange-900/50 -z-10"></div>

        {chapters.map((chapter, chapterIndex) => (
          <div key={chapter.id} className="mb-16 relative">
            <div className="flex justify-center mb-8 sticky top-20 z-20">
              <div className="bg-white/90 dark:bg-[#1b120b]/90 backdrop-blur-md px-6 py-3 rounded-full border-2 border-orange-200 dark:border-orange-800 shadow-sm text-center">
                <h2 className="text-base sm:text-lg font-black text-orange-700 dark:text-orange-200 uppercase tracking-wider">
                  {chapter.title}
                </h2>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-orange-100/55 mt-1 uppercase tracking-[0.18em]">
                  Cuộn nhiệm vụ {chapterIndex + 1}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-12 sm:gap-16">
              {chapter.topics.map((topic) => {
                const globalIndex = allTopics.findIndex((t) => t.id === topic.id);
                const isUnlocked = unlockedTopics.has(topic.id);
                const score = progress.completedTopics[topic.id];
                const isCompleted = score !== undefined;
                const isCurrent = topic.id === currentTopicId || (isUnlocked && !isCompleted && !currentTopicId);
                const offset = getOffset(globalIndex);
                const isRight = offset >= 0;

                let btnColor =
                  'bg-slate-200 border-slate-300 text-slate-400 dark:bg-slate-700 dark:border-slate-800 dark:text-slate-500';
                if (isCompleted) {
                  btnColor =
                    'bg-gradient-to-b from-orange-500 via-red-500 to-amber-500 border-orange-700 text-white';
                } else if (isCurrent) {
                  btnColor =
                    'bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 border-blue-700 text-white';
                } else if (isUnlocked) {
                  btnColor =
                    'bg-white/95 border-orange-200 text-orange-500 dark:bg-[#1f140c] dark:border-orange-800 dark:text-orange-300';
                }

                let stars = 0;
                if (isCompleted) {
                  const percentage = score / (topic.questions?.length || 10);
                  if (percentage >= 0.8) stars = 3;
                  else if (percentage >= 0.5) stars = 2;
                  else stars = 1;
                }

                return (
                  <div
                    key={topic.id}
                    className="relative flex flex-col items-center"
                    style={{ transform: `translateX(${offset}px)` }}
                  >
{isCurrent && (
  <motion.div
    initial={{ y: -10 }}
    animate={{ y: 0 }}
    transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.6, ease: 'easeInOut' }}
    className="absolute -top-12 sm:-top-14 z-30 drop-shadow-md"
  >
    <img
      src="/images/naruto-run.png"
      alt="Naruto"
      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
      loading="eager"
    />
  </motion.div>
)}

                    <button
                      onClick={() => isUnlocked && onSelectTopic(topic)}
                      disabled={!isUnlocked}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-b-[6px] border-2 flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all z-20 ${
                        isUnlocked
                          ? 'active:border-b-0 active:translate-y-1.5 hover:scale-105 cursor-pointer'
                          : 'cursor-not-allowed opacity-80'
                      } ${btnColor}`}
                      aria-label={topic.title}
                    >
                      {isCompleted ? (
                        <Star className="fill-white drop-shadow-sm" size={28} />
                      ) : isUnlocked ? (
                        <Play size={28} className="ml-1 fill-current" />
                      ) : (
                        <Lock size={24} />
                      )}
                    </button>

                    {topic.youtubeUrl && isUnlocked && (
                      <a
                        href={topic.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute -top-2 sm:-top-3 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-[#1f140c] rounded-full border-2 border-orange-200 dark:border-orange-800 flex items-center justify-center text-red-500 hover:scale-110 active:translate-y-1 z-30 shadow-sm ${
                          isRight ? '-right-2 sm:-right-3' : '-left-2 sm:-left-3'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                        title="Xem video bí kíp"
                      >
                        <Youtube size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    )}

                    {isCompleted && (
                      <div className="absolute -bottom-3 sm:-bottom-4 flex gap-1 bg-white/95 dark:bg-[#1b120b]/95 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm border-2 border-orange-100 dark:border-orange-900/40 z-30">
                        {[1, 2, 3].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            className={
                              star <= stars
                                ? 'text-amber-500 fill-amber-500'
                                : 'text-slate-200 dark:text-slate-600'
                            }
                          />
                        ))}
                      </div>
                    )}

                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-28 sm:w-40 pointer-events-none z-10 ${
                        isRight ? 'right-[100%] mr-3 sm:mr-5 text-right' : 'left-[100%] ml-3 sm:ml-5 text-left'
                      }`}
                    >
                      <div className="bg-white/95 dark:bg-[#1b120b]/95 px-3 py-2 rounded-[1.25rem] shadow-sm border-2 border-orange-100 dark:border-orange-900/40 inline-block">
                        <p className="text-[11px] sm:text-sm font-black text-slate-700 dark:text-orange-100 line-clamp-3 leading-snug">
                          {topic.title}
                        </p>
                        <p className="text-[9px] sm:text-[10px] mt-1 font-bold uppercase tracking-wider text-slate-400 dark:text-orange-100/45">
                          {isCompleted
                            ? 'Đã hoàn thành'
                            : isCurrent
                              ? 'Đang thử thách'
                              : isUnlocked
                                ? 'Đã mở khóa'
                                : 'Chưa mở khóa'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};