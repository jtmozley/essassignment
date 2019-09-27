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
import Typography from "@material-ui/core/Typography";

//showing use of a class based component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      domain: "",
      description: "",
      courseId: "",
      num_of_questions: "",
      duration: "",
      newId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
    this.getData = this.getData.bind(this);
    this.secondSubmit = this.secondSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  //post request to submit user input for created course to db
  submitData = e => {
    e.preventDefault();
    Axios.post("/api/courses", {
      name: this.state.name,
      domain: this.state.domain,
      description: this.state.description
    })
      .then(res => console.log(res))
      .then(this.secondSubmit())
      .then(this.getData())
      .catch(err => console.log(err));
  };

  //post request to submit user input for created test to db
  secondSubmit = () => {
    Axios.post("/api/tests", {
      courseId: this.state.newId,
      duration: this.state.duration,
      num_of_questions: this.state.num_of_questions
    })
      .then(console.log(this.state.courseId))
      .then(this.getData())
      .catch(err => console.log(err));
  };

  //api request to db to grab all courses and their associated tests
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
      })
      .then(() =>
        this.setState({
          newId: this.state.data.length + 1
        })
      );
  };

  //function to store the value of a text field into its specific state as it's typed by the user
  handleChange = event => {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    this.setState({ [name]: value });
  };

  //function to delete a user selected course and its associated test from the db
  delete = event => {
    const target = event.target;
    Axios.delete("/api/courses/" + target.id).then(this.getData);
  };

  //on component mount call getData for api request
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <Typography style={{ fontSize: "20px", marginBottom: "25px" }}>
          <a style={{ color: "black", textDecoration: "none" }} href="/search">
            Search
          </a>
        </Typography>
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
                  <Typography
                    id={row.test.courseId}
                    onClick={this.delete}
                    style={{ color: "red", cursor: "pointer" }}
                  >
                    X
                  </Typography>
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
            <Typography style={{ marginTop: "10px" }}>Course Info</Typography>
            <TextField
              required={true}
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange}
              style={{ marginRight: "10px", width: "200px" }}
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
            />
          </div>
          <div>
            <Typography style={{ marginTop: "10px" }}>Test Info</Typography>
            <TextField
              required={true}
              id="duration"
              label="Duration"
              value={this.state.duration}
              onChange={this.handleChange}
              style={{
                marginRight: "10px",
                width: "200px"
              }}
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
            />
          </div>
        </form>

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "25px", marginBottom: "10px" }}
          onClick={this.submitData}
        >
          New Course
        </Button>
      </Container>
    );
  }
}

export default App;