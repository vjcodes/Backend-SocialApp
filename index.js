const express = require('express')
const format = require('date-format')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()

// swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello Worldd Fuck</h1>')
});

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
       username: "anonymousVj",
       followers: 66,
       follows: 70,
       date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial)
});

app.get('/api/v1/facebook', (req, res) => {
    const facebookSocial = {
       username: "vinayakJaiswalPage",
       followers: 100,
       follows: 20,
       date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(facebookSocial)
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkedinSocial = {
       username: "vinayakJaiswal",
       followers: 500,
       follows: 80,
       date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(linkedinSocial)
});

app.get("/api/v1/:token", (req, res) =>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token})
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})