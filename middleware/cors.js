import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'https://your-production-domain.com',
  'https://another-allowed-domain.com',
  'http://localhost:5173'
];

// Función para detectar si es un entorno de desarrollo
const isDevelopment = process.env.NODE_ENV === 'development';

export const corsMiddleware = () => cors({
  origin: (origin, callback) => {
    // Permitir cualquier origen en desarrollo
    if (isDevelopment) {
      return callback(null, true);
    }

    // En producción, verificar si el origen está en la lista permitida
    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }

    // Permitir solicitudes sin origen (como curl)
    if (!origin) {
      return callback(null, true);
    }

    // Si el origen no está permitido, bloquear la solicitud
    return callback(new Error('Not allowed by CORS'));
  }
});
