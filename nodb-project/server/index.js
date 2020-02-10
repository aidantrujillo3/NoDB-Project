const express = require('express')
const cors = require('cors')
const storeCtrl = require('./controllers/storeController')
const guitarCtrl = require('./controllers/guitarController')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())

app.get('/api/unowned-guitars', storeCtrl.getUnownedGuitars)

app.get('/api/guitars', guitarCtrl.getBoughtGuitars)
app.post('/api/guitars', guitarCtrl.buyGuitar)
app.put('/api/guitars/:id', guitarCtrl.editGuitarBrand)
app.delete('/api/guitars/:id', guitarCtrl.sellGuitar)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))