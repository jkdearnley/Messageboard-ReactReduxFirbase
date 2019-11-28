import React from 'react'
import DiscussionSummary from './DiscussionSummary'

const DiscussionList = ({discussions}) => {
    return (
        <div className="discussion-list section">
            { discussions && discussions.map(discussion => {
                return (
                    <DiscussionSummary discussion={discussion} key={discussion.id} />
                )
            })}
        </div>
    )
}

export default DiscussionList