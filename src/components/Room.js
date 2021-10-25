import React, { Component } from 'react'

export default class Room extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rooms:props.rooms,
            room:props.room,
            flag:false,
            products:props.room.products,
            type:"",
            color:"red"
        }
    }
    
    setType=(type)=>{
        this.setState({type:type.target.value})
    }

    checkStereo=()=>{
        let f=[false]
        if(this.state.type==="Stereo System"){
            f=this.state.products.map((product, i)=>{
                if(product.type==="Stereo System")
                {
                    alert("Can't add more than one Stereo System each room")
                    return true
            }
            else
                return false
        })}
        if(f.includes(true))
            return true
        else
            return false
    }

    checkBath=()=>{
        if(this.state.type==="Water Heater" && this.state.room.type!=="Bath"){
            alert("Can't add Water Heater into other rooms but Bath")
            return true
        }
        return false
    }

    addProduct=()=>{
        if(this.state.type!==""){
            if(!this.checkStereo() && !this.checkBath())
            {
            let newProducts=[{type:this.state.type, turn:"red"}, ...this.state.products]
            if(newProducts.length===6){
                alert("Can't add more than 5 products each room")
                return
            }
            this.setState({products:newProducts})
            this.props.products(newProducts);
        }
        }
        else
            alert("ERROR")
    }

    show=()=>{
         if(this.state.flag){
            return(
                <div>
                    <br/><br/><br/><br/>
                <select class="s" onChange={this.setType}>
                    <option disabled selected hidden>Choose a Product</option>
                    <option>Air-Conditioner</option>
                    <option>Water Heater</option>
                    <option>Stereo System</option>
                    <option>Lamp</option>
                </select> 
                <br/><br/>
                
                <div class="button_cont"  id="example_d" align="center" onClick={this.addProduct}><b>Add</b></div>
                </div>                     
            )
        } 
    }

    turnClick=(product, i)=>{
        let newProducts=[...this.state.products]
        if(product.turn==="green")
            newProducts[i].turn="red"
        else
            newProducts[i].turn="green"
        this.setState({products:newProducts})
        this.props.products(newProducts);
    }

    render() {
        return ( 
           <div>
                <h2>Room Name: {this.state.room.name}</h2>
                <h2>Room Type: {this.state.room.type}</h2>
                <br/>
                {this.state.products.map((product, i)=>{
                  return (
                    <div onClick={()=>{this.turnClick(product, i)}} style={{width:100, fontSize:30, display:"inline", margin:10, padding:6, color:product.turn}}><a id="example_d1" style={{color:product.turn}}><b>{product.type}</b></a></div>
                  )})}
                <br/><br/><br/><br/>
                <div class="button_cont" id="example_d" align="center" onClick={()=>{this.setState({flag:true})}}><b>Add a Product</b></div> 
                {this.show()}
           </div>
        )
    }
}
