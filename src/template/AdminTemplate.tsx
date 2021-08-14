import React from 'react';
import { Props } from '../Model/IPage';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import { Box, Container, makeStyles, CssBaseline } from '@material-ui/core';
import AdminMenu from '../Layout/Admin/AdminMenu';
import { ToastContainer } from 'react-toastify';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const AdminLayout = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminMenu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          {props.children}
          <Box pt={4}>{/* <AdminFooter /> */}</Box>
        </Container>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </div>
  );
};
const AdminTemplate: React.SFC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={(propsComponent: RouteComponentProps<{}>) => {
        return (
          <AdminLayout>
            <Component {...propsComponent} />
          </AdminLayout>
        );
        // if (localStorage.getItem('admin')) {
        // return (
        //   <AdminLayout>
        //     <Component {...propsComponent} />
        //   </AdminLayout>
        // );
        // } else {
        // return <Redirect to='/admin' />;
        // }
      }}
    />
  );
};
export default AdminTemplate;
