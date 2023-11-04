# backend/app.py
from flask import Flask, request, jsonify
import cv2
import pytesseract
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/process_image', methods=['POST'])
def process_image():
    try:
        # Capture an image from the webcam (you may need to install OpenCV)
        cap = cv2.VideoCapture(0)
        ret, image = cap.read()
        cv2.imwrite('captured_image.jpg', image)
        
        # Perform OCR on the captured image (you may need to install pytesseract)
        recognized_text = pytesseract.image_to_string('captured_image.jpg')
        
        return jsonify({'result': recognized_text})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()
