import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App2 from "./components/App2";

// import App from "./App";
// import Counters from "./components/Counters";
import store from "./store/ReduxStore";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path = '*' element = {<App2/>} />
			</Routes>
		</BrowserRouter>
	</Provider>,

	document.getElementById("root")
);
