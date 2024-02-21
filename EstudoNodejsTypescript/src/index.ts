import { serve } from "./server/serve";

serve.listen(process.env.PORT || 3333, () => console.log('app executando!'));