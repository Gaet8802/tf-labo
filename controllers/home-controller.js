const shoppingModel = require("../models/home-model")
const { getErrorMessage } = require("../utils/error-utils")
const { articleSchema } = require("../validators/article-validator")

const homeController = {


    index: (req, res) => {
        // Affichage de la liste des articles
        shoppingModel.getAll()
          .then(article => {
            res.render('home/index', {
              title: 'shoppingList',
              article
            })
          })
      },

    articleFormPost: (req, res) => {
        // Permet de traiter les données du formulaire
        articleSchema.validate(req.body, { abortEarly: false })
          .then((data) => {
            shoppingModel.insert({ content: data.article})
              .then(id => { console.log('Article : ' + id) })
              res.redirect('/')
          })
          .catch((validationError) => {
    
            console.log(validationError);
            const errors = getErrorMessage(validationError)
            const data = validationError.value
    
            res.render('home/index', {
              title: 'Corrige ton article',
              errors,
              data
            })
          })
      },
      delete: (req, res) => {
        const { id } = req.params
        shoppingModel.delete(id)
          .then(() => console.log('OK'))
          .catch(error => { console.log(error) })
        res.redirect('/')
      }
  
  }
  
  module.exports = homeController