import React, {Component, useState, useEffect} from "react";
import Swal from "sweetalert2";

const Sweetalert2Position = () => {
    const saveAlert = (flag, positionFlag, e) => {
        Swal.fire({
            position: positionFlag,
            icon: "success",
            title: flag + "됐습니다",
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (<>
        <h1>sweetalert2</h1>
        <button onClick={e => saveAlert("저장", "center")}>저장</button>
        <button onClick={e => saveAlert("수정", "bottom-end")}>수정</button>
    </>)
}

export default Sweetalert2Position;
