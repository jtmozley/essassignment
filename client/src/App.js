import React, { Component } from "react";
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
  }

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
                <TableCell align="right">Domain</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Course ID</TableCell>
                <TableCell align="right">Test Name</TableCell>
                <TableCell align="right">Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.domain}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.course_Id}</TableCell>
                  <TableCell align="right">{row.testName}</TableCell>
                  <TableCell align="right">{row.duration}</TableCell>
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
              id="standard-name"
              label="Name"
              // className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
              style={{ marginRight: "10px", width: "200px" }}
              margin="normal"
            />
            <TextField
              id="standard-domain"
              label="Domain"
              // className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                width: "200px"
              }}
              margin="normal"
            />
            <TextField
              id="standard-description"
              label="Description"
              // className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
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
              id="standard-courseId"
              label="Course ID"
              // className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
              style={{
                marginRight: "10px",
                width: "200px"
              }}
              margin="normal"
            />
            <TextField
              id="standard-testName"
              label="Test Name"
              // className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
              style={{ marginRight: "10px", width: "200px" }}
              margin="normal"
            />
            <TextField
              id="standard-duration"
              label="Duration"
              // className={classes.textField}
              // value={values.name}
              // onChange={handleChange("name")}
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
        >
          New Course
        </Button>
      </Container>
    );
  }
}

export default App;
