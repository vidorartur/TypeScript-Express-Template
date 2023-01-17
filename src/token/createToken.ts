import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'teste'

const jwtConfig: object = {
  algorithm: 'HS256',
  expiresIn: '1d'
}

export function createToken (password: string) {
  const result = jwt.sign({ password }, secret, jwtConfig)
  return result
}

export function verifyToken (aut: string) {
  try {
    const payload = jwt.verify(aut, secret)
    return payload
  } catch (error) {
    return { isError: true, error }
  }
}
