const express = require('express')

const app= express();

app.get('/', (req, res) => {

    return res.send('hello World !')
})

app.listen(3000, function (){

    console.log(`server is started`)
})