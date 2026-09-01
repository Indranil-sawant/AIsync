import React from 'react';

interface CapabilitiesFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CapabilitiesFilter: React.FC<CapabilitiesFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`text-xs font-mono px-4 py-2 rounded-lg border transition-all duration-200 ${
              isActive
                ? 'bg-accent-primary text-white border-accent-primary shadow-[0_0_15px_rgba(99,102,241,0.3)] font-semibold'
                : 'bg-bg-surface1 text-text-secondary border-border-subtle hover:border-border-medium hover:text-text-primary'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
