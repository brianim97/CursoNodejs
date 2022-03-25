const express = require('express')
const app = express()
const port = 3001


app.get('/',(req,res)=>{
  res.json({msg:'home'})
})

app.get('/account',(req,res)=>{
  res.json({msg:'account'})
})

app.get('/users',(req,res)=>{
  res.json({msg:'users'})
})




app.listen(port, () => {
  console.log(`Mi app se ejecuta en http://localhost:${port}`)
})