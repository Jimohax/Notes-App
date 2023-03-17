import React, { useState } from 'react'
import Counters from './Counters'
import Navbar from './Navbar'

const App2 = () => {
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
			// console.log(newCounters);
			setCounters(newCounters);
	};

	const handleDelete = (counter)=>{
		const newCounters = counters.filter(c=>c.id !== counter.id);
		setCounters(newCounters);
		// console.log(id);
	}

	const handleReset = ()=>{
		// setCounters([
		// 	{ id: 1, value: 0 },
		// { id: 2, value: 0 },
		// { id: 3, value: 0 },
		// { id: 4, value: 0 },
		// ]);
		const newCounter = counters.map(c=>{
			c.value=0;
			return c;
		});
		setCounters(newCounter);
	}
  return (
<div className="App2">
    <Navbar/>
    <Counters
    onDelete={handleDelete}
    onReset={handleReset}
    onIncrement={handleIncrement}
    counters={counters}
    />

</div>  )
}

export default App2