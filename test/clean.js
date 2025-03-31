import db from '#src/models/index';

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
