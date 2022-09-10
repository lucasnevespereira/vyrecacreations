import css from "styled-jsx/css";

export default css.global`
  .product-container {
    width: 80%;
    margin: 15px auto;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row-reverse;
    padding: 50px 0;
  }

  @media and (max-width: 767px) {
    .product-container {
      width: 100%;
      flex-direction: column;
      margin: 0;
    }

    .container-right,
    .container-left {
      width: 90% !important;
      margin: 0 auto;
    }
  }

  .container-left {
    width: 40%;
  }
  .container-right {
    width: 40%;
  }

  .product-title {
    font-size: 24px;
    font-weight: bold;
    padding: 15px 0;
  }

  .product-buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  .product-price {
    font-size: 24px;
    font-weight: bold;
    color: #69b67c;
  }

  .product-buy .sold {
    color: #ff5977;
  }

  .product-desc {
    color: #6c7c90;
    text-align: left;
    font-weight: 400;
    padding: 10px 15px;
    border-radius: 3px;
  }

  .product-add {
    margin: 10px 0;
  }

  .product-add .sold {
    background: #ff8ca1;
    color: white;
    border-color: #ff8ca1;
    pointer-events: none;
  }

  .swiper {
    max-width: 100%;
    height: 500px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-slide img {
    object-fit: cover;
    height: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #6c7c90;
  }
  .swiper-pagination-bullet {
    background: #6c7c90;
  }
`;
