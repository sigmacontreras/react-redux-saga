// src/lib/api.ts
import {SessionState} from "../store/sessionSlice.ts";

const BASE_URL = "http://localhost:5000/api/v1";

export interface GreatSword {
    url: string;
    id: string;
    name: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export const getAllGreatSwords = async (): Promise<GreatSword[]> =>
    fetch(`${BASE_URL}/allgreatswords`).then((response: Response) => response.json())

export const createSession = async (data: UserCredentials): Promise<SessionState> =>
    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'}).then(response => response.json())