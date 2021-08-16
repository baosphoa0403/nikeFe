import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAppSelector } from '../../Hooks/Hook';
import { RootState } from '../../Redux/store';
import userService from '../../Service/UserService';
import { notifiError } from '../../utils/MyToys';
import Paypal from '../../Component/paypal/paypal';

const useStyles = makeStyles((theme) => ({
  Summary: {
    padding: '0 20px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      padding: '0 8px',
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
    float: 'right',
  },
  TotalPrice: {
    margin: '12px 0',
    borderTop: '1px #cccccc solid',
    borderBottom: '1px #cccccc solid',
    padding: '14px 0',
    [theme.breakpoints.down('sm')]: {
      border: 'none',
    },
  },
  Checkout: {
    padding: '20px 16px',
  },
  CheckoutButton: {
    width: '100%',
    color: 'white',
    backgroundColor: 'black',
    padding: '18px 24px',
    outline: 0,
    borderRadius: 30,
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
    marginBottom: 12,
  },
}));

function CartSummary() {
  const classes = useStyles();
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);
  const [checkoutSuccess, setCheckOutSuccess] = React.useState(false);
  const getTotal = () => {
    return cart.reduce((sum: number, item: any) => {
      return (sum += item.quantity * item.quantitySize.price);
    }, 0);
  };
  const checkout = () => {
    const user: any = userService.getPerson();
    if (!user) {
      notifiError('Please login before checkout');
      return;
    }
    if (cart.length === 0) {
      notifiError('Please buy product before checkout');
      return;
    } else {
      setCheckOutSuccess(true);
    }
  };
  const transactionError = (data: any) => {
    console.log('errror', data);
    setTimeout(() => {
      notifiError('Payment fail');
    }, 2000);
  };

  const transactionCancel = (data: any) => {
    console.log('errror', data);
  };
  return (
    <div className={classes.Summary}>
      <div className={classes.Title}>Summary</div>
      <div className={classes.PriceDetail}>
        Subtotal
        <div className={classes.Price}>${getTotal()}</div>
      </div>
      <div className={classes.PriceDetail}>
        Estimated Delivery & Handling
        <div className={classes.Price}>0₫</div>
      </div>
      <div className={classes.TotalPrice}>
        Total
        <div className={classes.Price}>
          <b>${getTotal()}</b>
        </div>
      </div>
      <button
        className={classes.CheckoutButton}
        onClick={() => {
          checkout();
        }}
      >
        Checkout
      </button>
      {checkoutSuccess && (
        <Paypal
        // sum={covertVNDtoUSD()}
        // transactionSuccess={transactionSuccess}
        // transactionCancel={transactionCancel}
        // transactionError={transactionError}
        />
      )}
    </div>
  );
}

export default CartSummary;
