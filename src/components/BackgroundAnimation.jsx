// components/BackgroundAnimation.jsx
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الدائرة الأولى */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-20 w-96 h-96 bg-brand/20 rounded-full blur-3xl"
      />
      {/* الدائرة الثانية */}
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, -100, 0],
          scale: [1, 1.5, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
    </div>
  );
};

export default BackgroundAnimation