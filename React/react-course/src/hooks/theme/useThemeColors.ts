import * as React from "react";
import {useAppSelector} from "../../store/store";
import {useEffect, useMemo} from "react";

export const useThemeColors = () => {
    const {theme} =useAppSelector(state=>state.system)

   const colors = useMemo(()=>{
      return theme == "light" ? LightColors : DarkColors
   },[theme])

    return colors;
}

const LightColors = {
    main: "#000000"
}

const DarkColors = {
    main: "#ffffff"
}

export const CommonColors =  {
    red: "red"
}