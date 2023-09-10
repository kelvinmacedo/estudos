import express  from "express";

const serve = express();

serve.get('/', (req, res) =>{

    return res.send('olá,  Dev!')
});
serve.post('');

export { serve};
