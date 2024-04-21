import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import image from "../../assets/images/image.png";
import { GrCart } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Router } from "react-router-dom";
const API_URL = "https://fakestoreapi.com/products";
function Products() {
  const [wishlist, setWishlist] = useState([]);
  const handleWishlistToggle = (card) => {
    const index = wishlist.findIndex((item) => item.id === card.id);
    if (index === -1) {
      setWishlist([...wishlist, card]);
    } else {
      const updatedWishlist = [...wishlist];
      updatedWishlist.splice(index, 1);
      setWishlist(updatedWishlist);
    }
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <h2>loading....</h2>;
  }
  let products = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="image-container">
        <img src={el.image} alt="Your Image" className="image" />
        <div className="navigation">
          <button onClick={() => handleWishlistToggle(el)}>
            {wishlist.some((item) => item.id === el.id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button>
            <GrCart />
          </button>
        </div>
      </div>
      <div className="card__body">
        <h2>{el.title} </h2>
        <div className="rating">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </div>
        <div className="prices">
          <h2 className="price">${el.price}</h2>
          <div className="count">
            <h4 className="old__price">$534,33</h4>
            <h4>24% Off</h4>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="product__title container">
        <h1>Best Seller</h1>
        <ul>
          <li>All</li>
          <li>Bags</li>
          <li>Sneakers</li>
          <li>Belt</li>
          <li>Sunglasses</li>
        </ul>
      </div>
      <div className="products container">{products}</div>
    </>
  );
}

export default memo(Products);
