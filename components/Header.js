import React from "react";

export default function Header({ merchant }) {
  return (
    <header>
      <h1>{merchant.name}</h1>
    </header>
  );
}
