import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function Hero() {
  const FloatingLeaves = () => {
    const leaves = Array.from({ length: 20 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute text-4xl opacity-20"
        initial={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
        }}
        animate={{
          x: Math.random() * 200 - 100,
          y: Math.random() * 300,
          rotate: 360,
        }}
        transition={{
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        🍃
      </motion.div>
    ));
    return <div className="absolute inset-0 overflow-hidden">{leaves}</div>;
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-slate-900/30 pointer-events-none" />

      {/* Floating leaves */}
      <FloatingLeaves />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          AI-Powered
          <span className="gradient-text block mt-2">Smart Agriculture</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Detect plant diseases, check weather, receive farming recommendations, and buy premium organic products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            🔍 Diagnose Crop
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            📚 Learn More
          </motion.button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-16"
        >
          {[
            { number: '10K+', label: 'Farmers' },
            { number: '95%', label: 'Accuracy' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
              <div className="text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
