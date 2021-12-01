import React from 'react';
import './Main.scss';
import Form from './Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Main = () => {
  return (
    <div className='App'>
      <div className='App__header'>
        <h1 className='App__title'>Cook World</h1>
        <div style={{width:160,display:'flex',justifyContent:'space-between',margin:'0 auto'}}>
          <Link style={{textDecoration:'none'}}to="/">Home</Link>
          <Link style={{textDecoration:'none'}}to="/about">About</Link>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Main;
