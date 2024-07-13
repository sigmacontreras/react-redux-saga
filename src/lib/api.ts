// src/lib/api.ts
import {SessionState} from "../store/sessionSlice.ts";

const BASE_URL = "http://localhost:5000/api/v1";

export interface GreatSword {
    url: string;
    id: string;
    name: string;
    index: number
}

export interface UserCredentials {
    email: string;
    password: string;
}

export const getAllGreatSwords = async (): Promise<GreatSword[]> =>
    fetch(`${BASE_URL}/all-greatswords`).then((response: Response) => response.json())

export const createSession = async (data: UserCredentials): Promise<SessionState> =>
    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(response => response.json())

export const getFavouritesGreatSwords = async (): Promise<GreatSword[]> =>
    fetch(`${BASE_URL}/favourite-greatswords`, {
        method: "GET",
        credentials: 'include'
    }).then((response: Response) => response.json())

export const setFavouritesGreatSwords = async (data: GreatSword): Promise<GreatSword> =>
    fetch(`${BASE_URL}/favourite-greatswords`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(response => response.json())