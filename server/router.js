const Router = require('express')
const router = new Router()
const {MovieListController} = require('./controller')
const {MovieDetailsController} = require('./controller')
const {GenresController} = require('./controller')

router.get('/movies', MovieListController)
router.get('/movie/:id', MovieDetailsController)
router.get('/genres', GenresController)

module.exports = router