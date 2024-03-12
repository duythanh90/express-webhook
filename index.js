const express = require('express')
const app = express()

app.get('/get', function (req, res) {
    res.send('Hello World!')
})

app.post('/post', express.json(), (req, res) => {
    let body = req.body;
    console.log(body);
    res.send(body);
});

app.listen(4001, function () {
    console.log('Example app listening on port 4000!')
})
