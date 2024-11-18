import { atom } from "recoil";

export const routeState = atom<{ 
    name: string; 
    latitude: number; 
    longitude: number; 
    details: string; 
}[]>({
    key: "routeState", // Unique key for the atom
    default: [], // Initial state
});

