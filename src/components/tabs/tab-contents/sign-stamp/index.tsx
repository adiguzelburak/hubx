import { motion } from 'framer-motion';
import TabsLayout from '../../tabs-layout';

export default function SignStamp() {
  return (
    <div>
      <TabsLayout
        tab="Sign & Stamp"
        title="One-Tap Focus"
        description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
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
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />

              <motion.img
                src="/assets/tab-images/sign-stamp-signature.svg"
                alt="Signature"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                style={{
                  position: 'absolute',
                  left: '10px',
                  bottom: '24%',
                  maxWidth: '40%',
                  transformOrigin: 'center',
                }}
              />

              <motion.img
                src="/assets/tab-images/sign-stamp-badge.svg"
                alt="Badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                style={{
                  position: 'absolute',
                  right: '10px',
                  bottom: '37%',
                  maxWidth: '40%',
                  transformOrigin: 'center',
                }}
              />
            </motion.div>
          </div>
        }
      />
    </div>
  );
}
