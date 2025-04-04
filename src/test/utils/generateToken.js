import jwt from 'jsonwebtoken';

/**
 * Esta función crea un token JWT para autenticar usuarios.
 * Recibe un objeto usuario que debe tener al menos un ID.
 * Opcionalmente acepta un secreto personalizado para firmar el token.
 * También permite configurar opciones como el tiempo de expiración (por defecto 24 horas).
 * Devuelve una cadena de texto que representa el token generado.
 */
export const generateToken = (user, secret = process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z', options = { expiresIn: '24h' }) => {
    return jwt.sign(
        { id: user.id, username: user.username, email: user.email },
        secret,
        options
    );
};