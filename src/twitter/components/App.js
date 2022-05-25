import React, {useEffect, useState} from "react";
import AppRouter from "./Router"
import {authService} from "../fBase";

const App = () => {
    const [init, setInit] = useState(false)
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                // setUserObj(user);
                setUserObj({
                    displayName:user.displayName,
                    uid:user.uid,
                    updateProfile:(args)=>user.updateProfile(args)
                })
            } else {
                setUserObj(null)
            }
            setInit(true);
        })
    }, [])
    const refreshUser = () => {
        const user = authService.currentUser;
        // setUserObj(Object.assign({}, user));
        setUserObj({
            displayName:user.displayName,
            uid:user.uid,
            updateProfile:(args)=>user.updateProfile(args)
        });
    }
    return (<>
        {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser}/> : "Initializing..."}
        <footer>&copy; twitter {new Date().getFullYear()}</footer>
    </>);
}

export default App;