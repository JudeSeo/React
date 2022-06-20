import React, {Component, useState, useEffect, useAxios} from "react";
import axios from "axios";

const AxiosPost = () => {
    useEffect(() => {
        axios.post("http://date.jsontest.com/", {a: "react", b: "200"})
            .then(response => alert(response.data.date))
    })

    return (<>
        <h1>axios post</h1>
    </>)
}

export default AxiosPost;
