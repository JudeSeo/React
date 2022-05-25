import React, {useState, useEffect} from "react";
import {authService, dbService} from "../fBase";
import {useHistory} from "react-router-dom";
import styles from "../styles.css"

const Profile = ({refreshUser, userObj}) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)
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
        if (userObj.displayName !== newDisplayName) {
            const response = await userObj.updateProfile({displayName: newDisplayName})
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
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
            <input type="text" autoFocus placeholder="Display name" onChange={onChange} value={newDisplayName} className="formInput"
            />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }} />
        </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
        </div>)
}
export default Profile