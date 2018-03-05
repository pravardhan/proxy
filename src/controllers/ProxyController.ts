import { Router, Request, Response } from 'express';

import ProxyService from '../services/ProxyService';

import {getExceptionMessage} from '../utils/exception';

export default class ProjectController {
    public async getProxyApi(req: Request, res: Response) {
        const apiUrl = req.url;
        const projectId = req.baseUrl.split('/')[req.baseUrl.split('/').length - 1];
        try {
            const apiConfig:any = await new ProxyService().getProxyApi(apiUrl, projectId, req.headers);
            res.header(apiConfig.responseHeaders);
            res.status(apiConfig.statusCode);
            res.send(apiConfig.responseBody);
        } catch(e) {
            res.status(400);
            res.json(getExceptionMessage(e));
        }
    }
    public async postProxyApi(req: Request, res: Response) {
        const apiUrl = req.url;
        const projectId = req.baseUrl.split('/')[req.baseUrl.split('/').length - 1];
        try {
            const apiConfig:any = await new ProxyService().postProxyApi(apiUrl, projectId, req.headers, req.body);
            res.header(apiConfig.responseHeaders);
            res.status(apiConfig.statusCode);
            res.send(apiConfig.responseBody);
        } catch(e) {
            res.status(400);
            res.json(getExceptionMessage(e));
        }
    }
    public async putProxyApi(req: Request, res: Response) {
        
    }
    public async deleteProxyApi(req: Request, res: Response) {
        
    }
    public async patchProxyApi(req: Request, res: Response) {
        
    }
}