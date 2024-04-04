import {FC} from "react";
import {SearchContainer} from "../../components/SearchContainer";
import {useAppSelector} from "../../store/store";
import {useNavigate} from "react-router-dom";


export const Home: FC = () => {
    const navagot = useNavigate()
    const userData = useAppSelector((store) => store.user);
    const out = () => {
        localStorage.removeItem("token");
        navagot("SignUp");
    };


    return(
        <div>
          <SearchContainer/>
            <h2>{userData.login}</h2>
            <button onClick={out}>out</button>
        </div>
    )
}

{/* {theme}*/}
{/*<div>*/}
{/*  <div onClick={setTheme.bind(this, "dark")}>*/}
{/*      темная*/}
{/*  </div>*/}
{/*    <div onClick={setTheme.bind(this, "light")}>*/}
{/*        светлая*/}
{/*    </div>*/}
{/*    <div style={{height: 40, width: 40, background: colors.main }}></div>*/}
{/*</div>*/}