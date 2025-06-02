const request = require('supertest');
const app = require('../app');

describe('API de Empréstimos', () => {
  let clienteId = 1;
  let livroId = 1;
  let emprestimoId;

  beforeAll(async () => {
    // Cadastra cliente
    await request(app)
      .post('/clientes')
      .send({ matricula: '456', nome: 'Maria', telefone: '8888-7777' });

    // Cadastra livro
    await request(app)
      .post('/livros')
      .send({
        isbn: '9876543210',
        nome: 'Memórias Póstumas',
        autor: 'Machado de Assis',
        editora: 'Editora X',
        ano: 1881
      });
  });

  it('deve registrar a retirada de um livro', async () => {
    const resposta = await request(app)
      .post('/emprestimos/retirar')
      .send({ clienteId, livroId });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body.livroId).toBe(livroId);
    emprestimoId = resposta.body.id;
  });

  it('deve registrar a devolução do livro', async () => {
    const resposta = await request(app)
      .post('/emprestimos/devolver')
      .send({ emprestimoId });

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body.mensagem).toBe('Livro devolvido');
  });
});
