import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cockpit,{RandomClass as First} from './cockpit/Cockpit.component';
import Server from './servers/Servers.component';


function App() {
  let name = 'Deepak';
  let a =20;
  return (        
        <div>
          Hola {name}!
          {/* Hola {compare({a})}! */}
          {/* Hola {renderName()}! */}
          <Cockpit/>
          {/* <RandomClass/> */}
          {/* <First/> */}
          <Server/>
        </div>    
  );
}

function renderName(){
  return 'Akash';
}

function compare(a){
  if(a>20)
    return 'greter';
  else
  return 'not greter';
}

export default App;
