import React, { Component } from 'react'
import Notifications from './Notifications'
import DiscussionList from '../discussions/DiscussionList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const { discussions } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <DiscussionList discussions={discussions} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        discussions: state.discussion.discussions
    }
}

export default connect(mapStateToProps)(Dashboard)