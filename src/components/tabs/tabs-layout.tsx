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
    <div className="h-[587px] lg:h-[610px] mt-14 lg:mt-0 bg-white w-full flex  items-center flex-col-reverse lg:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="lg:ml-16 w-[230px] h-[466px] lg:w-[610px] lg:h-[610px] -mt-28 lg:-mt-0"
      >
        {phoneImage}
      </motion.div>
      <div className="max-h-[260px] w-full lg:w-[556px] flex flex-col text-center items-center justify-center lg:text-end lg:justify-end lg:items-end px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#0381FF] font-extrabold mb-4 uppercase tracking-[2px]"
        >
          {tab}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#0B122A] font-bold text-[32px] mb-5"
        >
          {title}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#0B122A] tracking-[0px] text-sm lg:text-[20px] leading-6 lg:leading-8 lg:tracking-[0.8px] mb-5"
        >
          {description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-[140px] h-[54px] border-[0.5px] border-black/15 px-5 py-2 text-[#0B122A] text-[20px] "
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
}
