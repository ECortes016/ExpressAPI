const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');

app.engine('handlebars', hbs({ 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts') 
}));

app.set('view engine', 'handlebars');

// Routing
app.get("/", (req, res) => {
    // res.render("index", { layout: false });
    res.render('index', { 
        title: 'Home Page', 
        name: 'Emmanuel Cortes',
        age: 17,
        isDisplayedName: false
    });

  });


app.get("/about", (req, res) => {
    // res.render("about", { layout: false });
    res.render('about', { 
        title: "About",
        description: 'lorem ipsum lorem ipsum' 
    });
  });


app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});