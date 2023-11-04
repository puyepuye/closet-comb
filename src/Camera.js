// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [recognizedText, setRecognizedText] = useState('');

  const handleCaptureImage = async () => {
    try {
      // Send a request to the Python backend to capture and process the image
      const response = await axios.post('http://localhost:5000/process_image');
      
      if (response.data.result) {
        setRecognizedText(response.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Webcam OCR</h2>
      <button onClick={handleCaptureImage}>Capture Image and Recognize Text</button>
      {recognizedText && (
        <div>
          <h3>Recognized Text:</h3>
          <p>{recognizedText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
