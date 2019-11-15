import React from 'react';
import logo from './logo.svg';
import './App.css';
import PRForm from './components/PRForm';
import { Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Typography variant="h2">
        MLN Power Rankings Form
      </Typography>
        <PRForm />
      </header>
    </div>
  );
}

export default App;
