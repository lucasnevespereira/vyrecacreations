import css from "styled-jsx/css";

export default css.global`
  footer {
    height: 100px;
  }

  .insta {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    -ms-transition: opacity 0.5s ease-in-out;
    -o-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
  }

  .insta:hover {
    // transform: scale(1.1);
    opacity: 0.6;
  }

  .insta .icon {
    font-weight: 600;
    margin-right: 5px;
  }
`;
