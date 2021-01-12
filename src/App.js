import React, { Component } from 'react';
import './App.css';
// import {useState} from 'react';

// function App() {
//   const [change, setChange] = useState(true);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {
//           change === true ? <p>Hello Josh!</p> : <p>Changed</p>
//         }
//         <button onClick = {(()=>(setChange(!change)))}>Change Text</button>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="App">
       {
         this.state.monsters.map((monster) => <h3 key={monster.id}>{monster.name}</h3>)
       }
      </div>
    );
  }
}

export default App;