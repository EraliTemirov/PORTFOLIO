import { useTranslation } from "react-i18next";
import useProducts from "../Hooks/useProducts";
import PlaceholderCars from "./PlaceholderCars";
import ProductList from "./ProductList";

const Products = () => {
  const [products, loading] = useProducts();
  const { t } = useTranslation();

  // interpolation

  return (
    <div className="container py-3 text-center">
      <h2>{t("MAIN_HELLO_TEXT", { USERNAME: "mijoz" })}</h2>
      {loading ? <PlaceholderCars /> : <ProductList products={products} />}
    </div>
  );
};

export default Products;
