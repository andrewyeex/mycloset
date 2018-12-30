import * as React from 'react';
import './App.css';
import Main from './container/main/main';

export default class App extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
        <Main />
      </div>
    );
  }
}
