import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';



const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();



// Rotas
// Rota para criação e listagem de aulas
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);


// Rota para criação de conexoes e listagem
routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);


export default routes;