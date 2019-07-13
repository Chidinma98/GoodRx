import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  

  return (
    <div>m</div>


//     <form onChange = {this.handleChange} onSubmit = {this.handleSubmit}className={classes.container} noValidate autoComplete="off">

// <TextField
//         id="outlined-helperText"
//         name="doctor"
//         label="Doctor Name"
//         defaultValue="e.g John Smith"
//         className={classes.textField}
//         helperText="Enter Doctor full First and Last name"
//         margin="normal"
//         variant="outlined"
//       />
   
//       <TextField
//         name ="description"
//         id="outlined-multiline-static"
//         label="Messages"
//         multiline
//         rows="4"
//         defaultValue=" Hello Doctor..."
//         className={classes.textField}
//         margin="normal"
//         variant="outlined"
//       />
//       <Button type = "submit"> Send </Button>
//     </form>
  );
}







