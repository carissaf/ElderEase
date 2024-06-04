from flask import Flask, jsonify, request
from pytesseract import pytesseract
from gtts import gTTS
from flask_cors import CORS
from PIL import Image
import os

pytesseract.tesseract_cmd = 'Tesseract-OCR/tesseract.exe'
lang = "ind"
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message':'server is running'})

@app.route('/process_img', methods=['POST'])
def process_img():
    if 'image' not in request.files:
            return jsonify({'error': 'No image file in request'}), 400

    file = request.files['image']

#     filename = secure_filename(file.filename)
#     if file.filename == '':
#         return "No selected file", 400
    # Convert image to PIL format
    image = Image.open(file.stream)
#     image = Image.open('Screenshot 2024-05-29 203736.png')
    text = pytesseract.image_to_string(image, lang='ind')
    text = text.replace("\n", " ")
#     tts = gTTS(text=text, lang='id')
#     tts.save("speech.mp3")
#     os.remove(temp_image_path)
    return jsonify({'text': text})

if __name__ == '__main__':
    app.run(debug=True)

# import cv2
# from PIL import Image
# from pytesseract import pytesseract
# from gtts import gTTS
# import pygame
# import io
#
# # Mengatur jalur eksekusi Tesseract
# pytesseract.tesseract_cmd = 'Tesseract-OCR/tesseract.exe'
#
# # Konfigurasi Tesseract untuk menggunakan bahasa Indonesia
# language = 'ind'
#
# # Inisialisasi pygame untuk audio
# pygame.mixer.init()
#
# pil_image = Image.open('Bahasa-Indonesia-696x464.jpg')
# text = pytesseract.image_to_string(pil_image, lang=language)
# print("Detected Text:", text)
# # Inisialisasi kamera
# # camera = cv2.VideoCapture(0)
# #
# # while True:
# #     ret, frame = camera.read()
# #     if not ret:
# #         print("Failed to grab frame")
# #         break
# #
# #     # cuma ngatur resolusi aja biar kualitas gambar dan framenya oke
# #     resized = cv2.resize(frame, (600, 400))
# #     cv2.imshow("Frame", resized)
# #
# #     key = cv2.waitKey(1)
# #
# #     if key == ord('c'):  # Menekan 'c' untuk ss gambar dari webcam
# #         pil_image = Image.fromarray(cv2.cvtColor(resized, cv2.COLOR_BGR2RGB))
# #         text = pytesseract.image_to_string(pil_image, lang=language)
# #         print("Detected Text:", text)
# #
# #         # Baca teks yang dideteksi dalam bahasa Indonesia
# #         if text:
# #             tts = gTTS(text=text, lang='id')
# #             mp3_fp = io.BytesIO()
# #             tts.write_to_fp(mp3_fp)
# #             mp3_fp.seek(0)
# #             pygame.mixer.music.load(mp3_fp)
# #             pygame.mixer.music.play()
# #             while pygame.mixer.music.get_busy():  # Kita menunggu sampai audio selesai
# #                 pygame.time.Clock().tick(10)
# #
# #     if key == ord('q'):  # Tekan 'q' untuk keluar dari webcam
# #         break
# #
# # camera.release()
# # cv2.destroyAllWindows()