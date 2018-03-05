import { Router, Request, Response } from 'express';

import Api from '../models/Api';

export default class ProxyDatabase {
    public async getApi(apiUrl, projectId, method) {
        return new Promise((resolve, reject)=> {
            Api.findOne({projectId, apiUrl, method}, (err, document)=> {
                try {
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(document._doc);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }
}