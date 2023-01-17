import { User } from '../src/model/User'

describe('Apenas um teste para validar o funcionameto do Jest', function () {
  test('Se a propriedade e a importação está funcionando', function () {
    const user = new User()
    user.name = 'Artur'

    expect(user.name).toBe('Artur')
  })
})
