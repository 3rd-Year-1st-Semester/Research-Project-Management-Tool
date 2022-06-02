import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "../styles/view.css";
import swal from 'sweetalert';

export default function ViewMarking() {

    const [MarkingData, setMarkingData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/Markings/").then((res) => {
            setMarkingData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    

const deleteMethod = (id) => {
        axios.delete(`http://localhost:7000/Markings/delete/${id}`)
            .then(() => {
                swal({

                    title: "Delete",
                    text: " Marking Scheme Delete Successfully",
                    icon: "Success",
                    button: "OK"
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
//search part
const [searchTerm, setSearchTerm] = useState("");


    return (
<div>
        <div className="col-lg-3 container  mt-5 ">
                        <input type="search" placeholder="search " name="search" className="form-control" style={{ fontSize: "20px" }}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }} />
                    </div>
        <div>
               
            <div class="hm-gradient">
                <div class="container mt-4">
                    <div class="card mb-4">
                        <div class="card-body">
                        {
                                MarkingData.filter(val => {
                                    if (searchTerm === "") {
                                        return val;
                                    }
                                    else if (
                                        val.subject_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        val.assignment_name.toLowerCase().includes(searchTerm.toLowerCase()) 
                                        

                    ) {
                                        return val;
                                    }
                                }).map((val, i) => {
                                    return (
                                        <Fragment>
                                            <div class="row4">

                                                <div class="col-md-12">
                                                    <h3 class="pt-3 pb-4 text-center font-bold font-up blue-text">Marking Scheme</h3>

                                                    <h3 class="text-center font-bold font-up blue-text"></h3>

                                                </div>

                                            </div>
                                            <center> <h3>{val.subject_name}</h3>
                                                <h5>{val.assignment_name}</h5> </center>
                                            <table class="table table-striped mt-5">


                                                <thead>

                                                    <tr>



                                                        <th>Criteria</th>
                                                        <th>Poor Marks</th>
                                                        <th>Average Marks</th>
                                                        <th>Good Marks</th>
                                                        <th>Excellent Marks</th>
                                                        <th>Total Marks</th>


                                                    </tr>
                                                </thead>


                                                <tbody>

                                                    


                                                    <tr className="bg-light  text-dark">

                                                        <td>{val.criteria}</td>
                                                        <td>{val.poor_marks}</td>
                                                        <td>{val.average_marks}</td>
                                                        <td>{val.good_marks}</td>
                                                        <td>{val.excellent_marks}</td>
                                                        <td>{val.total_marks}</td>
                                                    </tr>
                                                    <tr className="bg-light  text-dark">

                                                        <td>{val.criteria1}</td>
                                                        <td>{val.poor_marks1}</td>
                                                        <td>{val.average_marks1}</td>
                                                        <td>{val.good_marks1}</td>
                                                        <td>{val.excellent_marks1}</td>
                                                        <td>{val.total_marks1}</td>
                                                    </tr>

                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.criteria2}</td>
                                                        <td>{val.poor_marks2}</td>
                                                        <td>{val.average_marks2}</td>
                                                        <td>{val.good_marks2}</td>
                                                        <td>{val.excellent_marks2}</td>
                                                        <td>{val.total_marks2}</td>

                                                    </tr>

                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.criteria3}</td>
                                                        <td>{val.poor_marks3}</td>
                                                        <td>{val.average_marks3}</td>
                                                        <td>{val.good_marks3}</td>
                                                        <td>{val.excellent_marks3}</td>
                                                        <td>{val.total_marks3}</td>

                                                    </tr>

                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.criteria4}</td>
                                                        <td>{val.poor_marks4}</td>
                                                        <td>{val.average_marks4}</td>
                                                        <td>{val.good_marks4}</td>
                                                        <td>{val.excellent_marks4}</td>
                                                        <td>{val.total_marks4}</td>

                                                    </tr>

                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.criteria5}</td>
                                                        <td>{val.poor_marks5}</td>
                                                        <td>{val.average_marks5}</td>
                                                        <td>{val.good_marks5}</td>
                                                        <td>{val.excellent_marks5}</td>
                                                        <td>{val.total_marks5}</td>

                                                    </tr>

                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.criteria6}</td>
                                                        <td>{val.poor_marks6}</td>
                                                        <td>{val.average_marks6}</td>
                                                        <td>{val.good_marks6}</td>
                                                        <td>{val.excellent_marks6}</td>
                                                        <td>{val.total_marks6}</td>

                                                    </tr>

                                                    <tr className="bg-light  text-dark">
                                                        <td>{val.criteria7}</td>
                                                        <td>{val.poor_marks7}</td>
                                                        <td>{val.average_marks7}</td>
                                                        <td>{val.good_marks7}</td>
                                                        <td>{val.excellent_marks7}</td>
                                                        <td>{val.total_marks7}</td>

                                                    </tr>

                                                    <tr className="bg-light  text-dark ">
                                                        <td colSpan={6} >{val.criteria8}</td>
                                                    </tr>
                                                    
                                                    
                                                   <td> <button className="btn btn-danger bg-danger mt-5"style={{ fontSize: "20px" , width:"150px" }} onClick={() => deleteMethod(val._id)}>Delete</button></td>
                                                   <td> <a href={`/markingupdate/${val._id}`} className="btn bg-success btn-success mt-5 " style={{ fontSize: "20px" , width:"150px" }}>Update</a></td>
                                                </tbody>

                                            </table >
                                        </Fragment >

                                    )
                                })
                            }

                        </div>
                    </div>


                </div>
            </div>
</div>

        </div >

    )



}