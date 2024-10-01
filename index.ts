import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const names: string[] = [];

app.use(bodyParser())

app.post('/name', (req, res) => {
    names.push(req.body.name);
    res.status(201).json({})
})

app.get('/name', (req, res) => {
    res.status(200).json({
        names: names
    })
})

app.listen(4000, () => {
    console.log('Server started at 4000')
})