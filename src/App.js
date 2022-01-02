import React from 'react';

const App = () =>{
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () =>{
  return <div>Meow!</div>
}

// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I'm clicked!")}} />
//       </React.Fragment>
//     );
//   }
// }

// class App extends Component {
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello,world!!"
//     )
//   }
// }

export default App;
