const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());

const db = JSON.parse(fs.readFileSync('./db.json'));

console.log('DB loaded.\n');

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));

let count = 0;
app.get('/data', (req, res) => {
    if (count >= db.length) {
        count = 0;
    } 
    res.json(db[count]);
    count++;
})

app.listen(port, () => console.log(`App listening on port ${port}.`));