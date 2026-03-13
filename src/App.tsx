/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { chapters } from './data/chapters';
import { ChapterList } from './components/ChapterList';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { Topic } from './types';

type AppState = 'home' | 'quiz' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [score, setScore] = useState(0);

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setAppState('quiz');
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setAppState('result');
  };

  const handleRetry = () => {
    setAppState('quiz');
  };

  const handleHome = () => {
    setAppState('home');
    setSelectedTopic(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-200">
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <AnimatePresence mode="wait">
          {appState === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ChapterList chapters={chapters} onSelectTopic={handleSelectTopic} />
            </motion.div>
          )}

          {appState === 'quiz' && selectedTopic && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Quiz
                topic={selectedTopic}
                onBack={handleHome}
                onComplete={handleQuizComplete}
              />
            </motion.div>
          )}

          {appState === 'result' && selectedTopic && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Result
                score={score}
                total={selectedTopic.questions.length}
                onRetry={handleRetry}
                onHome={handleHome}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

