import React, {Component, useState, useEffect} from "react";
import Swal from "sweetalert2";

const FetchGet = () => {
    useEffect(() => {
        const a = async () => {
            const response = await fetch("http://date.jsontest.com/");
            const body = await response.json();
            alert(body.date);
        }
        a();
    })

    return (<>
        <h1>fetch get</h1>
    </>)
}

export default FetchGet;
