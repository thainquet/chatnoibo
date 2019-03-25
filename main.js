const express = require('express')
const app = express()
const port = 3000

const dummyData = require('./HistoryFilterPageDemoData')
let dataFake = dummyData
app.get('/', (req, res) => res.send(dataFake))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))