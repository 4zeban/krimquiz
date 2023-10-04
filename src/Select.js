import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";

const GroupedSelect = ({ questions, onSelect }) => {

    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    const groupQuestionsByKategori = (questions) => {
       return  questions ? questions.reduce((acc, question) => {
            (acc[question.kategori] = acc[question.kategori] || []).push(question);
            return acc;
        }, {}) : [];
    }

    const handleSelectQuestion = (questionId) => {
        // Handle selection and update the state
        setSelectedQuestionId(questionId);
    };

    const handleClick = () => {
        onSelect(selectedQuestionId)
    };

    return (
        <div>
            <FormControl sx={{ pb:1, m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">Brott</InputLabel>
                <Select onChange={(e) => handleSelectQuestion(e.target.value)} native defaultValue="-1" id="grouped-native-select" label="Grouping">
                    <option value="-1">Slumpmässigt brott</option>
                    {questions ? Object.entries(groupQuestionsByKategori(questions ?? [])).map(([kategori, underkategoriQuestions]) => (
                        <optgroup key={kategori} label={kategori}>
                            {underkategoriQuestions.map((question) => (
                                <option key={question.id} value={question.id}>
                                    {question.underkategori}
                                </option>
                            ))}
                        </optgroup>
                    )) : ""}
                </Select>
            </FormControl>
            <Button variant="contained" sx={{ width: "100%" }} color="primary" onClick={handleClick}>
                Välj
            </Button>
            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
            </FormControl> */}
        </div>
    );
};

export default GroupedSelect;