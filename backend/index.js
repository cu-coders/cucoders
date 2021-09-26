const express  = require('express');
const path = require('path')
const api_routes = require('./routes/api_routes');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3001;


// Demo database: Connect to a actual database before deployment
mongoose.connect("mongodb://localhost:27017/events",{useNewUrlParser:true}).then(()=>{

    app.listen(PORT,()=>{
        console.log(`Listening at PORT: ${PORT}`);
    })
})

app.use(express.static(path.join(__dirname+"./public/")))
app.use('/api/',api_routes)
 