import express from 'express'
import authAPI from '../api/auth_api.js'

const router = express.Router()

router.route('/auth/signin')
  .post(authAPI.signin)
router.route('/auth/signout')
  .get(authAPI.signout)

export default router
