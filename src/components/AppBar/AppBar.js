import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = ({ filteredDataCount, userFullName }) => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            Filtered: {filteredDataCount}
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Typography variant="h6" noWrap component="div">
            {userFullName}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
