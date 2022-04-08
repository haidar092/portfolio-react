import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedCursor from "react-animated-cursor";
ReactDOM.render(
  <React.StrictMode>
      {/* <AnimatedCursor
        innerSize={6}
        outerSize={20}
        color="249, 202, 36"
        outerAlpha={0.2}
        innerScale={2}
        outerScale={5}
       style={{zIndex:10000}}
      /> */}

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
