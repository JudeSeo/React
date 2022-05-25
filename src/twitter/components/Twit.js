import React, {useState} from "react";
import {deleteObject, ref} from "@firebase/storage";
import {dbService, storageService} from "../fBase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPencilAlt} from "@fortawesome/free-solid-svg-icons";

const Twit = ({twitObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newTwit, setNewTwit] = useState(twitObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this twit?");
        if (ok) {
            await dbService.doc(`twits/${twitObj.id}`).delete();
            await deleteObject(ref(storageService, twitObj.attachmentUrl));
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault()
        await dbService.doc(`twits/${twitObj.id}`).update({text: newTwit})
        setEditing(false)
    }
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewTwit(value)
    }
    return (
        <div className="twit">
            {editing ? (<>
                <form onSubmit={onSubmit} className="container twitEdit">
                    <input type="text" placeholder="edit your twit" value={newTwit} onChange={onChange} required/>
                    <input type="submit" value="Update" className="formBtn"/></form>
                <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
            </>) : (<> <h4>{twitObj.text}</h4>
                {twitObj.attachmentUrl && <img src={twitObj.attachmentUrl}/>}
                {isOwner && (
                    <div className="twit__actions">
                    <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash}/>
              </span>
                        <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt}/>
              </span>
                    </div>
                )}
            </>)}
        </div>)
}

export default Twit;