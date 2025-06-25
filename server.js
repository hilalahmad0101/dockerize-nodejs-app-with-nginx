const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the "public" directory

// Route to serve index.html
const app_name = process.env.APP_NAME;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`the servername is ${app_name}`)
});

app.listen(PORT, () => {
    console.log(`Server running at ${app_name} http://localhost:${PORT}`);
});
