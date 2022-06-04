import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


  class TopicResult extends Component {
  
  constructor(props) {
    super(props);

    this.onChangestudentId  = this.onChangestudentId.bind(this);
   
    this.onChangefullName = this.onChangefullName.bind(this);

    this.onChangegroupName  = this.onChangegroupName.bind(this);
   
    this.onChangefaculty = this.onChangefaculty.bind(this);
    this.onChangeacademicYear = this.onChangeacademicYear.bind(this);
    
    
    this.onChangesemester= this.onChangesemester.bind(this);

    this.onChangesubjectName  = this.onChangesubjectName.bind(this);
   
    this.onChangeresearchName = this.onChangeresearchName.bind(this);
    this.onChangecontact_number = this.onChangecontact_number.bind(this);
    
    
    this.onChangeemail= this.onChangeemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      
       studentId:"", 
       fullName:"",   
       groupName:"",
       faculty:"",
       academicYear:"",
       semester:"",
        subjectName: "",
        researchName: "",
        contact_number: "",
        email: "",
      records: [],
    };

    
  }
 
  componentDidMount() {
    
    axios
      .get("http://localhost:7000/TopicRegistration/" +this.props.params.id)
      .then((response) => {
        this.setState({
          studentId: response.data.studentId,
          fullName: response.data.fullName,
          groupName: response.data.groupName,
          faculty: response.data.faculty,
          academicYear: response.data.academicYear,
          semester:response.data.semester,
          subjectName: response.data.subjectName,
          researchName: response.data.researchName,
          contact_number: response.data.contact_number, 
          email: response.data.email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  onChangefullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  onChangestudentId(e) {
    this.setState({
      studentId: e.target.value,
    });
  }

  onChangegroupName(e) {
    this.setState({
      groupName: e.target.value,
    });
  }

  
  onChangefaculty(e) {
    this.setState({
      faculty: e.target.value,
    });
  }

  onChangeacademicYear(e) {
    this.setState({
      academicYear: e.target.value,
    });
  }

  onChangesemester(e) {
    this.setState({
      semester: e.target.value,
    });
  }

  onChangesubjectName(e) {
    this.setState({
      subjectName: e.target.value,
    });
  }
 
 
 
  onChangeresearchName(e) {
    this.setState({
      researchName: e.target.value,
    });
  }
  onChangecontact_number(e) {
    this.setState({
      contact_number: e.target.value,
    });
  }
 
  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
 
   
  
  onSubmit(e) {
    e.preventDefault();
    const newSendTopic= {
      studentId:this.state.studentId,
      fullName:this.state.fullName,
      groupName:this.state.groupName,
      faculty:this.state.faculty,
      academicYear:this.state.academicYear,
      semester:this.state.semester,
      subjectName: this.state.subjectName,
      researchName: this.state.researchName,
      contact_number: this.state.contact_number,
      email: this.state.email,
    };
    console.log(newSendTopic);
 
    axios
    .post(
      "http://localhost:7000/TopicApprove/send",newSendTopic
    )
    .then((res) => {console.log(res.data);    alert("Topic Approved Successfully!!!");
  });
 
}

 


  render() {
    return (
      <div>
          

<br/><br/><br/><br/><br/>
<div class="card">
       
        <h3 align="center">Topic Registration Details</h3>
        <form onSubmit={this.onSubmit}>
          
        <div className="form-group">
            <label>Student Id: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.studentId}
              onChange={this.onChangestudentId}
              required/>
          </div>

          <div className="form-group">
            <label>Full Name: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.fullName}
              onChange={this.onChangefullName}
              required/>
          </div>

          <div className="form-group">
            <label>Group Name: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.groupName}
              onChange={this.onChangegroupName}
              required/>
          </div>

          <div className="form-group">
            <label>Faculty: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.faculty}
              onChange={this.onChangefaculty}
              required/>
          </div>
         

          <div className="form-group">
            <label>Academic Year: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.academicYear}
              onChange={this.onChangeacademicYear}
              required/>
          </div>

          
          <div className="form-group">
            <label>Semester: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.semester}
              onChange={this.onChangesemester}
              required/>
          </div>

          <div className="form-group">
            <label>SubjectName: </label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={this.state.subjectName}
              onChange={this.onChangesubjectName}
              required/>
          </div>
          
         
          
          <div className="form-group">
            <label>ResearchName: </label>
            <input
              type="text"
              required 
              readOnly={true}
              className="form-control"
              value={this.state.researchName}
              onChange={this.onChangeresearchName}
            />
            
          </div>
          <div className="form-group">
            <label>contact_number: </label>
            
            <input
              type="Number"
              onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
              required
              readOnly={true}
              className="form-control"
              value={this.state.contact_number}
              onChange={this.onChangecontact_number}
            />
            
          </div>
          
          <div classtName="form-group">
            <label> email: </label>
            <input
              type="email"
              required
               readOnly={true}
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
            
          </div>
          
          <br />
          
          <div className="form-group">
            <input
              type="submit"
              
              value="Approve the Topic"
              className="btn btn-primary"
              
            />
          </div>
        </form>
      </div>
      </div>
    );
  }


}
export default withRouter(TopicResult);

