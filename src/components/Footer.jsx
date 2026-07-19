import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "Features", "Pricing", "About Us", "Contact"],
    },
    {
      title: "Products",
      links: [
        "Plant Doctor",
        "Weather Forecast",
        "Premium FYM",
        "AI Assistant",
        "Blog",
      ],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Support"],
    },
  ];

  const socialLinks = ["Instagram", "Twitter", "Email"];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black/40 border-t border-white/10 backdrop-blur-md mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <h2 className="text-2xl font-bold text-white">
                KrishiMitra AI
              </h2>
            </div>

            <p className="text-gray-400 mb-6">
              Revolutionizing agriculture with AI-powered solutions for modern
              farmers.
            </p>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>India</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>support@krishimitra.ai</span>
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">

          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:text-green-400"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-gray-400 mt-4 md:mt-0">
            © {currentYear} KrishiMitra AI. All rights reserved.
          </p>

        </div>
      </div>
    </motion.footer>
  );
}