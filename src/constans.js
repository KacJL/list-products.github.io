import md5 from "md5";

export const URL_API = "https://api.valantis.store:41000/"
export const API_PASSWORD = "Valantis"
export const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
export const authString = md5(`${API_PASSWORD}_${timestamp}`);
export const headers = {
    'X-Auth': authString,
    'Content-Type': 'application/json'
};