import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MathTextProps {
  content: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ content, className }) => {
  return (
    // 1. Thêm overflow-x-auto để cuộn ngang nếu công thức Toán ($$ ... $$) quá dài
    <div className={`math-text antialiased tracking-tight overflow-x-auto ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ node, ...props }) => (
            <span 
              // 2. Thêm clamp để tự co giãn chữ và break-words để ngắt dòng thông minh
              className="text-slate-800 dark:text-slate-100 leading-relaxed text-[clamp(15px,4vw,18px)] break-words" 
              {...props} 
            />
          ),
          a: ({ node, ...props }) => (
            <a 
              className="text-indigo-500 hover:underline font-medium" 
              {...props} 
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};