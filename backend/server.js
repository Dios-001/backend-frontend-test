import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())


app.get('/',(req,res)=>{
    res.status(200).send("hello")
})

app.listen(3000, ()=>{
    console.log("working on 3000")
})