export const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION'
import NotificationSystem from 'react-notification-system';

export const openNotification = (message = '' , status = '') => {
    return {
        type: OPEN_NOTIFICATION,
        message,status
    };

}