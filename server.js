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
                title: "Home",
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
                title: "Walter White",
                layout: 'info',
                style: "character.css",
                character: json[0].name,
                img: json[0].img,
                nickname: json[0].nickname,
                occupation: json[0].occupation[1],
                status: json[0].status,
                actor: json[0].portrayed
            })
        });
})

app.get("/jesse", (req, res) => {
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('jesse', {
                title: "Jesse Pinkman",
                layout: 'info',
                style: "character.css",
                character: json[1].name,
                img: json[1].img,
                nickname: json[1].nickname,
                occupation: json[1].occupation[0],
                status: json[1].status,
                actor: json[1].portrayed
            })
        });
})

app.get("/saul", (req, res) => {
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('saul', {
                title: "Saul Goodman",
                layout: 'info',
                style: "character.css",
                character: json[7].name,
                img: json[7].img,
                nickname: json[7].nickname,
                occupation: json[7].occupation[0],
                status: json[7].status,
                actor: json[7].portrayed
            })
        });
})

app.get("/henry", (req, res) => {
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('henry', {
                title: "Henry Schrader",
                layout: 'info',
                style: "character.css",
                character: json[4].name,
                img: json[4].img,
                nickname: json[4].nickname,
                occupation: json[4].occupation[0],
                status: json[4].status,
                actor: json[4].portrayed
            })
        });
})

app.get("/skyler", (req, res) => {
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('skyler', {
                title: "Skyler White",
                layout: 'info',
                style: "character.css",
                character: json[2].name,
                img: json[2].img,
                nickname: json[2].nickname,
                occupation: json[2].occupation[0],
                status: json[2].status,
                actor: json[2].portrayed
            })
        });
})

app.get("/gus", (req, res) => {
    fetch(`https://breakingbadapi.com/api/characters/`)
        .then(res => res.json())
        .then(json => {
            res.render('gus', {
                title: "Gustavo Fring",
                layout: 'info',
                style: "character.css",
                character: json[8].name,
                img: json[8].img,
                nickname: json[8].nickname,
                occupation: json[8].occupation[0],
                status: json[8].status,
                actor: json[8].portrayed
            })
        });
})

app.listen(8080);