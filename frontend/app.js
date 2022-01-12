const express = require('express');
const path = require("path");
const port = 3000;

// Server
const app = express();
app.use(express.static('src'))

// Serve main game
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Frontend bobby listening at http://localhost:${port}`);
});