import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  function handleAddItemToCart(product) {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: product });
  }

   const {t}= useTranslation();

  return (
    <div className="row g-3">
      {products.map((product, index) => (
        <div className="col-md-6 col-lg-3" key={index}>
          <div className="card" aria-hidden="true">
            <img
              className="placeholder-card-image card-img-top"
              src={product.image} 
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text">
                <span className="d-flex justify-content-between">
                  <span>${product.price}</span>
                  <span>
                    <i className="fa-solid fa-star text-warning"></i>
                    {product.rating.rate} / {product.rating.count}
                  </span>
                </span>
                <span className="product-card-description">
                  {product.description}
                </span>
              </p>
              <div className="d-flex gap-1">
                <Link
                  to={`/details/${product.id}`}
                  className="btn btn-primary col-6"
                >
                  {t("CARD_READ_MORE")}
                </Link>
                <button
                  onClick={() => handleAddItemToCart(product)}
                  className="btn btn-success col-6"
                >
                  {t("ADD_TO_CARD")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
