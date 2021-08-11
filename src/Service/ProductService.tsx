import API from "../Config/api";
import { Login } from "../Model/IUser";

class ProductService {
  getAllSize = () => {
    return API("size", "GET", "", "");
  };
  getAllColor = () => {
    return API("color", "GET", "", "");
  };
  getAllGender = () => {
    return API("gender", "GET", "", "");
  };
  getProductFilter = (query:string) => {
    return API(`product/filter?${query}`, "GET", "", "");
  };
}
const productService = new ProductService();
export default productService;
