import css from "styled-jsx/css";

export default css.global`
  .cart .show-btn {
    position: fixed;
    top: 10px;
    right: 20px;
    z-index: 1000;
  }

  .cart-icon {
    position: relative;
    margin-right: 15px;
  }

  .show-btn .badge {
    position: absolute;
    top: -5px;
    left: 7px;
    background: transparent;
  }

  .cart__header {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart__header button {
    font-size: 14px;
  }

  .cart__body {
    padding: 20px 15px;
    list-style: none;
    border-top: 1px solid rgba(108, 124, 144, 0.15);
    padding: 20px 30px;
    vertical-align: top;
  }

  .cart__body .empty {
    color: rgba(108, 124, 144, 0.8);
    font-size: 14px;
  }

  .cart__total {
    padding: 0px 30px;
    color: #6c7c90;
    line-height: 60px;
    background: rgba(157, 170, 187, 0.05);
    border-top: 1px solid rgba(108, 124, 144, 0.15);
    border-bottom: 1px solid rgba(108, 124, 144, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    color: #69b67c;
  }

  .closing {
    text-align: center;
    margin: 35px auto;
  }

  .closing .checkout-link {
    margin: 0px auto;
    width: 90%;
    border-radius: 3px;
    line-height: 20px;
    font-size: 16px;
    display: block;
    padding: 10px 0;
    text-decoration: none;
    color: #fff;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 15%);
    border: 1px solid rgba(105, 182, 124, 0.5);
    color: white;
    background: #8bc79a;
    cursor: pointer;
    width: auto;
    display: inline-block;
    padding: 15px 35px;
  }
`;
