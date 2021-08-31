const db = require('./conn')

class getTMs {
    constructor(id, user_id, blog){
        this.id = id;
        this.user_id = user_id;
        this.blog = blog;
    };

    static async getTMs(id){
        try {
            const response = await db.any(`SELECT * FROM teammembers WHERE leader = $1;`, [id])
            console.log(response)
            return response
        }
        catch (error){
            return error.message
        }
    }
    static async getTMInfo(name){
        try{
            const response = await db.any(`SELECT * FROM teammembers WHERE name = $1`, [name])
            return response
        }
        catch(error){
            return error.message
        }
    }
    static async addTMs(tm){
        try {
            const response = await db.any(`INSERT INTO leaders (name, username, team, suporg, company) VALUES($1, $2, $3, $4, $5)`)
            return response
        }
        catch (error) {
            return error.message
        }
    }
}

module.exports = getTMs