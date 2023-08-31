const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://kishan:mongo2005@cluster0.d27zror.mongodb.net/",{dbName:'weather'})
// mongoose.connect("mongodb+srv://kishan:mongo2005@cluster0.d27zror.mongodb.net/",{dbName:process.env.DETA_DB})
mongoose.connect(process.env.DETA_DB,{dbName:process.env.DB_NAME})


.then(()=>{
    console.log("Connect to weather db");
}).catch((error)=>{
    console.log(error);
})

module.exports =mongoose;