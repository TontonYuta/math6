import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  RotateCcw,
  Home,
  FileText,
  CloudUpload,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
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

export const Result: React.FC<ResultProps> = ({
  score,
  total,
  topicTitle,
  onRetry,
  onHome,
  onReview
}) => {
  const percentage = Math.round((score / total) * 100);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [syncMessage, setSyncMessage] = useState('');
  const hasSynced = useRef(false);

  useEffect(() => {
    const syncData = async () => {
      if (hasSynced.current) return;
      hasSynced.current = true;

      setSyncStatus('syncing');
      const studentName = localStorage.getItem('studentName') || 'Shinobi ẩn danh';
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
    message = 'Xuất sắc! Bạn đã hoàn thành nhiệm vụ cấp cao.';
    color = 'text-green-600 dark:text-green-400';
  } else if (percentage >= 50) {
    message = 'Khá tốt! Chỉ cần luyện chakra thêm một chút.';
    color = 'text-orange-600 dark:text-orange-300';
  } else {
    message = 'Hãy tiếp tục khổ luyện để mạnh hơn nhé.';
    color = 'text-red-600 dark:text-red-400';
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 min-h-[85vh] flex flex-col items-center justify-center text-center antialiased bg-transparent">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="w-full"
      >
        <div className="bg-white/90 dark:bg-[#1b120b]/90 backdrop-blur-md p-6 sm:p-8 rounded-[2.5rem] shadow-[0_16px_40px_rgba(0,0,0,0.14)] border-2 border-orange-200/80 dark:border-orange-800/70 w-full relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-amber-400" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 text-orange-700 dark:text-orange-300 shadow-sm mb-5">
            <span className="text-base">🍥</span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em]">
              Báo cáo nhiệm vụ
            </span>
          </div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100 via-amber-100 to-red-100 dark:from-orange-900/25 dark:via-red-900/20 dark:to-amber-900/20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-5 sm:mb-6 border-2 border-orange-200/70 dark:border-orange-800/50 shadow-sm">
            <Trophy className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <h2 className="text-[clamp(24px,6vw,30px)] font-black text-slate-900 dark:text-orange-100 mb-2 tracking-tight">
            Kết Quả Nhiệm Vụ
          </h2>

          <p className={`text-[clamp(14px,4vw,16px)] font-bold mb-3 text-wrap balance ${color}`}>
            {message}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/60 font-bold uppercase tracking-[0.18em] mb-8">
            {topicTitle}
          </p>

          <div className="flex justify-center items-baseline gap-2 mb-4">
            <span className="text-[clamp(60px,18vw,80px)] leading-none font-black text-slate-900 dark:text-orange-50 tracking-tighter">
              {score}
            </span>
            <span className="text-[clamp(20px,5vw,24px)] font-black text-orange-300 dark:text-orange-900">
              / {total}
            </span>
          </div>

          <div className="mb-8">
            <div className="w-full bg-orange-100/80 dark:bg-[#2e1b0f] h-3 rounded-full overflow-hidden shadow-inner">
              <div
                className={`h-full transition-all duration-700 ease-out ${
                  percentage >= 80
                    ? 'bg-gradient-to-r from-green-500 to-lime-400'
                    : percentage >= 50
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-amber-400'
                      : 'bg-gradient-to-r from-red-500 to-orange-400'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-black text-orange-700 dark:text-orange-300 uppercase tracking-wider">
              Hoàn thành {percentage}%
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 py-3 px-4 bg-white/70 dark:bg-[#120c07]/70 rounded-2xl border-2 border-orange-100 dark:border-orange-900/30 min-h-[52px]">
            {syncStatus === 'syncing' && (
              <>
                <CloudUpload size={16} className="text-orange-500 animate-pulse shrink-0" />
                <span className="text-[clamp(10px,3vw,12px)] font-black text-orange-600 dark:text-orange-300 uppercase tracking-widest whitespace-nowrap">
                  Đang gửi báo cáo...
                </span>
              </>
            )}

            {syncStatus === 'success' && (
              <>
                <CheckCircle size={16} className="text-green-500 shrink-0" />
                <span className="text-[clamp(10px,3vw,12px)] font-black text-green-600 dark:text-green-400 uppercase tracking-widest whitespace-nowrap">
                  Đã lưu thành công
                </span>
              </>
            )}

            {syncStatus === 'error' && (
              <>
                <AlertCircle size={16} className="text-red-500 shrink-0" />
                <span className="text-[clamp(10px,3vw,12px)] font-black text-red-600 dark:text-red-400 uppercase tracking-widest whitespace-nowrap">
                  Lỗi kết nối
                </span>
              </>
            )}
          </div>

          {syncStatus === 'error' && syncMessage && (
            <p className="mt-3 text-xs text-red-600 dark:text-red-400 font-medium">
              {syncMessage}
            </p>
          )}
        </div>
      </motion.div>

      <div className="w-full mt-6 sm:mt-8 space-y-3">
        <button
          onClick={onReview}
          className="w-full py-4 px-4 sm:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:brightness-110 text-white text-[clamp(15px,4vw,16px)] font-black rounded-[1.5rem] shadow-lg flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
        >
          <FileText size={20} className="shrink-0" />
          <span className="truncate">Xem lại bí kíp</span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onRetry}
            className="py-3 sm:py-4 px-2 sm:px-4 bg-white/90 dark:bg-[#1b120b]/90 text-slate-700 dark:text-orange-100 text-[clamp(14px,3.5vw,16px)] font-black rounded-[1.5rem] border-2 border-orange-100 dark:border-orange-900/40 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
          >
            <RotateCcw size={18} className="shrink-0" />
            <span className="truncate">Luyện lại</span>
          </button>

          <button
            onClick={onHome}
            className="py-3 sm:py-4 px-2 sm:px-4 bg-white/90 dark:bg-[#1b120b]/90 text-slate-700 dark:text-orange-100 text-[clamp(14px,3.5vw,16px)] font-black rounded-[1.5rem] border-2 border-orange-100 dark:border-orange-900/40 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
          >
            <Home size={18} className="shrink-0" />
            <span className="truncate">Về làng lá</span>
          </button>
        </div>
      </div>
    </div>
  );
};