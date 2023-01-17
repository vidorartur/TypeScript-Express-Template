import { Request, Response } from 'express'
import { userRegistrationService } from '../service/user.service'
import statusCodes from '../utils/statusCodes'

export async function userRegistrationController (req: Request, res: Response) {
  const { body } = req
  const message = await userRegistrationService(body)
  return res.status(statusCodes.CREATED).json({ token: message })
}
