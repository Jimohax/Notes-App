import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// Get a user

export const getUser = async (req, res) => {
	const id = req.params.id;

	try {
		const user = await UserModel.findById(id);``

		if (user) {
			const { password, ...otherdetails } = user._doc;
			res.status(200).json(otherdetails);
		} else {
			res.status(404).json("No such user exists");
		}
	} catch (error) {
		res.status(500).json("error");
	}
};

// Update a user

export const updateUser = async (req, res) => {
	const id = req.params.id;

	const { currentUserId, currentUserAdminStatus, password } = req.body;

	if (id === currentUserId || currentUserAdminStatus) {
		try {
			if (password) {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(password, salt);
			}
			const user = await UserModel.findByIdAndUpdate(id, req.body, {
				new: true,
			});
			res.status(200).json(user);
		} catch (error) {
			res.status(500).json("error");
		}
	} else {
		res.status(403).json("Access Denied, This is not your profile");
	}
};

// Delete User
export const deleteUser = async (req, res) => {
	const id = req.params.id;

	const { currentUserId, currentUserAdminStatus } = req.body;

	if (id === currentUserId || currentUserAdminStatus) {
		try {
			await UserModel.findByIdAndDelete(id);
			res.status(200).json("User deleted successfully");
		} catch (error) {
			res.status(500).json("error");
		}
	} else {
		res.status(403).json("Access Denied, This is not your Note");
	}
};

