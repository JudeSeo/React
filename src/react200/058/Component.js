import React, {Component, useState, useEffect} from "react";
import Swal from "sweetalert2";

const Sweetalert2Confirm = () => {
    const deleteAlert = (e) => {
        Swal.fire({
            icon: "question",
            title: "정말 삭제하시겠습니까?",
            showCancelButton: true,
            confirmButtonColor: "#4B088A",
            cancelButtonColor: "#01DF01",
            confirmButtonText: "예",
            cancelButtonText: "아니요"
        }).then(result => {
            if (result.value) {
                document.getElementById("deleteId").remove();
                Swal.fire(
                    "Deleted", "sweetalert2 삭제 완료", "success"
                )
            }
        })
    }
    return (<>
        <h1 id="deleteId">sweetalert2</h1>
        <button onClick={e => deleteAlert()}>삭제</button>
    </>)
}

export default Sweetalert2Confirm;
