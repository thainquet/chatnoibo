const express = require('express')
const app = express()

app.set('PORT', process.env.PORT || 7777);

const dummyData = require('./HistoryFilterPageDemoData')
let dataFake = dummyData
app.get('/', (req, res) => res.send(dataFake))

app.listen(app.get('PORT'), () => console.log('success'))