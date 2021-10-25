import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roomName:"",
            roomType:"",
            roomColor:"#80706D"
        }
    }
    
    setName=(name)=>{
        this.setState({roomName: name.target.value})
    }

    setType=(type)=>{
        this.setState({roomType:type.target.value})
    }
 
    setColor=(color)=>{
        this.setState({roomColor: color.target.value})
    }

    createRoom=()=>{
        if(this.state.roomType!=="" && this.state.roomName.length>0)
            this.props.add(this.state.roomName, this.state.roomType, this.state.roomColor);
        else
            alert("ERROR")
    }

    render() {
        return (
            <div>
                <select onChange={this.setType}>
                    <option disabled selected hidden>Choose Type</option>
                    <option>Bedroom</option>
                    <option>Bath</option>
                    <option>Kitchen</option>
                </select><br/><br/><br/>
                <input onChange={this.setName} placeholder="Name" maxlength="5" style={{color:"#80706D", backgroundColor:"transparent", fontSize:20, borderColor:"#80706D", padding:6}}></input><br/><br/>
               {/*  <input onChange={this.setColor} placeholder="Color" style={{color:"#80706D", backgroundColor:"transparent", fontSize:20, borderColor:"#80706D", padding:6}}></input><br/><br/><br/> */}
                Color: <input onChange={this.setColor} type="color" name="favcolor" value={this.state.roomColor}></input><br/><br/><br/>
                <Link to='/'><div class="button_cont"  id="example_d" align="center" onClick={this.createRoom}><b>Create</b></div></Link>
            </div>
        )
    }
}
