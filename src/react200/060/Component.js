import React, {Component, useState, useEffect} from "react";
import Swal from "sweetalert2";

const FetchPost = () => {
    useEffect(() => {
        const a = async () => {
            const response = await fetch("http://date.jsontest.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {a: "react", b: 200}
            });
            const body = await response.json();
            alert(body.date);
        }
        a();
    })

    return (<>
        <h1>fetch post</h1>
    </>)
}

export default FetchPost;
