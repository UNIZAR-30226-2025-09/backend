import { readdirSync } from "fs";
import { basename as _basename, join, resolve } from "path";
import { Sequelize } from "sequelize";
import process from "process";
import configData from "../../config/config.js"; // Importa la configuración usando alias

const basename = _basename(import.meta.url);
const env = process.env.NODE_ENV || "development";
const config = configData[env];

const db = {};

// Configurar la conexión de Sequelize
const sequelize = config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable], config)
    : new Sequelize(config.database, config.username, config.password, config);

// Leer todos los archivos en la carpeta `models/`, excepto `index.js` y archivos de prueba
readdirSync(new URL(".", import.meta.url))
    .filter(file => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" && file.indexOf(".test.spec.js") === -1)
    .forEach(async (file) => {
        const { default: modelDefiner } = await import(join(new URL(".", import.meta.url).pathname, file));
        const model = modelDefiner(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// Configurar asociaciones si existen en los modelos
setTimeout(() => {
    Object.keys(db).forEach(modelName => {
        if (db[modelName]?.associate) {
            console.log(`Configurando asociación para: ${modelName}`);
            db[modelName].associate(db);
        }
    });

    // Verificar si los modelos están bien cargados
    console.log("Modelos cargados:", Object.keys(db));
}, 500);

// Exportar la instancia de Sequelize y los modelos
export { sequelize, Sequelize };
export default db;