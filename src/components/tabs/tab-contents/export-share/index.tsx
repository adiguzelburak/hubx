import { motion } from 'framer-motion';
import TabsLayout from '../../tabs-layout';

export default function ExportShare() {
  return (
    <div>
      <TabsLayout
        tab="export & share"
        title="All-Round Conversion"
        description="Export your scans as PDF,JPG,ZIP,TXT and Word."
        phoneImage={
          <div className="relative w-full h-full lg:overflow-y-hidden">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 65 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className="absolute w-full h-full flex justify-center items-center z-0"
            >
              <div className="relative">
                <img
                  src="/assets/tab-images/export-share.svg"
                  alt="Export & Share"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <motion.img
                src="/assets/tab-images/export-share-arrow.svg"
                alt="Share Arrow"
                initial={{ y: 300, x: 80, rotate: 10 }}
                animate={{ y: -100, x: 80, rotate: 10 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="bottom-0 left-[-46%] lg:left-0 absolute max-w-[8%] lg:max-w-[20%]"
                style={{
                  zIndex: 14,
                }}
              />
              <motion.img
                src="/assets/tab-images/export-share-pdf.svg"
                alt="PDF Export"
                initial={{ y: 300, x: -80, rotate: -10 }}
                animate={{ y: -100, x: -80, rotate: -10 }}
                transition={{
                  delay: 1.0,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="bottom-[4%] left-[26%] lg:bottom-[-6%] lg:left-[28%] absolute max-w-[41%] lg:max-w-[100%]"
                style={{
                  zIndex: 11,
                }}
              />

              <motion.img
                src="/assets/tab-images/export-share-jpg.svg"
                alt="JPG Export"
                initial={{ y: 300, x: -30 }}
                animate={{ y: -80, x: -30 }}
                transition={{
                  delay: 1.1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="lg:bottom-[5.5%] lg:left-[43.2%] absolute bottom-[15.5%] left-[43.2%] max-w-[36%] lg:max-w-[100%]"
                style={{
                  zIndex: 12,
                }}
              />

              <motion.img
                src="/assets/tab-images/export-share-txt.svg"
                alt="TXT Export"
                initial={{ y: 300, x: 30 }}
                animate={{ y: -80, x: 30 }}
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                className="right-[4.5%] bottom-[9%] lg:right-[19.5%] lg:bottom-[-2%] absolute max-w-[42%] lg:max-w-[100%]"
                style={{
                  zIndex: 13,
                }}
              />
            </motion.div>
          </div>
        }
      />
    </div>
  );
}
