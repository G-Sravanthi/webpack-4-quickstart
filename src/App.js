import React, { Component } from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader';
import { MalibuSprites, MalibuIcon } from '@heroku/react-malibu'

const App = () => {
  return (
    <div>
      <MalibuSprites />
      <p>React here! FOOOO</p>
      <p><MalibuIcon name='add-badge-16' size={20} fillClass='dark-gray' extraClasses='foo bar baz'/></p>
    </div>
  );
};

export default hot(module)(App);

ReactDOM.render(<App />, document.getElementById("app"));
