const mongoose = require("mongoose");

const uri = 'mongodb://127.0.0.1:27017/webstore';

const db = mongoose.connection;


mongoose.connect(uri)
    .catch(err => console.log(err));

    
db.once('open', () => 
    console.log('Mi DB esta conectada a', uri )
);

db.on('error', err => 
    console.log(err)
);