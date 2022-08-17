const articleMapper = (articleRow) => {

    return {
      id: articleRow['id'],
      content: articleRow['content'],
      createdAt: articleRow['createdAt']
    }
  
  }
  
  module.exports = { articleMapper }