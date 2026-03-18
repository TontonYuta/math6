/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { APP_VERSION, VERSION_CHECK_URL } from './config';

type AppState = 'home' | 'quiz' | 'result' | 'review';

const STORAGE_KEY = 'math_quiz_progress';
const THEME_KEY = 'math_quiz_theme';
const MUSIC_KEY = 'math_quiz_music';

const initialProgress: UserProgress = {
  completedTopics: {},
  unlockedAchievements: []
};

export default function App() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [studentName, setStudentName] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem('studentName') || '';
  });

  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('Hokage gửi nhiệm vụ mới! Cập nhật ứng dụng ngay.');
  const [updateUrl, setUpdateUrl] = useState<string | null>(null);
  const [newVersion, setNewVersion] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgressText, setUpdateProgressText] = useState('');
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  const [isMusicEnabled, setIsMusicEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(MUSIC_KEY) === 'on';
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem('studentName', studentName);
  }, [studentName]);

  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Failed to parse progress', e);
      }
    }

    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/konoha-theme.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    const audio = audioRef.current;

    if (isMusicEnabled) {
      audio.play().catch(() => {
        console.warn('Autoplay bị chặn cho đến khi người dùng tương tác.');
      });
    } else {
      audio.pause();
    }

    localStorage.setItem(MUSIC_KEY, isMusicEnabled ? 'on' : 'off');

    return () => {
      audio.pause();
    };
  }, [isMusicEnabled]);

  const toggleMusic = () => {
    setIsMusicEnabled((prev) => !prev);
  };

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
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

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
        setUpdateProgressText('Đang kết nối tới trạm liên lạc Konoha...');

        const version = await CapacitorUpdater.download({
          url: updateUrl || 'https://your-fallback-url.com/update.zip',
          version: newVersion || Date.now().toString()
        });

        setUpdateProgressText('Đang cài đặt cuộn bí thuật...');
        await CapacitorUpdater.set({ id: version.id });
      } catch (error: any) {
        console.error('Lỗi cập nhật OTA:', error);
        alert('Cập nhật thất bại. Lỗi: ' + (error.message || JSON.stringify(error)));
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
    const newProgress: UserProgress = {
      completedTopics: { ...progress.completedTopics },
      unlockedAchievements: [...progress.unlockedAchievements]
    };

    const currentBest = newProgress.completedTopics[topicId] || 0;
    if (finalScore > currentBest) {
      newProgress.completedTopics[topicId] = finalScore;
    }

    const unlockedNow = achievements.filter(
      (achievement) =>
        !newProgress.unlockedAchievements.includes(achievement.id) &&
        achievement.condition(newProgress)
    );

    if (unlockedNow.length > 0) {
      newProgress.unlockedAchievements = [
        ...newProgress.unlockedAchievements,
        ...unlockedNow.map((a) => a.id)
      ];
      setNewAchievement(unlockedNow[0]);
      triggerConfetti();
    }

    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#ef4444', '#facc15', '#22c55e']
    });
  };

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setAppState('quiz');
  };

  const handleQuizComplete = (finalScore: number, total: number, answers: number[]) => {
    setScore(finalScore);
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
  };

  const handleReview = () => {
    setAppState('review');
  };

  const totalStars = chapters.reduce((acc, chapter) => {
    return acc + chapter.topics.reduce((topicAcc, topic) => {
      const topicScore = progress.completedTopics[topic.id];
      if (topicScore !== undefined) {
        const percentage = topicScore / topic.questions.length;
        if (percentage >= 0.8) return topicAcc + 3;
        if (percentage >= 0.5) return topicAcc + 2;
        return topicAcc + 1;
      }
      return topicAcc;
    }, 0);
  }, 0);

  return (
    <div className="min-h-screen relative font-sans text-slate-900 dark:text-orange-50 selection:bg-orange-300/70 transition-colors duration-500">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/konoha-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/85 via-amber-50/80 to-lime-100/85 dark:from-[#1a1208]/90 dark:via-[#24160a]/85 dark:to-[#102012]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,180,60,0.18),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.16),_transparent_30%)]" />
      </div>

      <div className="relative z-10">
        <AnimatePresence>
          {showUpdateBanner && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 via-red-500 to-amber-500 text-white p-3 text-center shadow-lg flex justify-center items-center gap-4 border-b-2 border-yellow-200/40"
            >
              <span className="font-medium text-sm">{isUpdating ? updateProgressText : updateMessage}</span>
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="bg-white text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {isUpdating ? 'Đang xử lý...' : 'Cập nhật'}
              </button>
              {!isUpdating && (
                <button
                  onClick={() => setShowUpdateBanner(false)}
                  className="text-orange-100 hover:text-white"
                  aria-label="Đóng thông báo cập nhật"
                >
                  <X size={20} />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <main className="container mx-auto px-4 py-8 max-w-3xl bg-transparent">
          <AnimatePresence mode="wait">
            {appState === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap justify-between items-center mb-6 bg-white/85 dark:bg-[#1f140c]/85 backdrop-blur-md p-3 sm:p-4 rounded-[2rem] border-2 border-orange-300/70 dark:border-orange-700/70 shadow-[0_10px_30px_rgba(0,0,0,0.12)] gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-gradient-to-br from-orange-400 via-red-500 to-amber-500 rounded-full flex items-center justify-center text-xl sm:text-2xl border-2 border-white/70 shadow-[0_6px_16px_rgba(239,68,68,0.35)]">
                      🍥
                    </div>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Tên Shinobi..."
                      className="bg-transparent border-none outline-none text-sm sm:text-base font-black w-full text-slate-800 dark:text-orange-100 placeholder:text-orange-400/70 truncate"
                    />
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-orange-900/40 dark:to-red-900/30 px-3 py-1.5 sm:py-2 rounded-2xl border-2 border-yellow-300/80 dark:border-orange-700 shadow-sm">
                      <Star className="text-amber-500 fill-amber-500" size={18} />
                      <span className="font-black text-orange-700 dark:text-orange-300 text-sm sm:text-base">
                        {totalStars}
                      </span>
                    </div>

                    <button
                      onClick={() => setIsSettingsOpen(true)}
                      className="p-2 sm:p-3 bg-gradient-to-b from-orange-50 to-amber-100 dark:from-[#3a2414] dark:to-[#2a180d] rounded-2xl border-2 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-200 active:scale-95 transition-all shadow-sm"
                      aria-label="Cài đặt"
                    >
                      <SettingsIcon size={20} />
                    </button>
                  </div>
                </div>

                <ChapterList chapters={chapters} onSelectTopic={handleSelectTopic} progress={progress} />

                <div className="mt-6 max-w-2xl mx-auto px-1 sm:px-2">
                  <div className="bg-white/90 dark:bg-[#1b120b]/90 backdrop-blur-md rounded-[2rem] border-2 border-orange-300/70 dark:border-orange-800 shadow-[0_10px_24px_rgba(0,0,0,0.12)] overflow-hidden">
                    <button
                      onClick={() => setIsAchievementsOpen(!isAchievementsOpen)}
                      className="w-full flex items-center justify-between p-3 sm:p-4 hover:bg-orange-50/70 dark:hover:bg-orange-950/20 transition-colors active:bg-orange-100/70"
                      aria-expanded={isAchievementsOpen}
                      aria-label="Mở hoặc đóng hồ sơ ninja"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-2xl shadow-inner border-2 border-yellow-100/70">
                          <Trophy className="text-white" size={24} />
                        </div>
                        <div className="text-left">
                          <h2 className="text-lg sm:text-xl font-black text-orange-700 dark:text-orange-200 uppercase tracking-wider">
                            Hồ sơ Ninja
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-orange-100/70 mt-0.5 font-bold">
                            Kỹ năng đã thức tỉnh:{' '}
                            <span className="text-amber-500">{progress.unlockedAchievements.length}</span>/
                            {achievements.length}
                          </p>
                        </div>
                      </div>

                      <div className="text-slate-500 dark:text-orange-200/70 bg-orange-50 dark:bg-[#2e1b0f] p-2 rounded-2xl border-2 border-orange-200 dark:border-orange-800">
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
                          <div className="p-4 pt-0 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t-2 border-orange-100/70 dark:border-orange-900/40 mt-2 pt-4">
                            {achievements.map((achievement) => {
                              const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
                              return (
                                <div
                                  key={achievement.id}
                                  className={`p-3 sm:p-4 rounded-[1.5rem] border-2 flex flex-col items-center text-center transition-all duration-300 ${
                                    isUnlocked
                                      ? 'bg-gradient-to-b from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-amber-950/20 border-orange-300 dark:border-orange-700 shadow-sm'
                                      : 'bg-white/40 dark:bg-slate-900/20 border-slate-200/70 dark:border-slate-700 opacity-60 grayscale'
                                  }`}
                                >
                                  <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 drop-shadow-md">
                                    {achievement.icon}
                                  </span>
                                  <h3 className="text-[11px] sm:text-xs font-black text-slate-700 dark:text-orange-100 leading-tight mb-1">
                                    {achievement.title}
                                  </h3>
                                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-orange-100/60 leading-tight">
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
                  total={selectedTopic.questions.length}
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
                <Review
                  topic={selectedTopic}
                  userAnswers={userAnswers}
                  onBack={() => setAppState('result')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="py-6 text-center text-xs text-orange-700/70 dark:text-orange-300/60">
          <button
            onClick={checkForUpdates}
            disabled={isCheckingUpdate}
            className="hover:text-orange-600 dark:hover:text-orange-300 transition-colors flex items-center justify-center gap-2 mx-auto font-bold tracking-wide"
          >
            <RefreshCw size={14} className={isCheckingUpdate ? 'animate-spin' : ''} />
            {isCheckingUpdate ? 'Đang kiểm tra...' : `Cuộn cập nhật: ${APP_VERSION}`}
          </button>
        </footer>

        <AnimatePresence>
          {newAchievement && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
            >
              <div className="bg-gradient-to-r from-orange-600 via-red-500 to-amber-500 text-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 relative overflow-hidden border-2 border-yellow-200/40">
                <div className="absolute top-0 right-0 p-2">
                  <button
                    onClick={() => setNewAchievement(null)}
                    className="text-white/50 hover:text-white"
                    aria-label="Đóng thông báo thành tích"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="bg-white/20 p-3 rounded-2xl">
                  <span className="text-4xl">{newAchievement.icon}</span>
                </div>

                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star size={14} className="fill-amber-300 text-amber-300" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-100">
                      Đã thăng cấp ninja!
                    </span>
                  </div>
                  <h3 className="text-lg font-black leading-tight">{newAchievement.title}</h3>
                  <p className="text-xs text-orange-50/90 mt-1">{newAchievement.description}</p>
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
              appVersion={APP_VERSION}
              isCheckingUpdate={isCheckingUpdate}
              onCheckUpdate={checkForUpdates}
              isMusicEnabled={isMusicEnabled}
              onToggleMusic={toggleMusic}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}