var express = require('Express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Contact}=require('./models/contacts');

var app= express();

app.use(bodyParser.json());

app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
}); 

//angular (public) files
app.use(express.static(__dirname + '/../public')); 


//method for addtion of contact
app.post('/contact',(req,res)=>{
    //mongoose object instance
    var contact = new Contact({
        email : req.body.email,
        name : req.body.name,
        phone : req.body.phone
    });
    //saving contact to db
    contact.save().then((doc)=>{
            //returning new object to user
            res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});

//method for deleting contact
app.post('/delete',(req,res)=>{
    //mongoose method for deleting object from db
    Contact.findByIdAndRemove(req.body.id).then((doc)=>{
        //returning deleted object to user
        res.send(doc);
},(err)=>{
    res.status(400).send(err);
})
});

//method for updating object
app.post('/update',(req,res)=>{
    //mongoose method for finding object by id and then updating it
    Contact.findByIdAndUpdate(req.body.id,{$set : { name : req.body.name,email : req.body.email,phone : req.body.phone}},{new : true}).then((doc)=>{ 
        //sending updated object to user
        res.send({contact : doc});
},(err)=>{
    res.status(400).send(err);
})
});

//method for finding single contact by id
app.post('/Singlecontact',(req,res)=>{
    //mongoose method for finding object by id
    Contact.findById(req.body.id).then((doc)=>{
            //sending obj to user
            res.send({contact : doc});
    },(err)=>{
        res.status(400).send(err);
    })
});

//method for listing object
app.get('/contact',(req,res)=>{
    Contact.find().then((doc)=>{
            //returning object to user
            res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});


app.listen(3000,()=>{
    console.log('Server started on 3000')
})