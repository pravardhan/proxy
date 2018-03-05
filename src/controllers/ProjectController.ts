import { Router, Request, Response } from 'express';

import ProjectService from '../services/ProjectService';

export default class ProjectController {
    public async getAllProjects(req: Request, res: Response) {
        try {
            const projects = await new ProjectService().getAllProjects();
            res.setHeader('content-type', 'application/json');
            res.json(projects);
        } catch(e) {
            res.status(400);
            res.setHeader('content-type', 'application/json');
            res.json({ "errorMessage": e });
        }
    }
    public async createProject(req: Request, res: Response) {
        try {
            const project = await new ProjectService().createProject(req.body);
            res.setHeader('content-type', 'application/json');
            res.json(project);
        } catch(e) {
            res.status(400);
            res.setHeader('content-type', 'application/json');
            res.json({ "errorMessage": e });
        }
    }
    public async editProject(req: Request, res: Response) {
        try {
            const project = await new ProjectService().editProject(req.body);
            res.setHeader('content-type', 'application/json');
            res.json(project);
        } catch(e) {
            res.status(400);
            res.setHeader('content-type', 'application/json');
            res.json({ "errorMessage": e });
        }
    }
}