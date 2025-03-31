import { getIp } from "#ip/*"; // Asegúrate de que esta ruta sea correcta

const PORT = 5001;
const IP = await getIp("local"); // "public o local dependiendo de lo que se necesite"
let BASE_URL;
BASE_URL = `http://${IP}:${PORT}`;

export { BASE_URL }; // Exporta BASE_URL correctamente