import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, Home, FileText, CloudUpload, CheckCircle, AlertCircle } from 'lucide-react';
import { syncScoreToSheet } from '../services/googleSheets';

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
      const result = await syncScoreToSheet(studentName, topicTitle, score, total);
      
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
    color = 'text-green-500 dark:text-green-400';
  } else if (percentage >= 50) {
    message = 'Khá tốt! Cố gắng ôn tập thêm nhé.';
    color = 'text-blue-500 dark:text-blue-400';
  } else {
    message = 'Cần cố gắng hơn! Hãy xem lại lý thuyết.';
    color = 'text-orange-500 dark:text-orange-400';
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="w-full"
      >
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-indigo-100/50 dark:shadow-none border border-indigo-50 dark:border-slate-700 w-full relative">
          <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy size={48} className="text-indigo-500 dark:text-indigo-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kết quả</h2>
          <p className={`text-lg font-medium mb-8 ${color}`}>{message}</p>
          
          <div className="flex justify-center items-baseline gap-2 mb-10">
            <span className="text-6xl font-black text-indigo-600 dark:text-indigo-400">{score}</span>
            <span className="text-2xl font-bold text-gray-400 dark:text-slate-500">/ {total}</span>
          </div>

          {/* Trạng thái đồng bộ điểm */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-center gap-2 text-sm">
            {syncStatus === 'syncing' && (
              <>
                <CloudUpload size={16} className="text-indigo-500 animate-bounce" />
                <span className="text-indigo-600 dark:text-indigo-400">Đang lưu điểm...</span>
              </>
            )}
            {syncStatus === 'success' && (
              <>
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-green-600 dark:text-green-400">Đã lưu điểm thành công</span>
              </>
            )}
            {syncStatus === 'error' && (
              <>
                <AlertCircle size={16} className="text-orange-500" />
                <span className="text-orange-600 dark:text-orange-400">{syncMessage || 'Chưa thể lưu điểm online'}</span>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <div className="w-full mt-6 space-y-4">
        <button
          onClick={onReview}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <FileText size={20} />
          Xem lại bài làm
        </button>

        <button
          onClick={onRetry}
          className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <RotateCcw size={20} />
          Làm lại bài này
        </button>
        
        <button
          onClick={onHome}
          className="w-full py-4 px-6 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 font-semibold rounded-2xl border-2 border-gray-100 dark:border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <Home size={20} />
          Về trang chủ
        </button>
      </div>
    </div>
  );
};
