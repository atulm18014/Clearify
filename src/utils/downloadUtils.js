/**
 * Utility functions for downloading images and files
 */

/**
 * Downloads an image from a URL or data URL
 * @param {string} imageUrl - The URL or data URL of the image
 * @param {string} filename - The filename to save as
 */
export const downloadImage = (imageUrl, filename = 'clearify-image.png') => {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Converts a canvas element to a Blob and downloads it
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @param {string} filename - The filename to save as
 * @param {string} type - The MIME type of the image
 * @param {number} quality - The quality of the image (0-1)
 */
export const downloadCanvasAsImage = (canvas, filename = 'clearify-image.png', type = 'image/png', quality = 0.8) => {
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    downloadImage(url, filename);
    URL.revokeObjectURL(url); // Clean up
  }, type, quality);
};
