import React, {useEffect, useState} from "react";
import {dbService, storageService} from "../fBase";
import Twit from "../components/Twit";
import TwitFactory from "../components/TwitFactory"

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
    
    return (<div>
        <TwitFactory userObj={userObj} />
        <div>
            {twits.map(twit => (<Twit key={twit.id} twitObj={twit} isOwner={twit.creatorId === userObj.uid}/>))}
        </div>
    </div>)
}
export default Home