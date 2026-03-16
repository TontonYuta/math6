/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Capacitor } from '@capacitor/core';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { chapters } from './data/chapters';
import { achievements } from './data/achievements';
import { ChapterList } from './components/ChapterList';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { Review } from './components/Review';
import { Settings } from './components/Settings';
import { Topic, UserProgress, Achievement } from './types';
import {
  Trophy,
  Star,
  X,
  Settings as SettingsIcon,
  RefreshCw,
  User,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { APP_VERSION, VERSION_CHECK_URL } from './config';

type AppState = 'home' | 'quiz' | 'result' | 'review';
type UserAnswer = number | boolean[] | string | null;

const STORAGE_KEY = 'math_quiz_progress';
const THEME_KEY = 'math_quiz_theme';

const initialProgress: UserProgress = {
  completedTopics: {},
  unlockedAchievements: []
};

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [studentName, setStudentName] = useState<string>(() => localStorage.getItem('studentName') || '');
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('Đã có bài tập mới! Cập nhật ứng dụng ngay.');
  const [updateUrl, setUpdateUrl] = useState<string | null>(null);
  const [newVersion, setNewVersion] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgressText, setUpdateProgressText] = useState('');
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('studentName', studentName);
  }, [studentName]);

  const checkForUpdates = async () => {
    setIsCheckingUpdate(true);
    try {
      if (!VERSION_CHECK_URL) {
        setTimeout(() => {
          setIsCheckingUpdate(false);
          alert('Chưa cấu hình link kiểm tra phiên bản (VERSION_CHECK_URL).');
        }, 1000);
        return;
      }

      const response = await fetch(VERSION_CHECK_URL);
      const data = await response.json();

      if (data.version && data.version !== APP_VERSION) {
        if (data.message) setUpdateMessage(data.message);
        if (data.updateUrl) setUpdateUrl(data.updateUrl);
        setNewVersion(data.version);
        setShowUpdateBanner(true);
      } else {
        alert('Bạn đang dùng phiên bản mới nhất!');
      }
    } catch (error) {
      console.error('Lỗi kiểm tra phiên bản:', error);
      alert('Không thể kiểm tra phiên bản lúc này. Vui lòng thử lại sau.');
    } finally {
      setIsCheckingUpdate(false);
    }
  };

  const handleUpdate = async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        setIsUpdating(true);
        setUpdateProgressText('Đang kết nối máy chủ...');

        const downloadUrl =
          updateUrl || `https://github.com/TontonYuta/math6/releases/download/v${newVersion}/update.zip`;

        setUpdateProgressText('Đang tải bản cập nhật...');

        const version = await CapacitorUpdater.download({
          url: downloadUrl,
          version: newVersion
        });

        setUpdateProgressText('Đang cài đặt...');

        await CapacitorUpdater.set({ id: version.id });
      } catch (error: any) {
        console.error('Lỗi cập nhật OTA:', error);
        alert('Cập nhật thất bại. Lỗi: ' + (error.message || 'Không thể tải file từ máy chủ.'));
        setIsUpdating(false);
      }
    } else {
      if (updateUrl && updateUrl.endsWith('.apk')) {
        window.open(updateUrl, '_blank');
      } else {
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Lỗi đọc dữ liệu', e);
      }
    }

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem(THEME_KEY, 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem(THEME_KEY, 'light');
      }
      return next;
    });
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateProgress = (topicId: string, finalScore: number) => {
    const newProgress = { ...progress };

    const currentBest = newProgress.completedTopics[topicId] || 0;
    if (finalScore > currentBest) {
      newProgress.completedTopics[topicId] = finalScore;
    }

    const newlyUnlocked: string[] = [];
    achievements.forEach((achievement) => {
      if (!newProgress.unlockedAchievements.includes(achievement.id) && achievement.condition(newProgress)) {
        newlyUnlocked.push(achievement.id);
        setNewAchievement(achievement);
        triggerConfetti();
      }
    });

    newProgress.unlockedAchievements = [...newProgress.unlockedAchievements, ...newlyUnlocked];

    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#ec4899']
    });
  };

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setAppState('quiz');
  };

  const handleQuizComplete = (finalScore: number, total: number, answers: UserAnswer[]) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setUserAnswers(answers);

    if (selectedTopic) {
      updateProgress(selectedTopic.id, finalScore);
    }

    setAppState('result');
  };

  const handleRetry = () => {
    setAppState('quiz');
    setUserAnswers([]);
  };

  const handleHome = () => {
    setAppState('home');
    setSelectedTopic(null);
    setUserAnswers([]);
    setScore(0);
    setTotalQuestions(0);
  };

  const handleReview = () => {
    setAppState('review');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-black dark:via-[#0a0f1d] dark:to-black font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-200 dark:selection:bg-indigo-900 transition-colors duration-500 scroll-smooth antialiased">
      <AnimatePresence>
        {showUpdateBanner && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-indigo-600/95 backdrop-blur-md text-white p-3 text-center shadow-lg flex justify-center items-center gap-4 border-b border-indigo-500"
          >
            <span className="font-medium text-sm tracking-wide">
              {isUpdating ? updateProgressText : updateMessage}
            </span>
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="bg-white text-indigo-600 px-5 py-1.5 rounded-full text-sm font-bold hover:bg-indigo-50 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {isUpdating ? 'Đang xử lý...' : 'Cập nhật'}
            </button>
            {!isUpdating && (
              <button
                onClick={() => setShowUpdateBanner(false)}
                className="text-indigo-200 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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
              <div className="flex justify-between items-center mb-8 sticky top-4 z-10">
                <div className="flex items-center gap-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl px-5 py-3 rounded-[1.5rem] shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                  <User size={20} className="text-indigo-500 dark:text-indigo-400" />
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Nhập tên của em..."
                    className="bg-transparent border-none outline-none text-sm font-semibold w-32 sm:w-48 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="p-3 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-[1.5rem] shadow-sm border border-slate-200/50 dark:border-slate-700/50 transition-all hover:scale-105 active:scale-95"
                  aria-label="Cài đặt"
                >
                  <SettingsIcon size={24} />
                </button>
              </div>

              <ChapterList chapters={chapters} onSelectTopic={handleSelectTopic} progress={progress} />

              <div className="mt-12 max-w-2xl mx-auto px-2">
                <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-[2rem] border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-indigo-100/20 dark:shadow-none overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setIsAchievementsOpen(!isAchievementsOpen)}
                    className="w-full flex items-center justify-between p-5 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 rounded-2xl shadow-inner">
                        <Trophy className="text-amber-500 dark:text-amber-400" size={26} />
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-wider">
                          Thành tích
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                          Đã mở khóa:{' '}
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                            {progress.unlockedAchievements.length}
                          </span>
                          /{achievements.length}
                        </p>
                      </div>
                    </div>
                    <div className="text-slate-400 dark:text-slate-500 bg-slate-100/50 dark:bg-slate-800 p-2 rounded-full">
                      {isAchievementsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isAchievementsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-5 pt-0 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-100/50 dark:border-slate-700/50 mt-2 pt-4">
                          {achievements.map((achievement) => {
                            const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
                            return (
                              <div
                                key={achievement.id}
                                className={`p-4 rounded-[1.5rem] border flex flex-col items-center text-center transition-all duration-300 ${
                                  isUnlocked
                                    ? 'bg-gradient-to-b from-amber-50/50 to-white dark:from-slate-800 dark:to-slate-800/50 border-amber-200 dark:border-amber-500/30 shadow-sm'
                                    : 'bg-slate-50/30 dark:bg-slate-800/20 border-slate-100/50 dark:border-slate-700/30 opacity-50 grayscale'
                                }`}
                              >
                                <span className="text-3xl mb-3 drop-shadow-sm">{achievement.icon}</span>
                                <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1">
                                  {achievement.title}
                                </h3>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                                  {achievement.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
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
              <Quiz topic={selectedTopic} onBack={handleHome} onComplete={handleQuizComplete} />
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
                total={totalQuestions}
                topicTitle={selectedTopic.title}
                onRetry={handleRetry}
                onHome={handleHome}
                onReview={handleReview}
              />
            </motion.div>
          )}

          {appState === 'review' && selectedTopic && (
            <motion.div
              key="review"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Review topic={selectedTopic} userAnswers={userAnswers} onBack={() => setAppState('result')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-xs text-slate-400 dark:text-slate-500">
        <button
          onClick={checkForUpdates}
          disabled={isCheckingUpdate}
          className="hover:text-indigo-500 transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-widest font-bold"
        >
          <RefreshCw size={14} className={isCheckingUpdate ? 'animate-spin' : ''} />
          {isCheckingUpdate ? 'Đang kiểm tra...' : `Phiên bản: ${APP_VERSION}`}
        </button>
      </footer>

      <AnimatePresence>
        {newAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] w-[90%] max-w-sm"
          >
            <div className="bg-indigo-600/95 backdrop-blur-md text-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 relative overflow-hidden border border-indigo-500/50">
              <div className="absolute top-0 right-0 p-3">
                <button
                  onClick={() => setNewAchievement(null)}
                  className="text-white/50 hover:text-white transition-colors active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm shadow-inner">
                <span className="text-4xl drop-shadow-md">{newAchievement.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">
                    Thành tích mới!
                  </span>
                </div>
                <h3 className="text-lg font-black leading-tight tracking-tight">{newAchievement.title}</h3>
                <p className="text-xs text-indigo-100/90 mt-1 font-medium">{newAchievement.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSettingsOpen && (
          <Settings
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            onResetProgress={resetProgress}
          />
        )}
      </AnimatePresence>
    </div>
  );
}