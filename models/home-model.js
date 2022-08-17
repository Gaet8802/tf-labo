const { createConnection } = require('../utils/db-utils')
const { articleMapper } = require('./mappers/article-mapper')

const shoppingModel = {

    getAll: async () => {
  

      const db = await createConnection()
  

      const query = `SELECT * FROM article ORDER BY createdAt ASC`
      

      const result = await db.query(query)
  
  
      db.end()
  
      return result.map(row => articleMapper(row))

    },
  
  
    insert: async ({ content }) => {
  
      let db
      try {
        db = await createConnection()
  
        const query = `INSERT INTO article (content) VALUES (?)`
        const result = await db.query(query, content)
        return result.insertId
      } catch (error) {
        
      } finally {
        db.end()
      }
  
    },

    delete: async (id) => {
        let db 
        try {
            db = await createConnection()
    
            const query = "DELETE FROM article WHERE id = ?"
            const result = await db.query(query, [id])
        } catch (error) {
            console.log(error)
        } finally {
            db.end()
        }
      }
  }

  module.exports = shoppingModel
