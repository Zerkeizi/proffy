import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
// GET
// POST
// PUT
// DELETE


// Corpo (Request Body): Dados para criação ou atualização de um registro.
// Route Params: Identificar qual recurso eu quero atualizar ou deletar (e.g.: /users/1)
// Query Params: Paginação. filtros, ordenação


// localhost:3333/

