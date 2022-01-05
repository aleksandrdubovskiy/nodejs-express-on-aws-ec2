const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>version 1.0</p>')
})

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '10',
            price: 100
        },
        {
            productId: '11',
            price: 120
        },
    ])
})

app.listen(port, () => {
    console.log(`Demo is on port: ${port}`);
})
