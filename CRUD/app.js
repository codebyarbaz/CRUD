const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const indexRouter = require('./routes/indexRoutes');

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/', indexRouter);


app.listen(process.env.PORT || 1234, () => {
    console.log("The server is running on PORT 1234");
});