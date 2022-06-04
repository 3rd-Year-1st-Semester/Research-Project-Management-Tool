import React, { useState, useEffect } from 'react';

import FileUploadScreen from '../screens/FileUploadScreen';
import { getSingleFiles, getMultipleFiles } from '../data/Studentapi';
import axios from 'axios';


function FileAdminView() {
    const [singleFiles, setSingleFiles] = useState([]);
    const [multipleFiles, setMultipleFiles] = useState([]);

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
            console.log(error);
        }
    }
    const getMultipleFilesList = async () => {
        try {
            const fileslist = await getMultipleFiles();
            setMultipleFiles(fileslist);
            console.log(multipleFiles);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSingleFileslist();
        getMultipleFilesList();
    }, []);



    //   function deleteFile(id) {
    //     axios.delete(`http://localhost:8080/api/delete/${id}`)
    //         .then(() => {
    //             alert("Deleted Successfully");
    //         }).catch((err) => {
    //             alert("error : " + err);
    //         });
    //     window.location.reload();
    // }

    return (
        <div>



            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Student Submited Assignments</h1>
                    <p class="lead">Manage Submited Assignments</p>
                </div>
            </div>



            <div className="container-fluid" >

                <div >

                    <div className="col-6">
                        <h4 className="text-light font-weight-bold">Submited Files </h4>
                        <br />
                        {singleFiles.map((file, index) =>
                            <div className='shadow p-3 mb-5 bg-body rounded'>
                                
                                    <div class="card-header">{file.fileName}</div>
                                    <div className="col-6">
                                        <div className="card mb-2 border-0 p-0">
                                            <h4></h4>
                                            <a href={`http://localhost:8080/${file.filePath}`} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Download</a>
                                        </div>
                                    </div>

                                
                            </div>
                        )}
                    </div>
                    {/* <div className="col-6">
             <h4 className="text-success font-weight-bold">Multiple Files List</h4>
             {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div> */}
                </div>

            </div>
        </div>
    );
}

export default FileAdminView;
