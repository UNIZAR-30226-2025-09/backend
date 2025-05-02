import { getIp } from "#ip/*";
import { writeFileSync, readFileSync, existsSync } from "fs";

const PORT = 5001;
const IP = await getIp("local");
let BASE_URL;
BASE_URL = `http://${IP}:${PORT}`;

export { BASE_URL };