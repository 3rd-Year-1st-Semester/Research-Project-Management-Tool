import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


  class EditTopic extends Component {
  
  constructor(props) {
    super(props);
 
    this.onChangesubjectName  = this.onChangesubjectName.bind(this);
   
    this.onChangeresearchName = this.onChangeresearchName.bind(this);
    this.onChangecontact_number = this.onChangecontact_number.bind(this);
    
    
    this.onChangeemail= this.onChangeemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        
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
    const newEditedTopic= {
      subjectName: this.state.subjectName,
      researchName: this.state.researchName,
      contact_number: this.state.contact_number,
      email: this.state.email,
    };
    console.log(newEditedTopic);
 
    
    axios
      .put(
        "http://localhost:7000/TopicRegistration/update/" + this.props.params.id,
        newEditedTopic
      )
      .then((res) => {console.log(res.data);    alert("Topic Updated Successfully!!!");
    });
      
 
    this.props.history.push("");
    
  }
  render() {
    return (
      <div>
          

<br/><br/><br/><br/><br/>
      <div className="container">
        <h3 align="center">Update Theater details</h3>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <label>SubjectName: </label>
            <input
              type="text"
              
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
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
            
          </div>
          
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              
              value="Update Record"
              className="btn btn-primary"
              
            />
          </div>
        </form>
      </div>
      </div>
    );
  }


}
export default withRouter(EditTopic);

