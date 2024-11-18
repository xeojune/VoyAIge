import { atom } from "recoil";

export const travelDetailsState = atom({
    key: "travelDetailsState", // Unique key for this atom
    default: [], // Default value is an empty array
});
