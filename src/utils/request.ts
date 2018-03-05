//import * as request from 'request-json';

import * as request from 'request';
import { RequestError, ProxyError } from './exception';

const getData = (baseUrl, apiUrl, reqHeaders:any = {})=> {
    delete reqHeaders.host;
    return new Promise((resolve, reject)=> {
        try {
            const options = {
                method: 'GET',
                url: `${baseUrl}${apiUrl}`,
                headers: reqHeaders
            }
            request(options, (err, response, body)=> {
                if(err) {
                    reject(new ProxyError(err));
                    return;
                }
                resolve({
                    responseBody: body,
                    responseHeaders: response.headers,
                    statusCode: response.statusCode
                });
            });
        } catch(e) {
            reject(new RequestError(e));
        }
    });
};

const postData = (baseUrl, apiUrl, reqHeaders:any = {}, reqBody = {})=> {
    delete reqHeaders.host;
    return new Promise((resolve, reject)=> {
        try {
            const options = {
                method: 'POST',
                url: `${baseUrl}${apiUrl}`,
                headers: reqHeaders,
                body: JSON.stringify(reqBody)
            }
            request(options, (err, response, body)=> {
                if(err) {
                    reject(new ProxyError(err));
                    return;
                }
                resolve({
                    responseBody: body,
                    responseHeaders: response.headers,
                    statusCode: response.statusCode
                });
            });
        } catch(e) {
            reject(new RequestError(e));
        }
    });
};

export { 
    getData,
    postData
}