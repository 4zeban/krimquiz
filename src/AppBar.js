import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useTheme } from '@mui/material/styles';

function ResponsiveAppBar() {
  
  const theme = useTheme();
  
  return (
    <AppBar position="static">
      <Container disableGutters sx={{ pl:1, borderBottom: "5px solid", borderBottomColor: theme.palette.secondary.main}}>
        <Toolbar disableGutters sx={{ minHeight: { xs: 42, md: 42, lg: 42 }}}>
          <BarChartIcon sx={{ mr: 0.65 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              fontWeight: 400,
            }}
          >
            krimquiz
          </Typography>      
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
