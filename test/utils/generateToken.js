import jwt from 'jsonwebtoken';

/**
 * Genera un token JWT para un usuario dado
 * @param {Object} user - Objeto usuario con al menos una propiedad id
 * @param {string} [secret=process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z'] - Secreto para firmar el token
 * @param {Object} [options={ expiresIn: '24h' }] - Opciones adicionales para el token
 * @returns {string} Token JWT generado
 */
export const generateToken = (user, secret = process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z', options = { expiresIn: '24h' }) => {
    return jwt.sign(
        { id: user.id, username: user.username, email: user.email },
        secret,
        options
    );
};