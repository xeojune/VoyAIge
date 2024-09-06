import { atom } from "recoil";
import { PlaceData } from "../../types/PlaceTypes";

export const placeListState = atom<PlaceData[]> ({
    key:'placeListState',
    default: [],
})