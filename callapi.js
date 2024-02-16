var express=require('express')
var app=express()
var axios=require("axios")
app.use(express.json())


app.get('/',async (req,res)=>
{
    var response=await axios.get('https://fakestoreapi.com/users')
    var data=response.data
    res.json(data)


})
app.listen('3001',()=>
console.log("responded"))