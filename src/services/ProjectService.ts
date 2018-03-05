import { Router, Request, Response } from 'express';

import ProjectDatabase from '../database/ProjectDatabase';

export default class ProjectService {
    public async getAllProjects() {
        try {
            const projects = await new ProjectDatabase().getAllProjects();
            return projects;
        } catch(e) {
            throw new Error(e);
        }
    }
    public async createProject(project={}) {
        try {
            const projectReturn = await new ProjectDatabase().createProject(project);
            return projectReturn;
        } catch(e) {
            throw new Error(e);
        }
    }
    public async editProject(project={}) {
        try {
            const projectReturn = await new ProjectDatabase().editProject(project);
            return projectReturn;
        } catch(e) {
            throw new Error(e);
        }
    }
}