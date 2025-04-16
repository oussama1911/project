import { NextgameType as Nextgame } from "../types/nextgamesTypes";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getNextgame(id?: string) {
    const res = id
        ? await axios.get(`${apiUrl}/nextgame/${id}`) 
        : await axios.get(`${apiUrl}/nextgame`);
    return res.data;
}

export async function createNextgame(nextgame: Nextgame) {
    const res = await axios.post(`${apiUrl}/nextgame`, nextgame);
    return res.data;
}

export async function updateNextgame(id: string, nextgame: Nextgame) {
    const res = await axios.put(`${apiUrl}/nextgame/${id}`, nextgame);
    return res.data;
}

export async function deleteNextgame(id: string) {
    const res = await axios.delete(`${apiUrl}/nextgame/${id}`);
    return res.data;
}