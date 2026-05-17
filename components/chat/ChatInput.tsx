'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  input: string;
  setInput: (value: string) => void;
}

const ChatInput = ({ onSend, disabled, input, setInput }: ChatInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="border-t bg-white p-4">
      <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto relative flex items-end gap-2">
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Mara..."
          disabled={disabled}
          className="flex-grow p-4 pr-12 rounded-2xl border border-gray-200 focus:outline-none focus:border-accent resize-none max-h-32 disabled:bg-gray-50 disabled:text-gray-400 transition-all"
        />
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="absolute right-3 bottom-3 p-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all disabled:bg-gray-200 disabled:text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
        </button>
      </form>
      <p className="text-[10px] text-center text-gray-400 mt-2">
        Mara can make mistakes. Check important information with the cruise line.
      </p>
    </div>
  );
};

export default ChatInput;
