import React ,{ Component,useEffect } from 'react';
import Player from "./player";
import State from "./state";
import AddPlayer from "./addPlayer";
import StopWatch from "./stopwatch";






function Header  (props)  {
  return (
    <header>
     <State players={props.players}/>
      <h1>{ props.title }</h1>
      <StopWatch/>
      
    </header>
  );
}






class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    players: [
      {
        name: "Mostafa",  score: 0,    id: 1
      },
      {
        name: "ALicja", score: 0, id: 2
      },
      {
        name: "James", score: 0,  id: 3
      },
      {
        name: "Mekawy",score: 0, id: 4
      }
    ]
  };

  }


  //player id counter
  prevId=4;
   
  handleChangeScore =(index,delta)=>{
   this.setState((prevState) => ({
  
  score: prevState.players[index].score += delta}));
 }

   
   handleAddPlayer=(value)=>{
  
    let copyPlayers=this.state.players.slice();
    copyPlayers.push({
      name:value,
      score:0,
      id:this.prevId+=1

      });
    this.setState({players:copyPlayers});

     
   }
   //different method of adding player 
   /*handleAddPlayer=(value)=>{
   this.setState({
    players:[
    ...this.state.players,
    {
      name:value,
       score:0,
      id:this.prevId+=1

    }
    ]
   });    
   
   }*/
   
   
 handelHighScore=()=>{
  let highScore=this.state.players.map(p=>p.score);
let highest= Math.max(...highScore);
      if (highest){
        return highest;
      }
      return null;


 }
 

  handleRemovePlayer = (id) => {
    this.setState( 
       {players: this.state.players.filter(p => p.id !== id)});
  }

  render() {
    const isHighScore=this.handelHighScore();
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}

        />
  
        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()} 
            index={index}
            highScore={isHighScore===player.score}
            changeScore={this.handleChangeScore}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayer 
        addPlayer={this.handleAddPlayer}
        />
      </div>

    );
  }
}

export default App;
