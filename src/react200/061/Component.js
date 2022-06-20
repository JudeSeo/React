import React, {Component, useState, useEffect, useAxios} from "react";
import axios from "axios";

const AxiosGet = () => {
    useEffect(() => {
        axios.get("http://date.jsontest.com/")
            .then(response => alert(response.data.date))
    })

    return (<>
        <h1>axios get</h1>
    </>)
}

export default AxiosGet;
