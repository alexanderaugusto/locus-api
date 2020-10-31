const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const authMiddleware = require('./middleware/auth')

const AuthController = require('./controllers/AuthController')
const FavoriteController = require('./controllers/FavoriteController')
const PropertyController = require('./controllers/PropertyController')
const RentalController = require('./controllers/RentalController')
const UserController = require('./controllers/UserController')

// Authentication routes
routes.post('/auth/login', AuthController.login)
routes.put('/auth/renew', AuthController.renew_token)

// User routes
routes.post('/user', multer(multerConfig('/user')).single('file'), UserController.create)
routes.get('/user', authMiddleware, UserController.list)
routes.put('/user', authMiddleware, UserController.update)
routes.put('/user/avatar', authMiddleware, multer(multerConfig('/user')).single('file'), UserController.update_image)
routes.delete('/user', authMiddleware, UserController.delete)

// Favorite routes
routes.put('/user/favorite/:property_id', authMiddleware, FavoriteController.add)
routes.get('/user/favorites', authMiddleware, FavoriteController.list)
routes.delete('/user/favorite/:property_id', authMiddleware, FavoriteController.delete)

// Rental routes
routes.put('/user/rental/:property_id', authMiddleware, RentalController.add)
routes.get('/user/rentals', authMiddleware, RentalController.list)
routes.delete('/user/rental/:property_id', authMiddleware, RentalController.delete)

// Property routes
routes.post('/user/property', authMiddleware, multer(multerConfig('/property')).array('files'), PropertyController.create)
routes.get('/user/properties', authMiddleware, PropertyController.list)
routes.get('/user/:user_id/properties', PropertyController.list)
routes.put('/user/property/:property_id', authMiddleware, PropertyController.update)
routes.delete('/user/property/:property_id', authMiddleware, PropertyController.delete)
routes.get('/properties', PropertyController.list_all)

module.exports = routes