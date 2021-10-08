import {Component} from "react";
import "../App.css";


class Counter extends Component{

    constructor(){
        super()

        console.log("Constructor executed");
    }

    //state is basically an object which stores variables and their values.
    state={
        count:0,
    }

    //use regular methods and bind them
    handle_Inc=()=>{
        this.setState({count:this.state.count + 1})
    }

    handle_Dec=()=>{
        // this.state.count=this.state.count-1;
        this.setState({count:this.state.count - 1})
    }

    handle_Res=()=>{
        // this.state.count=0;
        this.setState({count:0})
    }

    render(){

        console.log("Content Rendered");

        return (
            <> 
                <h1>Counter Application Version-2</h1> 
                <div className={"container"}>
                    <h2 className={"count"}>{this.state.count}</h2>
                    <button className={"inc"} onClick={this.handle_Inc}>INCREMENT</button>
                    <button className={"res"} onClick={this.handle_Res}>RESET</button>
                    <button className={"dec"} onClick={this.handle_Dec}>DECREMENT</button>
                </div>
            </>
        )
    }
}

export default Counter;