import React, {Component, useState, useEffect} from "react";
import {Progress} from "reactstrap";

const ReactProgress = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() =>{
        if(progress !== 100){
            setTimeout(()=> {
                setProgress(progress + 1)
            }, 100);
        }
    }, [progress]);
    return (<>
        <Progress color="info" value={progress}>
            {progress}%
        </Progress><br/>
        <Progress multi>
            <Progress bar color="warning" value="25">25%</Progress>
            <Progress bar color="success" value="35">Wow!</Progress>
            <Progress bar value="15">Meh</Progress>
            <Progress bar color="danger" value="25">LOOK OUT!</Progress>
        </Progress>
    </>)
}

export default ReactProgress;

// componentDidMount는 Hook의 useEffect로 대체해서 사용가능
