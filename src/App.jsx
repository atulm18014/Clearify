import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ImageProcessor from './components/ImageProcessor';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalFilename, setOriginalFilename] = useState('image');

  const handleImageUpload = (file) => {
    // Clean up previous object URLs
    if (selectedImage) URL.revokeObjectURL(selectedImage);
    if (processedImage && processedImage.startsWith('blob:')) URL.revokeObjectURL(processedImage);
    
    // Get the original filename without extension
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    setOriginalFilename(fileName);
    
    setSelectedImage(URL.createObjectURL(file));
    setProcessedImage(null);
  };

  const processImage = (type) => {
    setIsProcessing(true);
    
    // Simulate processing delay - this would be replaced with actual API calls
    setTimeout(() => {
      // In a real app, this would call an API to process the image
      const canvas = document.createElement('canvas');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        // Draw the original image
        ctx.drawImage(img, 0, 0);
        
        // Apply a simple filter to simulate processing
        if (type === 'dehaze') {
          // Brighten and increase contrast for dehaze effect
          ctx.filter = 'brightness(1.1) contrast(1.1)';
          ctx.drawImage(img, 0, 0);
          ctx.filter = 'none';
        } else {
          // Add a blue tint for desmoke effect and slightly increase contrast
          ctx.globalCompositeOperation = 'source-atop';
          ctx.fillStyle = 'rgba(100, 180, 255, 0.1)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = 'source-over';
        }
        
        // Get the processed image as data URL
        const processedDataUrl = canvas.toDataURL('image/png');
        setProcessedImage(processedDataUrl);
        setIsProcessing(false);
      };
      
      img.src = selectedImage;
    }, 2000);
  };

  const handleReset = () => {
    // Clean up object URLs to prevent memory leaks
    if (selectedImage) URL.revokeObjectURL(selectedImage);
    if (processedImage && processedImage.startsWith('blob:')) URL.revokeObjectURL(processedImage);
    
    setSelectedImage(null);
    setProcessedImage(null);
    setOriginalFilename('image');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!selectedImage ? (
            <ImageUploader onImageUpload={handleImageUpload} />
          ) : (
            <ImageProcessor 
              originalImage={selectedImage}
              processedImage={processedImage}
              isProcessing={isProcessing}
              originalFilename={originalFilename}
              onProcess={processImage}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
