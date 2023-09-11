import { Router, response } from "express";

const router = Router();

router.get('/login', (req,res) => {
    return res.json(req.body);
});

export {router};