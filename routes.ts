import { Router, response } from "express";


const router = Router()

router.post('/login',(request , response) =>{
    return response.status(201).send();
});

export {router};