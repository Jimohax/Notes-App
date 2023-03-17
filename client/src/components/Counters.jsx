import React from "react";
import Counter from "./Counter";
import './Counter.css'

const Counters = ({counters, onReset,onIncrement, onDelete}) => {

	return (
		<div className="counters">
			<button className="c-button r-button"  onClick={onReset}>Reset</button>
			{counters.map((counter, index) => 
				 (
					<Counter
						key={index}						
						counter={counter}
						selected={true}
						onIncrement={onIncrement}
						onDelete={onDelete}
						
					/>
						
					
				)
			)}
		</div>
	);
};

export default Counters;
