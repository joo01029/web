const express = require('express');
const app = express();
const index = require('./router/index');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(index);

app.get('/', (req,res)=>{
    console.log('hello world');
    res.send('hello world');
})

module.exports = app;