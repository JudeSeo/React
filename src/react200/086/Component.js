import React, { useEffect, useState } from "react";
import cookie from "react-cookies";

const CookiesLoad = () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react200", {
      path: "/",
      expires,
    });
    setTimeout(()=>{
      alert(cookie.load("userid"))
    }, 1000)
  });
  return (
    <>
      <h3>react-cookies Load</h3>
    </>
  );
};

export default CookiesLoad;
