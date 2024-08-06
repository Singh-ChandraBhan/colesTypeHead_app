import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import options from './data';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';


const App = () => {
  const [selected, setSelected] = useState([]);
  const [stateData, setData] = useState([]);
  

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/todos');
  }, []);

  const getData = async (url) => {
    try {const response = await axios.get(url);
       setData(response.data);
       console.log(response.data);} catch (error) {console.log(error);}};


  return (
   <div>
    <div className="Title"><h1>Coles</h1>
      <div className="Title-Subtitle">Front End Codding Challenge</div>   
     </div>
    
    <label>Select State of USA From Json</label>
    
    <Typeahead className="search-box"
      id="serach"
      onChange={setSelected}
      options={options}
      placeholder="States of USA..."
      selected={selected}
    />
<label>Select User with API </label>
 <Typeahead className="search-box"
      id="serach_api"
      labelKey="title"   
      onChange={setData}   
      options={stateData}
      placeholder="select user..."
      // selected={stateData}
    />

</div>
  );
};

export default App;
