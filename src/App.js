import { Button } from 'react-bootstrap';
import React, { Component } from 'react'
import './App.css'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0,
      Person: {
        fullName : "Hmila Mohamed Aymen",
        bio : "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript",
        imgSrc : "avatar.jpg",
        profession : "IT Developer"
      },
      show :false,
    };
    
  }

  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  
  toggle=()=>{
    this.setState({ show:!this.state.show})
  }
  componentDidMount() {
    setInterval(
      () => {this.increment()},
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.count);
  }
  render() {
    return (
      <div>
         <Button variant='primary' onClick={this.toggle}>Show</Button>
       {this.state.show ?  <><h1>{this.state.Person.fullName}</h1> 
       <img src={this.state.Person.imgSrc} id="avatar" />
       <p>{this.state.Person.bio}</p>
       <h3> {this.state.count}</h3>
       
        </>
       :null}
        
      
       
      </div>
    )
  }
}

