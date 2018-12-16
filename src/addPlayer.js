import React,{Component } from "react";



export default class AddPlayer extends Component{

	constructor(props){
		super(props);
		this.state={
			value:''

		}
	}

		handelChange =(e)=>{
			this.setState({value:e.target.value});

		}
		onChange=(e)=>{
			e.preventDefault();
			this.props.addPlayer(this.state.value);
			this.setState({value:''});
		}



	render(){
		return(
			<form onSubmit={this.onChange}>
			  <input
			  type="text"
			  value={this.state.value}
			  onChange={this.handelChange}
			  placeholder="add a player"

			  />
			  <input
			  type="submit"
			  value="Add player"
			  

			  />


			</form>





			);

	}
}