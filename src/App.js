import React, { Component } from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postValues: ["It's a lovely day!", "Hello World!", "I'm lonely"],
      newPostValue: "",
    };
  }

  render() {
    return (
      <div>
        <div style={{marginBottom:"15px"}}>
          <input type="text" size="60" value={this.state.newPostValue} onChange={evt => this.updateInputValue(evt)}></input><button onClick={() => this.addPost()}>POST</button>
        </div>
        {this.state.postValues.map(function(name) {
          return <div style={{marginBottom:"10px"}}><Post value={name}/></div>;
        })}
      </div>
    );
  }

  updateInputValue(evt) {
    this.setState({
      newPostValue: evt.target.value,
    });
  }

  addPost() {
    let valuesTemp = this.state.postValues;
    valuesTemp.push(this.state.newPostValue);
    this.setState({
      postValues: valuesTemp,
    });
  }
}


class Post extends React.Component {
  render() {
    return (
      <div style={{height:"100px", width:"500px", border: "2px solid lightblue", borderRadius:"5px"}}>
        <div style={{height:"75px", verticalAlign:"middle"}}>{this.props.value}</div>
        <div style={{border: "2px solid gray", borderRadius:"5px"}}>
          <span style={{marginRight:"10px"}}><a href="">Like</a></span>
          <span style={{marginRight:"10px"}}><a href="">Comment</a></span>
          <span><a href="">Share</a></span>
        </div>
      </div>
    );
  }
}

export default App;
