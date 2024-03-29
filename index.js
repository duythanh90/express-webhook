const express = require('express')
const app = express()
const fs = require('fs');

app.get('/get', function (req, res) {
    console.log(req.query);
    res.send(req.query);
})

app.post('/post', express.json(), (req, res) => {
    let body = req.body;
    console.log(body);
    //Create ./json folder and save the body to a file

    // Check if ./json folder is existed
    if (!fs.existsSync('./json')) {
        fs.mkdirSync('./json');
    }

    // Generate current timestamp string to save to json file
    let timestamp = new Date().getTime();
    fs.writeFileSync
        (`./json/${timestamp}.json`, JSON.stringify(body, null, 2));

    res.send(body);
});


app.post('/topup', express.json(), (req, res) => {
    let body = req.body;
    console.log(body);
    res.send({
        message: 'topup success',
        amount: body.amount,
        phone_number: body.phone_number
    });
});


app.listen(4001, function () {
    console.log('Example app listening on port 4001!')
})