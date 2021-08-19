import API from "../Config/api";

class CartService {
  getDiscountUser = (token: string) => {
    return API(`code-detail/getCodeDetailUser`, "GET", "", token);
  };
  orderCart = (token: string, data: any) => {
    return API(`order`, "POST", data, token);
  };
  orderHistoryMe = (token: string) => {
    return API("order/history/me", "GET", "", token);
  };
  getAllOrders = (token: string) => {
    return API("order/list-history", "GET", "", token);
  };
}

const cartService = new CartService();
export default cartService;
