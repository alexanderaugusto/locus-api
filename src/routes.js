const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const authMiddleware = require('./middleware/auth')

const AuthController = require('./controllers/AuthController')
const FavoriteController = require('./controllers/FavoriteController')
const PropertyController = require('./controllers/PropertyController')
const UserController = require('./controllers/UserController')

// Authentication routes
routes.post('/auth/login', AuthController.login)
routes.put('/auth/renew', authMiddleware.required, AuthController.renew_token)

// User routes
routes.post('/user', multer(multerConfig('/user')).single('file'), UserController.create)
routes.get('/user', authMiddleware.required, UserController.list)
routes.put('/user', authMiddleware.required, UserController.update)
routes.put('/user/avatar', authMiddleware.required, multer(multerConfig('/user')).single('file'), UserController.update_image)
routes.delete('/user', authMiddleware.required, UserController.delete)

// Favorite routes
routes.put('/user/favorite/:property_id', authMiddleware.required, FavoriteController.add)
routes.get('/user/favorites', authMiddleware.required, FavoriteController.list)
routes.delete('/user/favorite/:property_id', authMiddleware.required, FavoriteController.delete)

// Property routes
routes.post('/user/property', authMiddleware.required, multer(multerConfig('/property')).array('files'), PropertyController.create)
routes.get('/user/properties', authMiddleware.required, PropertyController.list)
routes.get('/user/:user_id/properties', authMiddleware.optional, PropertyController.list)
routes.get('/user/property/:property_id', authMiddleware.optional, PropertyController.list_one)
routes.put('/user/property/:property_id', authMiddleware.required, PropertyController.update)
routes.delete('/user/property/:property_id', authMiddleware.required, PropertyController.delete)
routes.get('/properties', authMiddleware.optional, PropertyController.list_all)
routes.post('/user/property/:property_id/owner/contact', authMiddleware.required, PropertyController.contact)

module.exports = routes