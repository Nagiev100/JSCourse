export interface City {
    country: string;
    is_capital: boolean;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
}

interface CityState {
    cities: City[] | null;
    error: string | null;
}

export const initialState: CityState = {
    cities: null,
    error: null,
};