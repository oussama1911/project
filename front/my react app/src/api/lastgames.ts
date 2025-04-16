import { LastgameType as Lastgame } from "../types/lastgamesTypes";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getLastgame(id?: string) {
    const res = id
        ? await axios.get(`${apiUrl}/lastgame/${id}`) 
        : await axios.get(`${apiUrl}/lastgame`);
    return res.data;
}

export async function createLastgame(lastgame: Lastgame) {
    const res = await axios.post(`${apiUrl}/lastgame`, lastgame);
    return res.data;
}

export async function updateLastgame(id: string, lastgame: Lastgame) {
    const res = await axios.put(`${apiUrl}/lastgame/${id}`, lastgame);
    return res.data;
}

export async function deleteLastgame(id: string) {
    const res = await axios.delete(`${apiUrl}/lastgame/${id}`);
    return res.data;
}