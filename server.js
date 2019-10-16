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


app.get("/characters", (req, res) => {
    // res.render("about", { layout: false });
    const charName = fetch(`https://breakingbadapi.com/api/characters/1`)
    .then(res => res.json())
    .then(json => console.log(json));

    res.render('characters', {
        name: charName.name
    })
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

app.listen(8080);


// API 
