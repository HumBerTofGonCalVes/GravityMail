/*jshint esversion: 6 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");

//Routes import
const PlansRouter = require("./routes/PlansRouter");

// View engine
app.set('view engine', 'ejs');

//Session
app.use(session({
    secret: "anything",
    cookie: {
        maxAge: 30000000
    },
    saveUninitialized: true,
    resave: true
}));

//Flash sessions
app.use(flash());

//Static files
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Routes
app.use("/", PlansRouter);

// Router
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// End Router
app.listen(8080, () => {
    console.log("Running...!");
});