import React,{ Component } from 'react';

const App = () => <Counter></Counter>

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count:0}
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    //状態変更のお決まりメソッド
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    //状態変更のお決まりメソッド
    this.setState({count: this.state.count - 1})
  }

  render() {
      return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// import PropTypes from 'prop-types'

// const App = () =>{
//   const profiles = [
//     {name: "Taro", age: 10},
//     {name: "Hanako", age: 1 },
//     {name: "NoName", age: 3 }
//   ]
//   return (
//     <div>
//       {
//         profiles.map((profile, index) =>{
//           return <User name={profile.name} age={profile.age} key={index} />
//         })
//       }
//     </div>
//   )
// }

// const User = (props) =>{
//   return <div>Hi, I am {props.name}, and {props.age} years old!</div>
// }

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// // デフォルトを設定可能
// User.defaultProps = {
//   age: 1,
// }

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
