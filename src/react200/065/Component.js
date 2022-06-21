import React, {useEffect} from "react";

const Promise = () => {
    useEffect(() => {
        new Promise((resolve, reject) => {
            reject(Error("ERROR Info"));
        }).then(result => {
            console.log("then " + result);
        }).catch(result => {
            console.log("catch " + result)
        })
    })
    return (<>
        <h1>Promise</h1>
    </>)
}

export default Promise;
// 얘도 에러....
