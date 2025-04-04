import db from '#models/index';
import {existsSync, writeFileSync} from "fs";

const TOKEN_PATH = './test/token.json';

const ID_PATH = './test/id.json';

// Limpiar archivos si existen
if (existsSync(TOKEN_PATH)) writeFileSync(TOKEN_PATH, "");
if (existsSync(ID_PATH)) writeFileSync(ID_PATH, "");

setTimeout(async () => {
    try {
        await db.user.destroy({
            where: {
                mail: 'testuser_jkh18s9chbak@example.com'
            }
        });

        await db.user.destroy({
            where: {
                mail: 'nuevo_jkh18s9chbak@example.com'
            }
        });
        console.log("Usuarios eliminados correctamente");
    } catch (err) {
        console.error("Error al eliminar usuarios:", err);
    }
}, 1000);
