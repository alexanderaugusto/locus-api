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
routes.post('/auth/login/google', AuthController.loginWithGoogle)
routes.put('/auth/renew', authMiddleware.required, AuthController.renew_token)

// User routes
routes.post('/user', multer(multerConfig('/user')).single('file'), UserController.create)
routes.post('/user/visit', authMiddleware.required, UserController.schedule_visit)
routes.get('/user', authMiddleware.required, UserController.list)
routes.get('/user/properties', authMiddleware.required, UserController.list_properties)
routes.get('/user/:user_id/properties', authMiddleware.optional, UserController.list_properties)
routes.get('/user/favorites', authMiddleware.required, UserController.list_favorites)
routes.get('/user/visits', authMiddleware.required, UserController.list_visits)
routes.put('/user', authMiddleware.required, UserController.update)
routes.put('/user/avatar', authMiddleware.required, multer(multerConfig('/user')).single('file'), UserController.update_image)
routes.delete('/user', authMiddleware.required, UserController.delete)

// Property routes
routes.post('/property', authMiddleware.required, PropertyController.create)
routes.post('/property/:property_id/images', authMiddleware.required, multer(multerConfig('/property')).array('files'), PropertyController.add_images)
routes.post('/property/:property_id/visit', authMiddleware.required, PropertyController.add_visit)
routes.post('/property/:property_id/owner/contact', authMiddleware.required, PropertyController.contact)
routes.get('/property/:property_id', authMiddleware.optional, PropertyController.list)
routes.get('/property/:property_id/visits', authMiddleware.optional, PropertyController.list_visits)
routes.get('/properties', authMiddleware.optional, PropertyController.list_all)
routes.patch('/property/:property_id', authMiddleware.required, PropertyController.update)
routes.patch('/property/:property_id/address', authMiddleware.required, PropertyController.update_address)
routes.delete('/property/:property_id', authMiddleware.required, PropertyController.delete)
routes.delete('/property/:property_id/visit', authMiddleware.required, PropertyController.delete_visit)
routes.delete('/property/:property_id/image', authMiddleware.required, PropertyController.delete_image)

// Favorite routes
routes.put('/property/:property_id/favorite', authMiddleware.required, FavoriteController.add)
routes.delete('/property/:property_id/favorite', authMiddleware.required, FavoriteController.delete)

module.exports = routes