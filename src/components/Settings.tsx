import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Moon, Sun, Trash2, AlertTriangle } from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onResetProgress: () => void;
}

export const Settings: React.FC<SettingsProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  onToggleDarkMode,
  onResetProgress,
}) => {
  const [showConfirmReset, setShowConfirmReset] = React.useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    onResetProgress();
    setShowConfirmReset(false);
    onClose();
  };

  return (
    // Lớp nền mờ chuẩn iOS
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-5 sm:p-6 pb-2 shrink-0">
          <h2 className="text-[clamp(20px,5vw,24px)] font-extrabold text-slate-900 dark:text-white tracking-tight">Cài đặt</h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all active:scale-90 shrink-0"
          >
            <X size={24} />
          </button>
        </div>

        {/* Thêm overflow-y-auto để nội dung có thể cuộn nếu màn hình quá lùn */}
        <div className="p-5 sm:p-6 pt-4 space-y-6 sm:space-y-8 overflow-y-auto">
          {/* Dark Mode Toggle - Apple Switch Style */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-slate-900 dark:text-white">Giao diện</h3>
              <p className="text-[clamp(12px,3.5vw,14px)] text-slate-500 dark:text-slate-400 font-medium line-clamp-2">Chế độ tối (Dark Mode)</p>
            </div>
            
            {/* Thêm shrink-0 để nút gạt không bao giờ bị bóp méo khi chữ dài ra */}
            <button
              onClick={onToggleDarkMode}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 shrink-0 ${
                isDarkMode ? 'bg-green-500' : 'bg-slate-200'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              >
                {isDarkMode ? (
                  <Moon size={14} className="text-green-600" />
                ) : (
                  <Sun size={14} className="text-amber-500" />
                )}
              </span>
            </button>
          </div>

          <div className="h-[0.5px] bg-slate-100 dark:bg-slate-700" />

          {/* Reset Progress Section */}
          <div>
            <h3 className="text-[clamp(16px,4vw,18px)] font-bold text-slate-900 dark:text-white mb-1">Dữ liệu</h3>
            <p className="text-[clamp(12px,3.5vw,14px)] text-slate-500 dark:text-slate-400 mb-5 sm:mb-6 font-medium leading-relaxed">
              Xóa toàn bộ tiến trình học tập và thành tích. Hành động này không thể hoàn tác.
            </p>
            
            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="w-full py-3.5 sm:py-4 px-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[clamp(14px,4vw,16px)] font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Trash2 size={20} className="shrink-0" />
                <span className="truncate">Xóa dữ liệu ngay</span>
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-500/10 p-4 sm:p-5 rounded-[2rem] border border-red-100 dark:border-red-500/20"
              >
                <div className="flex items-start gap-3 mb-4 sm:mb-5 text-red-800 dark:text-red-300">
                  <AlertTriangle size={24} className="shrink-0 text-red-500 mt-0.5" />
                  <p className="text-[clamp(12px,3.5vw,14px)] font-bold leading-tight">
                    Bạn có chắc chắn? Mọi nỗ lực của bạn sẽ bị xóa bỏ hoàn toàn.
                  </p>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="flex-1 py-2.5 sm:py-3 px-2 sm:px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[clamp(13px,3.5vw,15px)] font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-95 truncate"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2.5 sm:py-3 px-2 sm:px-4 bg-red-500 text-white text-[clamp(13px,3.5vw,15px)] font-bold rounded-xl shadow-lg shadow-red-200 dark:shadow-none transition-all active:scale-95 truncate"
                  >
                    Xác nhận
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Footer nhỏ chuẩn Apple */}
        <div className="py-5 shrink-0 text-center bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700">
          <p className="text-[clamp(9px,2.5vw,10px)] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">Designed by TontonYuta</p>
        </div>
      </motion.div>
    </div>
  );
};