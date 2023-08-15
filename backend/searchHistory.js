const express = require('express');
const fs = require('fs');
const csvParser = require('csv-parser');
const cors = require('cors');


const app = express();
const port = 3001; // Choose a port number
const path = "D:/Conversational Fashion AI Generator/FlipFashion/search-history.csv"
app.use(express.json());
app.use(cors());

// Endpoint to store search history
app.post('/store-history', (req, res) => {
    const searchTerm = req.body.searchTerm;


    if (!searchTerm) {
        return res.status(400).send('Missing search term');
    }


    fs.appendFile(path, `${searchTerm}\n`, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error storing history');
        } else {
            res.status(200).send('History stored successfully');
        }
    });
});

// Endpoint to retrieve search history
app.get('/get-history', (req, res) => {
    const history = [];

    fs.createReadStream(path)
        .pipe(csvParser())
        .on('data', (row) => {
            history.push(row);
        })
        .on('end', () => {
            res.json(history);
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
