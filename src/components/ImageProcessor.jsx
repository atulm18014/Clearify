import React from 'react';

const ImageProcessor = ({ originalImage, processedImage, isProcessing, onProcess, onReset, originalFilename = 'image' }) => {
  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = `${originalFilename}-Enhanced.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
a
  const ImageContainer = ({ imageUrl, alt }) => (
    <div className="border rounded-lg overflow-hidden bg-gray-50 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
      <img src={imageUrl} alt={alt} className="w-full h-full object-contain max-h-[60vh]" />
    </div>
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Image Processing</h2>
        <button 
          onClick={onReset}
          className="text-primary hover:text-blue-700 font-medium flex items-center text-sm sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Upload New Image
        </button>
      </div>

      <div className="image-grid">
        {/* Original Image Section */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Original Image</h3>
          <ImageContainer imageUrl={originalImage} alt="Original" />
        </div>
        
        {/* Processed Image Section */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            {processedImage ? 'Processed Image' : 'Result Preview'}
          </h3>
          <div className="border rounded-lg overflow-hidden bg-gray-50 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
            {processedImage ? (
              <img src={processedImage} alt="Processed" className="w-full h-full object-contain max-h-[60vh]" />
            ) : (
              <div className="text-center p-4">
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base">Processing image...</p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm sm:text-base">Process the image to see the result</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4">
        {processedImage ? (
          <button onClick={handleDownload} className="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Enhanced Image
          </button>
        ) : (
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => onProcess('dehaze')}
              disabled={isProcessing}
              className={`btn-primary ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin h-5 w-5 mr-2 border-t-2 border-b-2 border-white rounded-full"></div>
                  Processing...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Remove Haze
                </>
              )}
            </button>
            
            <button
              onClick={() => onProcess('desmoke')}
              disabled={isProcessing}
              className={`btn-secondary ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin h-5 w-5 mr-2 border-t-2 border-b-2 border-white rounded-full"></div>
                  Processing...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Remove Smoke
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageProcessor;
