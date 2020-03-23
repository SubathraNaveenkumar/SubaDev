import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Login from './components/Login'
import Localdata from './components/Localdata';

// import Teachers from './components/Teachers';


function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        <Localdata/>
        {/* <Teachers/> */}
    </div>
  );
}

export default App;
