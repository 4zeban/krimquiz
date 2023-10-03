import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Alert,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, actual, guess, isPercentage) {
  const percentageDiff = isPercentage ? (guess-actual) : parseInt((Math.abs((guess-actual)/actual))*100);
  const points = Math.abs(percentageDiff) * 10;
  return { name, actual, guess, diff: (guess-actual), points };
}

function UserGuessesDisplay({ actualData, userGuesses }) {
  
  const rows = () => {
    const data = actualData.properties;
    return [
      createData("Utredda", data["utredda"].value, userGuesses.utredda, false),
      createData(
        "Lagförda %",
        data["lagforingsprocent"].value,
        userGuesses.lagforingsprocent, true
      ),
      createData(
        "Personuppklarade %",
        data["personuppklaringsprocent"].value,
        userGuesses.personuppklaringsprocent, true
      ),
    ];
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Accordion expanded={true} sx={{ pt: 0 }}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: "#e7e7e7" }}
        >
          <Typography variant="h4">Resultat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" colspan="2">
                    <b>Utfall (din gissning)</b>
                  </TableCell>
                  {/* <TableCell align="right">
                    <b>Din gissning</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Skillnad</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Poäng</b>
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows().map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" >
                      <b>{row.name}</b>
                    </TableCell>
                    <TableCell align="right">
                      {row.actual} ({row.guess})
                    </TableCell>
                    {/* <TableCell align="right">
                      {row.guess}
                    </TableCell>
                    <TableCell align="right">{row.diff}</TableCell>
                    <TableCell align="right">{row.points}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Alert sx={{mt:2}}>Dina totala poäng var <b>{rows().reduce((total, item) => total + item.actual, 0).toLocaleString("sv")}</b>! (Lägre är bättre)</Alert> 
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default UserGuessesDisplay;
