const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(cors());

app.get('api/addedbills', (req, res) =>{
    knex('bill_list')
        .select('*')
        .from('bill_list')
        .then( data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: `error at ${err}`}))
        .then(console.log('bill quere complete'))
})

app.put('api/addbill', (req, res) =>{

})

app.delete('api/removebill/:billis', (req, res) => {

})


app.listen(port, () => console.log(`Server up and running @ localhost:${port}`))