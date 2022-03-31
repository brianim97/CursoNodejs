const express = require('express')
const cors = require('cors')
const dbConnection = require('./db/config')
require('dotenv').config()
const app = express()
const port = process.env.PORT

dbConnection();
app.use(cors());
app.use(express.json());

app.use('/api/users',require('./routes/users'))

app.get('*',(req,res)=>{
  res.json({
    msg:'File not found'
  })
})

app.listen(port, () => {
  console.log(`Mi app se ejecuta en http://localhost:${port}`)
})