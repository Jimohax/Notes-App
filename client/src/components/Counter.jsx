import React from "react";
import "./Counter.css";

const Counter = (props) => {
    
const {value} = props.counter;
	

	return (
		<div className="counter">
            
			{props.children}
			<span className="c-tag" style={{backgroundColor: value==0? "yellow":"rgb(15, 92, 234)", color:value==0? "black":"white" }}>{value == 0? "Zero": value}</span>
			<button className="c-button" onClick={()=>props.onIncrement(props.counter)}>
				Increment
			</button>
            <button className="c-button" style={{backgroundColor: "red", marginLeft: "1rem"}} onClick={()=>props.onDelete(props.counter)}>Delete</button>
		</div>
	);
};

export default Counter;
