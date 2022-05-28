import React,{useState} from "react";
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/marking.css';

export default function MarkingScheme() {

    const [subject_name,setsubject_name] = useState('');
    const [assignment_name,setassignment_name ]= useState('');
    const [criteria,setcriteria]=useState('');
    const [poor_marks,setpoor_marks]=useState('');
    const [average_marks ,setaverage_marks]=useState('');
    const [good_marks ,setgood_marks]=useState('');
    const [excellent_marks,setexcellent_marks]=useState('');
    const [total_marks,settotal_marks]=useState('');

    const markingData = {
       
        subject_name, assignment_name,criteria,poor_marks,average_marks,good_marks,excellent_marks,total_marks 
        }

        //inser data
        const insertData=(e)=>{
            e.preventDefault();

            axios.post("http://localhost:7000/Markings/add",markingData).then((res)=>{
                
             swal({
                 
                 title:"Success",
                 text:" Marking Scheme Created Successsfully",
                 icon:"Success",
                 button:"OK"
             });    
            console.log(res.data.message);
               
            }).catch((err)=>{
               
                alert(err);
            })
                
        }

return(

<div>
<div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Assignment Marking Scheme</h3>
            <p class="black-text">Note that the project will be evaluated individually (Unless specified) according to the below
criteria.
</p>
            <div class="card ">
                <h5 class="text-center mb-4">Marking Rubri</h5>

                <form class="form-card" onSubmit={insertData} >
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Subject Name<span class="text-danger"> *</span></label> <input type="text" id="subject_name" name="subject_name"  onChange={(e) => {
                                                        setsubject_name(e.target.value);
                                                    }}  />
                                                    
                                                     </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Assignment Name<span class="text-danger"> *</span></label> <input type="text" id="assignment_name" name="assignment_name"  onChange={(e) => {
                                                        setassignment_name (e.target.value);
                                                    }} /> </div>
                    </div>
                    <div class="row justify-content-between text-left mt-3">
                        <div class="form-group col-sm flex-column d-flex"> <label class="form-control-label px-3">Criteria<span class="text-danger"> *</span></label> <textarea type="text" id="criteria" name="criteria" placeholder="" onChange={(e) => {
                                                        setcriteria(e.target.value);
                                                    }} /> </div>

                    </div>
                    <div class="row justify-content-between text-left mt-3">
                    <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Poor Marks<span class="text-danger"> *</span></label> <input type="text" id="poor_marks" name="poor_marks" placeholder="" onChange={(e) => {
                                                        setpoor_marks(e.target.value);
                                                    }} /> </div>
                    <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Average Marks<span class="text-danger"> *</span></label> <input type="text" id="average_marks" name="averagemarks" placeholder="" onChange={(e) => {
                                                        setaverage_marks(e.target.value);
                                                    }} /> </div>
                    <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Good Marks<span class="text-danger"> *</span></label> <input type="text" id="good_marks" name="good_marks" placeholder="" onChange={(e) => {
                                                       setgood_marks(e.target.value);
                                                    }} /> </div>
                        <div class="form-group col-sm-3 flex-column d-flex"> <label class="form-control-label px-3">Excellent Marks<span class="text-danger"> *</span></label> <input type="text" id="excellent_marks" name="excellent_marks" placeholder="" onChange={(e) => {
                                                        setexcellent_marks(e.target.value);
                                                    }} /> </div>
                    </div>
                    <div class="row justify-content-between text-left mt-3">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Total Marks<span class="text-danger"> *</span></label> <input type="text" id="total_marks" name="total_marks" placeholder="" onChange={(e) => {
                                                        settotal_marks(e.target.value);
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
)}