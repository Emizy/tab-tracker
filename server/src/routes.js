const Auth = require('./controllers/AuthenticationController')
module.exports = (app) => {
    app.post('/register',Auth.register)

}