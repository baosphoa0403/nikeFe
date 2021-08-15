import API from '../Config/api';
import { Login } from '../Model/IUser';

class StatusService {
  getAllStatus = () => {
    return API('status', 'GET', '', '');
  };
  createStatus = (data: any, token: any) => {
    return API('status', 'POST', data, token);
  };
  deleteStatus = (id: string, token: string) => {
    return API(`status/${id}`, 'DELETE', '', token);
  };
}
const statusService = new StatusService();
export default statusService;
