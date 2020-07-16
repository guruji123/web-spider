
import React, {Component} from 'react';
import Folder from './Folder';
import AddFolder from './AddFolder';
import {Link} from 'react-router-dom';
import './addFolder.css';
import './index.css';

class Index extends Component {
state = {
  folders: [
    {id:1, name: 'folder1',subFolders:[]},
    {id:2, name: 'folder2',subFolders:[]},
    {id:3, name: 'folder3',subFolders:[]},
    {id:4, name: 'folder4',subFolders:[]},
    {id:5, name: 'folder5',subFolders:[]}
  ],
  id:'',
  popUp: false
}

renderFolder = (id) => {
  const {folders}  = this.state;
  folders.forEach((item, index) => {
    if(item.id === id){
      folders[index].subFolders.push('subFolders')
    }
  });
  this.setState({folders, id:id, popUp: true});
  
}
addFolder = (folder) => {
  folder.id = Math.random();
  let folders = [...this.state.folders, folder]
  this.setState({
    folders
  })

}

addSubFolder = (id) =>{
 const { folders } = this.state;
 console.log('this is id ', id);
folders[id-1].subFolders.push('subFolders');

 this.setState({folders});
}

render() {
  const { popUp, folders, id } = this.state;
  const { addSubFolder } = this;
  const subFolders = folders[id-1]? folders[id-1].subFolders : [];
 console.log('this is subfolders', subFolders);;
  return (
    <div className="container">
      <div className="App">
        <h1 className="center">File Manager</h1>
        <div className="folder d-flex-inline">
            <Folder className=" bg-primary  d-inline-block" folders={this.state.folders} renderFolder={this.renderFolder} />
            <AddFolder className=" d-inline-block " addFolder={this.addFolder}/>
        </div>
      </div>
      
      <div>
      {popUp && 
       <div className='Container-fluid d-flex'>
        <div className='row d-inline-block m-4'>
        {subFolders.map((item,i) =><div className="image col-sm- col- img-fluid" style={{ background:`url(data:image/jpeg;base64,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)`}}>{item}{i}</div>)}
        
         <span className='closeIcon p-3' onClick={()=> this.setState({popUp: false})}><i className="fas fa-minus p-2"></i></span>
         <button type="submt" className="btn-primary p-3" onClick={() => addSubFolder(id)}><i className="fas fa-plus p-2"></i></button>
         </div>
       </div>
      }
      <Link to="/Login"><button className="btn btn-primary btn-lg float-right d-inline-block" type="submit" value="Sign up">
                        Log Out
                    </button></Link>
      </div>
    </div>
      
  );
}
}

export default Index;