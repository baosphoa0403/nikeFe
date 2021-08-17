import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { useAppDispatch, useAppSelector } from '../../Hooks/Hook';
import { RootState } from '../../Redux/store';
import productService from '../../Service/ProductService';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core';
import {
  incrementAndDecrease,
  removeProduct,
  updateFlag,
} from './module/cartReducer';
import { notifiError, notifiSuccess } from '../../utils/MyToys';

const useStyles = makeStyles((theme) => ({
  CartBag: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
  Product: {
    display: 'flex',
    clear: 'both',
    padding: '24px 8px',
    borderBottom: '1px #cccccc solid',
  },
  ProductImageContainer: {
    paddingRight: 16,
  },
  ProductImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    [theme.breakpoints.down('xs')]: {
      width: 80,
      height: 80,
    },
  },
  ProductDetail: {
    width: '100%',
    lineHeight: 1.75,
  },
  ProductName: {
    textDecoration: 'none',
    color: 'black',
  },
  Price: {
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      float: 'none',
    },
  },
  SubDetail: {
    color: '#757575',
  },
  SelectContainer: {
    display: 'flex',
    alignItems: 'baseline',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  SelectFormControl: {
    marginRight: 10,
  },
  CartItemAction: {
    marginTop: 16,
    [theme.breakpoints.down('sm')]: {
      marginTop: 36,
    },
    color: '#757575',
  },
  CartItemActionButton: {
    marginRight: 16,
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
    },
  },
  SelectFormContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const CustomSelect = withStyles((theme) => ({
  input: {
    fontSize: 16,
    color: '#757575',
    padding: '0px 12px',
    lineHeight: 'inherit',
  },
}))(InputBase);

function CartBag() {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  // get size when user click
  const flag = useAppSelector((state: RootState) => state.cartReducer.flag);
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart);

  React.useEffect(() => {
    if (flag) {
      notifiError('Quantity lớn hơn số lượng trong kho');
      dispatch(updateFlag(false));
    }
  }, [flag, dispatch]);
  const handleAddDelete = (flag: boolean, id: string, idSize: string) => {
    const data: any = {
      flag,
      id,
      idSize,
    };
    dispatch(incrementAndDecrease(data));
  };
  const remove = (idProduct: string, idSize: string) => {
    const data = {
      idProduct,
      idSize,
    };
    dispatch(removeProduct(data));
    notifiSuccess('remove successfull');
  };
  return (
    <div className={classes.CartBag}>
      {cart.length > 0 &&
        cart.map((item: any, index: any) => {
          return (
            <div className={classes.Product}>
              <a href='#' className={classes.ProductImageContainer}>
                <img alt='' className={classes.ProductImage} src={item.image} />
              </a>
              <div className={classes.ProductDetail}>
                <a href='#' className={classes.ProductName}>
                  {item.name}
                </a>
                <div className={classes.Price}>
                  ${item.quantity * item.quantitySize.price}
                </div>
                <div className={classes.SubDetail}>
                  <div>
                    {item.color} - {item.gender}
                  </div>
                  <div className={classes.SelectContainer}>
                    <span className={classes.SelectFormContainer}>
                      Size: <p>{item.quantitySize.size.nameSize}</p>
                    </span>
                    <span className={classes.SelectFormContainer}>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                          handleAddDelete(
                            true,
                            item.productID,
                            item.quantitySize.size._id
                          );
                        }}
                      >
                        {' '}
                        <AddIcon />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                          handleAddDelete(
                            false,
                            item.productID,
                            item.quantitySize.size._id
                          );
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                    </span>
                  </div>
                </div>
                <div className={classes.CartItemAction}>
                  <span
                    className={classes.CartItemActionButton}
                    onClick={() => {
                      remove(item.productID, item.quantitySize.size._id);
                    }}
                  >
                    Remove
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CartBag;
