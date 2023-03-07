import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Note from "../../components/Note";
import CreateArea from "../../components/CreateArea";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Actions/PostAction";
import './Home.css'

// function Home() {
// 	const [notes, setNotes] = useState([]);

// 	function addNote(newNote) {
// 		setNotes((prevNotes) => {
// 			return [...prevNotes, newNote];
// 		});

// 	}

// 	function deleteNote(id) {
// 		setNotes((prevNotes) => {
// 			return prevNotes.filter((noteItem, index) => {
// 				return index !== id;
// 			});
// 		});
// 	}

// 	return (
// 		<div>
// 			<Header />
// 			<CreateArea onAdd={addNote} />
// 			{notes.map((noteItem, index) => {
// 				return (
// 					<Note
// 						key={index}
// 						id={index}
// 						title={noteItem.title}
// 						content={noteItem.content}
// 						onDelete={deleteNote}
// 					/>
// 				);
// 			})}
// 			<Footer />
// 		</div>
// 	);
// }

function Home() {
	const [notes, setNotes] = useState([]);
	const dispatch = useDispatch();
	const { user, loading } = useSelector(
		(state) => state.AuthReducer.authData
	);
	const { posts } = useSelector((state) => state.PostReducer);

	useEffect(() => {
		dispatch(getPost(user._id));
	}, []);

	function addNote(newNote) {
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<div className="welcome">
			<span>Welcome {user.username }</span>
			</div>
			
			<CreateArea onAdd={addNote} />
			{loading
				? "Fetching Posts..."
				: posts.map((noteItem, index) => {
						return (
							<Note
								key={index}
								id={index}
								title={noteItem.title}
								content={noteItem.content}
								onDelete={deleteNote}
							/>
						);
				  })}
			<Footer />
		</div>
	);
}

export default Home;
