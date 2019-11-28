const initState = {
    discussions: [
        {id: '1', title: 'Test 1', content: 'blah blah blah'},
        {id: '2', title: 'Test 2', content: 'blah blah blah'},
        {id: '3', title: 'Test 3', content: 'blah blah blah'},
        {id: '4', title: 'Test 4', content: 'blah blah blah'}
    ]
}

const discussionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DISCUSSION':
            console.log('created discussion', action.discussion)
    }
    return state
}

export default discussionReducer