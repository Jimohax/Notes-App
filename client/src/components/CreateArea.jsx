import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "@mui/material/Zoom";
import { uploadPost } from "../Actions/UploadAction";

function CreateArea(props) {
	const [isExpanded, setExpanded] = useState(false);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const { user } = useSelector((state) => state.AuthReducer.authData);
	const title = useRef();
	const content = useRef();
  const dispatch = useDispatch()

	// className();

	// function className() {
	// 	let className = "btn btn-button";
	// 	className += isExpanded ? "primary" : "secondary";
	// }

	 
	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}



	function submitNote(event) {
		props.onAdd(note);

		const newPost = {
			userId: user._id,
			title: title.current.value,
      content: content.current.value
		};
		console.log(newPost);

		try {
			dispatch(uploadPost(newPost))
		  } catch (error) {
			console.log(error);
		  }
		  

		setNote({
			title: "",
			content: "",
		});
		event.preventDefault();
	}

	function expand() {
		setExpanded(true);
	}

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						ref={title}
						required
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}

				<textarea
        ref={content}
        required
					name="content"
					onClick={expand}
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
