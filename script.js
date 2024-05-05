const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index_copy.html')
})

app.listen(3000, () => {
    console.log('listening at port 3000')
})