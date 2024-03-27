import {FC, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {changeTheme, Theme} from "../../store/system/systemSlice";
import {useThemeColors} from "../../hooks/theme/useThemeColors";

export const Home: FC = () => {
    const {theme, lang} =useAppSelector(state=>state.system)
    const dispatch = useAppDispatch();
    const colors = useThemeColors();

    const setTheme = useCallback((type: Theme)=>{
        dispatch(changeTheme(type));
    }, [])
    return(
        <>
            {theme}
           <div>
             <div onClick={setTheme.bind(this, "dark")}>
                 темная
             </div>
               <div onClick={setTheme.bind(this, "light")}>
                   светлая
               </div>
               <div style={{height: 40, width: 40, background: colors.main }}></div>
           </div>
        </>
    )
}