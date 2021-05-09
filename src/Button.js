import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

function PrimaryButton(props) {
  return (
    <div className="Button">
      <Button
        variant="contained"
        color="primary"
        onClick={onTap}
        startIcon={<SaveIcon />}
      >
        Button{props.num}
      </Button>
    </div>
  );
}

function onTap() {
  alert('Clicked');
}

export default PrimaryButton;
