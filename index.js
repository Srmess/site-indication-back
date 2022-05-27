const express = require('express');
const Handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Indication = require('./models/Indication');
const { response } = require('express');
const { STATUS_CODES } = require('http');


const app = express();

// funções de CORS
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.engine('handlebars', Handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('viewengine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.post("/api/register_fromten", function(req, res){
    const nome   = req.body.nome1;
    const numero  = req.body.numero1;
    const emailcomespaco = req.body.nome1+"@"+req.body.numero1+".com.br"

    const email = emailcomespaco.replace(/ /g, "");
    
    Indication.create({
        name: nome,
        number: numero,
        email: email
    }).then(
        res.status(200).end()
    ).catch((error)=>(
        console.error(error)
    ))
})

app.post("/api/register_formtwenty", function(req, res){
    const nome = req.body.nome2;
    const numero = req.body.numero2;
    const emailcomespaco = req.body.nome2+"@"+req.body.numero2+".com.br";

    const email = emailcomespaco.replace(/ /g, "");

    Indication.create({
        name: nome,
        number: numero,
        emiail: email 
    }).then(
        res.status(200).end()
    ).catch((error)=>(
        console.error(error)
    ))
})

app.post("/api/register_formthirty", function(req, res){
    const nome = req.body.nome3;
    const numero = req.body.numero3;
    const emailcomespaco = req.body.nome3+"@"+req.body.numero3+".com.br";

    const email = emailcomespaco.replace(/ /g, "");

    Indication.create({
        name: nome,
        number: numero,
        emiail: email 
    }).then(
        res.status(200).end()
    ).catch((error)=>(
        console.error(error)
    ))
})

app.listen(8080, function(){
    console.log("servidor no ar!");
})