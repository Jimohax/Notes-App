import React from "react";
import "./Counter.css";

const Counter = ({counter, onDelete, onIncrement}) => {
    
const {value} = counter;

	return (
		<div className="counter">
            
			
			<span className="c-tag" style={{backgroundColor: value==0? "yellow":"rgb(15, 92, 234)", color:value==0? "black":"white" }}>{value == 0? "Zero": value}</span>
			<button className="c-button" onClick={()=>onIncrement(counter)}>
				Increment
			</button>
            <button className="c-button" style={{backgroundColor: "red", marginLeft: "1rem"}} onClick={()=>onDelete(counter)}>Delete</button>
		</div>
	);
};

export default Counter;
