import MainLayout from '../Layout/MainLayout';
import { Page } from '../Model/IPage';
import AdminPage from '../Pages/Admin/AdminPage';
import CartPage from '../Pages/Cart/CartPage';
import DetailPage from '../Pages/Detail/DetailPage';
import UserOrderPage from '../Pages/User/UserOrderPage';
import UserProfilePage from '../Pages/User/UserProfilePage';


export const routesHome: Page[] = [
    { path: '/', exact: true, component: MainLayout },    
    { path: '/user/profile', exact: false, component: UserProfilePage },    
    { path: '/user/order', exact: false, component: UserOrderPage },    
    { path: '/cart', exact: false, component: CartPage },    
    { path: '/detailProduct/:id', exact: false, component: DetailPage },    
];

export const routesAdmin: Page[] = [
    { path: '/admin', exact: true, component: AdminPage },    
]
