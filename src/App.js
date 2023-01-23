import "./App.css";
import React, { Component } from "react";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
    onDismiss(id){
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList})
    }

  render() {
    return (
      <div className="App">
        {this.state.list.map((item) => (
          <div key={item.objectID}>
            <span>
              <a href="{item.url}">{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={()=>this.onDismiss(item.objectID)} type="button">
                  Dismiss
                </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

/* function App() {
  class Developper{
    constructor(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    getName(){
      return this.firstname + ' ' + this.lastname;
    }
  }
  const dev = new Developper("Yassine", "Yazidi");
  return(
    console.log("Hi, ",dev.getName())
  );

} */
/* const list = [
    {
      title: "React",
      url: "https://facebook.github.io/react/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://github.com/reactjs/redux",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]; */
/*  return (
    <div className="App">
      {/* {list.map(function (item) { }*/
/* Using the arrow function */
/* {list.map((item) => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
      ))}
    </div>
  ); */

/*  const welcome = "Welcome to the new react App";
  function greetUser(user) {
    if (user) {
      return <h3>Hello, {formatUser(user)}</h3>;
    } else {
      return <h2>Hello, stranger!</h2>;
    }
  }
  var user = { firstname: "Yassine", lastname: "Yazidi", bd: 2000 };
  function formatUser(user) {
    return (
      user.firstname +
      " " +
      user.lastname +
      " your age is : " +
      (new Date().getFullYear() - user.bd)
    );
  } */

export default App;
