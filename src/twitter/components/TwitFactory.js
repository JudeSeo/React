import React, {useState} from "react";
import {dbService, storageService} from "../fBase";
import {v4 as uuidv4} from "uuid";

const TwitFactory = ({userObj}) => {
    const [twit, setTwit] = useState("");
    const [attachment, setAttachment] = useState("")
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment != "") {
            const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await fileRef.putString(attachment, "data_url")
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const twitObj = {
            text: twit, createdAt: Date.now(), creatorId: userObj.uid, attachmentUrl
        }
        await dbService.collection("twits").add(twitObj);
        setTwit("");
        setAttachment("")
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
    const onClearAttachment = () => setAttachment("");



    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={twit} onChange={onChange} placeholder="What's on your mind" maxLength={120}/> <br/>
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Twit"/>
            {attachment && (<div>
                <img alt="" src={attachment} width="50px" height="50px"/>
                <button onClick={onClearAttachment}>Clear</button>
            </div>)}
        </form>
    )
}

export default TwitFactory;