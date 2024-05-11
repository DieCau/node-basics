require('../connection')
const User = require('../models/User')

async function getUser() {
    // Busca unicamente el username '...' y guardalo en la const user
    const user = await User.findOne({username: 'oscashito'})    
    console.log(user);
    
}


getUser();
