import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Details = () => {
  const { id } = useParams();
  const [producte, producteRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => producteRender(json));
  }, []);

  const {t} =useTranslation();
   


  return (
    <div>
      <div className="container mt-5 mb-3 border border-5">
        <div className="d-flex justify-content-around">
          <img src={producte.image} className="w-25" alt="rasm" />
          <div className="w-50">
            <h3 className="fs-2 p-3">{t("TITLE_PRODUCT")} <span className="fs-3">{producte.title}</span></h3>
            <p className="fs-3">
              <span className="des-span p-3"> {t("PRICE_PRODUCT")} </span> {producte.price}$
            </p>
            <p className="fs-3 p-3">
              <span className="des-span">{t("CATIGORIA_PRODUCT")} </span> {producte.category}
            </p>
          </div>
        </div>
        <p className="fs-4 w-75 container mt-3">
          <span className="des-span">{t("DESCRIPTION_PRODUCT")} </span> {producte.description}
         </p>
      </div>
    </div>
  );
};
export default Details;
