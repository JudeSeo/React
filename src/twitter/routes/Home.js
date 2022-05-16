import React, {useState} from "react";
import {dbService} from "../fBase";

const Home = () => {
    const [tweet, setTweet] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("twit").add({
            tweet: tweet,
            createdAt: Date.now()
        });
        setTweet("");
    }
    const onChange = event => {
        const {target: {value}} = event;
        setTweet(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={tweet} onChange={onChange} placeholder="What's on your mind" maxLength={120}/>
                <input type="submit" value="Twit"/>
            </form>
        </div>
    )
}
export default Home