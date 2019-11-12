var mongoose = require('mongoose');
var Contact = mongoose.model('Contacts',{
    email:{
        type:String,
        required : true,
    },
    phone:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    }

});

module.exports={Contact}
