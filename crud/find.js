// Requerir el modulo "connection"
require('../connection');

// Requerir el modelo de datos "Product"  y lo guardo en una const Product
const Product = require('../models/Product');

async function main() {
    // Busca todos los productos
    // const products = await Product.find();
    const product = await Product.find({ price: 1499999 }); //Solo busca el/los productos que tengan precio 1499999
    // console.log(products);
    console.log(product);
    
}

main()
