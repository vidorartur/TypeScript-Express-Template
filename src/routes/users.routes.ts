import express from 'express'

import { userRegistrationController } from '../controller/user.controller'

const userRouter = express.Router()

userRouter.post('/', userRegistrationController)

export default userRouter
