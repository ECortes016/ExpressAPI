const express = require('express');
const fetch = require('node-fetch');

const app = express();
const hbs = require('express-handlebars');
const path = require('path');

app.use(express.static('public'));

app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    extname: '.hbs'
}));


app.set('view engine', '.hbs');

// Routing
app.get("/", (req, res) => {
    // res.render("about", { layout: false });
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('index', {
                title: "Character Index",
                style: "index.css",
                walter: json[0].name,
                walterIMG: json[0].img,
                jesse: json[1].name,
                jesseIMG: json[1].img,
                saul: json[7].name,
                saulIMG: json[7].img,
                hank: json[4].name,
                hankIMG: json[4].img,
                gus: json[8].name,
                gusIMG: json[8].img,
                skyler: json[2].name,
                skylerIMG: json[2].img
            })
        });
});

app.get("/walter", (req, res) => {
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('walter', {
                title: "Character Index",
                layout: 'info',
                style: "character.css",
                character: json[0].name,
                img: json[0].img
            })
        });
})

app.get("/jesse", (req, res) => {
    // res.render("index", { layout: false });

    res.render('jesse', {
        title: 'Home Page',
        name: 'Emmanuel Cortes',
        age: 17,
        isDisplayName: true,
        isAgeEnable: true
    });

});






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
