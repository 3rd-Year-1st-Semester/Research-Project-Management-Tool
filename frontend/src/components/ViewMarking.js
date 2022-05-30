import React,{ useState ,useEffect }  from "react";
import axios from "axios";
import "../styles/view.css";

export default function ViewMarking(){

    const [MarkingData,setMarkingData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/Markings/").then((res) => {
            setMarkingData(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
return(

    <div>
       <div class="hm-gradient">
    
    
        
      
        <div class="container mt-4">

            

            <div class="card mb-4">
                <div class="card-body">
                    
                    <div class="row">
                      
                        <div class="col-md-12">
                            <h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Marking Scheme</h2>
                            <div class="input-group md-form form-sm form-2 pl-0">
                                <input class="form-control my-0 py-1 pl-3 purple-border" type="text" placeholder="Search something here..." aria-label="Search"/>
                                <span class="input-group-addon waves-effect purple lighten-2" id="basic-addon1"><a><i class="fa fa-search white-text" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                        
                    </div>
                    
                    
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
                            
                            {
                                MarkingData.map((val, key) => {
                                    return (
                                        <tr className="bg-light  text-dark">
                                            
                                            <td>{val.criteria}</td>
                                            <td>{val.poor_marks}</td>
                                            <td>{val.average_marks}</td>
                                            <td>{val.good_marks}</td>
                                            <td>{val.excellent_marks}</td>
                                            <td>{val.total_marks}</td>

                                            <td>{val.criteria1}</td>
                                            <td>{val.poor_marks1}</td>
                                            <td>{val.average_marks1}</td>
                                            <td>{val.good_marks1}</td>
                                            <td>{val.excellent_marks1}</td>
                                            <td>{val.total_marks1}</td>

                                            <td>{val.criteria2}</td>
                                            <td>{val.poor_marks2}</td>
                                            <td>{val.average_marks2}</td>
                                            <td>{val.good_marks2}</td>
                                            <td>{val.excellent_marks2}</td>
                                            <td>{val.total_marks2}</td>

                                            <td>{val.criteria3}</td>
                                            <td>{val.poor_marks3}</td>
                                            <td>{val.average_marks3}</td>
                                            <td>{val.good_marks3}</td>
                                            <td>{val.excellent_marks3}</td>
                                            <td>{val.total_marks3}</td>

                                            <td>{val.criteria4}</td>
                                            <td>{val.poor_marks4}</td>
                                            <td>{val.average_marks4}</td>
                                            <td>{val.good_marks4}</td>
                                            <td>{val.excellent_marks4}</td>
                                            <td>{val.total_marks4}</td>

                                            <td>{val.criteria5}</td>
                                            <td>{val.poor_marks5}</td>
                                            <td>{val.average_marks5}</td>
                                            <td>{val.good_marks5}</td>
                                            <td>{val.excellent_marks5}</td>
                                            <td>{val.total_marks5}</td>

                                            <td>{val.criteria6}</td>
                                            <td>{val.poor_marks6}</td>
                                            <td>{val.average_marks6}</td>
                                            <td>{val.good_marks6}</td>
                                            <td>{val.excellent_marks6}</td>
                                            <td>{val.total_marks6}</td>

                                            <td>{val.criteria7}</td>
                                            <td>{val.poor_marks7}</td>
                                            <td>{val.average_marks7}</td>
                                            <td>{val.good_marks7}</td>
                                            <td>{val.excellent_marks7}</td>
                                            <td>{val.total_marks7}</td>

                                            <td>{val.criteria8}</td>
                                           

                                            
                                            
                                        </tr>
                                    )
                                })
                            }
                               
                        </tbody>
                        
                    </table>
                    
                </div>
            </div>
            
  
</div>
</div>


    </div>

)



}