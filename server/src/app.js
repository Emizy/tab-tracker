const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')


const app = express();
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

require('./routes')(app)
sequelize.sync({ force: true }).then(result => {
    // console.log(result);
    console.log(`Server stated on port ${config.port}`)
    app.listen(config.port)
}).catch(err => {
    console.log(err);
});

