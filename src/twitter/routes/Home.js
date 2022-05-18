import React, {useEffect, useState} from "react";
import {dbService} from "../fBase";

const Home = () => {
    const [twit, setTwit] = useState("");
    const [twits, setTwits] = useState([]);
    const getTwits = async () => {
        const dbTwits = await dbService.collection("twit").get();
        dbTwits.forEach(document => {
            const twitObject = {
                ...document.data(),
                id: document.id,
            }
            setTwits(prev => [twitObject, ...prev])
        });
    }
    useEffect(() => {
        getTwits();
    }, [])
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("twit").add({
            twit,
            createdAt: Date.now()
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
                        <h4>{twit.twit}</h4>
                    {/*    왜 두개씩 출력되는지 모르겠다... */}
                    </div>)}
            </div>
        </div>
    )
}
export default Home