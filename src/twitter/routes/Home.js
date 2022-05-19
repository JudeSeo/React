import React, {useEffect, useState} from "react";
import {dbService} from "../fBase";

const Home = ({userObj}) => {
    const [twit, setTwit] = useState("");
    const [twits, setTwits] = useState([]);
    useEffect(() => {
        dbService.collection("twit").onSnapshot((snapshot)=>{
            const twitArray = snapshot.docs.map((doc) => ({
               id:doc.id,
               ...doc.data()
            }));
            console.log(twitArray)
            setTwits(twitArray);
        });
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("twit").add({
            text:twit,
            createdAt: Date.now(),
            creatorId:userObj.uid
        });
        setTwit("");
    }
    const onChange = event => {
        const {target: {value}} = event;
        setTwit(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={twit} onChange={onChange} placeholder="What's on your mind" maxLength={120}/>
                <input type="submit" value="Twit"/>
            </form>
            <div>
                {twits.map(twit =>
                    <div key={twit.id}>
                        <h4>{twit.text}</h4>
                    </div>)}
            </div>
        </div>
    )
}
export default Home