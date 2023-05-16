/*
let obj = [
    {
      "name": "aastha",
      "email": "aastha@gmail.com",
      "bloodgroup": "A+",
      "no": 1
    },
    {
      "name": "prachi",
      "email": "prachi@gmail.com",
      "bloodgroup": "AB",
      "no": 2
    },
    {
        "name": "jagriti",
        "email": "jagriti@gmail.com",
        "bloodgroup": "B+",
        "no": 3
      },
      {
        "name": "roshni",
        "email": "roshni@gmail.com",
        "bloodgroup": "O+",
        "no": 4
      },
    
];

for (let i of obj) {
if(i.name == 'aastha') 
{
    console.log(i);
    return;
}
else console.log("not found");
}

// let result = obj.find(result => result.name === "aastha");
// console.log(result);

*/



const express = require("express");
const app = express();
const port = 5002;

// middleware
app.use(express.json());
app.use(router);

// homepage routing
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome, Please login first!</h1>");
  console.dir(app.path()) // ''
console.log(__dirname);
});

app.get('/:color:colour:clr', (req, res)=>{         // use same route for multiple end points using params
  res.status(200).send("<h1>My color is green!</h1>");
})

app.get('/user/:id?', function userIdHandler (req, res) {
  console.log(req.route)
  res.send('GET')
})


// server port/listing
app.listen(port, () => {
  console.log(`Server is running at ${port} port!`);
  console.log(__dirname);
  console.dir(app.path()) // ''
});
