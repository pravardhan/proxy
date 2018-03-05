import * as express from 'express';
import * as bodyParser from 'body-parser';

import ProjectController from './controllers/ProjectController';
import ApiController from './controllers/ApiController';
import ProxyController from './controllers/ProxyController';
import SampleApiController from './sampleApis/sampleApis';


class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const projectRouter = express.Router();
    const apiRouter = express.Router();
    const proxyRouter = express.Router();
    const sampleApiRouter = express.Router();

    projectRouter.get('/', new ProjectController().getAllProjects);
    projectRouter.post('/', new ProjectController().createProject);
    projectRouter.put('/', new ProjectController().editProject);

    apiRouter.get('/', new ApiController().getApisForProject);
    apiRouter.post('/', new ApiController().createApi);
    apiRouter.put('/', new ApiController().editApi);

    proxyRouter.get('*', new ProxyController().getProxyApi);
    proxyRouter.post('*', new ProxyController().postProxyApi);

    sampleApiRouter.get('/samplePass1', new SampleApiController().samplePass1);
    sampleApiRouter.get('/sampleFail1', new SampleApiController().sampleFail1);
    sampleApiRouter.post('/samplePass1', new SampleApiController().samplePostPass1);
 
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));

    this.express.use('/projects', projectRouter);
    this.express.use('/api', apiRouter);
    this.express.use('/proxy/:projectId', proxyRouter);
    this.express.use('/sample', sampleApiRouter);
  }
}

export default new App().express
