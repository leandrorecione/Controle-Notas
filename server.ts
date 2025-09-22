import Fastify from 'fastify';
import { alunoRoutes } from './Routes/aluno.routes.js';
import { professorRoutes } from './Routes/professor.routes.js';

const app = Fastify({ logger: true });

app.register(alunoRoutes);

app.register(professorRoutes);

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Servidor rodando em ${address}`);
});
