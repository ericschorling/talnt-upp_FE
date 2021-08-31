const db = require('./conn')

class getLeaders {
    constructor(id, user_id, blog){
        this.id = id;
        this.user_id = user_id;
        this.blog = blog;
    };

    static async getLeaders(email){
        try {
            const response = await db.any(`SELECT * FROM leaders WHERE email = $1;`, [email])
            console.log(response)
            return response
        }
        catch (error){
            return error.message
        }
    }
    static async addLeaders(leader){
        try {
            const response = await db.any(`INSERT INTO leaders (name, username, team, suporg, company) VALUES($1, $2, $3, $4, $5)`)
            return response
        }
        catch (error) {
            return error.message
        }
    }
}

module.exports = getLeaders