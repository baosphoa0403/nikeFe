import { Button } from '@material-ui/core';
import React from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../Hooks/Hook';
import { getAll } from '../Redux/moduleDemo/action/Action';
import { RootState } from '../Redux/store';
import userService from '../Service/UserService';
import { notifiSuccess } from '../utils/MyToys';

export default function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();
  console.log(count);
  React.useEffect(() => {
    const callAPI = async () => {
      const resultAction = await dispatch(getAll());
      console.log('resultAction: ', resultAction); // trả về payload  + type
      // dispatch(resultAction);
    };
    callAPI();
  }, []);
  const listMovieData = useAppSelector((state) => state.listMovieReducer.value);
  const loading = useAppSelector((state) => state.listMovieReducer.loading);
  console.log('listMovieData: ', listMovieData);
  console.log(loading);

  React.useEffect(() => {
    const callAPILogin = async () => {
      const user = await userService.login({
        email: 'hieu@gmail.com',
        password: '123',
      });
      console.log('user: ', user);
    };
    callAPILogin();
  }, []);

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          notifiSuccess('hello');
        }}
      >
        Incremental +
      </Button>
      {count}
      <Button
        variant='contained'
        color='secondary'
        onClick={() => dispatch(decrement())}
      >
        Decrement -
      </Button>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Incremental 5
      </Button>
    </>
  );
}
