import React, {useEffect, useState} from "react";
import {dbService} from "../fBase";
import Twit from "../components/Twit";

const Home = ({userObj}) => {
    const [twit, setTwit] = useState("");
    const [twits, setTwits] = useState([]);
    const [attachment, setAttachment] = useState()
    useEffect(() => {
        dbService.collection("twits").onSnapshot((snapshot) => {
            const twitArray = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));
            setTwits(twitArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("twits").add({
            text: twit, createdAt: Date.now(), creatorId: userObj.uid
        });
        setTwit("");
    }
    const onChange = event => {
        const {target: {value}} = event;
        setTwit(value);
    };
    const onFileChange = (event) => {
        const {target: {files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => setAttachment(null);
    return (<div>
        <form onSubmit={onSubmit}>
            <input type="text" value={twit} onChange={onChange} placeholder="What's on your mind" maxLength={120}/>
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Twit"/>
            {attachment && (
                <div>
                    <img src={attachment} width="50px" height="50px"/>
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
        <div>
            {twits.map(twit => (<Twit key={twit.id} twitObj={twit} isOwner={twit.creatorId === userObj.uid}/>))}
        </div>
    </div>)
}
export default Home