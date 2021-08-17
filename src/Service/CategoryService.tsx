import API from "../Config/api";

class CategoryService {
  getAllCategories = () => {
    return API("category", "GET", "", "");
  };
}
const categoryService = new CategoryService();
export default categoryService;
