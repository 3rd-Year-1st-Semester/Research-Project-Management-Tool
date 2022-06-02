import React, {useState, useEffect} from 'react';

import FileUploadScreen from '../screens/StudentFileUploadScreen';
import {getSingleFiles, getMultipleFiles} from '../data/Studentapi';
import axios from 'axios';

function StudentFileUpload() {
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



  function deleteFile(id) {
    axios.delete(`http://localhost:8080/api/student/delete/${id}`)
        .then(() => {
            alert("Deleted Successfully");
        }).catch((err) => {
            alert("error : " + err);
        });
    window.location.reload();
}




var countDownDate = new Date("Dec 5, 2022 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);





  return (
    <>
  
    <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Submission Upload page</h1>
                    <p class="lead">upload Assignment Submissions</p>
                </div>
            </div>

        <div className="container-fluid" >
          <h3 className="text-danger font-weight-bolder border-bottom text-center">Upload files </h3>
          <FileUploadScreen getsingle={() => getSingleFileslist()} getMultiple={() => getMultipleFilesList()}/>
       </div> 
       <div className="container-fluid mt-5">
         <div className="row">
           <div className="col-6">
             <h4 className="text-success font-weight-bold">uploaded Files List</h4>
             <br/>
             <div className="row">
             {singleFiles.map((file, index) =>
                    <div className="card border-primary mb-3" >
                        <div class="card-header">{file.fileName}</div>
                            <div className="col-6">
                                <div className="card mb-2 border-0 p-0">
                                    <h4></h4>
                                    <a href={`http://localhost:8080/${file.filePath}`} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Download</a>
                                    <button className='btn-sm btn-danger' onClick={() => deleteFile(file._id)}>Delete</button>
       
                                </div>
                            </div>
                        
                    </div>
                        )}
             </div>
           </div>
           <div className="col-6">
             
           <style dangerouslySetInnerHTML={{__html: "\np {\n  text-align: center;\n  font-size: 45px;\n  margin-top: 0px;\n}\n" }} />
           <h3>Dead Line:
           <p id="demo"></p>
           </h3>
           
           {/* <button className='btn-sm btn-danger' onClick={() => deleteFile(file._id)}>Delete</button>
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
              )} */}
           </div>
           
           
         </div>
       </div>
    </>
  );
}

export default StudentFileUpload;
