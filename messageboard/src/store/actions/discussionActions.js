export const createDiscussion = (discussion) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_DISCUSSION', discussion});
    }
};