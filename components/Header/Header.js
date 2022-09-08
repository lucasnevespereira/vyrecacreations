import React from "react";
import Styles from "./HeaderStyles";

export default function Header({ merchant }) {
  return (
    <header id="banner" className="no-cover">
      <img src={merchant.images.logo.url} alt="logo" className="logo" />
      <h1 className="merchant-name">{merchant.name}</h1>
      <style jsx>{Styles}</style>
    </header>
  );
}
