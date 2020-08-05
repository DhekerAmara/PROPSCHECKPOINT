import React from 'react';
import './App.css';
import Profile from './profile/Profile.js'


function App() {

  return (
    
    <div className="App">
     
     <Profile fullname="Dheker AMARA" bio="Mechatronics Engineer" profession="PROJECT MANAGER" > 
     <img style={{height: '318px', width: '318px'}} src="/photo1.jpg" alt="appareil" />
     </Profile>
    
    </div>
  );
}

export default App;
