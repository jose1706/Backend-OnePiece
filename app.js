import express, { json } from 'express';
import { devilFruitRouter } from './Routes/devilfruitRoutes.js';
import { userRouter } from './Routes/userRoutes.js';
import { corsMiddleware } from './middleware/cors.js';

const app = express();

app.use(json());

app.use(corsMiddleware());

app.disable('x-powered-by');

// Registrar las rutas para frutas del diablo
app.use('/devilfruits', devilFruitRouter);

// Registrar las rutas para usuarios
app.use('/users', userRouter);

// Definir el puerto (usar el valor de la variable de entorno o 1234 como predeterminado)
const PORT = process.env.PORT ?? 1234;

// Iniciar el servidor y escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
