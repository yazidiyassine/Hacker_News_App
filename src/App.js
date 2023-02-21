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

// ==> Concept of the H.O.F (H.O.C)
function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss(id) {
    const isNotId = (item) => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children} <input type="text" value={value} onChange={onChange} />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    /*
  The props, short form for properties, have all the
  values you have passed to the components when you used them in your App component.
  That way,components can pass properties down the component tree.
    */
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map((item) => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button onClick={() => onDismiss(item.objectID)} type="button">
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
/*
  // ==> Iterations with Forms and Events
  render() {
    // Destructuring Assignment
    const [list, searchTerm] = this.state;
    return (
      <div className="App">
        <form>
          <input
            onChange={this.onSearchChange}
            value="searchTerm"
            type="text"
          />
        </form>
        {this.state.list
          .filter(isSearched(this.state.searchTerm))
          .map((item) => (
            <div key={item.objectID}>
              <span>
                <a href="{item.url}">{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          ))}
      </div>
    );
  }
}
*/
// Binding
/*class ExplainBindingComponents extends Component {
  // ==> Binding using the bind() inside the constructor
  /* constructor(){
    super();
    this.OnClickMe = this.OnClickMe.bind(this)
  }
  OnClickMe() {
    console.log(this);
  } */

// ==> Auto-binding using the Arrow Function
/*onClickMe = () => {
    console.log(this);
  };
  render() {
    return (
      <button onClick={this.onClickMe} type="Button">
        Click Me!
      </button>
    );
  }
}*/

// Event Handlers
/*render() {
    return (
      <div className="App">
        {this.state.list.map((item) => {
          const onDismissHandler = () => this.onDismiss(item.objectID);

          return (
            <div key={item.objectID}>
              <span>
                <a href="{item.url}">{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                {/* <button onClick={onDismissHandler} type="button"> }
                /*<button onClick={ () => 
                  console.log(item.objectID)} type="button">
                  Dismiss
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }*/

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

//export default ExplainBindingComponents;
export default App;
