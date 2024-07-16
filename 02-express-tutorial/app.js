const express = require('express');
const path = require('path');
const products = require('./data.js');

const app = express();

app.use(express.static("./public"))
const products = require('./data.js');


app.get('api/v1/products', (req, res) => {
    res.json(products);
});

app.get('api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find(p => p.id === idToFind);

    if (products) {
        res.json(product);
    } else {
      res.status(404).send('Product not found');  
    }
});


app.get('/api/v1/query', (req, res) => {
    const searchItem = req.query.search?.toLowerCase() || ''; 
    const limit = parseInt(req.query.limit) || products.length;

    const pricefilter = parseFloat(req.query.price) || null;

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().startsWith(searchItem));
    const slicedProducts = filteredProducts.slice(0, limit);

    res.json(slicedProducts);
});
//route handler for /api/v1/test
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!"});
});

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found!');
});
app.listen(3000, () => {
console.log('Express Tutorial');
});