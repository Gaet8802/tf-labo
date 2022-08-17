const homeController = require('../controllers/home-controller')
const homeRouter = require('express').Router()

homeRouter.get('/', homeController.index)


homeRouter.post('/', homeController.articleFormPost)
homeRouter.get('/delete/:id', homeController.delete)



module.exports = homeRouter