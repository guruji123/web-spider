import * as type from  '../actions/login/types';

const defaultState = {
  loginStatus: false,
  isError: false,
  error: '',
  data: ''
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {   
    case type.LOGIN_ERROR:
      return {      
        isError: true,
        loginStatus: false,
        error: action.error,
        data: ''
      };
    case type.LOGIN_SUCCESS:
      return {        
        isError: false,
        loginStatus: true,
        data: action.data,
        error: ''
      
      };
    default:
      return state;
  }
};

export default loginReducer;