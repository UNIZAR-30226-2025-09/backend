import jwt from "jsonwebtoken";

const SECRET_KEY = "aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z";

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken; // Leer el token desde la cookie

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado. No hay token" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }

        req.userId = decoded.id; // Guardar ID del usuario en `req.userId`
        next();
    });
};
