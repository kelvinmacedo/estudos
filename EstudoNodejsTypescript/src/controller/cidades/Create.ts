import { Request, Response } from "express";

interface Icidade {
    cidade: string;
}

export const create = (req : Request< {}, {}, Icidade >, res : Response) => {

    console.log(req.body)
 
    return res.send('creater completo!');
};