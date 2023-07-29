const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const port = 1100;

const app = express();
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

//Building Connection

mongoose.connect("mongodb://127.0.0.1:27017/AirbnbUser_DB").then(()=>{
    console.log("connection Established");
}).catch(()=>{
    console.log("connection not Established");
})

//Making Schema

const User_Schema = new mongoose.Schema({
    first_name:String,
    mid_name:String,
    last_name:String,
    mobile:Number,
    email:String,
    password:String,
    address:String,
    city:String,
    state:String,
    pincode:Number
})

//Creating collections

const airbnb_collections = new mongoose.model("airbnb_collections", User_Schema);

//Creating Routes

app.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    try{
    const user = await airbnb_collections.findOne({email:email});
        if(user){
            if(password === user.password){
                console.log("login successful");
                res.send({message:"Login successful", user:user});
            }else{
                console.log("Password not match");
                
                res.send({message:"Password not matched"});
                
            }
        }else{
            console.log("user not found");
           
            res.send({message:"User not found"});
        }
    
    }catch(e){
        console.log(e.message);
    }
}

    
    
    
)

app.post("/register", async(req, res)=>{
    const {first_name, mid_name, last_name, mobile, email, password, address, city, state, pincode} = req.body;
    
    const registeredUser = await airbnb_collections.find ({mobile : mobile, email : email})
    if(registeredUser.length>0){
       console.log("Already registered");
        return
    } else{
      await airbnb_collections.create({
            first_name : first_name,
            mid_name : mid_name,
            last_name : last_name,
            mobile : mobile,
            email : email,
            password : password,
            address : address,
            city : city,
            state : state,
            pincode : pincode
        })
    }
   
    // console.log(req.body);
    
  res.send("user registered successfully");
}
    
)



app.listen(port, ()=>{
    console.log(port + "connected");
})



