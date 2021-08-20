import API from "../Config/api";

class CategoryService {
<<<<<<< HEAD
  getAllCategories = () => {
    return API("category", "GET", "", "");
  };
  createCategory = (body: { nameCategory: string }) => {
    return API("category", "POST", body, "");
  };
}
=======
  getAllCategory = () => {
    return API("category", "GET", "", "");
  };
}

>>>>>>> 9cde72115885be0b602d4878d5469574b8f1fcf9
const categoryService = new CategoryService();
export default categoryService;
