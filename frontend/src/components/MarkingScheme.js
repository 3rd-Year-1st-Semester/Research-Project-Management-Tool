import React,{useState} from "react";
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/marking.css';

export default function MarkingScheme() {

    const [subject_name,setsubjectname]= useState("");
    const [assignment_name,setassignmentname]=useState("");
    const [criteria,setcriteria]=useState("");
    const [Poor_marks,setpoormarks]=useState("");
    const [average_marks,setaveragemarks]=useState("");
    const [good_marks,setgoodmarks]=useState("");
    const [excellent_marks,setexcellentmarks]=useState("");
    const [total_marks,settotalmarks]=useState("");

    const markingData = {
       subject_name,assignment_name,criteria,Poor_marks,average_marks,good_marks,excellent_marks,total_marks
        }

        //inser data
        const insertData=(e)=>{
            e.preventDefault();

            axios.post("http://localhost:7000/marking/add"),markingData.then((res)=>{
                
            });

            swal({
                title:"success",
                text:"Marking Scheme created Successfully",
                icon:"success",
                button:"OK"

                
            
        }).catch((err)=>{
           
            alert(err);
        })

        
        
    }

return(

<div>
<div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Request a Demo</h3>
            <p class="blue-text">Just answer a few questions so that we can personalize the right experience for you.</p>
            <div class="card ">
                <h5 class="text-center mb-4">Powering world-class companies</h5>
                
                <form class="form-card" onSubmit={insertData} >
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Subject Name<span class="text-danger"> *</span></label> <input type="text" id="subject_name" name="subject_name"  onblur="validate(1)"onChange={(e) => {
                                                        setsubjectname(e.target.value);
                                                    }}  />
                                                    
                                                     </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Assignment Name<span class="text-danger"> *</span></label> <input type="text" id="assignment_name" name="assignment_name"  onblur="validate(2)"onChange={(e) => {
                                                        setassignmentname(e.target.value);
                                                    }} /> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria<span class="text-danger"> *</span></label> <textarea type="text" id="criteria" name="criteria" placeholder="" onblur="validate(3)"onChange={(e) => {
                                                        setcriteria(e.target.value);
                                                    }} /> </div>

                    </div>
                    <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Poor Marks<span class="text-danger"> *</span></label> <input type="text" id="poor_marks" name="poor_marks" placeholder="" onblur="validate(4)"onChange={(e) => {
                                                        setpoormarks(e.target.value);
                                                    }} /> </div>
                    <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Average Marks<span class="text-danger"> *</span></label> <input type="text" id="average_marks" name="averagemarks" placeholder="" onblur="validate(4)"onChange={(e) => {
                                                        setaveragemarks(e.target.value);
                                                    }} /> </div>
                    <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Good Marks<span class="text-danger"> *</span></label> <input type="text" id="good_marks" name="good_marks" placeholder="" onblur="validate(4)"onChange={(e) => {
                                                        setgoodmarks(e.target.value);
                                                    }} /> </div>
                        <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Excellent Marks<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks" name="excellent_marks" placeholder="" onblur="validate(5)"onChange={(e) => {
                                                        setexcellentmarks(e.target.value);
                                                    }} /> </div>
                    </div>
                    <div class="row justify-content-between text-left ">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Total Marks<span class="text-danger"> *</span></label> <input type="text" id="total_marks" name="total_marks" placeholder="" onblur="validate(6)"onChange={(e) => {
                                                        settotalmarks(e.target.value);
                                                    }} /> </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-6">  <input type="submit" className="btn btn-warning btn-lg ms-2" value="Submit form" /></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>






</div>
)}