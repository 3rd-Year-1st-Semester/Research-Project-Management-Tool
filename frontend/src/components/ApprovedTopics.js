import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


 
const Record = (props) => (
  
  
  <tr>
    
    <td>{props.record._id}</td>
    <td>{props.record.studentId}</td>
    <td>{props.record.fullName}</td>
    <td>{props.record.groupName}</td>
    <td>{props.record.faculty}</td>
    <td>{props.record.academicYear}</td>
    <td>{props.record.semester}</td>
    <td>{props.record.subjectName}</td>
    <td>{props.record.researchName}</td>
    <td>{props.record.contact_number}</td>
    <td>{props.record.email}</td>

 <td> 
    <Link to ={"/approvedtopic"}></Link>
      <a
       href="/approvedtopic"
        
        onClick={() => {
          props.deleteRecord(props.record._id); 
          alert(" Topic Data Successfully Deleted !!!");
         
        }}
      >
        Delete
      </a>
    </td>
    
    
   
  </tr>
);
 
export default class ApprovedTopicsList extends Component {
  
  
  
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  
  componentDidMount() {
    axios
      .get("http://localhost:7000/TopicApprove/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  
  deleteRecord(id) {
    axios.delete("http://localhost:7000/TopicApprove/delete/" + id).then((response) => {
      
      console.log(response.data);
   

    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }


  render() {
    return (
      <div class="card">
      <center> 
      <br></br>
       <div><h3>Approved Research Topics</h3></div>  
       <br></br>
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              
              <th>Topic_Id</th>
              <th>Student_Id</th>
              <th>Full_Name</th>
              <th>Group_Name</th>
              <th>Faculty</th>
              <th>Academic_Year</th>
              <th>Semester</th>
              <th>Subject_Name</th>
              <th>Topic_Name</th>
              <th>contact_Number</th>
              <th>Email</th>
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
        </center>
        <br/><br/>
      </div>
      
    );
  }
}
