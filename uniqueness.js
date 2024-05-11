require('./connection')
const User = require('./models/User')

async function createUsers() {
    const userOne = new User({
        username: 'raton',
        password: 'kukas'
    })

    await userOne.save()
    console.log(userOne);
    
}

createUsers()