import React, { Component}  from 'react';







export default class StopWatch extends Component{
		constructor(props){
		super(props);
		this.state={
			isRunning:false,
			elapsedTime:0,
			previousTime:0,
		}
	}
	componentDidMount(){
        this.intervalID = setInterval(()=> this.tick(), 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick = () =>{
        if (this.state.isRunning){
            const now = Date.now();
            this.setState((prevState)=>({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - 
                this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState(( prevState ) =>({ 
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning){
            this.setState({
                previousTime: Date.now()
            });
        }
    }
    handleReset = () => {
        this.setState({
            elapsedTime: 0

        });

    }
	

	
render()

{
	return(	

	<div className="stopwatch">
		  <h2>Stopwatch</h2>
		  <span className="stopwatch-time">{ Math.floor(this.state.elapsedTime/1000) }</span>
		  <button onClick={this.handleStopwatch}>{this.state.isRunning ? "stop":"start"}</button> 
		  <button onClick={this.handleReset}>Reset</button>
    </div>
);}

}