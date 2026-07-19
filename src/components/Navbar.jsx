import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'AI Plant Doctor', href: '/plant-doctor' },
    { label: 'Weather', href: '#weather' },
    { label: 'Products', href: '#store' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const isLink = (href) => href.startsWith('/');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 glass-effect border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl">🌿</span>
              <span className="text-2xl font-bold gradient-text">KrishiMitra AI</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ color: '#22c55e' }}>
                {isLink(item.href) ? (
                  <Link
                    to={item.href}
                    className="text-gray-200 hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-200 hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-6 py-2 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400/10 transition-all"
            >
              <LogIn size={18} />
              <span>Login</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-6 space-y-3"
          >
            {navItems.map((item, index) => (
              <div key={index}>
                {isLink(item.href) ? (
                  <Link
                    to={item.href}
                    className="block text-gray-200 hover:text-green-400 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-200 hover:text-green-400 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-400/10">
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
