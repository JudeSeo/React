import React, {useEffect} from "react";

const Promise = () => {
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(function (){
                resolve("react");
            }, 1500);
        }).then(function (result) {
            console.log(result);
            return result + 200;
        }).then(result => {
            console.log(result);
        })
    })
    return (<>
        <h1>Promise</h1>
    </>)
}

export default Promise;

// 왜안될까.....
// Promise때문인가...
