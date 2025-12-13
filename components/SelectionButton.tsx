import React from 'react';

interface SelectionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  isMulti?: boolean;
}

const SelectionButton: React.FC<SelectionButtonProps> = ({ label, isSelected, onClick, isMulti }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full py-3 px-3 md:py-4 rounded-2xl border-2 transition-all duration-300 text-sm md:text-base font-medium
        flex items-center justify-center text-center h-full shadow-sm hover:shadow-md
        ${
          isSelected
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 border-transparent text-white scale-[1.03] shadow-pink-300/50'
            : 'bg-white/80 backdrop-blur-sm border-white/50 text-gray-600 hover:border-pink-300 hover:text-pink-500 hover:bg-white'
        }
      `}
    >
      {label}
    </button>
  );
};

export default SelectionButton;