const request = require('supertest');
const app = require('../app');

describe('Autenticação de Usuário', () => {
  it('deve fazer login com credenciais válidas', async () => {
    const resposta = await request(app)
      .post('/usuarios/login')
      .send({ username: 'admin', senha: '1234' }); // deve estar no seu model

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body.mensagem).toBe('Login bem-sucedido');
  });

  it('deve falhar com credenciais inválidas', async () => {
    const resposta = await request(app)
      .post('/usuarios/login')
      .send({ username: 'admin', senha: 'errado' });

    expect(resposta.statusCode).toBe(401);
  });
});
