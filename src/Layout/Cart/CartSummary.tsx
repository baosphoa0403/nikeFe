import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../Hooks/Hook";
import { RootState } from "../../Redux/store";
import userService from "../../Service/UserService";
import { notifiError, notifiSuccess } from "../../utils/MyToys";
import Paypal from "../../Component/paypal/paypal";
import cartService from "../../Service/CartService";
import { setCart } from "./module/cartReducer";
import { useHistory } from "react-router-dom";
import { PATH_NAME } from "../../Config";

const useStyles = makeStyles((theme) => ({
  Summary: {
    padding: "0 20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
      padding: "0 8px",
    },
  },
  Title: {
    fontSize: 22,
    marginBottom: 12,
  },
  PriceDetail: {
    marginBottom: 8,

    lineHeight: 1.75,
  },
  Price: {
    float: "right",
  },
  TotalPrice: {
    margin: "12px 0",
    borderTop: "1px #cccccc solid",
    borderBottom: "1px #cccccc solid",
    padding: "14px 0",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  Checkout: {
    padding: "20px 16px",
  },
  CheckoutButton: {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    padding: "18px 24px",
    outline: 0,
    borderRadius: 30,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    marginBottom: 12,
  },
}));

function CartSummary() {
  const classes = useStyles();
  const history = useHistory();
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);
  const [checkoutSuccess, setCheckOutSuccess] = React.useState(false);
  const getTotal = () => {
    return cart.reduce((sum: number, item: any) => {
      return (sum += item.quantity * item.quantitySize.price);
    }, 0);
  };
  const dispatch = useAppDispatch();
  console.log(cart);

  const checkout = () => {
    const user: any = userService.getPerson();
    if (!user) {
      notifiError("Please login before checkout");
      return;
    }
    if (cart.length === 0) {
      notifiError("Please buy product before checkout");
      return;
    } else {
      setCheckOutSuccess(true);
    }
  };
  const transactionError = (data: any) => {
    console.log("errror", data);
    setTimeout(() => {
      notifiError("Payment fail");
    }, 2000);
  };
  const [listDiscount, setListDiscount] = React.useState<any>([]);
  const token = useAppSelector(
    (state: RootState) => state.credentialsReducer.token
  );
  const [discountID, setDiscountID] = React.useState<any>();
  React.useEffect(() => {
    if (token !== "") {
      const callAPI = async () => {
        const token = userService.getAccessToken();
        const res = await cartService.getDiscountUser(token);
        console.log(res.data);
        setListDiscount(res.data);
        if (res.data[0]) {
          setDiscountID(res.data[0].code._id);
        } else {
          setDiscountID("");
        }
      };
      callAPI();
    }
  }, [token, checkoutSuccess]);

  const transactionCancel = (data: any) => {
    console.log("errror", data);
    notifiError("Cancel Payment");
  };
  const transactionSuccess = (payment: any) => {
    console.log("The payment was succeeded!", payment.paid);
    const listDetailProduct: any = [];
    for (const item of cart) {
      listDetailProduct.push({
        idDetailProduct: item.quantitySize.productDetail,
        quantity: item.quantity,
        sizeId: item.quantitySize.size._id,
      });
    }
    console.log(listDetailProduct);
    const data = {
      idDiscount: discountID,
      listDetailProduct,
      isPayment: payment.paid,
    };
    const token = userService.getAccessToken();
    try {
      const callAPI = async () => {
        console.log("zo");
        const res = await cartService.orderCart(token, data);
        console.log(res.data);
        dispatch(setCart([]));
        localStorage.removeItem("cart");
        setCheckOutSuccess(false);
        notifiSuccess("Order successful");
      };
      callAPI();
      history.push(PATH_NAME.USER_ORDER);
    } catch (error) {
      console.log(error);
    }
  };
  const findDiscountByID = () => {
    if (listDiscount.length > 0) {
      const discount: any = listDiscount.find((item: any) => {
        return item.code._id === discountID;
      });
      if (!discount) {
        return 0;
      }
      return discount?.code.codeValue;
    } else {
      return 0;
    }
  };
  return (
    <div className={classes.Summary}>
      <div className={classes.Title}>Summary</div>
      <div className={classes.PriceDetail}>
        Subtotal
        <div className={classes.Price}>${getTotal()}</div>
      </div>
      {listDiscount.length > 0 && cart.length > 0 && (
        <div className={classes.PriceDetail}>
          Discount
          <div className={classes.Price}>
            <select
              onChange={(event: any) => {
                console.log(event.target.value);
                setDiscountID(event.target.value);
              }}
            >
              {listDiscount.map((item: any, index: number) => {
                return (
                  <option value={item.code._id}>{item.code.codeValue}%</option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      <div className={classes.TotalPrice}>
        Total
        <div className={classes.Price}>
          <b>${getTotal() - getTotal() * (findDiscountByID() / 100)}</b>
        </div>
      </div>
      {!checkoutSuccess && (
        <button
          className={classes.CheckoutButton}
          onClick={() => {
            checkout();
          }}
        >
          Checkout
        </button>
      )}
      {checkoutSuccess && (
        <Paypal
          sum={getTotal() - getTotal() * (findDiscountByID() / 100)}
          transactionSuccess={transactionSuccess}
          transactionCancel={transactionCancel}
          transactionError={transactionError}
        />
      )}
      {checkoutSuccess && (
        <button
          className={classes.CheckoutButton}
          onClick={() => {
            setCheckOutSuccess(false);
          }}
        >
          Close
        </button>
      )}
    </div>
  );
}

export default CartSummary;
