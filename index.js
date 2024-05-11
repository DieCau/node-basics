// Requerir el modulo "connection"
require('./connection');

// Requerir el modelo de datos "Product"  y lo guardo en una const Product
const Product = require('./models/Product')


// Utilizo async y await dentro de una funcion 
async function main() {
    // newProduct es un nuevo producto creado con sus 3 caracteristicas
    const newProduct = new Product({
      name: 'Mouse',
      description: 'Apple - Magic Mouse Superficie Multi-touch - Blanco',
      price: 249999,
    });


    // Finalmente guardo el newProduct en mi tabla "Product" en una const productSaved y lo retorno
    const productSaved = await newProduct.save();
    return productSaved;

}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err))