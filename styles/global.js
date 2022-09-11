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
    font-family: "Poppins", sans-serif !important;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 0%);
    color: #2c3e50;
    background-color: rgba(236, 241, 242, 0.35);
  }

  a:hover {
    cursor: pointer;
  }

  @media and (min-width: 992px) {
    body {
      padding: 30px 0;
    }
  }

  .buy-now {
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
    color: white;
    background: #b45a0c !important;
  }

  .buy-now:hover {
    background: #844209 !important;
    color: white;
  }
`;
