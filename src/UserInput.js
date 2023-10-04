import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button
} from "@mui/material";
import InputSlider from "./InputSlider";
import PreviousGuessInfo from "./PreviousGuessInfo";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

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
      lagforingsprocent: "Lagföringsprocenten är andelen personuppklarade brott av alla *utredda* brott. Hur många procent tror du?",
      personuppklaringsprocent: "Personuppklaringsprocenten är andelen personuppklarade brott av alla *handlagda* brott. Hur många procent tror du?",
    };
    return nameMapping[columnName] || columnName;
  };

  const mapHeaderNames = (columnName) => {
    const nameMapping = {
      utredda: "Utredda",
      lagforingsprocent: "Lagföringsprocent",
      personuppklaringsprocent: "Personuppklaringsprocent",
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
    <Box sx={{ mb: 2, }}>
      <Box>
        {labels.map((label, index) => {
          if (index === enabledInputIndex) {
            // Active Input
            return (
              <div key={label}>
                <Box sx={{ bgcolor: bgColor(label), p: 1, minHeight: { xs: 32, md: 32, lg: 32 } }}>
                  <Stack direction="row" alignItems="center">
                    <PsychologyAltIcon sx={{ fontSize: 22 }} />
                    <Typography variant="h6" sx={{ mt: 0.4, pl: 0.5 }}>
                      {mapHeaderNames(label)}
                    </Typography>
                  </Stack>

                </Box>
                <Box sx={{ p: 2 }}>

                  <Typography variant="body" sx={{fontSize:14}}>
                    {mapColumnNames(label)}
                  </Typography>
                  <InputSlider
                    value="0"
                    max={getSliderMax(label)}
                    isPercentage={isPercentage(label)}
                    onChange={(e) => setCurrentGuess({ [label]: e })}
                  />

                  <Button variant="outlined" disabled={!currentGuess[label] > 0} sx={{ width: "100%" }} onClick={() => onSubmit(label, index)}>
                    Gissa
                  </Button>
                </Box>
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
      </Box >
    </Box >
  );
}

export default UserInput;
