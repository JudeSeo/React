import React, {useEffect, useState} from "react";
import {dbService, storageService} from "../fBase";
import Twit from "../components/Twit";
import TwitFactory from "../components/TwitFactory"
import styles from "../styles.css"

const Home = ({userObj}) => {
    const [twits, setTwits] = useState([]);
    useEffect(() => {
        dbService.collection("twits").onSnapshot((snapshot) => {
            const twitArray = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));
            setTwits(twitArray);
        });
    }, []);
    
    return (
        <div className="container">
        <TwitFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
            {twits.map(twit => (<Twit key={twit.id} twitObj={twit} isOwner={twit.creatorId === userObj.uid}/>))}
        </div>
    </div>)
}
export default Home