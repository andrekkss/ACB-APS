import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
  state = {
    open: true,
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{  vertical: 'bottom', horizontal: 'right' }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.props.msg}</span>}
        />
      </div>
    );
  }
}

export default PositionedSnackbar;