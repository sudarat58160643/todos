const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
let todo =[]
app.get('/todo',(req,res) =>{
    res.send({message:'Hello todo'})
})

app.get('/todo',(req,res) =>{
    res.send(todo)
})

app.post('/todo',(req, res) =>{
    let name = req.body.name
    let p = {name:name}
    todo.push(p)
    res.sendStatus(201)
})




app.listen(port,()=>{
    console.log('Welcome to Todos ' + port)
})