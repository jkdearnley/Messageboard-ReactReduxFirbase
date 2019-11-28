import React from 'react'

const DiscussionSummary = ({discussion}) => {
    return (
        <div className="card z-depth-0 discussion-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{discussion.title}</span>
                <p>Posted by Jayden</p>
                <p className="grey-text">29th August, 4:20PM</p>
            </div>
        </div>
    )
}

export default DiscussionSummary