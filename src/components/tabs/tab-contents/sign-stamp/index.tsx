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
          <div className="relative w-full h-full lg:overflow-y-hidden">
            <motion.div
              initial={{ y: 600 }}
              animate={{ y: 65 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              className="absolute w-full h-full flex justify-center items-center z-0"
            >
              <img
                src="/assets/tab-images/sign-stamp.svg"
                alt="Sign & Stamp"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />

              <motion.img
                src="/assets/tab-images/sign-stamp-signature.svg"
                alt="Signature"
                className="left-[-64px] lg:left-[10px] bottom-[27%] lg:bottom-[24%] absolute max-w-[62%] lg:max-w-[40%]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                style={{
                  transformOrigin: 'center',
                }}
              />

              <motion.img
                src="/assets/tab-images/sign-stamp-badge.svg"
                alt="Badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="right-[-52px] lg:right-[10px] bottom-[38%] lg:bottom-[37%] absolute max-w-[62%] lg:max-w-[40%]"
                transition={{
                  delay: 1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                style={{
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
