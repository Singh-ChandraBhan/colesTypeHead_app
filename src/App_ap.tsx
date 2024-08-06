import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from "axios";

import options from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';


const App_api = () => {
//  const [selected, setSelected] = useState([]);
  const [stateData, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    //   .catch(error => console.error(error));
    getData("https://jsonplaceholder.typicode.com/todos");
  }, []);
  
  const getData = async (url) => {
    try {const response = await axios.get(url);
      setData(response);
      console.log(response);} catch (error) {console.log(error);}};

  return (
   <div>
    <div className="Title"><h1>Coles</h1>
      <div className="Title-Subtitle">Front End Codding Challenge</div>   
     </div>
    
    {/* <label>Select State of USA</label>
    
    <Typeahead className="search-box"
      id="serach"
      onChange={setSelected}
      options={options}
      placeholder="States of USA..."
      selected={selected}
    /> */}
 <Typeahead className="search-box"
      id="serach_api"
      labelKey="title"   
      onChange={setSelected}   
      options={stateData}
      placeholder="select user..."
      selected={selected}
    />


</div>
  );
};

export default App_api;
