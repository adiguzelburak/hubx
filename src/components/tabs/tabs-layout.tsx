import { motion } from 'framer-motion';

interface LayoutProps {
  tab: string;
  title: string;
  description: string;
  phoneImage: React.ReactNode;
}

export default function TabsLayout({
  tab,
  title,
  description,
  phoneImage,
}: LayoutProps) {
  return (
    <div className="h-[610px] bg-red-50 w-full grid grid-cols-2 items-center">
      <div className="w-[610px] h-[610px]">{phoneImage}</div>
      <div className="max-h-[260px] w-[556px] flex flex-col text-end justify-end items-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#0381FF] font-extrabold mb-4"
        >
          {tab}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B122A] font-bold text-[32px] mb-5"
        >
          {title}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B122A] font-normal text-[20px] leading-8 tracking-[0.8px] mb-5"
        >
          {description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[140px] h-[54px] border-[0.5px] border-black/15 px-5 py-2 text-[#0B122A] text-[20px] "
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
}
