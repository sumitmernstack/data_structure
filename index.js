
const eventemmiter = require("events")
const event = new eventemmiter()
var jwt = require('jsonwebtoken');
const express = require('express')
const app = express()

let secret = "!@#$%^ASDF"


event.on("message",()=>{
    console.log("my name is sumit kesahri")
})

event.emit("message")

let count = 0;
event.on("counter", () => {
    count++
    console.log("an event called", count)
})

app.get('/', (req, res) => {
    event.emit("counter")
    res.send('hello world')

})

app.get('/token', function gettoken() {

    let res = jwt.sign({ name: "sumit", id: 123 }, secret)
    console.log(res)
})

app.get('/tokenverify', function checktoken() {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VtaXQiLCJpZCI6MTIzLCJpYXQiOjE3MjgxMTM3Njl9.pbVrkAR4ulrbcvRQnuzHA7nX5TPP5Wob94yK1xeacUE"

    let res = jwt.verify(token, secret)
    console.log(res)
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});


let a = {};
let b = {
    key: "b"
};
let c = {
    key: "c"
};
 
a[b] = 45;
a[c] = 58;
 
console.log(a[b]);

let obj1 = {
    key: "javascript"
 };
 let obj2 = obj1;
 let obj3 = obj2;
  
 obj1.key = "python";
 obj2 = {
    key: "ruby"
 };
  
 console.log(obj1.key, obj2.key, obj3.key);


 const arr = [1, 2, 3, 4, 5];
 
for (var i = 0; i < arr.length; i++) {
 setTimeout(function () {
   console.log(i);
 }, 1000);
}