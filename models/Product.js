// Requiero sólo modulos { Schema y model } de Mongoose
const { Schema, model } = require("mongoose")

// Crear el Schema "productSchema" con 3 propiedades que luego tendrá nuestro modelo 
const productSchema = new Schema({
    name: {
        type: String
    },
    description: String, 
    price: {
        type: Number,
        default: 0
    }, 
})

// Exportar el modulo con el modelo "Product" (crear el nombre) y el schema "productSchema"
module.exports = model('Product', productSchema)