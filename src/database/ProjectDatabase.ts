import { Router, Request, Response } from 'express';

import Project from '../models/Project';
const uuid = require('uuid/v4');

export default class ProjectService {
    public getAllProjects() {
        return new Promise((resolve, reject)=> {
            Project.find({}, (err, docs)=> {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    public createProject(project) {
        project.projectId = project.projectId || uuid();
        const projectModel = new Project(project);
        return new Promise((resolve, reject)=> {
            projectModel.save((err, docs)=> {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    public editProject(project) {
        const projectModel = new Project(project);
        return new Promise((resolve, reject)=> {
            Project.update({projectId: project.projectId}, projectModel, (err, docs)=> {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
}