import React from 'react';
import './bar.css';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar() {
  return (
    <div className='Bar'>
        <Typography variant="h2" color="inherit">
            Titulo
        </Typography>
    </div>
  );
}

export default SimpleAppBar;