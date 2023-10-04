import React, { useState } from 'react';
import { Button, Box } from "@mui/material";
import Grid from '@mui/material/Grid';

const Share = ({ questionId, newGame }) => {
    const [isCopied, setIsCopied] = useState(false);
    const baseUrl = window.location.origin;
    const shareUrl = `${baseUrl}/krimquiz?id=${questionId}`;

    const handleCopyClick = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <Box sx={{ flexGrow: 1, pt: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Button sx={{ width: "100%" }} variant="contained" color="primary" onClick={handleCopyClick}>
                        {isCopied ? 'Kopierat!' : 'Kopiera länk'}
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button sx={{ width: "100%" }} variant="contained" color="primary" onClick={newGame}>
                        Nytt brott
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Share;