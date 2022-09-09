import css from "styled-jsx/css";

export default css.global`
  .products {
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
  }

  @media (max-width: 820px) {
    .products {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  .product {
    margin: 10px auto 0;
    padding: 25px 20px;
    width: 420px;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    text-align: center;
    box-sizing: border-box;
  }
  .product__overlay {
    background: rgba(0, 0, 0, 0);
    transition: background ease-in-out 0.25s;
  }

  .product .hover-overlay {
    position: absolute;
    background: radial-gradient(
      ellipse at center,
      white 25%,
      rgba(255, 255, 255, 0.85) 100%
    );
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: all 0.15s ease-in-out;
    box-shadow: inset 0 0 150px rgb(0 0 0 / 10%);
    box-sizing: border-box;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .product .hover-overlay:hover {
    opacity: 1;
  }

  .hover-overlay a {
    margin: 10px auto;
    width: 80%;
    border-radius: 3px;
    line-height: 30px;
    font-size: 16px;
    display: block;
    padding: 15px 0;
    text-decoration: none;
    position: relative;
  }

  .learn-more {
    color: #6c7c90;
    text-shadow: 0 1px 3px rgb(0 0 0 / 15%);
    border: 1px solid rgba(108, 124, 144, 0.45);
  }

  .buy-now {
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
    border: 1px solid rgba(105, 182, 124, 0.5);
    color: white;
    background: #8bc79a;
  }

  .buy-now:hover {
    background: #69b67c;
    color: white;
  }

  .product__images {
    width: 385px;
    height: 281px;
    vertical-align: middle;
    display: table-cell;
    text-align: center;
    position: relative;
    border-radius: 3px;
    background-color: rgba(236, 241, 242, 0.35);
    padding: 10px;
    overflow: hidden;
    text-align: center;
    box-sizing: border-box;
  }

  .product__images img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    vertical-align: middle;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
  }

  .product__info {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .product__info .name {
    font-weight: 400;
    color: #1d2025;
    display: flex;
    align-items: center;
  }
  .product__info .price {
    padding-top: 5px;
    color: #69b67c;
    font-weight: 400;
  }

  .product__info .price .sold {
    text-decoration: line-through;
  }

  .product__info .sold {
    color: #ff8ca1;
    margin-left: 5px;
  }

  .soldout {
    background: #ff8ca1;
    color: white;
    border-color: #ff8ca1;
    pointer-events: none;
  }
`;