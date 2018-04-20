
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { dismissShowModalAlert } from '../../actions/modalalert'
import { connect } from 'react-redux'
class ModalAlert extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.props.dismissShowModalAlert()
    }

    render() {

        const { show, message, confirm, title, color } = this.props

        return (
            <div>
                <Button color={`${color}`} onClick={this.toggle}>Click</Button>
                <Modal isOpen={show} toggle={this.toggle} className="modal-container">
                    <ModalHeader className={`warning-modal bg-danger`} toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody> {message}</ModalBody>
                    <ModalFooter>
                        <Button color={`${color}`} onClick={() => {
                            confirm && confirm()
                            this.props.dismissShowModalAlert()
                        }}>{title}</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

function bindActions(dispatch) {
    return {
        dismissShowModalAlert: () => dispatch(dismissShowModalAlert())
    };
}

const mapStateToProps = state => ({
    message: state.modalalert.message,
    confirm: state.modalalert.confirm,
    show: state.modalalert.show,
    title: state.modalalert.title,
    color: state.modalalert.color
});
export default connect(mapStateToProps, bindActions)(ModalAlert)