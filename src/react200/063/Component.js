import React, {Component, useState, useEffect, useAxios} from "react";

const CallbackFunc = () => {
    useEffect(() => {
        logPrint(1, return1 => {
            console.log(`retrun1: ${return1}`);
            logPrint(return1, return2 => {
                console.log(`return2: ${return2}`)
            })
        })
    })
    const logPrint = (param, callback) => {
        console.log(`logPrint param: ${param}`)
        param += param;
        callback(param);
    }

    return (<>
        <h1>Callback Function</h1>
    </>)
}

export default CallbackFunc;
