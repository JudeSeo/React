import React, { useEffect, useState } from "react";
import cookie from "react-cookies";

const CookiesRemove = () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react200", {
      path: "/",
      expires,
    });
    setTimeout(() => {
      alert(cookie.remove("userid"), { path: "/" });
    }, 1000);
    setTimeout(() => {
      alert(cookie.load("userid"));
    }, 2000);
  });
  return (
    <>
      <h3>react-cookies Remove</h3>
    </>
  );
};

export default CookiesRemove;
