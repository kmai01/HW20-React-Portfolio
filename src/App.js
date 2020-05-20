import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs/>
       
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={About} />
        <Route path="/contact" component={Contact} />

      </div>

    </Router>
  
  
      
       
    
  );
}

export default App;
