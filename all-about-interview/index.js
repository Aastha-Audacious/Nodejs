const express = require("express");
const port = 5000;
const app = express();
const bodyParser = require('body-parser')
const EventEmittor = require("events");  //EventEmittor - class
const event = new EventEmittor();  // creating new event
const mangoose = require('mongoose');
const empRoute = require('./routers/emp-router');


mangoose.connect('mongodb://localhost:27017/testingdb')
.then(()=>{console.log("connected to db")})
.catch((err)=>{
    console.log("not connected to db", err)
})

// mangoose.connection.on('connected', conn=>{
//     console.log("connected to db")
// })

// mangoose.connection.on('error', err=>{
//     console.log("error! not connected to db")
// })




//middleware
app.use(express.json());
app.use('/api/employee', empRoute);
app.use(bodyParser.json())

let count=0;
event.on("event_name", ()=>{
count++;
console.log("event", count);
});

//homepage routing



app.get("/", (req, res) => {
  res.status(200).send({ msg: "This is homepage!", status: true });
  event.emit("event_name");
});

app.get("/about", (req, res) => {
  res.status(200).send({ msg: "This is About page!", status: true });
    event.emit("event_name");

});

app.get("/contact", (req, res) => {
  res.status(200).send({ msg: "This is contact page!", status: true });
    event.emit("event_name");

});

//port listing
app.listen(port, console.log("server is running!"));
