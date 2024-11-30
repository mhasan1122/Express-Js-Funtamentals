const express = require('express')
const path =require('path')
const app = express()
const port = 3000

//middleware
app.use(express.static(path.join(__dirname,"public")))

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname,'index.html'))
    res.json({"limon":3})
  })



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})