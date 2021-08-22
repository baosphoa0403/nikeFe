import API from "../Config/api";
import { Login } from "../Model/IUser";

class SizeService {
  getAllSizes = () => {
    return API("size", "GET", "", "");
  };
}
const sizeService = new SizeService();
export default sizeService;
