import { motion } from 'framer-motion';
import TabsLayout from '../../tabs-layout';

export default function BadgeScanning() {
  return (
    <div>
      <TabsLayout
        tab="Batch Scanning"
        title="Multiple Page Scan"
        description="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
        phoneImage={
          <div className="relative w-full h-full overflow-y-hidden">
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
                  style={{
                    position: 'absolute',
                    top: '25%',
                    left: '15%',
                    transform: 'translateX(-50%)',
                    maxWidth: '100%',
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
                  style={{
                    position: 'absolute',
                    top: '32%',
                    left: '15%',
                    transform: 'translateX(-50%)',
                    maxWidth: '80%',
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
                  style={{
                    position: 'absolute',
                    top: '39%',
                    left: '15%',
                    transform: 'translateX(-50%)',
                    maxWidth: '80%',
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
