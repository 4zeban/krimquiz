import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from "@mui/material";

const GroupedSelect = ({ questions, onSelect }) => {

    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [filterText, setFilterText] = useState("");

    const groupQuestionsByKategori = (questions) => {
        return questions ? questions.reduce((acc, question) => {
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

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const filteredQuestions = questions ? questions.filter((question) =>
        question.underkategori.toLowerCase().includes(filterText.toLowerCase())
    ) : [];

    return (
        <div>
            <FormControl sx={{ pb: 1, m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">Brott</InputLabel>
                <Select onChange={(e) => handleSelectQuestion(e.target.value)} native defaultValue="-1" id="grouped-native-select" label="Grouping">
                    <option value="-1">Slumpmässigt brott</option>
                    {filteredQuestions.length > 0 ? Object.entries(groupQuestionsByKategori(filteredQuestions)).map(([kategori, underkategoriQuestions]) => (
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
            <TextField
                label="Filtrera brott i listan"
                variant="outlined"
                fullWidth
                sx={{ pb: 1, m: 1, minWidth: 120 }}
                value={filterText}
                onChange={handleFilterChange}
            />
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
