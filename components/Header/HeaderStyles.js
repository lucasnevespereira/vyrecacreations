import css from "styled-jsx/css";

export default css.global`
  #banner {
    width: 100%;
    max-width: 1280px;
    height: 400px;
    margin: 0 auto;
    text-align: center;
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
    position: relative;
    box-sizing: border-box;
    padding: 50px 0;
  }

  #banner.no-cover {
    box-shadow: none;
    border-radius: 0;
    height: auto;
    width: 100%;
  }

  img.logo {
    margin: 0 auto;
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
    position: relative;
    z-index: 1;
    width: 80px;
  }

  img.logo:hover {
    cursor: pointer;
  }

  .merchant-name {
    text-shadow: none;
    margin: 10px auto;
    position: relative;
    z-index: 1;
    font-weight: 600;
    font-size: 24px;
  }
`;
