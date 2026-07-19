import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Camera, Download, RotateCcw } from 'lucide-react';

export default function PlantDoctor() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // Sample disease data for demo
  const sampleResult = {
    plant: 'Tomato',
    disease: 'Early Blight',
    confidence: 96,
    symptoms: [
      'Brown spots',
      'Yellow leaves',
      'Dry edges',
    ],
    possibleCause: 'Fungal infection',
    organicTreatment: 'Neem-based fungicide',
    chemicalTreatment: 'Recommended fungicide if required',
    prevention: [
      'Crop rotation',
      'Avoid excess moisture',
      'Remove infected leaves',
    ],
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.match('image/*')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setShowResults(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.match('image/*')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setShowResults(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!uploadedImage) return;

    setIsAnalyzing(true);
    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleAnalyzeAnother = () => {
    setUploadedImage(null);
    setShowResults(false);
    setIsAnalyzing(false);
  };

  const handleDownloadReport = () => {
    // Report download functionality
    console.log('Download report');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 text-white pt-24 pb-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 md:px-8 mb-16"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span>🌿 AI Plant Doctor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Upload a clear image of your crop leaf and let AI detect possible diseases with treatment recommendations.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Upload Plant Image</h2>

            {/* Drag and Drop Area */}
            {!uploadedImage && (
              <motion.div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="glass-card p-12 border-2 border-dashed border-green-400/50 rounded-2xl text-center cursor-pointer hover:border-green-400 transition-all"
                whileHover={{ borderColor: 'rgba(34, 197, 94, 1)' }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <Upload size={48} className="mx-auto text-green-400" />
                </motion.div>

                <p className="text-gray-300 text-lg mb-2">
                  Drag and drop your plant image here
                </p>
                <p className="text-gray-400 text-sm mb-6">or click below to select</p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="btn-primary flex items-center justify-center gap-2"
                  >
                    <Upload size={20} />
                    Choose Image
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => cameraInputRef.current?.click()}
                    className="btn-secondary flex items-center justify-center gap-2"
                  >
                    <Camera size={20} />
                    Use Camera
                  </motion.button>
                </div>

                <input
                  ref={cameraInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <p className="text-gray-500 text-xs mt-6">
                  Accepted formats: JPG, PNG, JPEG
                </p>
              </motion.div>
            )}

            {/* Image Preview */}
            <AnimatePresence>
              {uploadedImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <p className="text-sm text-gray-400 mb-4">Image Preview</p>
                  <img
                    src={uploadedImage}
                    alt="Uploaded plant"
                    className="w-full h-96 object-cover rounded-xl mb-6"
                  />

                  {/* Analyze Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? (
                      <motion.span
                        className="flex items-center justify-center gap-2"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          🔄
                        </motion.div>
                        Analyzing your plant...
                      </motion.span>
                    ) : (
                      '🔍 Analyze Plant'
                    )}
                  </motion.button>

                  {!isAnalyzing && !showResults && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAnalyzeAnother}
                      className="w-full mt-3 btn-secondary py-3 flex items-center justify-center gap-2"
                    >
                      <RotateCcw size={18} />
                      Choose Different Image
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Section */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Analysis Result</h2>

                {/* Result Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-card p-8 rounded-2xl space-y-8"
                >
                  {/* Plant Type */}
                  <motion.div whileHover={{ x: 5 }} className="pb-6 border-b border-white/10">
                    <p className="text-gray-400 text-sm mb-2">Plant Type</p>
                    <p className="text-3xl font-bold text-green-400">{sampleResult.plant}</p>
                  </motion.div>

                  {/* Disease Detection */}
                  <motion.div whileHover={{ x: 5 }} className="pb-6 border-b border-white/10">
                    <p className="text-gray-400 text-sm mb-2">Detected Disease</p>
                    <p className="text-3xl font-bold text-red-400">{sampleResult.disease}</p>
                    <motion.div
                      className="mt-3 w-full bg-gray-700 rounded-full h-2 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-red-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${sampleResult.confidence}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.div>
                    <p className="text-gray-300 text-sm mt-2">
                      Confidence: <span className="text-yellow-400 font-bold">{sampleResult.confidence}%</span>
                    </p>
                  </motion.div>

                  {/* Symptoms */}
                  <motion.div whileHover={{ x: 5 }} className="pb-6 border-b border-white/10">
                    <p className="text-gray-400 text-sm mb-3">Symptoms</p>
                    <div className="space-y-2">
                      {sampleResult.symptoms.map((symptom, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                          className="flex items-center gap-2 text-gray-200"
                        >
                          <span className="text-red-400">●</span>
                          {symptom}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Possible Cause */}
                  <motion.div whileHover={{ x: 5 }} className="pb-6 border-b border-white/10">
                    <p className="text-gray-400 text-sm mb-2">Possible Cause</p>
                    <p className="text-lg text-gray-200">{sampleResult.possibleCause}</p>
                  </motion.div>

                  {/* Treatment Options */}
                  <div className="space-y-6">
                    {/* Organic Treatment */}
                    <motion.div whileHover={{ x: 5 }} className="pb-6 border-b border-white/10">
                      <p className="text-gray-400 text-sm mb-3">🌱 Organic Treatment</p>
                      <p className="text-lg text-green-300 font-semibold">
                        {sampleResult.organicTreatment}
                      </p>
                    </motion.div>

                    {/* Chemical Treatment */}
                    <motion.div whileHover={{ x: 5 }} className="pb-6 border-b border-white/10">
                      <p className="text-gray-400 text-sm mb-3">⚗️ Chemical Treatment</p>
                      <p className="text-lg text-blue-300 font-semibold">
                        {sampleResult.chemicalTreatment}
                      </p>
                    </motion.div>

                    {/* Prevention */}
                    <motion.div whileHover={{ x: 5 }}>
                      <p className="text-gray-400 text-sm mb-3">🛡️ Prevention Tips</p>
                      <div className="space-y-2">
                        {sampleResult.prevention.map((tip, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                            className="flex items-center gap-2 text-gray-200"
                          >
                            <span className="text-green-400">✓</span>
                            {tip}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAnalyzeAnother}
                    className="w-full btn-primary py-4 text-lg font-semibold"
                  >
                    📸 Analyze Another Plant
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadReport}
                    disabled
                    className="w-full btn-secondary py-4 text-lg font-semibold flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                  >
                    <Download size={20} />
                    Download Report (Coming Soon)
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
