const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser')

// Initialize what you need
const app = express()
const data = 'data.json'
app.use(express.static('public'))
app.use(bodyParser.json());

// Check if data file exists. If it does read it, else create one
if(!fs.existsSync(data)){
    var inputs = Array(600).fill(0).map(() => Array(800).fill(0))
    fs.writeFile(data, JSON.stringify(inputs), 'utf8', function () {}); 
}
else{
    var inputs = JSON.parse(fs.readFileSync(data))
}

// Get data from the frontend and save it
app.post('/', (req, res)=> {
    inputs[req.body.y][req.body.x]++
    fs.writeFile(data, JSON.stringify(inputs), 'utf8', function () {}); 
    if(!req.body)
    {
        return res.status(400).send({status: "failed"})
    }
    res.status(200).send({status: 'received'})
});

app.listen(3000)