import { Router, Request, Response } from 'express';


export default class SampleApiController {
    public async samplePass1(req: Request, res: Response) {
        res.status(200);
        res.header({'content-type':'application/json', custom:'custom'});
        res.json({hereYouGo:'HERE YO GO 1111'});
    }
    public async sampleFail1(req: Request, res: Response) {
        res.status(400);
        res.setHeader('content-type', 'application/json');
        res.json({ "errorMessage": 'OOPS SOMETHING WENT WRONG FROM THE SAMPLE FAIL 1' });
    }
    public async  samplePostPass1(req: Request, res: Response) {
        console.log('SAMPLE API ', req);
        res.status(200);
        res.header({'content-type':'application/json', custom:'custompost'});
        res.json({hereYouGo:'HERE YO GO POST REQUEST SERVED'});
        res.end();
    }
}