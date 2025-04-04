import { getIp } from "#ip/*";
import { writeFileSync, readFileSync, existsSync } from "fs";

const PORT = 5001;
const IP = await getIp("local");
let BASE_URL;
BASE_URL = `http://${IP}:${PORT}`;

export { BASE_URL };

const TOKEN_PATH = './src/test/token.json';

const ID_PATH = './src/test/id.json';

export function setAuthToken(token) {
    const data = { token };
    writeFileSync(TOKEN_PATH, JSON.stringify(data));
}

export function getAuthToken() {
    if (!existsSync(TOKEN_PATH)) return null;
    const data = JSON.parse(readFileSync(TOKEN_PATH));
    return data.token;
}

export function setUserId(id) {
    const data = { id };
    writeFileSync(ID_PATH, JSON.stringify(data));
}

export function getUserId() {
    if (!existsSync(ID_PATH)) return null;
    const data = JSON.parse(readFileSync(ID_PATH));
    return data.id;
}