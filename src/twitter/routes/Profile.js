import React, {useState, useEffect} from "react";
import {authService, dbService} from "../fBase";
import {useHistory} from "react-router-dom";

const Profile = ({refreshUser, userObj}) => {
    const history = useHistory();
    const [newDisPalyName, setNewDisplayName] = useState(userObj.displayName)
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/")
    }
    const onChange = (event) => {
        const {
            target: {value}
        } = event;
        setNewDisplayName(value)
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisPalyName) {
            const response = await userObj.updateProfile({displayName: newDisPalyName})
        }
        refreshUser();
    }
    const getMyTwit = async () => {
        const twits = await dbService.collection("twits").where("creatorId", "==", userObj.uid).orderBy("createdAt", "desc").get();
        // console.log(twits.docs.map((doc)=>doc.data()))
    }
    useEffect(() => {
        getMyTwit();
    }, [])
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Display name" onChange={onChange}/>
            <input type="submit" value="Update profile"/>
        </form>
        <button onClick={onLogOutClick}>Log Out</button>
    </>)
}
export default Profile