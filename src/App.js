import React, {useState} from 'react';
import './App.css';

import Search from './Search';

function App() {
  const [dark, setDark]= useState(false);
    const change = (e)=>{        
        if(dark===false)
        {
            setDark(true);
            console.log(dark);
        }
        else {
            setDark(false);
            console.log(dark);
        }
    }
  return (
    <div className="App">
      <div className={dark? "main lighttheme" : "main darktheme"}>
          <div className="app_header">
            <Search/>
            <div className="toggle toggle-daynight">
			        <input onClick ={change} type="checkbox" id="toggle-daynight" class="toggle-checkbox"/>
			        <label class ="toggle-btn" for="toggle-daynight"><span class="toggle-feature"></span></label>
		        </div> 
          </div>
                   
      </div>
    </div>
  );
}

export default App;
