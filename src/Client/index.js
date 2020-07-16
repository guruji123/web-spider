import React, {Component} from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import userSignupRequest from '../actions/signupActions';


const Columns = [
    {Header: 'Name', accessor: 'username'},
    {Header: 'Email', accessor: 'email'},
    {Header: 'Password.', accessor: 'password'},
    
]

class StudentList extends Component {
    state={
        Columns: [],
        data: [],
        reRender: true
    }

    componentDidMount(){
        const {Students = [] } = this.props;
        this.setData(Students)
    }

    render() {
    const { userSignupRequest } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={this.props} />
                     

                </div>
            </div>
        )
    }
}

        StudentList.propTypes = {
            userSignupRequest: React.PropTypes.func.isRequired
        }

export default connect(null,  { userSignupRequest})(StudentList);