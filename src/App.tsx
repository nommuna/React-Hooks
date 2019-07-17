import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/Bar/Bar';
import Board from './components/Board/Board';
import BoardFetch from './components/Card/BoardFetch';

const App: React.FC = () => {
  return (
    <Fragment>
      <MenuBar></MenuBar>
      <Board></Board>
      {/* <BoardFetch></BoardFetch> */}
    </Fragment>
  );
}

export default App;
