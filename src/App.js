import React, { useState } from 'react';
import { FormControl, Input, makeStyles } from '@material-ui/core';

import './App.css';
import Converter from './services/converter';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  header: {
    marginTop: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();
  const [roman, setRoman] = useState();
  const [arabic, setArabic] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Roman-Arabian numbers converter
        </p>    
      </header>
      <main>
      <FormControl className={classes.formControl}>
        <div className={classes.header}>Arabic numbers</div>        
        <Input id="converter" value={arabic} type={"number"} onChange={(e) => setRoman(Converter.toRoman(e.target.value))} />
      </FormControl>
      <FormControl  className={classes.formControl}>
        <div className={classes.header}>Roman numbers</div>
        <Input id="converter2" value={roman} onChange={(e) => setArabic(Converter.fromRoman(e.target.value))} />
      </FormControl>
      </main>
    </div>
  );
}

export default App;
