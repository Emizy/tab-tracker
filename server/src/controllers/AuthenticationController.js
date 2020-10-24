const {User} = require('../models')

module.exports = {
    async register(request, response) {
        console.log(User)
        try {
            const user_data = await User.create(request.body)
            response.send(user_data.toJSON())
        } catch (e) {
            response.status(400).send({
                error: 'This email account already in user',
                message: e.toString(),
                user:User
            })
        }


    }
}