import React, { useEffect } from "react";

const ReactOnKey = () => {
    const onKeyEvent = (event, e) =>{
        let val = e.target.value;
        console.log(`event: ${event}, value: ${val}`)
    }
  return (
    <>
        onKeyDown:<input type="text" onKeyDown={e=>onKeyEvent("onKeyDown", e)}/><br/>
        onKeyPress:<input type="text" onKeyPress={e=>onKeyEvent("onKeyPress", e)}/><br/>
        onKeyUp:<input type="text" onKeyUp={e=>onKeyEvent("onKeyUp", e)}/><br/>
    </>
  );
};

export default ReactOnKey;

// keyPress는 백스페이스는 인식 안함
