const express = require("express");
const router = express.Router();
 
const jwt = require("jsonwebtoken");
const secret_key = require("./config/jwt.json")

const app = express()
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
console.log(secret_key['secret_key'])
app.listen(3000)

