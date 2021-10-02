import express from 'express'
import userAPI from '../api/user_api.js'
import authAPI from '../api/auth_api.js'

const router = express.Router()

router.route('/api/users')
  .get(userAPI.list)
  .post(userAPI.create)

router.route('/api/users/:userId')
  .get(authAPI.requireSignin, userAPI.read)
  .put(authAPI.requireSignin, authAPI.hasAuthorization, userAPI.update)
  .delete(authAPI.requireSignin, authAPI.hasAuthorization, userAPI.remove)

router.param('userId', userAPI.userByID)

export default router
