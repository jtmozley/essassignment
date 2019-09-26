import React, { Component } from "react";
import Axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.submitData = this.submitData.bind(this);
      this.getData = this.getData.bind(this);
      this.secondSubmit = this.secondSubmit.bind(this);
    }
  
    submitData = e => {
      e.preventDefault();
      Axios.post("/api/courses", {
        name: this.state.name,
        domain: this.state.domain,
        description: this.state.description,
        id: 3,
        courseId: this.state.courseId,
        duration: this.state.duration,
        num_of_questions: this.state.num_of_questions
      })
        .then(response => console.log(response))
        .then(this.getData())
        .catch(error => console.log(error));
    };
  
   
  
    getData = () => {
      fetch("/api/courses", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            data: data
          });
          console.log(this.state.data);
        });
    };
  
    //on component mount call getData for api request
    componentDidMount() {
      this.getData();
    }
  
    render() {
      return (
        <Container>
          <Paper className="root">
            <Table className="table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Domain</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Course ID</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>No. Questions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.domain}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.test.courseId}</TableCell>
                    <TableCell>{row.test.duration}</TableCell>
                    <TableCell>{row.test.num_of_questions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <form
            style={{ display: "flex", flexWrap: "wrap" }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required={true}
                id="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                style={{ marginRight: "10px", width: "200px" }}
                margin="normal"
              />
              <TextField
                required={true}
                id="domain"
                label="Domain"
                value={this.state.domain}
                onChange={this.handleChange}
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  width: "200px"
                }}
                margin="normal"
              />
              <TextField
                required={true}
                id="description"
                label="Description"
                value={this.state.description}
                onChange={this.handleChange}
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  width: "400px"
                }}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                required={true}
                id="courseId"
                label="Course ID"
                value={this.state.courseId}
                onChange={this.handleChange}
                style={{
                  marginRight: "10px",
                  width: "200px"
                }}
                margin="normal"
              />
              <TextField
                required={true}
                id="duration"
                label="Duration"
                value={this.state.duration}
                onChange={this.handleChange}
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  width: "200px"
                }}
                margin="normal"
              />
              <TextField
                required={true}
                id="num_of_questions"
                label="No. Questions"
                value={this.state.num_of_questions}
                onChange={this.handleChange}
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  width: "200px"
                }}
                margin="normal"
              />
            </div>
          </form>
  
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "25px", marginBottom: "10px" }}
            onClick={this.submitData}
            // onClick={this.secondSubmit}
          >
            New Course
          </Button>
        </Container>
      );
    }
  }
  
  export default App;
  