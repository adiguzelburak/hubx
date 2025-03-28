import { motion } from 'framer-motion';
import TabsLayout from '../../tabs-layout';

export default function DocumentScanner() {
  return (
    <div>
      <TabsLayout
        tab="Document Scanner"
        title="Scan with Ease"
        description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
        phoneImage={
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 65 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className="absolute w-full h-full flex justify-center items-center z-0"
            >
              <img
                src="/assets/tab-images/document-scanner.svg"
                alt="Document Scanner"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </motion.div>
          </div>
        }
      />
    </div>
  );
}
