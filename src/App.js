import React, { Component } from 'react'
import './App.css';
import Room from './components/Room.js';
import AddRoom from './components/AddRoom.js';
import HomePage from './components/HomePage.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class App extends Component {

  state={
    rooms:[{name:'Ofir', type:'Bedroom', color:'#CBB6D6', products:[{type:"Lamp", turn:"red"}, {type:"Stereo System", turn:"green"}]},{name:'Eagle', type:'Kitchen', color:'#ABB980', products:[{type:"Air-Conditioner", turn:"red"}]}],
    currentRoom:{},
    currentIndex:-1
  }

  setRoom=(name, type, color)=>{
    this.setState({rooms:[{name:name, type:type, color:color, products:[]},...this.state.rooms]})
  }

  roomClicked=(i)=>{
    this.state.rooms.map((element, index)=>{
      if(index===i)
        this.setState({currentIndex:index, currentRoom:element})
    })
  }

  setProducts=(products)=>{
  const newRooms = this.state.rooms.slice()
  newRooms[this.state.currentIndex].products = products
  this.setState({rooms: newRooms})
}

  render() {
    return (
      <div className="App">
        <Router>
        <Link to='/'><h1>Smart House</h1></Link>
        <Switch>
          <Route exact path='/' component={()=>{return <HomePage rooms={this.state.rooms} roomDetails={this.roomClicked}/>}}/>
          <Route exact path='/addroom' component={()=>{return <AddRoom add={this.setRoom}/>}} />
          <Route exact path='/room' component={()=>{return <Room rooms={this.state.rooms} room={this.state.currentRoom} products={this.setProducts}/>}} />
        </Switch>
        </Router>
      </div>
    )
  }
}
