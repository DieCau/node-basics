require('../connection')
const Product = require('../models/Product')

const createProducts = async () => {
    
    const webcamone = new Product({
      name: 'Webcam Usb Notebook Mic Plug Play',
      description: 'Resolución máxima de video: 1920px x 1080px',
      price: 68099,
    });

    await webcamone.save();

    const webcamtwo = new Product({
      name: ' Logitech C505e HD 30FPS color negro',
      description: 'Funciona con Chrome OS, macOS 10.10, Windows 8',
      price: 39657,
    });

    await webcamtwo.save();
}

createProducts();