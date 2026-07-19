import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Eye } from 'lucide-react';

export default function Weather() {
  const weatherData = {
    location: 'Punjab, India',
    current: {
      temp: 28,
      condition: 'Partly Cloudy',
      icon: '⛅',
      humidity: 65,
      windSpeed: 12,
      visibility: 10,
      uvIndex: 7,
    },
    forecast: [
      { day: 'Tomorrow', high: 30, low: 22, condition: 'Sunny', icon: '☀️' },
      { day: 'Wednesday', high: 27, low: 20, condition: 'Rainy', icon: '🌧️' },
      { day: 'Thursday', high: 26, low: 19, condition: 'Cloudy', icon: '☁️' },
      { day: 'Friday', high: 29, low: 21, condition: 'Sunny', icon: '☀️' },
    ],
  };

  return (
    <motion.section
      id="weather"
      className="py-20 px-4 md:px-8"
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
          <h2 className="section-heading">Weather Forecast</h2>
          <p className="section-subheading">Stay updated with real-time weather data</p>
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Current weather */}
          <motion.div className="glass-card p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {weatherData.location}
                </h3>
                <p className="text-gray-300 mb-4">{weatherData.current.condition}</p>
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-bold gradient-text">
                    {weatherData.current.temp}°C
                  </span>
                </div>
              </div>

              <motion.div
                className="text-9xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {weatherData.current.icon}
              </motion.div>
            </div>

            {/* Weather details grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '💧', label: 'Humidity', value: `${weatherData.current.humidity}%` },
                { icon: '💨', label: 'Wind', value: `${weatherData.current.windSpeed} km/h` },
                { icon: '👁️', label: 'Visibility', value: `${weatherData.current.visibility} km` },
                { icon: '☀️', label: 'UV Index', value: weatherData.current.uvIndex },
              ].map((detail, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 text-center rounded-lg"
                >
                  <span className="text-3xl mb-2 block">{detail.icon}</span>
                  <p className="text-gray-400 text-sm">{detail.label}</p>
                  <p className="text-white font-bold text-lg">{detail.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Forecast */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {weatherData.forecast.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center"
              >
                <h4 className="text-white font-bold mb-3">{day.day}</h4>
                <div className="text-5xl mb-3">{day.icon}</div>
                <p className="text-gray-300 text-sm mb-3">{day.condition}</p>
                <div className="flex justify-center gap-4">
                  <span className="text-white font-bold">{day.high}°</span>
                  <span className="text-gray-400">{day.low}°</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
