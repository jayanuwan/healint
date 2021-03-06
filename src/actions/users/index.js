export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = {
	request: () => ({ type: GET_USERS }),
	success: (data) => ({ type: GET_USERS_SUCCESS, data }),
	failure: (error) => ({ type: GET_USERS_FAILURE, error }),
};
