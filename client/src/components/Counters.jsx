import React from "react";
import Counter from "./Counter";
import './Counter.css'

const Counters = (props) => {

	return (
		<div className="counters">
			<button className="c-button r-button"  onClick={props.onReset}>Reset</button>
			{props.counters.map((counter, index) => 
				 (
					<Counter
						key={index}						
						counter={counter}
						selected={true}
						onIncrement={props.onIncrement}
						onDelete={props.onDelete}
						
					>
						<h4>Counter #{counter.id}</h4>
					</Counter>
				)
			)}
		</div>
	);
};

export default Counters;
