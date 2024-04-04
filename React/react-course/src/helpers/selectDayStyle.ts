import {Colors} from "./colors";

export  const colourStyles = {
    control: (base: {}) => ({
        ...base,
        boxShadow: "none",
        background: Colors.White,
        border: "solid 1px #D1D1D1",
    }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => ({
        ...styles,
        backgroundColor: isFocused ? Colors.Red : null,
        color: isFocused ? Colors.White : null,
    })
};