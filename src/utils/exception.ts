export class ProxyError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ProxyError';
        this.message = 'Proxy Went Wrong';
    }
}

export class RequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RequestError';
        this.message = 'Request Could not be made !!!!';
    }
}


export const getExceptionMessage = (exception)=> {
    let message = 'Oops Something went wrong';
    try {
        if(exception instanceof RequestError) {
            message = 'Request Could not be made';
        } else if(exception instanceof ProxyError) {
            message = 'Proxy went wrong';
        }
        return {
            message
        };
    } catch(e) {
        return {
            message
        }
    }
}