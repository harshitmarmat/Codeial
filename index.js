const { urlencoded } = require('express');
const express = require('express');

const app = express();

const port = 8000;
const db = require('./config/mongoose');
//cookie
const cookieParser = require('cookie-parser');
//layout
const expressLayouts = require('express-ejs-layouts');

//use for session
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategies');
const MongoStore = require('connect-mongo');


app.use(urlencoded());
app.use(cookieParser());
app.use(expressLayouts);


//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name : 'codeial',
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl : 'mongodb://localhost/codeial_development',
            autoRemove : 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));
// const routes = require('./routes/');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
    return;
});