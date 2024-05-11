// Para actualizar un producto 1º) Hay que encontrarlo y 2º) Hay que actualizarlo

require('../connection')
const User = require('../models/User')


const someFunction = async () => {
    const user = await User.findOne({username : 'oscashito'})
    user.password = 'miamigo'
    user.save()
    console.log(user);
}

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'fachita'}, {
        name: 'Facha Hugo Dante'
    })
    console.log(user);
    
}


const updateUsers = async () => {

    // la funcion update tiene 2 parámetros ({a buscar},{lo que se quiere actualizar})
    const user = await User.updateMany({username:'diecau'},{
        password: '0123456789'
    });
    console.log(user);
}

otherFunction();