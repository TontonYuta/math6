import React from 'react';
import { motion } from 'motion/react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-800 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Cài đặt</h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Giao diện</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Chuyển đổi sáng/tối</p>
            </div>
            <button
              onClick={onToggleDarkMode}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isDarkMode ? 'bg-indigo-500' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform flex items-center justify-center ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              >
                {isDarkMode ? (
                  <Moon size={14} className="text-indigo-500" />
                ) : (
                  <Sun size={14} className="text-amber-500" />
                )}
              </span>
            </button>
          </div>

          <hr className="border-slate-100 dark:border-slate-700" />

          {/* Reset Progress */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Xóa dữ liệu</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Xóa toàn bộ tiến trình học tập và thành tích của bạn.
            </p>
            
            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="w-full py-3 px-4 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold rounded-2xl flex items-center justify-center gap-2 transition-colors"
              >
                <Trash2 size={20} />
                Xóa dữ liệu học tập
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-red-50 dark:bg-red-500/10 p-4 rounded-2xl border border-red-100 dark:border-red-500/20"
              >
                <div className="flex items-start gap-3 mb-4 text-red-800 dark:text-red-300">
                  <AlertTriangle size={24} className="shrink-0 text-red-500" />
                  <p className="text-sm font-medium">
                    Bạn có chắc chắn muốn xóa toàn bộ dữ liệu? Hành động này không thể hoàn tác.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="flex-1 py-2.5 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex-1 py-2.5 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
                  >
                    Xóa ngay
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
