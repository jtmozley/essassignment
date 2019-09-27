import React, { useState } from "react";
import Axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Search() {
  const [theData, setTheData] = useState([]);

  let id = 0;

  const getData = () => {
    Axios.get("/api/courses/" + id)
      .then(res => {
        setTheData(res);
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const handleChange = event => {
    id = event.target.value;
    getData();
    console.log(id);
  };

  const testData = Object.values(theData);

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
            <TableRow>
              {testData.map(item => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <form>
        <FormControl style={{ width: "90px", marginTop: "10px" }}>
          <InputLabel htmlFor="id-simple">Select ID</InputLabel>
          <Select
            value={id}
            onChange={handleChange}
            inputProps={{
              name: "id",
              id: "id-simple"
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Container>
  );
}
