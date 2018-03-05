import { Router, Request, Response } from 'express';

import ApiService from '../services/ApiService';

export default class ApiController {
    public async getApisForProject(req: Request, res: Response) {
        const projectId = req.query.projectId
        try {
            const apis = await new ApiService().getApiForProject(projectId);
            res.setHeader('content-type', 'application/json');
            res.json(apis);
        } catch(e) {
            res.status(400);
            res.setHeader('content-type', 'application/json');
            res.json({ "errorMessage": e });
        }
    }
    public async createApi(req: Request, res: Response) {
        try {
            const project = await new ApiService().createApi(req.body);
            res.setHeader('content-type', 'application/json');
            res.json(project);
        } catch(e) {
            res.status(400);
            res.setHeader('content-type', 'application/json');
            res.json({ "errorMessage": e });
        }
    }
    public async editApi(req: Request, res: Response) {
        try {
            const project = await new ApiService().editApi(req.body);
            res.setHeader('content-type', 'application/json');
            res.json(project);
        } catch(e) {
            res.status(400);
            res.setHeader('content-type', 'application/json');
            res.json({ "errorMessage": e });
        }
    }
}