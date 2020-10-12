const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const authMiddleware = require('./middleware/auth')

const AuthController = require('./controllers/AuthController')
const UserController = require('./controllers/UserController')
const PropertyController = require('./controllers/PropertyController')

/**
 * @swagger
 * /auth/login:
 *    post:
 *      description: Use to do a login at IMovel app
 *      tags:
 *        - Authentication routes
 *      produces:
 *        - application/json
 *      responses:
 *        200: 
 *          description: OK
 *        402: 
 *          description: Email or password incorrects
 *        500:
 *          description: Server error
 *      parameters:
 *      - name: email
 *        in: body
 *        description: User email
 *        required: true
 *        schema:
 *          type: string
 *          example: <USER_EMAIL>
 *      - name: password
 *        in: body
 *        description: User password
 *        required: true
 *        schema:
 *          type: string
 *          example: <USER_PASSWORD>
 */
routes.post('/auth/login', AuthController.login)

routes.post('/user', multer(multerConfig('/user')).single('file'), UserController.create)
routes.get('/user/:user_id', authMiddleware, UserController.list)
routes.get('/user/:user_id/properties', authMiddleware, UserController.list_properties)
routes.get('/user/:user_id/rentals', authMiddleware, UserController.list_rentals)
routes.get('/user/:user_id/favorites', authMiddleware, UserController.list_favorites)
routes.put('/user/:user_id', authMiddleware, multer(multerConfig('/user')).single('file'), UserController.update)
routes.delete('/user/:user_id', authMiddleware, UserController.delete)
routes.post('/user/:user_id/favorite', UserController.add_favorite)
routes.delete('/user/:user_id/favorite', UserController.remove_favorite)

routes.post('/property', authMiddleware, multer(multerConfig('/property')).array('files'), PropertyController.create)
routes.get('/property/:property_id', PropertyController.list)
routes.put('/property/:property_id', authMiddleware, PropertyController.update)
routes.delete('/property/:property_id', authMiddleware, PropertyController.delete)

module.exports = routes