import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Busca ou lista uma informação
// POST: Cria uma nova informação
// PUT: Atualiza uma informação existente
// DELETE: Deleta uma informação existente

// Request Body: Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.listen(3333); // localhost:3333
