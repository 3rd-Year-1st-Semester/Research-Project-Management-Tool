import React, { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/marking.css';
import { useParams } from "react-router-dom";

export default function UpdateMarkingScheme() {


    const { id } = useParams();
    const [data, setData] = useState("");

    const sendData = (e)=> {
        e.preventDefault();
       
     axios.put(`http://localhost:7000/Markings/update/${id}`, data).then(() => {
            swal({

                title: "Update",
                text: " Marking Scheme Update Successfully",
                icon: "Success",
                button: "OK"
            });
        }).catch((err) => {
            alert(err)
        })

    }

    //get data using id
    useEffect(() => {

        axios.get(`http://localhost:7000/Markings/${id}`).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    const handlechange = (e) => {

        const { name, value } = e.target;
        setData({ ...data, [name]: value });

    }

    
    

    return (

        <div>
            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-10 col-lg-8 col-md-9 col-11 text-center">
                        
                        <div class="card ">
                            <h3 class="text-center mb-4 fw-bold">Marking Rubri</h3>

                            <form class="form-card" onSubmit={sendData} >
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Subject Name<span class="text-danger"> *</span></label> <input value={data.subject_name} type="text" id="subject_name" name="subject_name" onChange={handlechange} />

                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3  fw-bold ">Assignment Name<span class="text-danger"> *</span></label> <input value={data.assignment_name} type="text" id="assignment_name" name="assignment_name" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No1)<span class="text-danger"> *</span></label> <input value={data.criteria} type="text" id="criteria" name="criteria" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks} type="text" id="poor_marks" name="poor_marks" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks} type="text" id="average_marks" name="averagemarks" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks} type="text" id="good_marks" name="good_marks" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks} type="text" id="excellent_marks" name="excellent_marks" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks} type="text" id="total_marks" name="total_marks" placeholder="" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No2)<span class="text-danger"> *</span></label> <input value={data.criteria1} type="text" id="criteria1" name="criteria1" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks1} type="text" id="poor_marks1" name="poor_marks1" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks1} type="text" id="average_marks1" name="averagemarks1" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks1} type="text" id="good_marks1" name="good_marks1" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks1} type="text" id="excellent_marks1" name="excellent_marks1" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks1} type="text" id="total_marks1" name="total_marks1" placeholder="" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No3)<span class="text-danger"> *</span></label> <input value={data.criteria2} type="text" id="criteria2" name="criteria2" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks2} type="text" id="poor_marks2" name="poor_marks2" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks2} type="text" id="average_marks2" name="averagemarks2" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks2} type="text" id="good_marks2" name="good_marks2" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks2} type="text" id="excellent_marks2" name="excellent_marks2" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks2} type="text" id="total_marks2" name="total_marks2" placeholder="" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No4)<span class="text-danger"> *</span></label> <input value={data.criteria3} type="text" id="criteria3" name="criteria3" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks3} type="text" id="poor_marks3" name="poor_marks3" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks3} type="text" id="average_marks3" name="averagemarks3" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks3} type="text" id="good_marks3" name="good_marks3" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks3} type="text" id="excellent_marks3" name="excellent_marks3" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks3} type="text" id="total_marks3" name="total_marks3" placeholder="" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No5)<span class="text-danger"> *</span></label> <input value={data.criteria4} type="text" id="criteria4" name="criteria4" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks4} type="text" id="poor_marks4" name="poor_marks4" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks4} type="text" id="average_marks4" name="averagemarks4" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks4} type="text" id="good_marks4" name="good_marks4" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks4} type="text" id="excellent_marks4" name="excellent_marks4" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks4} type="text" id="total_marks4" name="total_marks4" placeholder="" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No6)<span class="text-danger"> *</span></label> <input value={data.criteria5} type="text" id="criteria5" name="criteria5" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks5} type="text" id="poor_marks5" name="poor_marks5" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks5} type="text" id="average_marks5" name="averagemarks5" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks5} type="text" id="good_marks5" name="good_marks5" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks5} type="text" id="excellent_marks5" name="excellent_marks5" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks5} type="text" id="total_marks5" name="total_marks5" placeholder="" onChange={handlechange} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No7)<span class="text-danger"> *</span></label> <input value={data.criteria6} type="text" id="criteria6" name="criteria6" placeholder="" onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks6} type="text" id="poor_marks6" name="poor_marks6" placeholder="" onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks6} type="text" id="average_marks6" name="averagemarks6" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks6} type="text" id="good_marks6" name="good_marks6" placeholder="" onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks6} type="text" id="excellent_marks6" name="excellent_marks6" placeholder="" onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks6} type="text" id="total_marks6" name="total_marks6" placeholder="" onChange={handlechange}/> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (No8)<span class="text-danger"> *</span></label> <input value={data.criteria7}  type="text7" id="criteria7" name="criteria7" placeholder=""  onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">PM<span class="text-danger"> *</span></label> <input value={data.poor_marks7}  type="text" id="poor_marks7" name="poor_marks7" placeholder="" onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">AM<span class="text-danger"> *</span></label> <input value={data.average_marks7}  type="text" id="average_marks7" name="averagemarks7" placeholder="" onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">GM<span class="text-danger"> *</span></label> <input value={data.good_marks7}  type="text" id="good_marks7" name="good_marks7" placeholder=""  onChange={handlechange}/> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px  fw-bold">EM<span class="text-danger"> *</span></label> <input value={data.excellent_marks7}  type="text" id="excellent_marks7" name="excellent_marks7" placeholder="" onChange={handlechange} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3  fw-bold">TM<span class="text-danger"> *</span></label> <input value={data.total_marks7}  type="text" id="total_marks7" name="total_marks7" placeholder=""  onChange={handlechange}/> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3  fw-bold">Criteria (Other)<span class="text-danger"> *</span></label> <input value={data.criteria8} type="text" id="criteria8" name="criteria8" placeholder="" onChange={handlechange} /> </div>

                                </div>

                                <div class="row justify-content-end mt-5">
                                    <div class="form-group col-sm-6">  <input type="submit" className="btn btn-primary btn-lg ms-2" value="Update form" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}