import { Router, Request, Response } from 'express';

import ApiDatabase from '../database/ApiDatabase';

export default class ProjectService {
    public async getApiForProject(projectId) {
        try {
            const apis = await new ApiDatabase().getApisForProject(projectId);
            return apis;
        } catch(e) {
            throw new Error(e);
        }
    }
    public async createApi(api) {
        try {
            const apiObject = await new ApiDatabase().createApi(api);
            return apiObject;
        } catch(e) {
            throw new Error(e);
        }
    }
    public async editApi(api) {
        try {
            const apiObject = await new ApiDatabase().editApi(api);
            return apiObject;
        } catch(e) {
            throw new Error(e);
        }
    }
}