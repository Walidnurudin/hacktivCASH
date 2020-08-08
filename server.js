const path = require('path')
const express = require('express')
const data = require('./data/items.json')

const app = express()

// setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// middleware untuk static, dan memberitau dimana folder staticnya
app.use(express.static('public'))

// route
app.get('/', (req, res) => {
    res.render('index', {
        items: data
    })
})

app.get('/detail/:id', (req, res) => {
    const item = data.find(data => {
        return data.id == req.params.id
    })

    // fungsi method find() adalah untuk mempermudah ketika ingin mencari sebuah data. Proses yang dilakukan method find() mirip dengan method filter() hanya saja yang dilakukan method find() hanya mengembalikan sebuah data saja


    res.render('detail', {
        item: item
    })
})

const port = 5432
app.listen(port, () => {
    console.log(`Server berjalan di http://127.0.0.1:${port}`)
})