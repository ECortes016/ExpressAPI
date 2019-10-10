const express = require('express');
const fetch = require('node-fetch');
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
        isDisplayName: true,
        isAgeEnable: true
    });

});


app.get("/about", (req, res) => {
    // res.render("about", { layout: false });
    res.render('about', {
        title: "About",
        description: 'lorem ipsum lorem ipsum'
    });
});


app.get("/dashboard", (req, res) => {
    res.render('dashboard', {
        isListEnabled: true
    })
})


app.get("/each/helper", (req, res) => {
    res.render('contact', {
        people: [
            "James",
            "Peter",
            "Samantha",
            "Marissa"
        ],
        user: {
            username: 'Shroud',
            age: 25,
            phone: 1234567
        },
        lists: [
            {
                items: ['Mango', 'Banana', 'Pineapple']
            },

            {
                items: ['Potato', 'Manioc', 'Avocado']
            }
        ]
    });
})

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});

fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=df7cdc55dad592b8c46b213093e9d349&hash=73fc3e8eb94b68b934f22ccf02998163')
    .then(res => res.text())
    .then(body => console.log(body));