import API from "../Config/api";

class CategoryService {
  getAllCategories = () => {
    return API("category", "GET", "", "");
  };
  createCategory = (body: { nameCategory: string }) => {
    return API("category", "POST", body, "");
  };
}
//   getAllCategory = () => {
//     return API("category", "GET", "", "");
//   };
// }

const categoryService = new CategoryService();
export default categoryService;
