var express = require('Express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User}=require('./models/users');

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


//method for addtion of user
app.post('/user',(req,res)=>{
    //mongoose object instance
    var user = new User({
        email : req.body.email,
        name : req.body.name,
        username : req.body.username,
        password : req.body.password
    });
    //saving user to db
    user.save().then((doc)=>{
            //returning new object to user
            res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});

//method for deleting user
app.post('/delete',(req,res)=>{
    //mongoose method for deleting object from db
    User.findByIdAndRemove(req.body.id).then((doc)=>{
        //returning deleted object to user
        res.send(doc);
},(err)=>{
    res.status(400).send(err);
})
});

//method for updating object
app.post('/update',(req,res)=>{
    //mongoose method for finding object by id and then updating it
    User.findByIdAndUpdate(req.body.id,{$set : { name : req.body.name,email : req.body.email,phone : req.body.phone}},{new : true}).then((doc)=>{
        //sending updated object to user
        res.send({user : doc});
},(err)=>{
    res.status(400).send(err);
})
});

//method for finding single user by id
app.post('/Singleuser',(req,res)=>{
    //mongoose method for finding object by id
    User.findById(req.body.id).then((doc)=>{
            //sending obj to user
            res.send({user : doc});
    },(err)=>{
        res.status(400).send(err);
    })
});

//method for listing object
app.get('/user',(req,res)=>{
    User.find().then((doc)=>{
            //returning object to user
            res.status(200).send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});


app.listen(3000,()=>{
    console.log('Server started on 3000')
})
