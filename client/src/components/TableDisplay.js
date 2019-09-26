import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableDisplay(props) {
  return (
    <TableRow key={props.name}>
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell>{props.domain}</TableCell>
      <TableCell>{props.description}</TableCell>
      <TableCell>{props.courseId}</TableCell>
      <TableCell>{props.duration}</TableCell>
      <TableCell>{props.num_of_questions}</TableCell>
    </TableRow>
  );
}
