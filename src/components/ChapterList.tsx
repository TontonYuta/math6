import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, PlayCircle, BookOpen, CheckCircle, Youtube } from 'lucide-react';
import { Chapter, Topic, UserProgress } from '../types';
import { MathText } from './MathText';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectTopic: (topic: Topic) => void;
  progress: UserProgress;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectTopic, progress }) => {
  // ĐÃ SỬA: Đổi thành null để gập tất cả các chương lúc mới vào app
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  const getChapterProgress = (chapter: Chapter) => {
    const completed = chapter.topics.filter(t => progress.completedTopics[t.id] !== undefined).length;
    return { completed, total: chapter.topics.length };
  };

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Toán Lớp 6</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">Lộ trình học tập thông minh</p>
      </div>

      {chapters.map((chapter) => {
        const { completed, total } = getChapterProgress(chapter);
        const isChapterCompleted = completed === total;

        return (
          <div key={chapter.id} className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full px-6 py-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-center text-left gap-4">
                <div className={`p-4 rounded-2xl ${isChapterCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500'}`}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{chapter.title}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-24 bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-700 ease-out ${isChapterCompleted ? 'bg-green-500' : 'bg-indigo-500'}`}
                        style={{ width: `${(completed / total) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{completed}/{total} bài</span>
                  </div>
                </div>
              </div>
              <div className="text-slate-300 dark:text-slate-600 ml-4">
                {expandedChapter === chapter.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>

            <AnimatePresence>
              {expandedChapter === chapter.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="border-t border-slate-50 dark:border-slate-700"
                >
                  <div className="p-4 bg-white dark:bg-slate-800/50">
                    {chapter.topics.map((topic, index) => {
                      const isCompleted = progress.completedTopics[topic.id] !== undefined;
                      const videoId = topic.youtubeUrl ? getYoutubeId(topic.youtubeUrl) : null;
                      
                      return (
                        <div key={topic.id} className="mb-2 p-1 rounded-[1.5rem] hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all group">
                          <button
                            onClick={() => onSelectTopic(topic)}
                            className="w-full flex items-center justify-between p-3 text-left"
                          >
                            <div className="flex items-start gap-4 pr-4">
                              <span className="text-slate-300 dark:text-slate-600 font-bold mt-0.5 w-5 text-sm">{index + 1}.</span>
                              <div>
                                <div className={`font-bold text-base transition-colors ${isCompleted ? 'text-green-600 dark:text-green-400' : 'text-slate-800 dark:text-slate-200 group-hover:text-indigo-600'}`}>
                                  <MathText content={topic.title} />
                                </div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 font-medium">
                                  <MathText content={topic.description} />
                                </div>
                              </div>
                            </div>
                            <div className={`${isCompleted ? 'text-green-500' : 'text-slate-200 dark:text-slate-700 group-hover:text-indigo-500'} transition-colors shrink-0`}>
                              {isCompleted ? <CheckCircle size={26} /> : <PlayCircle size={26} />}
                            </div>
                          </button>
                          
                          {videoId && (
                            <a
                              href={topic.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 mb-4 ml-12 mr-3 block relative rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 group/video shadow-sm"
                            >
                              <img 
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                                alt="Video bài giảng" 
                                className="w-full h-36 sm:h-44 object-cover transition-transform duration-500 group-hover/video:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
                                <div className="w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 shadow-xl transition-transform group-hover/video:scale-110">
                                  <Youtube size={32} className="fill-red-600" />
                                </div>
                              </div>
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};