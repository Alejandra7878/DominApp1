const express = require('express');
const cors = require('cors');
const app = express();

app.set ('port', process.env.PORT || 4000)


app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Bienvenido a mi apui rest full')
})

app.use('/api/user', require ('./routes/user'))

module.exports = app;
