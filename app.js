const express = require('express')

const app = express()

app.get('/notes', (req, res) => {
  res.json({
    notes: "This is your notebook. Edit this start saving your notes!"
  })
})

app.listen(3000)