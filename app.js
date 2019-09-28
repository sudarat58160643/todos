const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let todos =[
    { id: 1,title : 'simple todo', completed: false},
    { id: 2,title : 'Completed sample todo', completed: true},
]
app.get('/todos',(req,res) =>{
    res.send(todo)
})
 
//list todo
app.post('/todos',(req,res)=>{
    let title = req.body.title
    let todo = {title: title,completed:false,id:todos.length}
    todos.push(todo)
    res.sendStatus(201).send(todo)
})

app.get('/todos',(req,res) =>{
    
let id = req.params.id
let result = todos.filter(todo => todo.id.toString() === id)
let todo = result[0]
res.send(todo)
 
})

app.post('/todos',(req, res) =>{
    let name = req.body.name
    let p = {name:name}
    todo.push(p)
    res.sendStatus(201)
})

app.delete('/todo/:id',(req,res)=>{
    let id = req.param.id
    delete todos[id-1]
    let result = todos.filter(todo => todo.id.toString() !== id
    todos = result
    res.sendStatus(204)
})


app.put('/todo/:id',(req,res)=>{
    let id = req.param.id
    let todo = todos.find(t => t.id.toString() === id
    res.send(todo)
})

app.listen(port,()=>{
    console.log('Todo-API started ' + port)
})