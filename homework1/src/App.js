import React from 'react';

import { Header } from './Layouts/header.layout';
import Main from './Layouts/main.layout';
import { Foot } from './Layouts/foot.layout'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name="Application Header"></Header>
      <Main></Main>
      <Foot></Foot>
    </div>
  );
}

export default App;
