import { Router, Request, Response } from 'express';

import ProxyDatabase from '../database/ProxyDatabase';

import Api from '../models/Api';

import { getData, postData } from '../utils/request';
import { generateChaosData } from '../utils/chaos';
import { ProxyError } from '../utils/exception';

export default class ProjectService {
    public async getProxyApi(apiUrl: string, projectId: string, requestHeaders) {
        try {
            const api:any = await new ProxyDatabase().getApi(apiUrl, projectId, 'GET');
            if(api.responseType === 'MOCK') {
                return {
                    statusCode: 200, 
                    responseHeaders: api.responseHeaders || {},
                    responseBody: api.responseBody || {}
                }
            } else if(api.responseType === 'ACTUAL') {
                const response = await getData(api.baseUrl, apiUrl, requestHeaders);
                return response;
            } else if(api.responseType === 'CHAOS') {
                return generateChaosData();
            }
        } catch(e) {
            throw new Error(e); 
        }
    }
    public async postProxyApi(apiUrl: string, projectId: string, requestHeaders, requestBody) {
        try {
            const api:any = await new ProxyDatabase().getApi(apiUrl, projectId, 'POST');
            if(api.responseType === 'MOCK') {
                return {
                    statusCode: 200, 
                    responseHeaders: api.responseHeaders || {},
                    responseBody: api.responseBody || {}
                }
            } else if(api.responseType === 'ACTUAL') {
                const response = await postData(api.baseUrl, apiUrl, requestHeaders, requestBody);
                return response;
            } else if(api.responseType === 'CHAOS') {
                return generateChaosData();
            }
        } catch(e) {
            throw new Error(e); 
        }
    }
}