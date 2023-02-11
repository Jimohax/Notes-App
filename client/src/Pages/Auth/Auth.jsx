import React, { useState } from "react";
import Header from "../../components/Header";
// import {useDispatch} from 'react-redux'

const SignUp = () => {
	// const dispatch = useDispatch();

	const [isSignUp, setIsSignUp] = useState(true);
	const [passMatch, setPassMatch] = useState(true);
	const [data, setData] = useState({
		username:"",
		password: "",
		retypepass: ""

	})

	const handleChange = (e)=>{
		setData({
		...data,[e.target.name] : e.target.value
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();

		if (isSignUp){
			if (data.password !== data.retypepass){
				setPassMatch(false)
			}
		}
		

	}
	return (
		<div className="signup">
			<Header />
			<form action="" className="create-note sign" onSubmit={handleSubmit}>
				<h1>{isSignUp ? "Sign Up" : " Log In"}</h1>
				<input type="text" 
				placeholder="Username"
				name= "username"
				value={data.username}
				onChange={handleChange}
				/>
				<input type="text" 
				placeholder="Password"
				name= "password"
				value={data.password}
				onChange={handleChange}
				/>
				{isSignUp && (
					<input type="text" 
					placeholder="Retype Password" 
					name="retypepass"
					value={data.retypepass}
					onChange={handleChange}
					/>
				)}

				<div>
					<span style={{display: passMatch ? "none" :"block" , color: "red", marginLeft: "18rem", fontSize: "12px"}}>
						Password doesnt match
					</span>
					<span
						className="dont"
						style={{ fontSize: "12px" }}
						onClick={() => setIsSignUp((prev) => !prev)}
					>
						{isSignUp
							? "Already have an account? Login!"
							: "Don't have an account? Sign up!"}
					</span>
				</div>
				<button className="button infoButton" type="submit" >
					{isSignUp ? "Sign Up" : " Log In"}
				</button>
			</form>
		</div>
	);
};

export default SignUp;
