
const mongoose = require('mongoose')
const path  =  require('path')

const eventSchema = mongoose.Schema({
    cover:{
        type: String,
        require: true,
        trim:true,
    },
    author:{
        type:String,
        require:true,
        trim:true
    },
    category:{
        type:String,
        require:true,
        trim:true
    },
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    url:{
        type:String,
        require:true,
        trim:true
    },
    date_start:{
        type:Number,
        require:true
    },
    date_end:{
        type:Number,
        require:true,
    }
})

// For invalid Date range
eventSchema.pre('save',function(next){
    const start = this.date_start
    const end = this.date_end
    if( start > end ){
        
        // Removes the uploaded image
        fs.unlink(path.join(__dirname,'../public/cover/images/'+this.cover.toString()),(err)=>{
            if(err){
                console.log(err)
            }
        })
     throw new Error('Invalid date range')
    }
    else{
        next();
    }
})

const Event = new mongoose.model("event",eventSchema)
module.exports = Event