import { FC, useState } from "react";
import Select from 'react-select';
import { useAppDispatch } from "../store/store";
import { setLanguage } from "../store/reducers/getLocation/sliceReducer";

export interface IOptions {
    value: string;
    label: string;
}

export const SwitcherLocation: FC = () => {
    const dispatch = useAppDispatch();
    const [location, setLocation] = useState<string>('ru');

    const options: IOptions[] = [
        {
            value: 'en',
            label: 'English',
        },
        {
            value: 'ru',
            label: 'Russian',
        },
    ];

    const updateLocation = (selectedOption: IOptions | null) => {
        if (selectedOption) {
            setLocation(selectedOption.value);
            dispatch(setLanguage(selectedOption.value));
        }
    };

    return (
        <>
            <Select
                options={options}
                onChange={updateLocation}
                defaultValue={options.find(option => option.value === location)}
                menuPlacement={"top"}
            />
        </>
    );
};