const { response } = require('express');
const db = require('./conn')

class getNotes {
    constructor(id, user_id, blog){
        this.id = id;
        this.user_id = user_id;
        this.blog = blog;
    };
    static async getAllNotes(){
        try {
            const response = await db.any(`SELECT * FROM notes`)
            return response
        }
        catch (error) {
            return error.message
        }
    }
    static async getNotes(id){
        try {
            const response = await db.any(`SELECT * FROM notes WHERE teammemeber = $1;`,[id])
            console.log(response)
            return response
        }
        catch (error){
            return error.message
        }
    }
    static async addNote(note){
        try {
            console.log(note)
            const response = await db.any(`INSERT INTO notes (teammemeber, enteringleader, talentgroup, notetype, note, date) VALUES($1, $2, $3, $4, $5, $6);`, [note.teammember, note.enteringleader, note.talentGroup, note.notetype, note.note, note.date])
            console.log(response)
            return JSON.stringify('Success')
        }
        catch (error) {
            return error.message
        }
    }
    static async updateNote(note, id){
        try {
            const response = await db.any(`UPDATE notes SET note = $1 WHERE id = $2`, [note, id])
            return response
        }
        catch(error){
            return error.message
        }
    }

    static async removeNote(id){
        try {
            const response = await db.any(`DELETE FROM notes WHERE id = $1;`, [id])
            return response
        }
        catch(error){
            return error.message
        }
    }
}

module.exports = getNotes