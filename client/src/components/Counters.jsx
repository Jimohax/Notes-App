import React, { useState } from "react";
import Counter from "./Counter";

const Counters = () => {
	const [counters, setCounters] = useState([
		{ id: 1, value: 2 },
		{ id: 2, value: 0 },
		{ id: 3, value: 0 },
		{ id: 4, value: 0 },
	]);

	
	const handleIncrement = (counter) => {
			const newCounters = [...counters];
			const index = counters.indexOf(counter);
			newCounters[index] = {...counter};
			newCounters[index].value ++;
			console.log(newCounters);
			setCounters(newCounters);
	};

	const handleDelete = (id)=>{
		// const counters = counters.filter(c=>c.id !== id);
		// setCounters({counters: counters});
		console.log(id);
	}
	return (
		<div className="counters">
			{counters.map((counter, index) => 
				 (
					<Counter
						key={index}						
						counter={counter}
						selected={true}
						handleIncrement={handleIncrement}
						onDelete={handleDelete}
					>
						<h4>Counter #{counter.id}</h4>
					</Counter>
				)
			)}
		</div>
	);
};

export default Counters;
