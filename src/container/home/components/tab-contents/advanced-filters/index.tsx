import { motion } from 'framer-motion';
import TabsLayout from '../../../../../components/tabs/tabs-layout';

export default function AdvancedFilters() {
  return (
    <div>
      <TabsLayout
        tab="Advanced Filters"
        title="Unique Filters"
        description="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
        phoneImage={
          <div className="relative w-full h-full overflow-y-hidden">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 65 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className="absolute w-full h-full flex justify-center items-center z-10"
            >
              <img
                src="/assets/tab-images/sign-stamp.svg"
                alt="Sign & Stamp"
                className="w-[244px] h-[495px] lg:w-[365px] lg:h-[741px]"
              />

              <motion.img
                src="/assets/tab-images/advanced-filters-1.svg"
                alt="Signature"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="left-[45px] lg:left-[92px] bottom-[18%] lg:bottom-[12%] absolute max-w-[28px] lg:max-w-[40%]"
                style={{
                  transformOrigin: 'center',
                  background: 'rgba(0, 0, 0, 0.364909)',
                  backdropFilter: 'blur(16.9431px)',
                  borderRadius: '12.466px',
                }}
              />

              <motion.img
                src="/assets/tab-images/advanced-filters-2.svg"
                alt="Badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="right-[45px] lg:right-[92px] bottom-[18%] lg:bottom-[12%] absolute max-w-[28px] lg:max-w-[40%]"
                style={{
                  transformOrigin: 'center',
                  background: 'rgba(0, 0, 0, 0.364909)',
                  backdropFilter: 'blur(16.9431px)',
                  borderRadius: '12.466px',
                }}
              />
            </motion.div>
          </div>
        }
      />
    </div>
  );
}
