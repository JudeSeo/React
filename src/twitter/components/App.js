import React, {useEffect, useState} from "react";
import AppRouter from "./Router"
import {authService} from "../fBase";

const App = () => {
    const [init, setInit]=useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        authService.onAuthStateChanged((user)=> {
            if (user)
                setIsLoggedIn(true);
            else
                setIsLoggedIn(false)
            setInit(true);
        })
    }, [])
    return (
        <>
            {init?<AppRouter isLoggedIn={isLoggedIn}/>:"Initializing..."}
            <footer>&copy; twitter {new Date().getFullYear()}</footer>
        </>
    );
}

export default App;