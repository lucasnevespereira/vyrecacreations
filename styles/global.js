import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    text-align: center;
    padding: 50px;
    font-family: "Poppins", sans-serif;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
    color: #2c3e50;
  }

  a:hover {
    cursor: pointer;
  }
`;
