export const createDiscussion = (discussion) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        dispatch({ type: 'CREATE_DISCUSSION', discussion});
    }
};