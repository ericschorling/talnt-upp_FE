const db = require('./conn')

class getBlogList {
    constructor(id, user_id, blog){
        this.id = id;
        this.user_id = user_id;
        this.blog = blog;
    };

    static async getBlogLogs(){
        try {
            const response = await db.any(`SELECT * FROM blogs;`)
            console.log(response)
            return response
        }
        catch (error){
            return error.message
        }
    }

    static async getABlog(blog_id){
        try{
            const response = await db.one(`SELECT * FROM blogs WHERE id = $1;`, [blog_id] )
            return response
        }
        catch (error){
            return error.message

        }
    }
    static async addBlogPost(user_id, post){
        try {
            const response = await db.any(`INSERT INTO blogs (user_id, blog) VALUES ($1, $2);`, [user_id, post])
            return response
        }
        catch (error) {
            return error.message
        }
    }
    static async postComment(post_id, comment){
        try{
            const response = await db.any(`INSERT INTO comments (blog_id, comment) VALUES($1, $2);`, [post_id, comment])
            return response
        }
        catch (error) {
            return error.message
        }
    }
    static async getComments(blog_id){
        try {
            const response = await db.any(`SELECT * FROM comments WHERE blog_id = $1`, [blog_id])
            return response
        }
        catch (error){
            return error.message
        }
    }
}

module.exports = getBlogList