const request = require('supertest');
const app = require('../app');

describe('API de Autores', () => {
  it('deve criar um autor', async () => {
    const resposta = await request(app)
      .post('/autores')
      .send({ nome: 'Machado de Assis', pais: 'Brasil' });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.nome).toBe('Machado de Assis');
  });

  it('deve listar os autores', async () => {
    const resposta = await request(app).get('/autores');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
