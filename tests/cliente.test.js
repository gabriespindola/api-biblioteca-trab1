const request = require('supertest');
const app = require('../app');

describe('API de Clientes', () => {
  it('deve cadastrar um cliente', async () => {
    const resposta = await request(app)
      .post('/clientes')
      .send({ matricula: '123', nome: 'João da Silva', telefone: '9999-0000' });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.nome).toBe('João da Silva');
  });

  it('deve listar os clientes', async () => {
    const resposta = await request(app).get('/clientes');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
