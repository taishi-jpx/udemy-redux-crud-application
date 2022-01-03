import React from 'react';

const App = () =>{
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) =>{
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) =>{
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// デフォルトを設定可能
User.defaultProps = {
  age: 1,
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
