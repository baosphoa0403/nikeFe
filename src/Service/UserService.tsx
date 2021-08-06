class UserService {
  logOut = () => {
    localStorage.clear();
  };
  getAccessToken = () => localStorage.getItem('accessToken');
  getUser = () => {
    const user = localStorage.getItem('user') || '';
    return user;
  };
  getAdmin = () => {
    const admin = localStorage.getItem('admin') || '';
    return admin;
  };
}
const userService = new UserService();
export default userService;
