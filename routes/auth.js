var express = require('express');
var router = express.Router();           //router is a variable
const {signout,signup,signin,isSignedIn} = require("../controllers/auth");
const { check } = require('express-validator');

router.post("/signup",[
    check("name","name should be atleast 5 characters").isLength({ min: 3 }),
    check("email","correct email is required").isEmail(),
    check("password","password should be atleast 5 char ").isLength({ min: 3 })
],signup);


//app.get("/signin",(req,res)=>{
    //res.send("Hello");
//})
//for differeent url we have dii=fferent funtn

router.post("/signin",[
    check("email","correct email is required").isEmail(),
    check("password","password field is required ").isLength({ min: 1 })
],signin);
router.get("/signout", signout);

router.get("/testroute",isSignedIn, (req,res)=>{
    res.send("A protected route");
});

module.exports=router;