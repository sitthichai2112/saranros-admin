
import React from 'react';
import { connect } from 'react-redux'
import NotificationSystem from 'react-notification-system';


class Notification extends React.Component {
    constructor() {
        super();
        this._notificationSystem = null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.status && nextProps.message) {
            if (this._notificationSystem) {
                this._notificationSystem.addNotification({
                    message: nextProps.message,
                    level: nextProps.status,
                    dismissible: false,
                    position: 'bl',
                    autoDismiss: 3
                });
            }
        }
    }

    render() {
        return (
            <NotificationSystem ref={n => this._notificationSystem = n} />
        );
    }
}

function bindActions(dispatch) {
    return {
    };
}

const mapStateToProps = state => ({
    status: state.notification.status,
    message: state.notification.message
});
export default connect(mapStateToProps, bindActions)(Notification)