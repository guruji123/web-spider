import React from 'react'

    const Folder = ({folders, renderFolder}) => {

    const folderList = folders.length ? (
        folders.map(folder => {
            return (
                <div className="container-fluid d-inline " >
                    <div className="row d-inline-block " onClick={() => {renderFolder(folder.id)}}  style={{ background:`url(data:image/jpeg;base64,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)`,}} key={folder.id}>
                    <hr></hr>
                    <div className=" col-sm- m-1 p-4 ">
                        <span  onClick={() => {renderFolder(folder.id)}}>{folder.name}</span>
                        </div>
                    </div>
                </div>
            
            )
        })
    ) : (
        <p className="center">error</p>
        
    )
    return (
        <div>
        
        {folderList}
        
        </div>
        
    )
}
export default Folder;