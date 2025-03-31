import { getIp } from "#ip/*";

let authToken = ""
let userId = ""

const PORT = 5001;
const IP = await getIp("local");
let BASE_URL;
BASE_URL = `http://${IP}:${PORT}`;

export { BASE_URL };

export function setAuthToken(token) {
    authToken = token;
}

export function getAuthToken() {
    return authToken;
}

export function setUserId(id) {
    userId = id;
}

export function getUserId() {
    return userId;
}