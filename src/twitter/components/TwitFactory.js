import React, {useState} from "react";
import {dbService, storageService} from "../fBase";
import {v4 as uuidv4} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

const TwitFactory = ({userObj}) => {
    const [twit, setTwit] = useState("");
    const [attachment, setAttachment] = useState("")
    const onSubmit = async (event) => {
        if (twit === "") return;
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
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input
                    className="factoryInput__input"
                    value={twit}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="&rarr;" className="factoryInput__arrow"/>
            </div>
            <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus}/>
            </label>
            <input id="attach-file"
                   type="file"
                   accept="image/*"
                   onChange={onFileChange}
                   style={{
                       opacity: 0,
                   }}/>
            {attachment && (<div className="factoryForm__attachment">
                <img
                    src={attachment}
                    style={{
                        backgroundImage: attachment,
                    }}
                />
                <div className="factoryForm__clear" onClick={onClearAttachment}>
                    <span>Remove</span>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>)}
        </form>
    )
}

export default TwitFactory;