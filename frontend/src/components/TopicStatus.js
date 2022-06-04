import React from 'react';

function TopicStatus() {
    return (

        <center>
            <h1 className='mt-3 text-warning p-2 bg-dark w-50'>Student's Topic Status</h1>
            <div className="row mt-4">
                
                <div class="col-lg-7 col-md-7">

                    <button onClick={()=>window.location = "/approvedtopic"}style={{ width: '200px', height: '200px' }} className="btn btn-dark text-light font-weight-bold border">
                    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/48/undefined/external-approval-office-flatart-icons-flat-flatarticons.png"/><br />
                        Approved Topic List
                    </button>

                </div>
                <div class="col-lg-3 col-md-6">

                    <button onClick={()=>window.location = "/rejectedtopic"} style={{ width: '200px', height: '200px' }} className="btn btn-dark text-light font-weight-bold">
                    <img src="https://img.icons8.com/fluency/48/undefined/agreement-delete.png"/><br />
                        Rejected Topic List
                    </button>

                </div>
                <br></br>
                <br></br>


            </div >
        </center>
    );
}

export default TopicStatus;