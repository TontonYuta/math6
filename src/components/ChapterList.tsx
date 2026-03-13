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
  const [expandedChapter, setExpandedChapter] = useState<string | null>(chapters[0]?.id || null);

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
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-black text-indigo-900 dark:text-indigo-300 mb-2 tracking-tight">Toán Lớp 6</h1>
        <p className="text-indigo-600/80 dark:text-indigo-400/80 font-medium">Lộ trình học tập thông minh</p>
      </div>

      {chapters.map((chapter) => {
        const { completed, total } = getChapterProgress(chapter);
        const isChapterCompleted = completed === total;

        return (
          <div key={chapter.id} className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-indigo-100 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full px-6 py-5 flex items-center justify-between bg-white dark:bg-slate-800 hover:bg-indigo-50/30 dark:hover:bg-slate-700/50 transition-colors"
            >
              <div className="flex items-center text-left gap-4">
                <div className={`p-3 rounded-2xl ${isChapterCompleted ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}`}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{chapter.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-24 bg-gray-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${isChapterCompleted ? 'bg-green-500' : 'bg-indigo-500'}`}
                        style={{ width: `${(completed / total) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-400 dark:text-slate-500">{completed}/{total} bài</span>
                  </div>
                </div>
              </div>
              <div className="text-indigo-400 dark:text-slate-500 ml-4">
                {expandedChapter === chapter.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </button>

            <AnimatePresence>
              {expandedChapter === chapter.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-indigo-50 dark:border-slate-700"
                >
                  <div className="p-2 bg-slate-50/50 dark:bg-slate-800/50">
                    {chapter.topics.map((topic, index) => {
                      const isCompleted = progress.completedTopics[topic.id] !== undefined;
                      const videoId = topic.youtubeUrl ? getYoutubeId(topic.youtubeUrl) : null;
                      
                      return (
                        <div key={topic.id} className="mb-1 p-2 rounded-2xl hover:bg-white dark:hover:bg-slate-700/50 hover:shadow-sm transition-all group">
                          <button
                            onClick={() => onSelectTopic(topic)}
                            className="w-full flex items-center justify-between p-2 text-left"
                          >
                            <div className="flex items-start gap-3 pr-4">
                              <span className="text-indigo-300 dark:text-slate-500 font-black mt-0.5 w-5">{index + 1}.</span>
                              <div>
                                <div className={`font-bold transition-colors ${isCompleted ? 'text-green-700 dark:text-green-400' : 'text-gray-800 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-400'}`}>
                                  <MathText content={topic.title} />
                                </div>
                                <div className="text-xs text-gray-500 dark:text-slate-400 mt-1 line-clamp-1">
                                  <MathText content={topic.description} />
                                </div>
                              </div>
                            </div>
                            <div className={`${isCompleted ? 'text-green-500' : 'text-indigo-200 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400'} transition-colors shrink-0`}>
                              {isCompleted ? <CheckCircle size={24} /> : <PlayCircle size={24} />}
                            </div>
                          </button>
                          
                          {videoId && (
                            <a
                              href={topic.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 ml-10 mr-2 block relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-600 group/video"
                            >
                              <img 
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} 
                                alt="Video bài giảng" 
                                className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover/video:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                                  <Youtube size={28} className="fill-white text-white" />
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
