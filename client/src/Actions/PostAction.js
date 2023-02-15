import * as PostApi from '../api/PostRequest'


export const getPost = (id) => async (dispatch) => {
	dispatch({ type: "RETREIVING_START" });
	try {
		const { data } = await PostApi.getPost(id);
		dispatch({ type: "RETRIEVING_SUCCESS", data: data });
	} catch (error) {
		dispatch({ type: "RETRIEVING_FAIL" });
        console.log(error);
	}
};
