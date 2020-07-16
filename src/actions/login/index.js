import { loginUserSuccess, loginUserError } from './login';
const userData = {
  email: 'spider@gmail.com',
  password : 'spider123'
}

const userLogin = (data) => {
  
  if(data.email === userData.email && data.password === userData.password) {
      return loginUserSuccess('Login Successful');
    }
    else {
      return loginUserError('Invalid login credentials');
    }  
  
};

export default userLogin;