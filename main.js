const express = require('express')
const app = express()
const path = require('path')

app.set('PORT', process.env.PORT || 7777);

const dummyData = require('./HistoryFilterPageDemoData')
let dataFake = dummyData
// app.get('/', (req, res) => res.send(dataFake))


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/public/index.html')
})

app.get('/vertical', (req, res) => {
    res.sendFile(__dirname+ '/public/index1.html')
})

app.listen(app.get('PORT'), () => console.log('success'))