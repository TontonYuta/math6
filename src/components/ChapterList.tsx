import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Play, Youtube, ChevronDown, ChevronUp } from 'lucide-react';
import { Chapter, Topic, UserProgress } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectTopic: (topic: Topic) => void;
  progress: UserProgress;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectTopic, progress }) => {
  const [expandedChapterId, setExpandedChapterId] = useState<string | null>(null);

  const allTopics = chapters.flatMap((c) => c.topics);

  // Bài hiện tại = bài đầu tiên chưa hoàn thành
  const currentTopicId = allTopics.find((t) => progress.completedTopics[t.id] === undefined)?.id;

  const toggleChapter = (chapterId: string) => {
    setExpandedChapterId((prev) => (prev === chapterId ? null : chapterId));
  };

  const getOffset = (index: number) => {
    const offsets = [0, 24, 42, 24, 0, -24, -42, -24];
    return offsets[index % offsets.length];
  };

  const getChapterStats = (chapter: Chapter) => {
    const completed = chapter.topics.filter((topic) => progress.completedTopics[topic.id] !== undefined).length;
    return {
      completed,
      total: chapter.topics.length
    };
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
          Chọn bất kỳ nhiệm vụ nào để học hoặc giao bài tập về nhà
        </p>
      </div>

      <div className="space-y-8">
        {chapters.map((chapter, chapterIndex) => {
          const isOpen = expandedChapterId === chapter.id;
          const { completed, total } = getChapterStats(chapter);
          const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <div key={chapter.id} className="relative">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="w-full rounded-[2rem] border-2 border-orange-200 dark:border-orange-800 bg-white/90 dark:bg-[#1b120b]/90 backdrop-blur-md shadow-[0_10px_24px_rgba(0,0,0,0.12)] px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left hover:bg-orange-50/70 dark:hover:bg-orange-950/20 transition-all"
              >
                <div className="min-w-0 flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
                      <span className="font-black text-sm">{chapterIndex + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base sm:text-lg font-black text-orange-700 dark:text-orange-200 uppercase tracking-wider truncate">
                        {chapter.title}
                      </h2>
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-orange-100/55">
                        {completed}/{total} nhiệm vụ đã hoàn thành
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-orange-100/80 dark:bg-[#2e1b0f] h-2.5 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <div className="hidden sm:flex px-3 py-1.5 rounded-full bg-orange-50 dark:bg-[#2a180d] border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 text-xs font-black uppercase tracking-wider">
                    {percent}%
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 dark:bg-[#2a180d] border-2 border-orange-200 dark:border-orange-800 flex items-center justify-center text-orange-600 dark:text-orange-300">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="relative pt-8 pb-2">
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 border-l-[10px] border-dashed border-orange-200/90 dark:border-orange-900/50 -z-10"></div>

                      <div className="flex flex-col items-center gap-12 sm:gap-16">
                        {chapter.topics.map((topic) => {
                          const globalIndex = allTopics.findIndex((t) => t.id === topic.id);
                          const score = progress.completedTopics[topic.id];
                          const isCompleted = score !== undefined;
                          const isCurrent = topic.id === currentTopicId;
                          const offset = getOffset(globalIndex);
                          const isRight = offset >= 0;

                          // Màu:
                          // - đã làm: cam
                          // - bài hiện tại: xanh lá
                          // - chưa làm: xanh dương
                          let btnColor =
                            'bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 border-blue-700 text-white';

                          if (isCompleted) {
                            btnColor =
                              'bg-gradient-to-b from-orange-500 via-red-500 to-amber-500 border-orange-700 text-white';
                          } else if (isCurrent) {
                            btnColor =
                              'bg-gradient-to-b from-emerald-400 via-green-500 to-lime-500 border-green-700 text-white';
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
                                  transition={{
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    duration: 0.6,
                                    ease: 'easeInOut'
                                  }}
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
                                onClick={() => onSelectTopic(topic)}
                                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-b-[6px] border-2 flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition-all z-20 active:border-b-0 active:translate-y-1.5 hover:scale-105 cursor-pointer ${btnColor}`}
                                aria-label={topic.title}
                              >
                                {isCompleted ? (
                                  <Star className="fill-white drop-shadow-sm" size={28} />
                                ) : (
                                  <Play size={28} className="ml-1 fill-current" />
                                )}
                              </button>

                              {topic.youtubeUrl && (
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
                                  isRight
                                    ? 'right-[100%] mr-3 sm:mr-5 text-right'
                                    : 'left-[100%] ml-3 sm:ml-5 text-left'
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
                                        : 'Chưa làm'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};