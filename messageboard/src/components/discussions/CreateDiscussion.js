import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDiscussion } from '../../store/actions/discussionActions'


class CreateDiscussion extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createDiscussion(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Discussion</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue darken-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDiscussion: (discussion) => dispatch(createDiscussion(discussion))
    }
}

export default connect(null, mapDispatchToProps)(CreateDiscussion)
