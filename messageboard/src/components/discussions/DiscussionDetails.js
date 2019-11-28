import React from 'react'

export const DiscussionDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section discussion-details">
            <div className="car z-depth-0">
                <div className="card-content">
                    <div className="card-title">Dummy Title - {id}</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Expedita provident suscipit molestias ipsa id obcaecati eligendi sapiente adipisci quasi aliquam ipsum,
                        accusantium nisi velit consequuntur amet, deleniti fuga blanditiis quibusdam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by JD</div>
                    <div>29th August 2019</div>
                </div>
            </div>
        </div>
    )
}
export default DiscussionDetails
