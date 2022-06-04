import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "../styles/view.css";

import ReportView from "./ReportGeneratorView";


export default function StudentMarking() {

    const [MarkingData, setMarkingData] = useState([]);

    useEffect(() => {
        axios.get("https://research-tool-backend.herokuapp.com/Markings/").then((res) => {
            setMarkingData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    

    return (

        <div>
            <div class="hm-gradient">
                <div class="container ">
                    <div class="card ">
                        <div class="card-body">
                        <ReportView/>
                            {
                                MarkingData.map((val, i) => {
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

        </div >

    )



}