import React, { Component } from "react";
import "./App.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

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
      </Container>
    );
  }
}

export default App;
