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
    // Sử dụng font-smoothing để chữ Roboto trông mảnh và sắc nét hơn (đúng chất iOS)
    <div className={`math-text antialiased tracking-tight ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Apple Style ưu tiên font-weight vừa phải, không quá dày
          p: ({ node, ...props }) => (
            <span 
              className="text-slate-800 dark:text-slate-100 leading-relaxed" 
              {...props} 
            />
          ),
          // Nếu có dùng link trong bài giảng, cho nó màu Apple Blue
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