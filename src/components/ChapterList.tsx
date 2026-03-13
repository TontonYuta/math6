import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, PlayCircle, BookOpen } from 'lucide-react';
import { Chapter, Topic } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
  onSelectTopic: (topic: Topic) => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelectTopic }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(chapters[0]?.id || null);

  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Toán Lớp 6</h1>
        <p className="text-indigo-600/80">Trắc nghiệm theo chuyên đề</p>
      </div>

      {chapters.map((chapter) => (
        <div key={chapter.id} className="bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden">
          <button
            onClick={() => toggleChapter(chapter.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-indigo-50/50 transition-colors"
          >
            <div className="flex items-start text-left gap-4">
              <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600 mt-1">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{chapter.title}</h2>
                <p className="text-sm text-gray-500">{chapter.description}</p>
              </div>
            </div>
            <div className="text-indigo-400 ml-4">
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
                className="border-t border-indigo-50"
              >
                <div className="p-2">
                  {chapter.topics.map((topic, index) => (
                    <button
                      key={topic.id}
                      onClick={() => onSelectTopic(topic)}
                      className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-indigo-50 transition-colors group text-left"
                    >
                      <div className="flex items-start gap-3 pr-4">
                        <span className="text-indigo-300 font-mono font-bold mt-0.5">{index + 1}.</span>
                        <div>
                          <h3 className="font-medium text-gray-800 group-hover:text-indigo-700 transition-colors">
                            {topic.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-1">{topic.description}</p>
                        </div>
                      </div>
                      <div className="text-indigo-200 group-hover:text-indigo-500 transition-colors shrink-0">
                        <PlayCircle size={24} />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
