import { Router, Request, Response } from 'express';

import Api from '../models/Api';
import Project from '../models/Project';

const uuid = require('uuid/v4');

export default class ApiDatabase {
    public async getApisForProject(projectId) {
        return new Promise((resolve, reject)=> {
            Api.find({projectId}, (err, docs)=> {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    public async createApi(api) {
        api.apiId = api.apiId || uuid();
        return new Promise((resolve, reject)=> {
            Project.findOne({projectId: api.projectId}, (err, document)=> {
                if(err) {
                    reject(err);
                    return;
                }
                api.baseUrl = document.baseUrl;
                const apiModel = new Api(api);
                apiModel.save((err, docs)=> {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(docs);
                });
            })
        });
    }
    public async editApi(api) {
        api.apiId = api.apiId || uuid();
        const apiModel = new Api(api);
        return new Promise((resolve, reject)=> {
            Api.update({apiId: api.apiId}, api, (err, docs)=> {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    
}