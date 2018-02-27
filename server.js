const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "./foundation-6.4.2")));

require('./controllers/burgers_controllers.js')(app);


db.sequelize.sync().then(() => {
    app.listen(PORT, function () {
        console.log("Listening on PORT: " + PORT);
    });
});