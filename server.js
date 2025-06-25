const express = require('express');
const path = require('path');
const app = express();

const env_app_name=process.env.APP_NAME;
const app_name = "My Awesome App " + env_app_name; // your dynamic variable

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // where your .ejs files will live

app.get('/', (req, res) => {
    res.render('index', { app_name }); // pass the variable to the template
});

app.listen(3001, () => {
    console.log('Server running on port 3000');
});
