export const OPENNOTIFICATION = 'opennotification'
import NotificationSystem from 'react-notification-system';

export const opennotification = (message = '' , status = '') => {
    return {
        type: OPENNOTIFICATION,
        message,status
    };

}