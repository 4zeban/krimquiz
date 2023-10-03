import "./App.css";
import React, { useEffect, useState } from "react";
import QuestionGraph from "./QuestionGraph";
import UserInput from "./UserInput";
import UserGuessesDisplay from "./UserGuessesDisplay"; // Importing the new component
import { Container, Typography, Button } from "@mui/material";

function App() {
  const [error, setError] = useState(null);

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [enabledInputIndex, setEnabledInputIndex] = useState(0);
  const [userGuesses, setUserGuesses] = useState({ handlagda: 0 });
  const [previousGuess, setPreviousGuess] = useState(null);
  const [previousLabel, setPreviousLabel] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch("data.json") // Assumes the file is in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
        setError(error);
      });
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setSelectedQuestion(questions[randomIndex]);
    setUserGuesses({ handlagda: 0 });
  };

  const handleUserGuessChange = (property, value) => {
    setUserGuesses((prev) => ({ ...prev, [property]: value }));
    if (property !== "direktavskrivna") {
      setPreviousGuess(value);
      setPreviousLabel(property);
    }
  };

  const onDone = () => {
    setIsDone(true);
  };

  return (
    <Container>
      <div className="App">
        <Typography variant="h2" gutterBottom>
          Krimquiz
        </Typography>
        {selectedQuestion ? (
          <div>
            
            {isDone ? (
              <div>
                <UserGuessesDisplay userGuesses={userGuesses} actualData={selectedQuestion} />
                <QuestionGraph
                  selectedQuestion={selectedQuestion}
                  userGuesses={userGuesses}
                />
              </div>
            ) : (
              <div className="header">
              <p>
                År 2022 blev{" "}
                <b>{selectedQuestion.handlagda.toLocaleString("sv")} brott</b> i
                kategorin{" "}
                <b>
                  {selectedQuestion.kategori} ({selectedQuestion.underkategori})
                </b>{" "}
                handlagda.
                <br />
                <br />
                Kan du gissa hur det gick sen?
              </p>
                <UserInput
                  selectedQuestion={selectedQuestion}
                  enabledInputIndex={enabledInputIndex}
                  setEnabledInputIndex={setEnabledInputIndex}
                  setSelectedQuestion={setSelectedQuestion}
                  onUserGuessChange={handleUserGuessChange}
                  userGuesses={userGuesses}
                  onDone={onDone}
                  previousGuess={previousGuess}
                  previousLabel={previousLabel}
                />

                <QuestionGraph
                  selectedQuestion={selectedQuestion}
                  userGuesses={userGuesses}
                />
              </div>
            )}
          </div>
        ) : (
            <div>
              <p>
                Hur bra fungerar brottsbekämpningen i Sverige?
              </p>
              <p>Hur bra koll har *du*?</p>
              <p>
              När du klickar på knappen så slumpas en brottskategori fram och det är din uppgift att gissa hur många av brotten som utreddes, lagfördes och personuppklarades.<br/><br/>Lycka till - det är svårare än vad det låter!
              </p>
          <Button variant="contained" color="primary" onClick={startGame}>
            Slumpa brott!
          </Button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;
