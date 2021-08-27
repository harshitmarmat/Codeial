const { urlencoded } = require('express');
const express = require('express');

const app = express();

const port = 8000;
const db = require('./config/mongoose');
//cookie
const cookieParser = require('cookie-parser');
//layout
const expressLayouts = require('express-ejs-layouts');


app.use(urlencoded());
app.use(cookieParser());
app.use(expressLayouts);


app.use('/',require('./routes/'));
// const routes = require('./routes/');

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
    return;
});