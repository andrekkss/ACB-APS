import React from 'react';
import * as style from './bar.module.css';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar() {

  return (
    <div className="Bar">
        <Typography className="Bar-header" variant="h2" color="inherit">
            Titulo
        </Typography>
    </div>
  );
}

export default SimpleAppBar;