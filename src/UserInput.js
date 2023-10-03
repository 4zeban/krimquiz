import React, { useState } from "react";
import {
    Box,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import InputSlider from "./InputSlider";
import PreviousGuessInfo from "./PreviousGuessInfo";

function UserInput({
  selectedQuestion,
  enabledInputIndex,
  setEnabledInputIndex,
  setSelectedQuestion,
  onUserGuessChange,
  userGuesses,
  onDone,
  previousGuess,
  previousLabel,
}) {
  const labels = Object.keys(selectedQuestion.properties);
  const [currentGuess, setCurrentGuess] = useState({});

  const isPercentage = (label) =>
    label === "lagforingsprocent" || label === "personuppklaringsprocent"
      ? true
      : false;

  const getSliderMax = (label) =>
    label === "lagforingsprocent" || label === "personuppklaringsprocent"
      ? 100
      : selectedQuestion.handlagda;

  const onSubmit = (label, index) => {
    const guessedValue = parseInt(currentGuess[label] || "0");
    onUserGuessChange(label, guessedValue); // Update the guessed value for the current label

    if (label === "utredda") {
      const direktavskrivnaValue = selectedQuestion.handlagda - guessedValue;
      onUserGuessChange("direktavskrivna", direktavskrivnaValue);

      // Set 'direktavskrivna' to visible so that its true value bar is shown in the graph
      setSelectedQuestion((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          direktavskrivna: {
            ...prev.properties.direktavskrivna,
            visible: true,
          },
        },
      }));
    }

    const nextIndex = label === "utredda" ? index + 2 : index + 1; // Skip 'direktavskrivna' input if the current label is 'utredda'

    if (nextIndex < labels.length) {
      setSelectedQuestion((prev) => ({
        ...prev,
        properties: {
          ...prev.properties,
          [labels[nextIndex]]: {
            ...prev.properties[labels[nextIndex]],
            visible: true,
          },
        },
      }));
      setEnabledInputIndex(nextIndex);
    } else {
      setEnabledInputIndex(nextIndex);
      onDone();
    }
  };

  const mapColumnNames = (columnName) => {
    const nameMapping = {
      utredda: "Hur många tror du utreddes?",
      lagforingsprocent: "Hur många procent tror du lagfördes?",
      personuppklaringsprocent: "Hur många procent tror du personuppklarades?",
    };
    return nameMapping[columnName] || columnName;
  };

  const mapHeaderNames = (columnName) => {
    const nameMapping = {
      utredda: "Utredda brott",
      lagforingsprocent: "Lagförda brott",
      personuppklaringsprocent: "Personuppklarade brott",
    };
    return nameMapping[columnName] || columnName;
  };
  const bgColor = (label) => {
    const nameMapping = {
      utredda: "#ffcc33",
      lagforingsprocent: "#97bf0d",
      personuppklaringsprocent: "#0099cc",
    };
    return nameMapping[label] || label;
  };

  return (
    <Box sx={{ mb: 2,  }}>
      <Box sx={{ p:0,  }}>
        {labels.map((label, index) => {
          if (index === enabledInputIndex) {
            // Active Input
            return (
              <div key={label}>
                
                <Accordion expanded={true} sx={{pt:0}}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: bgColor(label) }}
                  >
                    <Typography variant="h4">
                      {mapHeaderNames(label)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2} sx={{pt:2}} alignItems="center">
                      <Grid item>
                        <Typography variant="body">
                          {mapColumnNames(label)}
                        </Typography>
                        <InputSlider
                          value="0"
                          max={getSliderMax(label)}
                          isPercentage={isPercentage(label)}
                          onChange={(e) => setCurrentGuess({ [label]: e })}
                        />
                      </Grid>
                      <Grid item>
                        <button onClick={() => onSubmit(label, index)}>
                          Gissa
                        </button>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <PreviousGuessInfo
                  previousGuess={previousGuess}
                  actualData={
                    selectedQuestion?.properties[previousLabel]?.value
                  }
                  label={previousLabel}
                />
              </div>
            );
          } else if (label !== "direktavskrivna") {
            return "";
          } else {
            return "";
          }
        })}
      </Box>
    </Box>
  );
}

export default UserInput;
