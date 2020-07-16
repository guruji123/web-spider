import React, { Component } from 'react';
import './addFolder.css';

class AddFolder extends Component {
    state = {
        name: ""
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFolder(this.state);
        this.setState({
            name: ''
        })
    }
    render() {
        return (
            <div className="container">
                
                    <button className="btn- p-4 ">
                        <a className="pointer {cursor: pointer;}" href="#" data-toggle="tooltip" data-placement="bottom" title="New Folder" data-toggle="modal" data-target="#myModal">
                            <i className="fas fa-plus p-2"></i>
                        </a>
                    </button>
               
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                             <form className="form modal-content" onSubmit={this.handleSubmit}>
                                <div className="modal-header">
                                 <input type="text" onChange={this.handleChange} value={this.state.name} />
                                </div>
                    
                                <div className="modal-footer">
                                    <button  type="submit" className="btn btn-primary text-center "  >Create Folder</button>
                                    <button  type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                

            </div>

            
        )
    }
}
export default AddFolder