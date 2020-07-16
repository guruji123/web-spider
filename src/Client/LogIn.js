import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';



class LogIn extends Component {
            constructor(props) {
            super(props); 
            this.props = props;
            this.state ={
                email: "",
                password: "",
                
            };
        }

        
        handleLogin = e =>{
          e.preventDefault();  
          this.props.userLogin(this.state);
       }
      
        onChange = e =>{
          const { name, value } = e.target;
          this.setState({
            [name] : value
          })
        }
    render() {
        
        const {email, password} = this.state;
        
        return(
            <Fragment>
                <h1>Log In</h1>
                 <form onSubmit={this.handleLogin}>
                
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                            value={email}
                            onChange={this.onChange}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="EMAIL"
                            className="form-control"
                            required
                            />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="PASSWORD"
                            className="form-control"
                            required
                            />
                    </div>

                    <div className="form-group">
                       
                   <Link to="/fileManager"> <input className="btn-primary btn-lg" type="submit" value="Login" /> {this.props.errorInLogin && <span className='error-msg'>{this.props.error}</span>}</Link>
                        
                        
                    </div>
                
            </form>
            </Fragment>
        )
    }
}


  
  
  
  export default LogIn;