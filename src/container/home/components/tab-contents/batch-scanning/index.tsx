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
                  className="w-[250px] h-[508px] lg:w-[374px] lg:h-[760px]"
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
                  className="left-[17%] lg:left-[15%] top-[35%] lg:top-[35%] absolute max-w-[165px] lg:max-w-[246px]"
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
                  className="left-[14%] lg:left-[15%] top-[40%] lg:top-[40%] absolute max-w-[182px] lg:max-w-[273px]"
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
                  className="left-[12%] lg:left-[15%] top-[45%] lg:top-[45%] absolute max-w-[193px] lg:max-w-[290px]"
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
