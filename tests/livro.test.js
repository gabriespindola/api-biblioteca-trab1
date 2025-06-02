const request = require('supertest');
const app = require('../app');

describe('API de Livros', () => {
  it('deve cadastrar um novo livro', async () => {
    const resposta = await request(app)
      .post('/livros')
      .send({
        isbn: '1234567890',
        nome: 'Dom Casmurro',
        autor: 'Machado de Assis',
        editora: 'Editora ABC',
        ano: 1899
      });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.disponivel).toBe(true);
  });

  it('deve listar os livros', async () => {
    const resposta = await request(app).get('/livros');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
