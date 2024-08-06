import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
// import ReactDOM from 'react-dom';

import options from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';


const App = () => {
  const [selected, setSelected] = useState([]);

  return (
   <div>
    <div className="Title"><h1>Coles</h1>
      <div className="Title-Subtitle">Front End Codding Challenge</div>   
     </div>
    
    <label>Select State</label>
    
    <Typeahead className="search-box"
      id="serach"
      onChange={setSelected}
      options={options}
      placeholder="Choose a state..."
      selected={selected}
    />
    </div>
  );
};

export default App;
