export interface PollutionComponents {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
}

export interface PollutionListItem {
    dt: number;
    main: {
        aqi: number;
    };
    components: PollutionComponents;
}

export interface PollutionData {
    coord: [number, number];
    list: PollutionListItem[];
}
export const initialState: PollutionData = {
    coord: [0, 0],
    list: [],
};