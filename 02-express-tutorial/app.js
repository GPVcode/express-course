const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, image, price } = product
        return { id, name, image, price }
    })
    res.send(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find(product => product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send("Product not found")
    }
    return res.send(singleProduct)
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})