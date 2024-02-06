"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serve_1 = require("./server/serve");
serve_1.serve.listen(process.env.PORT || 3333, () => console.log('app executando!'));
