import React, { Component } from "react";
import Axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    // this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
    // this.getData = this.getData.bind(this);
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
      .then(res => console.log(res))
      .then(this.getData())
      .catch(err => console.log(err));
  };

  id;

  getData = () => {
    Axios.get("/api/courses" + this.id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
        <form autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              //   value={values.age}
              //   onChange={handleChange}
              inputProps={{
                name: "age",
                id: "age-simple"
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Container>
    );
  }
}

export default App;
