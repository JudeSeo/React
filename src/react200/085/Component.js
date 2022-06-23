import React, { useEffect, useState } from "react";
import cookies from "react-cookies";

const CookiesSave = () => {
  useEffect(() => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookies.save("userid", "react200", {
      path: "/",
      expires,
    });
  });
  return (
    <>
      <h3>react-cookies Save</h3>
    </>
  );
};

export default CookiesSave;
