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
          <div className="relative w-full h-full overflow-y-hidden">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 65 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className="absolute w-full h-full flex justify-center items-center z-10"
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
                style={{
                  position: 'absolute',
                  maxWidth: '20%',
                  zIndex: 14,
                  bottom: '0%',
                  left: '0%',
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
                style={{
                  position: 'absolute',
                  zIndex: 11,
                  bottom: '-6%',
                  left: '28%',
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
                style={{
                  position: 'absolute',
                  zIndex: 12,
                  bottom: '5.5%',
                  left: '43.2%',
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
                style={{
                  position: 'absolute',
                  zIndex: 13,
                  bottom: '-2%',
                  right: '19.5%',
                }}
              />
            </motion.div>
          </div>
        }
      />
    </div>
  );
}
