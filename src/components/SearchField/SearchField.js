import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

export default function CustomizedInputBase({
  searchFilterHandler,
  searchvalueGetter,
  searchValueSetter,
}) {
  return (
    <div className="search-box">
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          marginRight: '10px',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for Title"
          inputProps={{ 'aria-label': 'Search' }}
          value={searchvalueGetter}
          onChange={(e) => searchValueSetter(e.target.value)}
        />
      </Paper>
      <Button onClick={searchFilterHandler} variant="outlined">
        Submit
      </Button>
    </div>
  );
}
