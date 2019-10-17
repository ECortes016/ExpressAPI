const express = require('express');
const fetch = require('node-fetch');

const app = express();
const hbs = require('express-handlebars');
const path = require('path');

app.use(express.static('public'));

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
    fetch(`https://breakingbadapi.com/api/characters/`)
    .then(res => res.json())
    .then(json => {console.log(json)
        res.render('characters', {
            style: "characters.css",
            walter: json[0].name,
            walterIMG: json[0].img,
            jesse: json[1].name,
            jesseIMG: json[1].img,
            saul: json[7].name,
            hank: json[4].name,
            gus: json[8].name,
            walterJR: json[3].name
        })
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

app.listen(8080);


// API 
