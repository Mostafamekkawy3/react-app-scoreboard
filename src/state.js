import React from 'react';



export default function State(props){
let totalPlayer=props.players.length;

let totalScore=props.players.reduce((total,score)=>{
 return total+=score.score;


},0);

	return(
		<table className="stats">
			  <tbody>
			    <tr>
			      <td>Players:</td>
			      <td>{totalPlayer}</td>
			    </tr>
			    <tr>
			      <td>Total Points:</td>
			      <td>{totalScore}</td>
			    </tr>
			  </tbody>
	   </table>



		);

}