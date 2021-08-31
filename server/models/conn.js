const host = "lallah.db.elephantsql.com",
    user = "uuebfydl",
    database = "uuebfydl",
    password = "885WY0WAouOq8kD1jdlg1tfmpE4J-bzT";

const pgp = require('pg-promise')({
    query: function (e) {
        console.log('QUERY: ', e.query)
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}

const db = pgp(options)

module.exports = db;