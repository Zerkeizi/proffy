import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesConstrolers = new ClassesController();
const connectionsConstrolers = new ConnectionsController();


routes.post('/classes', classesConstrolers.create);
routes.get('/classes', classesConstrolers.index);

routes.post('/connections', connectionsConstrolers.create);
routes.get('/connections', connectionsConstrolers.index);



export default routes;