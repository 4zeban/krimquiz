import React from "react";
import { Box, Link, Typography, CssBaseline, Container, Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    const Copyright = () => {
        return (
            <Grid container spacing={1}>
            <Grid item xs={10}>
                <Typography variant="body2" sx={{ pt: 1, fontSize: 14 }} color="text.secondary">
                    <Link color="inherit" href="https://x.com/4zeban">
                        Azeban
                    </Link>{' (https://4zeban.github.io/krimquiz) ©'}{new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Grid>
            <Grid item xs={2} textAlign="right">
                <Typography variant="body2" sx={{ pt: 1, fontSize: 14  }} color="text.secondary">
                    <Link color="inherit" href="https://github.com/4zeban/krimquiz">
                        <GitHubIcon sx={{ fontSize: "inherit" }} />
                    </Link>
                </Typography>
            </Grid>
        </Grid>
        );
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                pt: 3,
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    minHeight: { xs: 32, md: 32, lg: 32 },
                    py: 1,

                    mt: 'auto',
                    pb: 2,
                    borderTop: "1px solid",
                    borderTopColor: "#e7e7e7",
                    borderBottom: "1px solid",
                    borderBottomColor: "#e7e7e7"
                }}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
            
        </Box>

    );
};

export default Footer;