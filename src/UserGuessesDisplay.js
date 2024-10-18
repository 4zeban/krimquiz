import React from "react";
import {
  Box,
  Typography,
  Alert,
  Stack
} from "@mui/material";
import QuestionGraph from "./QuestionGraph";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, actual, guess, isPercentage) {
  const percentageDiff = isPercentage ? (guess - actual) : parseInt((Math.abs((guess - actual) / actual)) * 100);
  const points = Math.abs(percentageDiff) * 10;
  return { name, actual, guess, isPercentage, diff: (guess - actual), points };
}

function UserGuessesDisplay({ selectedQuestion, actualData, userGuesses, hideUserGuesses }) {

  const rows = () => {
    const data = actualData.properties;
    return [
      createData("Utredda", data["utredda"].value, userGuesses.utredda, false),
      // createData(
      //   "Lagföringsprocent",
      //   data["lagforingsprocent"].value,
      //   userGuesses.lagforingsprocent, true
      // ),
      createData(
        "Personuppklaringsprocent",
        data["personuppklaringsprocent"].value,
        userGuesses.personuppklaringsprocent, true
      ),
    ];
  };

  return (
    <Box sx={{ pt: 2, mb: 2 }}>
      <Box sx={{ bgcolor: "#e7e7e7", p: 1, minHeight: { xs: 32, md: 32, lg: 32 } }}>
        <Stack direction="row" alignItems="center">
          {/* <PsychologyAltIcon sx={{ fontSize: 22 }} /> */}
          <Typography variant="h6" sx={{ mt: 0.4, pl: 0.5 }}>
            Resultat
          </Typography>
        </Stack>

      </Box>

      {!hideUserGuesses ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right" colSpan="2">
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
                  <TableCell align="right">{Number(row.actual).toLocaleString("sv")}{row.isPercentage ? '%' : ''}{!hideUserGuesses && row.guess !== undefined ? ` (${Number(row.guess).toLocaleString("sv")}${row.isPercentage ? '%' : ''})` : ''} 
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
      ) :
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right" colSpan="2">
                  <b>Utfall</b>
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
                  <TableCell align="right">{Number(row.actual).toLocaleString("sv")}{row.isPercentage ? '%' : ''}
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
      }
      <Box sx={{ pt: 3 }}>
        <QuestionGraph
          selectedQuestion={selectedQuestion}
          userGuesses={hideUserGuesses ? {} : userGuesses}
        />
      </Box>
      {!hideUserGuesses && (
        <Alert sx={{ mt: 2 }}>Dina totala poäng var <b>{rows().reduce((total, item) => total + item.actual, 0).toLocaleString("sv")}</b>! (Lägre är bättre)</Alert>
      )}
    </Box>
  );
}

export default UserGuessesDisplay;
