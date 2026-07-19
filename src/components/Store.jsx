import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Store() {
  const handleEnquireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    '100% Organic',
    'Improves Soil Fertility',
    'Increases Water Retention',
    'Rich in Natural Nutrients',
    'Chemical-Free',
    'Suitable for All Crops',
  ];

  return (
    <motion.section
      id="store"
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
          <h2 className="section-heading">Our Flagship Product</h2>
          <p className="section-subheading">Premium organic solution for sustainable farming excellence</p>
        </motion.div>

        {/* Best Seller Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-6 max-w-5xl mx-auto"
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400 text-green-300 px-4 py-2 rounded-full text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            🌱 Best Seller
          </motion.span>
        </motion.div>

        {/* Premium Product Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{
              y: -10,
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.3)',
            }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden group relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Product Image Placeholder */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full aspect-square">
                  {/* Premium gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-black/50 to-green-900/40 rounded-2xl" />

                  {/* Large product icon with animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-9xl"
                    animate={{ rotate: [0, 5, -5, 0], y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🌾
                  </motion.div>

                  {/* Decorative circles */}
                  <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-green-600/10 rounded-full blur-2xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Product Details */}
              <motion.div
                className="flex flex-col justify-between"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Product Title */}
                <div>
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    KrishiMitra Premium Organic
                    <span className="gradient-text block mt-2">FYM (Farmyard Manure)</span>
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Premium naturally decomposed farmyard manure that improves soil fertility, enhances microbial activity, increases water retention, and promotes healthy crop growth. Suitable for vegetables, fruits, flowers, and field crops.
                  </motion.p>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-6">Key Features:</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.4)' }}
                        >
                          <Check size={16} className="text-green-400" />
                        </motion.div>
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Enquire Button */}
                  <motion.button
                    onClick={handleEnquireClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary py-4 text-lg font-semibold"
                  >
                    📧 Enquire Now
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Premium Badge */}
            <motion.div
              className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ⭐ Premium Organic
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-lg">
            Experience the power of premium organic farming with KrishiMitra's flagship product
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
