const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser") 
const jwt = require("jsonwebtoken");
const secret_key = require("./config/jwt.json")

const app = express()
app.use(cookieParser())
app.get("/login/:id/:pw", function(req,res,next){

    // default : HMAC SHA256
    let token = jwt.sign({
        email: "foo@bar.com"   // 토큰의 내용(payload)
    },
    secret_key['secret_key'] ,  // 비밀 키
    {
        expiresIn: '5m'  // 유효 시간은 5분
    })
 
 
    if(req.params.id == "ljk" && req.params.pw == "5774" ){
	res.cookie("user", token);
	res.json({
	    token: token
	})
    }
})

app.get("/verify", 
    function(req,res,next){
	let token = req.cookies.user
	let decode_token = jwt.verify(token, secret_key['secret_key'])
	if( decode_token.email == 'foo@bar.com'){
	    next()
	}else{
	    res.sendStatus(403)
	}

    },
    function(req,res,next){
    let token = req.cookies.user
    let decode_token = jwt.verify(token, secret_key['secret_key'])
    res.json({
	decode_token: decode_token
    })
    
})
   
console.log(secret_key['secret_key'])
app.listen(3000)

