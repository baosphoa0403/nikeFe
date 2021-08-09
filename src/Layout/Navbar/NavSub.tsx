import React, { useState, useEffect } from 'react';
import { AppBar, makeStyles } from '@material-ui/core';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp';
import { useAppDispatch, useAppSelector } from '../../Hooks/Hook';
import { RootState } from '../../Redux/store';
import {
  setIsLogin,
  setToken,
  setUserInfo,
} from './SignIn/module/reducer/credentialsReducer';
import userService from '../../Service/UserService';
import { notifiSuccess } from '../../utils/MyToys';
import { LoginSocial } from '../../Model/IUser';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'transparent',
    color: '#000',
    boxShadow: '0px 0px 0px 0px',
  },
  toolbar: {
    minHeight: 36,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
  },
  navListFeature: {
    padding: '0 12px',
    textDecoration: 'none',
    color: 'black',
    fontSize: 13,
    '&:hover': {
      color: 'grey',
    },
    cursor: 'pointer',
  },
  greeting: {
    fontSize: 13,
    padding: '0 12px',
    '&:hover': {
      color: 'grey',
    },
    cursor: 'pointer',
  },
}));

export default function NavSub() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [data, setData] = React.useState<LoginSocial>({} as LoginSocial);
  const isLogin = useAppSelector(
    (state: RootState) => state.credentialsReducer.isLogin
  );
  const token = useAppSelector(
    (state: RootState) => state.credentialsReducer.token
  );
  const userInfo: any = useAppSelector(
    (state: RootState) => state.credentialsReducer.userInfo
  );
  const getDataLoginGoogle = (data: LoginSocial) => {
    console.log(data);
    setData(data);
  };

  const handleLogout = () => {
    localStorage.clear();
    notifiSuccess('say bye');
    dispatch(setIsLogin(false));
    dispatch(setToken(''));
    dispatch(setUserInfo({}));
  };
  return (
    <AppBar position='static' className={classes.header}>
      <div className={classes.toolbar}>
        {userInfo && isLogin ? (
          <>
            <span className={classes.greeting}>Hello, {userInfo.username}</span>
            <span
              className={classes.navListFeature}
              style={{ borderLeft: '1px solid #000' }}
              onClick={handleLogout}
            >
              Log out
            </span>
          </>
        ) : (
          <>
            <SignIn getDataLoginGoogle={getDataLoginGoogle} />
            <SignUp data={data} getDataLoginGoogle={getDataLoginGoogle}/>
          </>
        )}
      </div>
    </AppBar>
  );
}
