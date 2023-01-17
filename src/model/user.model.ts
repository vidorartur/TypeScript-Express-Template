import { ResultSetHeader } from 'mysql2/promise'
import { IUser } from '../interfaces/IUser'
import connection from './connection'

export async function createUserModel (user: IUser) {
  const { name, email } = user
  const result = await connection.execute<ResultSetHeader>('INSERT INTO nomeDoDB.users (name, email) VALUES (?, ?)', [name, email])
  return result
}
