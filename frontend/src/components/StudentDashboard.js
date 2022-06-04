import React from 'react';

function StudentDashboard() {
    return (

        <center>
            <h1 className='mt-3 text-warning p-2 bg-dark w-50'>Student Dashboard</h1>
            <div class="row mt-5">
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/topicregister"}style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold border">
                        <img src="https://img.icons8.com/color/48/undefined/topic--v1.png" /><br />
                        Topic Register
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/markingstudent"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/report-card.png" /><br />
                        Marking
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/groupregister"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/add-user-group-man-man-skin-type-7.png" /><br />
                        Group Register
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/students/submission"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/upload-2--v1.png" /><br />
                         
                        Submission
                    </button>

                </div>

            </div >
            <div class="row mt-5">
                <div class="col-lg-3 col-md-6 mb-5">

                    <button onClick={()=>window.location = "/topicstatus"}style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold border">
                        <img src="https://img.icons8.com/color/48/undefined/check-file.png" /><br />
                        Topic Status
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/user/viewassignpanelmembers"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/teacher.png" /><br />
                        Group Status
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button  onClick={()=>window.location = "/students/filesdownload"}style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/download--v1.png" /><br />
                        Downloads
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/person-male.png" /><br />
                        Profile
                    </button>

                </div>

            </div >
        </center>
    );
}

export default StudentDashboard;