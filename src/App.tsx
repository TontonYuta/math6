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
import { Trophy, Star, X, Settings as SettingsIcon, RefreshCw, User } from 'lucide-react';
import { APP_VERSION, VERSION_CHECK_URL } from './config';

type AppState = 'home' | 'quiz' | 'result' | 'review';

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
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [studentName, setStudentName] = useState<string>(() => localStorage.getItem('studentName') || '');
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);
  const [isCheckingUpdate, setIsCheckingUpdate] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('Đã có bài tập mới! Cập nhật ứng dụng ngay.');
  const [updateUrl, setUpdateUrl] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgressText, setUpdateProgressText] = useState('');
  
  // SỬA CHỖ SỐ 1: Thêm biến này để App nhớ được số phiên bản tải về
  const [newVersionInfo, setNewVersionInfo] = useState<string>(''); 

  // SỬA CHỖ SỐ 2: Lệnh "Tuyên bố sống sót" để chống bị xóa code mới
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      CapacitorUpdater.notifyAppReady();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('studentName', studentName);
  }, [studentName]);
  const checkForUpdates = async () => {
    setIsCheckingUpdate(true);
    try {
      if (!VERSION_CHECK_URL) {
        // Fallback nếu chưa cấu hình link
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
        
        // SỬA CHỖ SỐ 3: Lưu lại số phiên bản mới (ví dụ: 1.1.3) để lát nữa dùng
        setNewVersionInfo(data.version); 
        
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
        setUpdateProgressText('Đang tải bản cập nhật...');
        
        // SỬA CHỖ SỐ 4: Bắt buộc truyền version vào lệnh download
        const version = await CapacitorUpdater.download({
          version: newVersionInfo, // Thư viện cần cái này để tạo thư mục chứa code mới
          url: updateUrl || '',
        });
        
        setUpdateProgressText('Đang cài đặt...');
        // Áp dụng và khởi động lại app
        await CapacitorUpdater.set({ id: version.id }); // Cú pháp chuẩn xác nhất để set phiên bản
      } catch (error) {
        console.error('Lỗi cập nhật OTA:', error);
        alert('Cập nhật thất bại. Vui lòng thử lại sau.');
        setIsUpdating(false);
      }
    } else {
      if (updateUrl && updateUrl.endsWith('.apk')) {
        // Nếu có link tải APK, mở link đó sang tab mới
        window.open(updateUrl, '_blank');
      } else {
        // Nếu không có link, mặc định là tải lại trang web (dành cho Web App)
        window.location.reload();
      }
    }
  };

  // Load progress and theme
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

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
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

  // Save progress and check achievements
  const updateProgress = (topicId: string, finalScore: number) => {
    const newProgress = { ...progress };
    
    // Update best score for topic
    const currentBest = newProgress.completedTopics[topicId] || 0;
    if (finalScore > currentBest) {
      newProgress.completedTopics[topicId] = finalScore;
    }

    // Check for new achievements
    const newlyUnlocked: string[] = [];
    achievements.forEach(achievement => {
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-200 dark:selection:bg-indigo-900 transition-colors duration-300">
      {/* Banner Cập nhật */}
      <AnimatePresence>
        {showUpdateBanner && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-indigo-600 text-white p-3 text-center shadow-md flex justify-center items-center gap-4"
          >
            <span className="font-medium text-sm">{isUpdating ? updateProgressText : updateMessage}</span>
            <button 
              onClick={handleUpdate}
              disabled={isUpdating}
              className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUpdating ? 'Đang xử lý...' : 'Cập nhật'}
            </button>
            {!isUpdating && (
              <button 
                onClick={() => setShowUpdateBanner(false)}
                className="text-indigo-200 hover:text-white"
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
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <User size={18} className="text-indigo-500" />
                  <input 
                    type="text" 
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Nhập tên của em..."
                    className="bg-transparent border-none outline-none text-sm font-medium w-32 sm:w-48 dark:text-white placeholder:text-slate-400"
                  />
                </div>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="p-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700 transition-colors"
                  aria-label="Cài đặt"
                >
                  <SettingsIcon size={24} />
                </button>
              </div>

              <ChapterList 
                chapters={chapters} 
                onSelectTopic={handleSelectTopic} 
                progress={progress}
              />
              
              {/* Achievements Section */}
              <div className="mt-12 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-6 px-4">
                  <Trophy className="text-amber-500" size={24} />
                  <h2 className="text-xl font-black text-gray-800 dark:text-white uppercase tracking-wider">Thành tích</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
                  {achievements.map(achievement => {
                    const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
                    return (
                      <div 
                        key={achievement.id}
                        className={`p-4 rounded-3xl border-2 flex flex-col items-center text-center transition-all ${
                          isUnlocked 
                            ? 'bg-white dark:bg-slate-800 border-amber-100 dark:border-amber-500/30 shadow-sm' 
                            : 'bg-gray-50 dark:bg-slate-800/50 border-gray-100 dark:border-slate-700 opacity-40 grayscale'
                        }`}
                      >
                        <span className="text-3xl mb-2">{achievement.icon}</span>
                        <h3 className="text-xs font-bold text-gray-800 dark:text-slate-200 leading-tight">{achievement.title}</h3>
                        <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-1.5 leading-tight">{achievement.description}</p>
                      </div>
                    );
                  })}
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

      {/* Footer chứa thông tin phiên bản */}
      <footer className="py-6 text-center text-xs text-slate-400 dark:text-slate-500">
        <button 
          onClick={checkForUpdates}
          disabled={isCheckingUpdate}
          className="hover:text-indigo-500 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          <RefreshCw size={14} className={isCheckingUpdate ? "animate-spin" : ""} />
          {isCheckingUpdate ? 'Đang kiểm tra...' : `Phiên bản: ${APP_VERSION}`}
        </button>
      </footer>

      {/* Achievement Unlock Notification */}
      <AnimatePresence>
        {newAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
          >
            <div className="bg-indigo-600 dark:bg-indigo-500 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <button onClick={() => setNewAchievement(null)} className="text-white/50 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="bg-white/20 p-3 rounded-2xl">
                <span className="text-4xl">{newAchievement.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">Thành tích mới!</span>
                </div>
                <h3 className="text-lg font-black leading-tight">{newAchievement.title}</h3>
                <p className="text-xs text-indigo-100 mt-1">{newAchievement.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
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

