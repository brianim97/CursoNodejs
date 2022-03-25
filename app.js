const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use('/api/users',require('./routes/users'))

app.get('*',(req,res)=>{
  res.json({
    msg:'File not found'
  })
})

app.listen(port, () => {
  console.log(`Mi app se ejecuta en http://localhost:${port}`)
})