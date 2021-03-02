const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
const bcrypt=require("bcrypt");
const saltround=10;
app.use(bodyParser.urlencoded({
  extended: true
}));
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, POST",
}

app.use(cors(corsOptions));
mongoose.connect("mongodb://localhost:27017/TaskDB", {useNewUrlParser: true});
const RegisterSchemaStudent = new mongoose.Schema ({
  fName:{type:String,required:true},
  lName:{type:String,required:true},
  phone:{type:String,required:true},
    email: {type:String ,unique:true,required:true},
    password: {type:String,required:true}

});
const RegisterSchemaTeacher = new mongoose.Schema ({
  fName:{type:String,required:true},
  lName:{type:String,required:true},
  phone:{type:String,required:true},
    email: {type:String ,unique:true,required:true},
    password: {type:String,required:true}

});
const Student = new mongoose.model("Student", RegisterSchemaStudent);
const Teacher = new mongoose.model("Teacher", RegisterSchemaTeacher);
app.post("/api/register/student",function(req,res){
req.on("data",function(data){
  const sdata=JSON.parse(data);
  const fname=sdata.fname;
  const lname=sdata.lname;
  const phone=sdata.phone;
  const email=sdata.email;
  const password=sdata.password;

  bcrypt.hash(password,saltround,function(err,hash){
    const student=new Student({
      fName:fname,
      lName:lname,
      phone:phone,
      email:email,
      password:hash

    });
    student.save(function(err){
      if(err){
        res.send("Error");
      }
      else{
        res.send("Done");
      }
    });
  })
})


})
app.get("/api/login/student",function(req,res){
  const email=req.body.email;
  const password=req.body.password;


    Student.findOne({email:email},function(err,results){
if(err){
  res.send(err);
}
else{
  if(results){
    bcrypt.compare(password,results.password,function(err,resp){
      if(resp){
        res.send(results);
      }
      else{
        res.send("IncorrectPassword")
      }
    })

  }
  else{
      res.send("Email do not exist");
  }
}



    })

})
app.get("/api/login/teacher",function(req,res){
  const email=req.body.email;
  const password=req.body.password;


    Teacher.findOne({email:email},function(err,results){
if(err){
  res.send(err);
}
else{
  if(results){
    bcrypt.compare(password,results.password,function(err,resp){
      if(resp){
        res.send(results);
      }
      else{
        res.send("IncorrectPassword")
      }
    })

  }
  else{
      res.send("Email do not exist");
  }
}



    })

})
app.post("/api/register/teacher",function(req,res){
  req.on("data",function(data){
    const sdata=JSON.parse(data);
    const fname=sdata.fname;
    const lname=sdata.lname;
    const phone=sdata.phone;
    const email=sdata.email;
    const password=sdata.password;

    bcrypt.hash(password,saltround,function(err,hash){
      const student=new Teacher({
        fName:fname,
        lName:lname,
        phone:phone,
        email:email,
        password:hash

      });
      student.save(function(err){
        if(err){
          res.send("Error");
        }
        else{
          res.send("Successfully Posted");
        }
      });
    })
  })
})
app.listen(4000,function(){
  console.log("Running");
})
