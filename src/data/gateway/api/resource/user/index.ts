import Type from '../../type';
import { getApiController } from '..';
import { IResource } from '../../../../../shared/interface/common/resource';

const Login = (storeView?: string): IResource => ({
  Type: Type.Public,
  Path: `${getApiController(storeView)}/api/users/login`,
});




export default {
  Login
};
