import React, {Component} from 'react';
import { Link } from 'react-router-dom';


function validate(email, username, password) {
   
    return {
      email: email.length === 0, 
      username: username.length === 0, 
      password: password.length === 0, 
    };
  }
  
  class SignupForm extends React.Component {
    constructor() {
      super();
      this.state = {
        email: '',
        username: '',
        password: '',
        
        touched: {
          email: false,
          username: false,
          password: false,
        },
      };
    }
    
    handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value });
    }
    
    handleUsernameChange = (evt) => {
      this.setState({ username: evt.target.value });
    }
    
    handlePasswordChange = (evt) => {
      this.setState({ password: evt.target.value });
    }
    
    handleBlur = (field) => (evt) => {
      this.setState({
        touched: { ...this.state.touched, [field]: true },
      });
    }
    
    handleSubmit = (evt) => {
      if (!this.canBeSubmitted()) {
        evt.preventDefault();
        return;
      }
      const { email, username, password } = this.state;
      alert(`Signed up with email: ${email} password: ${password}`);
    }
    
    canBeSubmitted() {
      const errors = validate(this.state.email, this.state.username, this.state.password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      return !isDisabled;
    }
    
    render() {
      const errors = validate(this.state.email, this.state.username, this.state.password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      
      const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
        
        return hasError ? shouldShow : false;
      };
      
      return (
        <div className ="container">
            <h1 >Sign up</h1>  
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label">Email</label>
                
                <input
                    className={shouldMarkError('email') ? "error" : ""}
                    type="text"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    onBlur={this.handleBlur('email')}
                    className="form-control"
                />
                <span className={shouldMarkError('email') ? "error" : "hidden"}>invalid email</span>
                </div>

                <div className="form-group">
                    <label className="control-label">Name</label>
                
                <input
                    className={shouldMarkError('username') ? "error" : ""}
                    type="text"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    onBlur={this.handleBlur('username')}
                    className="form-control"
                />
                <span className={shouldMarkError('username') ? "error" : "hidden"}>invalid username</span>
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                
                <input
                    className={shouldMarkError('password') ? "error" : ""}
                    type="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    onBlur={this.handleBlur('password')}
                    className="form-control"
                />
                <span className={shouldMarkError('password') ? "error" : "hidden"}>invalid password</span>
                </div>
                <div className="form-group">
                    <Link to="/Login"><button disabled={isDisabled} className="btn btn-primary btn-lg" type="submit" value="Sign up">
                        Sign up
                    </button></Link>
                </div>
            </form>
        </div>
      )
    }
  }
  export default SignupForm;
