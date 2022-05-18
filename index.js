const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sungjun:3603132w@boilerplate.j4nuf.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Mongodb Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('다시합니다..ㅠㅠ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})