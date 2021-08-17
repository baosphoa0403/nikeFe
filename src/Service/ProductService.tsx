import API from "../Config/api";

class ProductService {
  getAccessToken = () => {
    return localStorage.getItem("accessToken") || "";
  };
  getAllSize = () => {
    return API("size", "GET", "", "");
  };
  getAllColor = () => {
    return API("color", "GET", "", "");
  };
  getAllGender = () => {
    return API("gender", "GET", "", "");
  };
  getProductFilter = (query: string) => {
    return API(`product/filter?${query}`, "GET", "", "");
  };
  getAllProduct = () => {
    return API("product", "GET", "", this.getAccessToken());
  };

  createProduct = (body: {
    name: string;
    categoryId: string;
    createDate?: Date;
  }) => {
    return API("product", "POST", body, this.getAccessToken());
  };

  editProduct = (
    id: string,
    body: {
      name: string;
      categoryId: string;
      createDate?: Date;
    }
  ) => {
    return API(`product/${id}`, "PATCH", body, this.getAccessToken());
  };
}
const productService = new ProductService();
export default productService;
