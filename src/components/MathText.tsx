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
    <div className={`math-text overflow-x-auto overflow-y-visible antialiased ${className || ''}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ node, ...props }) => (
            <p
              className="m-0 text-slate-800 dark:text-slate-100 leading-7 text-[clamp(15px,4vw,18px)] break-words overflow-visible"
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