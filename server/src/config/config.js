module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'tracker_db',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'rootpa$$',
        options: {
            dialect: process.env.DIALET || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tracker_db.sqlite',
        }

    }
}
