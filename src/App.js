import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={name:"Achint",count:0};
  }

  handleClick_Name(name) {
    this.setState({name:name});
  }
  handleClick_Count(name) {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>

          <div>
            <header className="App">
              <img src={logo} className="App-logo" alt="logo of react"/>
            </header>
            <h3>Learning react </h3>
          </div>

          <div>

            <h2>Hello, {this.state.name}!</h2>

            {/* <button onClick={()=>{console.log("Awesome")}}>Awesome</button>

            <button onClick={()=>{console.log("Achint")}}>Achint</button> */}

            <button onClick={()=>{this.handleClick_Name("Awesome")}}>Awesome</button>

            <button onClick={()=>{this.handleClick_Name("Achint")}}>Achint</button>

          </div>

          <div>
          <h1>
            {this.state.count}
          </h1>
          {/* Add an onClick event in the <button> tag */}
          <button onClick={() => {this.handleClick_Count()}}>+</button>
          </div>
          

      </div>
    );
  }
}

export default App;
