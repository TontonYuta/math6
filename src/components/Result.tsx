import React from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, Home } from 'lucide-react';

interface ResultProps {
  score: number;
  total: number;
  onRetry: () => void;
  onHome: () => void;
}

export const Result: React.FC<ResultProps> = ({ score, total, onRetry, onHome }) => {
  const percentage = Math.round((score / total) * 100);
  
  let message = '';
  let color = '';
  
  if (percentage >= 80) {
    message = 'Xuất sắc! Bạn nắm bài rất vững.';
    color = 'text-green-500';
  } else if (percentage >= 50) {
    message = 'Khá tốt! Cố gắng ôn tập thêm nhé.';
    color = 'text-blue-500';
  } else {
    message = 'Cần cố gắng hơn! Hãy xem lại lý thuyết.';
    color = 'text-orange-500';
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/50 border border-indigo-50 w-full"
      >
        <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={48} className="text-indigo-500" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Kết quả</h2>
        <p className={`text-lg font-medium mb-8 ${color}`}>{message}</p>
        
        <div className="flex justify-center items-baseline gap-2 mb-10">
          <span className="text-6xl font-black text-indigo-600">{score}</span>
          <span className="text-2xl font-bold text-gray-400">/ {total}</span>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRetry}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <RotateCcw size={20} />
            Làm lại bài này
          </button>
          
          <button
            onClick={onHome}
            className="w-full py-4 px-6 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-2xl border-2 border-gray-100 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Home size={20} />
            Về trang chủ
          </button>
        </div>
      </motion.div>
    </div>
  );
};
