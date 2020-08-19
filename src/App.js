import React from 'react';
import './App.css';
import { Jumbotron} from 'reactstrap';

class App extends React.Component{
  render(){
    return (
      <div>
      <Jumbotron>
        <h2>Chhavi Singal</h2>
        <hr className="my-2"></hr>
        <p>Developer. Designer. Coder.</p>
      </Jumbotron>
      </div>
    )
  }
}

export default App;
