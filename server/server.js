const express =require('express')

const app =express();

const cors=require('cors')

const port =3001

const knex = require('knex')(require('./knexfile.js')['development']);
app.use(express.json())
app.use(cors());


app.get('/', (req,res)=>{
    knex('db')
        .select('*')
        .then(data=>res.status(200).send(data))
})

app.post("/",(req,res)=>{
    
    const body =req.body
    
    knex('db')
        .insert(body)
        .returning('id')
        .then((ids) =>
        res.status(201).json({
        message: 'Movie added sucsessfully',
        id:ids[0].id
        }) 
    )
})




app.listen(port,()=>console.log(`Hello from ${port}`))