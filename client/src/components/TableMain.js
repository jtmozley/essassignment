import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableMain(props) {
  return (
    <TableRow key={props.name}>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.domain}</TableCell>
      <TableCell>{props.description}</TableCell>
      <TableCell>{props.test.courseId}</TableCell>
      <TableCell>{props.test.duration}</TableCell>
      <TableCell>{props.test.num_of_questions}</TableCell>
    </TableRow>
  );
}
