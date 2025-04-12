import express from "express"

const app = express()

const port = 3000;

app.get("/",(req,res)=>{
    res.json({
        salada: "Ceesar",
        Suco:"Morango"
    })
})


app.listen(port,()=>{
    console.log(`App runing in http://localhost:3000`)
})