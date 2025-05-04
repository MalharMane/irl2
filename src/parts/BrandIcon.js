/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import Button from "../elements/Button";
import logo from "../assets/images/logo.png";

export default function BrandIcon() {
  return (
    <Button type="link" href="/">
      <img
        src={logo}
        alt="logo"
        style={{ height: "80px", width: "auto", marginRight: "10px" }}
      />
      <p className="text-theme-blue text-4xl font-medium">
        IRL<span className="text-theme-purple">Softwares</span>
      </p>
    </Button>
  );
}
