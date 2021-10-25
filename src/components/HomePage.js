import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                  {this.props.rooms.map((room, i)=>{
                  return (
                    <Link to='/room'><div onClick={()=>this.props.roomDetails(i)} style={{width:100, fontSize:30, display:"inline", margin:10, padding:6, color:room.color}}><a id="example_d1" href="add-website-here" target="_blank" rel="nofollow noopener" style={{color:room.color}}><b>{room.name}</b></a></div></Link>
                  )})}
                  <br/><br/><br/><br/><br/>
                 <Link to='/addroom'><div class="button_cont"  id="example_d" align="center"><b>+</b></div></Link>
            </div>   
        )
    }
}
