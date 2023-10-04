import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function PreviousGuessInfo({ previousGuess, actualData, label }) {
  if (!previousGuess) return null; // Don't render anything if there is no previous guess

  const deviation = Math.abs(previousGuess - actualData); // Calculate the deviation between the guess and the actual data

  const getAssessment = (deviation, actualData) => {
    const percentageDeviation = (deviation / actualData) * 100;
    if (percentageDeviation < 5) return "Grym gissning!";
    if (percentageDeviation < 15) return "Bra gissning!";
    if (percentageDeviation < 30) return "Nära ändå!";
    return "Visst är det svårt?";
  };

  const mapColumnNames = (columnName, actualData) => {
    const nameMapping = {
      utredda: "2022 utreddes " + Number(actualData).toLocaleString("sv")  + " brott. Resten direktavskrevs.",
      direktavskrivna:
        "2022 utreddes " + Number(actualData).toLocaleString("sv")  + " brott. Resten direktavskrevs.",
      lagforingsprocent:
        "2022 personuppklarades " + Number(actualData).toLocaleString("sv") + "% av alla utredda brott.",
      personuppklaringsprocent:
        "2022 personuppklarades " + Number(actualData).toLocaleString("sv")  + "% av alla handlagda brott.",
    };
    return nameMapping[columnName] || columnName;
  };

  const assessment = getAssessment(deviation, actualData);

  return (
    <Alert severity="success">
      <AlertTitle>{assessment}</AlertTitle>  
        {mapColumnNames(label, actualData)}
    </Alert>
  );
}

//<p>Deviation: {deviation.toLocaleString()} ({((deviation / actualData) * 100).toFixed(2)}%)</p>

export default PreviousGuessInfo;
