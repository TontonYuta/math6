import React from 'react';
import { motion } from 'motion/react';
import {
  X,
  Moon,
  Sun,
  Trash2,
  AlertTriangle,
  RefreshCw,
  Smartphone,
  ScrollText,
  Volume2,
  VolumeX
} from 'lucide-react';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;

  isDarkMode: boolean;
  onToggleDarkMode: () => void;

  onResetProgress: () => void;

  appVersion: string;
  isCheckingUpdate?: boolean;
  onCheckUpdate?: () => void;

  isMusicEnabled: boolean;
  onToggleMusic: () => void;
}

export const Settings: React.FC<SettingsProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  onToggleDarkMode,
  onResetProgress,
  appVersion,
  isCheckingUpdate = false,
  onCheckUpdate,
  isMusicEnabled,
  onToggleMusic
}) => {
  const [showConfirmReset, setShowConfirmReset] = React.useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    onResetProgress();
    setShowConfirmReset(false);
    onClose();
  };

  const Toggle = ({
    checked,
    onClick,
    ariaLabel,
    iconOn,
    iconOff
  }: {
    checked: boolean;
    onClick: () => void;
    ariaLabel: string;
    iconOn: React.ReactNode;
    iconOff: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 shrink-0 ${
        checked ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-700'
      }`}
      aria-label={ariaLabel}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
          checked ? 'translate-x-7' : 'translate-x-1'
        }`}
      >
        {checked ? iconOn : iconOff}
      </span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/45 dark:bg-black/65 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.22 }}
        className="bg-white/92 dark:bg-[#1b120b]/92 backdrop-blur-md w-full max-w-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.22)] overflow-hidden border-2 border-orange-200/70 dark:border-orange-800/50 flex flex-col max-h-[90vh]"
      >
        <div className="flex items-start justify-between p-5 sm:p-6 pb-3 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/40 text-orange-700 dark:text-orange-300 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              <span>🍃</span>
              <span>Trung tâm Konoha</span>
            </div>
            <h2 className="text-[clamp(20px,5vw,24px)] font-black text-slate-900 dark:text-orange-100 tracking-tight">
              Cài đặt
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/55 font-medium mt-1">
              Điều chỉnh trải nghiệm luyện tập của shinobi
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:bg-orange-50 dark:hover:bg-[#2a180d] rounded-full transition-all active:scale-90 shrink-0"
            aria-label="Đóng cài đặt"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-5 sm:px-6 pb-5 sm:pb-6 overflow-y-auto space-y-5">
          {/* Giao diện + âm thanh */}
          <section className="rounded-[1.75rem] border border-orange-100 dark:border-orange-900/30 bg-orange-50/55 dark:bg-orange-950/10 p-4">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-orange-100 mb-1">
              Trải nghiệm
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/60 font-medium mb-4">
              Tùy chỉnh giao diện và không khí luyện tập.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-[1.25rem] bg-white/75 dark:bg-[#140d08]/45 border border-orange-100 dark:border-orange-900/20 px-4 py-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-orange-100">
                    Chế độ bóng tối
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/60 font-medium">
                    Bật giao diện tối cho buổi luyện đêm
                  </p>
                </div>
                <Toggle
                  checked={isDarkMode}
                  onClick={onToggleDarkMode}
                  ariaLabel="Bật tắt chế độ tối"
                  iconOn={<Moon size={14} className="text-green-600" />}
                  iconOff={<Sun size={14} className="text-amber-500" />}
                />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-[1.25rem] bg-white/75 dark:bg-[#140d08]/45 border border-orange-100 dark:border-orange-900/20 px-4 py-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-orange-100">
                    Âm thanh nền
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/60 font-medium">
                    Phát nhạc nền khi học và làm bài
                  </p>
                </div>
                <Toggle
                  checked={isMusicEnabled}
                  onClick={onToggleMusic}
                  ariaLabel="Bật tắt âm thanh nền"
                  iconOn={<Volume2 size={14} className="text-green-600" />}
                  iconOff={<VolumeX size={14} className="text-slate-500" />}
                />
              </div>
            </div>
          </section>

          {/* Ứng dụng */}
          <section className="rounded-[1.75rem] border border-orange-100 dark:border-orange-900/30 bg-orange-50/55 dark:bg-orange-950/10 p-4">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-orange-100 mb-1">
              Cuộn ứng dụng
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/60 font-medium mb-4">
              Theo dõi phiên bản và nhận nhiệm vụ mới từ Hokage.
            </p>

            <div className="space-y-4">
              <div className="rounded-[1.25rem] bg-white/75 dark:bg-[#140d08]/45 border border-orange-100 dark:border-orange-900/20 p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
                    <Smartphone size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black text-slate-900 dark:text-orange-100">
                      Phiên bản hiện tại
                    </p>
                    <p className="text-xs font-bold text-slate-500 dark:text-orange-100/60 truncate">
                      {appVersion}
                    </p>
                  </div>
                </div>
              </div>

              {onCheckUpdate && (
                <button
                  onClick={onCheckUpdate}
                  disabled={isCheckingUpdate}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white text-sm font-black rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                >
                  <RefreshCw size={18} className={isCheckingUpdate ? 'animate-spin' : ''} />
                  {isCheckingUpdate ? 'Đang kiểm tra...' : 'Kiểm tra cập nhật'}
                </button>
              )}

              <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/75 dark:bg-[#140d08]/45 border border-orange-100 dark:border-orange-900/20 p-3">
                <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-300 flex items-center justify-center shrink-0">
                  <ScrollText size={16} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700 dark:text-orange-300 mb-1">
                    Ghi chú
                  </p>
                  <p className="text-xs text-slate-600 dark:text-orange-100/65 leading-relaxed font-medium">
                    Khi có phiên bản mới, ứng dụng sẽ nhận thêm nội dung, bản vá và cải thiện trải nghiệm luyện tập.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dữ liệu */}
          <section className="rounded-[1.75rem] border border-red-100 dark:border-red-900/25 bg-red-50/55 dark:bg-red-950/10 p-4">
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-orange-100 mb-1">
              Dữ liệu luyện tập
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-orange-100/60 font-medium mb-4">
              Xóa toàn bộ tiến trình, thành tích và dấu mốc ninja.
            </p>

            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="w-full py-3.5 px-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-sm sm:text-base font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 border border-red-100 dark:border-red-500/20"
              >
                <Trash2 size={20} className="shrink-0" />
                <span className="truncate">Xóa toàn bộ dữ liệu</span>
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-500/10 p-4 rounded-[1.5rem] border border-red-100 dark:border-red-500/20"
              >
                <div className="flex items-start gap-3 mb-4 text-red-800 dark:text-red-300">
                  <AlertTriangle size={22} className="shrink-0 text-red-500 mt-0.5" />
                  <p className="text-sm font-bold leading-tight">
                    Bạn có chắc chắn? Toàn bộ hành trình shinobi sẽ bị xóa vĩnh viễn.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="py-3 px-3 bg-white dark:bg-[#24160b] text-slate-700 dark:text-orange-100 text-sm font-bold rounded-xl border border-slate-200 dark:border-orange-900/30 transition-all active:scale-95"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleReset}
                    className="py-3 px-3 bg-red-500 text-white text-sm font-bold rounded-xl shadow-lg transition-all active:scale-95"
                  >
                    Xác nhận
                  </button>
                </div>
              </motion.div>
            )}
          </section>
        </div>

        <div className="py-5 shrink-0 text-center bg-orange-50/40 dark:bg-[#140d08]/40 border-t border-orange-100 dark:border-orange-900/30">
          <p className="text-[clamp(9px,2.5vw,10px)] text-slate-400 dark:text-orange-100/40 font-black uppercase tracking-[0.2em]">
            Konoha Training System
          </p>
        </div>
      </motion.div>
    </div>
  );
};