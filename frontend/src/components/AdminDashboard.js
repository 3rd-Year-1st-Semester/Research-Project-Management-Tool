import React from 'react';

function AdminDashboard() {

    return (

        <center>
            <h1 className='mt-3 text-warning p-2 bg-dark w-50'>Admin Dashboard</h1>
            <div class="row mt-5">
                <div class="col-lg-3 col-md-6">

                    <button style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold border">
                        <img src="https://img.icons8.com/color/48/undefined/topic--v1.png" /><br />
                        Topic Register
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/marking"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/report-card.png" /><br />
                        Create Marking

                   

                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/groupregister"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/add-user-group-man-man-skin-type-7.png" /><br />
                        Group Register
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/admin/upload"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/upload-2--v1.png" /><br />
                        Uploads
                    </button>

                </div>

            </div >
            <div class="row mt-5">
                <div class="col-lg-3 col-md-6 mb-5">

                    <button style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold border">
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

                    <button onClick={()=>window.location = "/admin/Submitfiles"}style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/ok--v1.png" /><br />
                        Submitted Files
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">


                <button onClick={()=>window.location = "/markingview"} style={{ width: '150px', height: '150px' }} className="btn btn-dark text-light font-weight-bold">
                        <img src="https://img.icons8.com/color/48/undefined/report-card.png" /><br />
                        View Marking
                    </button>



                   


                </div>

            </div >
        </center>
    );
}

export default AdminDashboard;