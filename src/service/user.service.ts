import { IUser } from '../interfaces/IUser'
import { createUserModel } from '../model/user.model'
import { createToken } from '../token/createToken'

export async function userRegistrationService (user: IUser): Promise<string> {
  const jwtPassword = '12345678'
  await createUserModel(user)
  const result = createToken(jwtPassword)
  return result
}
