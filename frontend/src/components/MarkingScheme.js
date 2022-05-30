import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/marking.css';

export default function MarkingScheme() {

    const [subject_name, setsubject_name] = useState('');
    const [assignment_name, setassignment_name] = useState('');
    const [criteria, setcriteria] = useState('');
    const [poor_marks, setpoor_marks] = useState('');
    const [average_marks, setaverage_marks] = useState('');
    const [good_marks, setgood_marks] = useState('');
    const [excellent_marks, setexcellent_marks] = useState('');
    const [total_marks, settotal_marks] = useState('');

    const [criteria1, setcriteria1] = useState('');
    const [poor_marks1, setpoor_marks1] = useState('');
    const [average_marks1, setaverage_marks1] = useState('');
    const [good_marks1, setgood_marks1] = useState('');
    const [excellent_marks1, setexcellent_marks1] = useState('');
    const [total_marks1, settotal_marks1] = useState('');

    const [criteria2, setcriteria2] = useState('');
    const [poor_marks2, setpoor_marks2] = useState('');
    const [average_marks2, setaverage_marks2] = useState('');
    const [good_marks2, setgood_marks2] = useState('');
    const [excellent_marks2, setexcellent_marks2] = useState('');
    const [total_marks2, settotal_marks2] = useState('');

    const [criteria3, setcriteria3] = useState('');
    const [poor_marks3, setpoor_marks3] = useState('');
    const [average_marks3, setaverage_marks3] = useState('');
    const [good_marks3, setgood_marks3] = useState('');
    const [excellent_marks3, setexcellent_marks3] = useState('');
    const [total_marks3, settotal_marks3] = useState('');

    const [criteria4, setcriteria4] = useState('');
    const [poor_marks4, setpoor_marks4] = useState('');
    const [average_marks4, setaverage_marks4] = useState('');
    const [good_marks4, setgood_marks4] = useState('');
    const [excellent_marks4, setexcellent_marks4] = useState('');
    const [total_marks4, settotal_marks4] = useState('');

    const [criteria5, setcriteria5] = useState('');
    const [poor_marks5, setpoor_marks5] = useState('');
    const [average_marks5, setaverage_marks5] = useState('');
    const [good_marks5, setgood_marks5] = useState('');
    const [excellent_marks5, setexcellent_marks5] = useState('');
    const [total_marks5, settotal_marks5] = useState('');

    const [criteria6, setcriteria6] = useState('');
    const [poor_marks6, setpoor_marks6] = useState('');
    const [average_marks6, setaverage_marks6] = useState('');
    const [good_marks6, setgood_marks6] = useState('');
    const [excellent_marks6, setexcellent_marks6] = useState('');
    const [total_marks6, settotal_marks6] = useState('');

    const [criteria7, setcriteria7] = useState('');
    const [poor_marks7, setpoor_marks7] = useState('');
    const [average_marks7, setaverage_marks7] = useState('');
    const [good_marks7, setgood_marks7] = useState('');
    const [excellent_marks7, setexcellent_marks7] = useState('');
    const [total_marks7, settotal_marks7] = useState('');

    const [criteria8, setcriteria8] = useState('');

    const markingData = {

        subject_name, assignment_name, criteria, poor_marks, average_marks, good_marks, excellent_marks, total_marks
        , criteria1, poor_marks1, average_marks1, good_marks1, excellent_marks1, total_marks1
        , criteria2, poor_marks2, average_marks2, good_marks2, excellent_marks2, total_marks2
        , criteria3, poor_marks3, average_marks3, good_marks3, excellent_marks3, total_marks3
        , criteria4, poor_marks4, average_marks4, good_marks4, excellent_marks4, total_marks4
        , criteria5, poor_marks5, average_marks5, good_marks5, excellent_marks5, total_marks5
        , criteria6, poor_marks6, average_marks6, good_marks6, excellent_marks6, total_marks6
        , criteria7, poor_marks7, average_marks7, good_marks7, excellent_marks7, total_marks7
        , criteria8
    }

    //inser data
    const insertData = (e) => {
        e.preventDefault();

        axios.post("http://localhost:7000/Markings/add", markingData).then((res) => {

            swal({

                title: "Success",
                text: " Marking Scheme Created Successsfully",
                icon: "Success",
                button: "OK"
            });
            console.log(res.data.message);

        }).catch((err) => {

            alert(err);
        })

    }

    return (

        <div>
            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-10 col-lg-8 col-md-9 col-11 text-center">
                        <h3>Assignment Marking Scheme</h3>
                        <p class="black-text">Note that the project will be evaluated individually (Unless specified) according to the below
                            criteria.
                        </p>
                        <div class="card ">
                            <h5 class="text-center mb-4">Marking Rubri</h5>

                            <form class="form-card" onSubmit={insertData} >
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Subject Name<span class="text-danger"> *</span></label> <input type="text" id="subject_name" name="subject_name" onChange={(e) => {
                                        setsubject_name(e.target.value);
                                    }} />

                                    </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Assignment Name<span class="text-danger"> *</span></label> <input type="text" id="assignment_name" name="assignment_name" onChange={(e) => {
                                        setassignment_name(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No1))<span class="text-danger"> *</span></label> <input type="text" id="criteria" name="criteria" placeholder="" onChange={(e) => {
                                        setcriteria(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks" name="poor_marks" placeholder="" onChange={(e) => {
                                        setpoor_marks(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks" name="averagemarks" placeholder="" onChange={(e) => {
                                        setaverage_marks(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks" name="good_marks" placeholder="" onChange={(e) => {
                                        setgood_marks(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks" name="excellent_marks" placeholder="" onChange={(e) => {
                                        setexcellent_marks(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks" name="total_marks" placeholder="" onChange={(e) => {
                                        settotal_marks(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No2))<span class="text-danger"> *</span></label> <input type="text" id="criteria1" name="criteria1" placeholder="" onChange={(e) => {
                                        setcriteria1(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks1" name="poor_marks1" placeholder="" onChange={(e) => {
                                        setpoor_marks1(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks1" name="averagemarks1" placeholder="" onChange={(e) => {
                                        setaverage_marks1(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks1" name="good_marks1" placeholder="" onChange={(e) => {
                                        setgood_marks1(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks1" name="excellent_marks1" placeholder="" onChange={(e) => {
                                        setexcellent_marks1(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks1" name="total_marks1" placeholder="" onChange={(e) => {
                                        settotal_marks1(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No3))<span class="text-danger"> *</span></label> <input type="text" id="criteria2" name="criteria2" placeholder="" onChange={(e) => {
                                        setcriteria2(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks2" name="poor_marks2" placeholder="" onChange={(e) => {
                                        setpoor_marks2(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks2" name="averagemarks2" placeholder="" onChange={(e) => {
                                        setaverage_marks2(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks2" name="good_marks2" placeholder="" onChange={(e) => {
                                        setgood_marks2(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks2" name="excellent_marks2" placeholder="" onChange={(e) => {
                                        setexcellent_marks2(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks2" name="total_marks2" placeholder="" onChange={(e) => {
                                        settotal_marks2(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No4))<span class="text-danger"> *</span></label> <input type="text" id="criteria3" name="criteria3" placeholder="" onChange={(e) => {
                                        setcriteria3(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks3" name="poor_marks3" placeholder="" onChange={(e) => {
                                        setpoor_marks3(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks3" name="averagemarks3" placeholder="" onChange={(e) => {
                                        setaverage_marks3(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks3" name="good_marks3" placeholder="" onChange={(e) => {
                                        setgood_marks3(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks3" name="excellent_marks3" placeholder="" onChange={(e) => {
                                        setexcellent_marks3(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks3" name="total_marks3" placeholder="" onChange={(e) => {
                                        settotal_marks3(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No5))<span class="text-danger"> *</span></label> <input type="text" id="criteria4" name="criteria4" placeholder="" onChange={(e) => {
                                        setcriteria4(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks4" name="poor_marks4" placeholder="" onChange={(e) => {
                                        setpoor_marks4(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks4" name="averagemarks4" placeholder="" onChange={(e) => {
                                        setaverage_marks4(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks4" name="good_marks4" placeholder="" onChange={(e) => {
                                        setgood_marks4(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks4" name="excellent_marks4" placeholder="" onChange={(e) => {
                                        setexcellent_marks4(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks4" name="total_marks4" placeholder="" onChange={(e) => {
                                        settotal_marks4(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No6))<span class="text-danger"> *</span></label> <input type="text" id="criteria5" name="criteria5" placeholder="" onChange={(e) => {
                                        setcriteria5(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks5" name="poor_marks5" placeholder="" onChange={(e) => {
                                        setpoor_marks5(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks5" name="averagemarks5" placeholder="" onChange={(e) => {
                                        setaverage_marks5(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks5" name="good_marks5" placeholder="" onChange={(e) => {
                                        setgood_marks5(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks5" name="excellent_marks5" placeholder="" onChange={(e) => {
                                        setexcellent_marks5(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks5" name="total_marks5" placeholder="" onChange={(e) => {
                                        settotal_marks5(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No7))<span class="text-danger"> *</span></label> <input type="text" id="criteria6" name="criteria6" placeholder="" onChange={(e) => {
                                        setcriteria6(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks6" name="poor_marks6" placeholder="" onChange={(e) => {
                                        setpoor_marks6(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks6" name="averagemarks6" placeholder="" onChange={(e) => {
                                        setaverage_marks6(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks6" name="good_marks6" placeholder="" onChange={(e) => {
                                        setgood_marks6(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks6" name="excellent_marks6" placeholder="" onChange={(e) => {
                                        setexcellent_marks6(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks6" name="total_marks6" placeholder="" onChange={(e) => {
                                        settotal_marks6(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (No7))<span class="text-danger"> *</span></label> <input type="text7" id="criteria7" name="criteria7" placeholder="" onChange={(e) => {
                                        setcriteria7(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">PM<span class="text-danger"> *</span></label> <input type="text" id="poor_marks7" name="poor_marks7" placeholder="" onChange={(e) => {
                                        setpoor_marks7(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">AM<span class="text-danger"> *</span></label> <input type="text" id="average_marks7" name="averagemarks7" placeholder="" onChange={(e) => {
                                        setaverage_marks7(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">GM<span class="text-danger"> *</span></label> <input type="text" id="good_marks7" name="good_marks7" placeholder="" onChange={(e) => {
                                        setgood_marks7(e.target.value);
                                    }} /> </div>
                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px">EM<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks7" name="excellent_marks7" placeholder="" onChange={(e) => {
                                        setexcellent_marks7(e.target.value);
                                    }} /> </div>

                                    <div class="form-group col-sm-1 flex-column d-flex"> <label class="form-control-label px-3">TM<span class="text-danger"> *</span></label> <input type="text" id="total_marks7" name="total_marks7" placeholder="" onChange={(e) => {
                                        settotal_marks7(e.target.value);
                                    }} /> </div>
                                </div>
                                <div class="row justify-content-between text-left mt-5">
                                    <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria (Other))<span class="text-danger"> *</span></label> <input type="text" id="criteria8" name="criteria8" placeholder="" onChange={(e) => {
                                        setcriteria8(e.target.value);
                                    }} /> </div>

                                </div>

                                <div class="row justify-content-end mt-5">
                                    <div class="form-group col-sm-6">  <input type="submit" className="btn btn-primary btn-lg ms-2" value="Submit form" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}