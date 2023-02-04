import {Request, Response} from 'express';

class IndexController{

    public index (req: Request, res: Response) {
        res.jsonp({Text: 'API Is /api/games'});
    }

}

export const indexController = new IndexController();