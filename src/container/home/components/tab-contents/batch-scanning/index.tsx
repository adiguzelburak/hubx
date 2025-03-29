import { motion } from 'framer-motion';
import TabsLayout from '../../../../../components/tabs/tabs-layout';

export default function BadgeScanning() {
  return (
    <div>
      <TabsLayout
        tab="Batch Scanning"
        title="Multiple Page Scan"
        description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
        phoneImage={
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 65 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className="absolute w-full h-full flex justify-center items-center z-10"
            >
              <div className="relative">
                <img
                  src="/assets/tab-images/batch-scanning.svg"
                  alt="Batch Scanning"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  className="mt-3"
                />

                <motion.img
                  src="/assets/tab-images/batch-scanning-page.svg"
                  alt="Scanning Page 1"
                  initial={{ scale: 0.95, y: 350 }}
                  animate={{ scale: 0.95, y: -20 }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className="left-[15%] lg:left-[15%] top-[28%] lg:top-[25%] absolute max-w-[70%] lg:max-w-[100%]"
                  style={{
                    transform: 'translateX(-50%)',
                    zIndex: 11,
                  }}
                />

                <motion.img
                  src="/assets/tab-images/batch-scanning-page.svg"
                  alt="Scanning Page 2"
                  initial={{ scale: 1, y: 350 }}
                  animate={{ scale: 1, y: -30 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className="left-[15%] lg:left-[15%] top-[36%] lg:top-[32%] absolute max-w-[70%] lg:max-w-[100%]"
                  style={{
                    transform: 'translateX(-50%)',
                    zIndex: 12,
                  }}
                />

                <motion.img
                  src="/assets/tab-images/batch-scanning-page.svg"
                  alt="Scanning Page 3"
                  initial={{ scale: 1.05, y: 350 }}
                  animate={{ scale: 1.05, y: -40 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className="left-[15%] lg:left-[15%] top-[44%] lg:top-[39%] absolute max-w-[70%] lg:max-w-[100%]"
                  style={{
                    transform: 'translateX(-50%)',
                    zIndex: 13,
                  }}
                />
              </div>
            </motion.div>
          </div>
        }
      />
    </div>
  );
}
