import { motion } from 'framer-motion';
import { Leaf, Camera, Mic, Cloud, ShoppingCart, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: '🌿',
      title: 'Plant Disease Detection',
      description: 'AI-powered analysis to identify plant diseases and pest infestations instantly.',
      delay: 0,
    },
    {
      icon: '📷',
      title: 'Image Diagnosis',
      description: 'Upload crop photos for instant disease identification and treatment recommendations.',
      delay: 0.1,
    },
    {
      icon: '🎤',
      title: 'Voice Diagnosis',
      description: 'Describe symptoms verbally and get AI-powered diagnosis and solutions.',
      delay: 0.2,
    },
    {
      icon: '☀️',
      title: 'Weather Forecast',
      description: 'Real-time weather data and agricultural forecasts for your region.',
      delay: 0.3,
    },
    {
      icon: '🛒',
      title: 'Organic Store',
      description: 'Premium organic fertilizers, seeds, and farming products delivered to your door.',
      delay: 0.4,
    },
    {
      icon: '🤖',
      title: 'AI Farming Assistant',
      description: 'Get personalized farming recommendations based on your crops and location.',
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="features"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-green-950/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Powerful Features</h2>
          <p className="section-subheading">Everything you need for modern, intelligent farming</p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 group"
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-4 inline-block"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>

              {/* Hover indicator */}
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
