import {Router} from "express";


const router = Router();

router.get('/', (req,res) => { return res.json(req.body); });

router.get('/buscar', (req,res) => { return res.json(req.body); });

router.post('/criar', (req,res) => { console.log(req.body); return res.json(req.body); });

router.put('/atualizar', (req,res) => { return res.json(req.body); });

router.delete('/apagar', (req,res) => { return res.json(req.body); });

export {router};