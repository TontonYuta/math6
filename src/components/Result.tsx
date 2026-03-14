import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, Home, FileText, CloudUpload, CheckCircle, AlertCircle } from 'lucide-react';
import { syncScoreToSheet } from '../services/googleSheets';
import { APP_VERSION } from '../config';

interface ResultProps {
  score: number;
  total: number;
  topicTitle: string;
  onRetry: () => void;
  onHome: () => void;
  onReview: () => void;
}

export const Result: React.FC<ResultProps> = ({ score, total, topicTitle, onRetry, onHome, onReview }) => {
  const percentage = Math.round((score / total) * 100);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [syncMessage, setSyncMessage] = useState('');
  const hasSynced = useRef(false);

  useEffect(() => {
    const syncData = async () => {
      if (hasSynced.current) return;
      hasSynced.current = true;
      
      setSyncStatus('syncing');
      const studentName = localStorage.getItem('studentName') || 'Học sinh ẩn danh';
      const result = await syncScoreToSheet(studentName, topicTitle, score, total, APP_VERSION);
      
      if (result.success) {
        setSyncStatus('success');
      } else {
        setSyncStatus('error');
        setSyncMessage(result.message);
      }
    };

    syncData();
  }, [score, total, topicTitle]);
  
  let message = '';
  let color = '';
  
  if (percentage >= 80) {
    message = 'Xuất sắc! Bạn nắm bài rất vững.';
    color = 'text-green-600 dark:text-green-400';
  } else if (percentage >= 50) {
    message = 'Khá tốt! Cố gắng ôn tập thêm nhé.';
    color = 'text-indigo-600 dark:text-indigo-400'; // Dùng Indigo cho màu xanh Apple
  } else {
    message = 'Cần cố gắng hơn! Hãy xem lại lý thuyết.';
    color = 'text-orange-600 dark:text-orange-400';
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 min-h-[85vh] flex flex-col items-center justify-center text-center antialiased">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="w-full"
      >
        {/* Card: Bo góc cực lớn (3xl), viền siêu mảnh, đổ bóng mịn */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 w-full relative">
          <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Trophy size={40} className="text-indigo-500" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Kết quả</h2>
          <p className={`text-base font-semibold mb-8 ${color}`}>{message}</p>
          
          <div className="flex justify-center items-baseline gap-1 mb-10">
            <span className="text-7xl font-black text-slate-900 dark:text-white tracking-tighter">{score}</span>
            <span className="text-2xl font-bold text-slate-300 dark:text-slate-600">/ {total}</span>
          </div>

          {/* Sync Status - Apple Style Badge */}
          <div className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
            {syncStatus === 'syncing' && (
              <>
                <CloudUpload size={16} className="text-indigo-500 animate-pulse" />
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Đang lưu điểm...</span>
              </>
            )}
            {syncStatus === 'success' && (
              <>
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">Đã lưu thành công</span>
              </>
            )}
            {syncStatus === 'error' && (
              <>
                <AlertCircle size={16} className="text-orange-500" />
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">Lỗi kết nối</span>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <div className="w-full mt-8 space-y-3">
        {/* Primary Action - Apple Blue */}
        <button
          onClick={onReview}
          className="w-full py-4 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
        >
          <FileText size={20} />
          Xem lại bài làm
        </button>

        {/* Secondary Action - White/Slate */}
        <div className="grid grid-cols-2 gap-3">
            <button
            onClick={onRetry}
            className="py-4 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
            >
            <RotateCcw size={18} />
            Làm lại
            </button>
            
            <button
            onClick={onHome}
            className="py-4 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
            >
            <Home size={18} />
            Trang chủ
            </button>
        </div>
      </div>
    </div>
  );
};