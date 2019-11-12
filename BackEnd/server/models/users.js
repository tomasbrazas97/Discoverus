var mongoose = require('mongoose');
var User = mongoose.model('Users',{
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

module.exports={User}
