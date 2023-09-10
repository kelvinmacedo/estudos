import { serve } from "./server/serve";

serve.listen(3333, () => console.log('app executando!'));