import { motion } from 'framer-motion';
import { COLORS } from '../../lib/colors';
import { Icon } from './tab-icon';
import { cn } from '../../lib/utils';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: string;
  title?: string;
  index: number;
}

export const Tab = ({ isActive, onClick, icon, label, index }: TabProps) => {
  return (
    <div
      className={cn(
        'cursor-pointer relative flex items-center justify-center w-full h-[124px] hover:border-4 hover:border-[#0381FF] transition-all duration-300',
        isActive && 'bg-[#0381FF]/5',
        index !== 4 && 'border-r border-[#000000]/10',
      )}
      onClick={onClick}
    >
      <button
        className={`*:!cursor-pointer relative z-10 flex h-14 w-14 items-center justify-center mr-4 rounded-full ${
          isActive ? 'text-blue-500' : 'text-gray-500'
        }`}
      >
        {icon && <Icon src={icon} isActive={isActive} />}
        <div className="absolute h-14 w-14 rounded-full border-2 border-gray-300"></div>
        <svg
          className="absolute h-14 w-14"
          viewBox="0 0 56 56"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <motion.circle
            cx="28"
            cy="28"
            r="27"
            fill="none"
            stroke={COLORS.ACTIVE}
            strokeWidth="2"
            strokeDasharray="169.64"
            initial={false}
            animate={{
              strokeDashoffset: isActive ? 0 : 169.64,
            }}
            transition={{
              duration: 0.5,
              ease: 'linear',
            }}
            style={{
              transformOrigin: 'center',
              transform: 'rotate(-90deg)',
            }}
          />
        </svg>
      </button>

      <div className="text-[#0B172A] leading-7 lg:leading-6 font-medium text-[20px] lg:text-base">
        {label}
      </div>
    </div>
  );
};
