import "./App.css";
import React, { useEffect, useState } from "react";
import UserInput from "./UserInput";
import UserGuessesDisplay from "./UserGuessesDisplay"; // Importing the new component
import { Container, Typography, Box, FormControlLabel, Checkbox } from "@mui/material";
import queryString from 'query-string';
import ResponsiveAppBar from "./AppBar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Share from './Share';
import GroupedSelect from "./Select";
import Footer from "./Footer";

function App() {
  const [error, setError] = useState(null);

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [enabledInputIndex, setEnabledInputIndex] = useState(0);
  const [userGuesses, setUserGuesses] = useState({ handlagda: 0 });
  const [previousGuess, setPreviousGuess] = useState(null);
  const [previousLabel, setPreviousLabel] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [hideUserGuesses, setHideUserGuesses] = useState(false);

  useEffect(() => {
    fetch("/krimquiz/data.json") // Assumes the file is in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        const parsed = queryString.parse(window.location.search);
        if (parsed.id) {
          const foundQuestion = data.find((q) => q.id === parsed.id);
          if (foundQuestion) {
            setSelectedQuestion(foundQuestion);
          }
        }
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

  const startGameWithId = (id) => {
    if (id == null) {
      startGame();
      return;
    }

    const foundQuestion = questions.find((q) => q.id === id);
    if (foundQuestion) {
      setSelectedQuestion(foundQuestion);
    }
    setUserGuesses({ handlagda: 0 });
  };

  const reloadGame = () => {
    const baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.location.assign(baseUrl);
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

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1862a8',
      },
      secondary: {
        main: '#ffcc33',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ minHeight: "auto", pl: 0, pr: 0 }}>
        <ResponsiveAppBar />

        <Container >
          {selectedQuestion ? (
            <div>
              <Box sx={{ pt: 2 }}>
                <Typography variant="h5" sx={{ fontSize: 18, fontWeight: 400 }} color="primary">{selectedQuestion.kategori}</Typography>
                <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300 }} color="primary">{selectedQuestion.underkategori}</Typography>

                {isDone ? (
                  <div>
                    <UserGuessesDisplay selectedQuestion={selectedQuestion} userGuesses={userGuesses} actualData={selectedQuestion} hideUserGuesses={hideUserGuesses} />
                    <Share questionId={selectedQuestion.id} newGame={reloadGame} />
                  </div>
                ) : (
                  <div>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body" sx={{ fontSize: 14, pb: 4 }}>
                        2023 handlagdes <b>{selectedQuestion.handlagda.toLocaleString("sv")} fall</b>.
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 2 }}>
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
                    </Box>
                  </div>
                )}
              </Box>
            </div>
          ) : (
            <div>
              <p>
                Hur bra fungerar brottsbekämpningen i Sverige?
              </p>
              <p>Hur bra koll har *du*?</p>
              <p>
                Välj ett brott och gissa hur många fall som utreddes och hur många som faktiskt blev uppklarade.<br /><br />Lycka till - det är svårare än vad det låter!
              </p>
              <GroupedSelect questions={questions} onSelect={startGameWithId} />
            </div>
          )}
        </Container>
        <Footer />
        {isDone ? (
          <Typography variant="body" sx={{ fontSize: 14, pb: 4 }}>
            <Box sx={{ pt: 1, pl: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hideUserGuesses}
                    onChange={(e) => setHideUserGuesses(e.target.checked)}
                    color="primary"
                    
                  />
                }
                label="Göm användargissningar"
              />
            </Box>
            </Typography>
        ) : ''}
      </Container>
    </ThemeProvider>
  );
}

export default App;
