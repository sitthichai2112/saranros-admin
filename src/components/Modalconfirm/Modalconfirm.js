
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { dismissshowmodalconfirm } from '../../actions/modalconfirm'
import { connect } from 'react-redux'
class ModalConfirm extends React.Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.props.dismissshowmodalconfirm()
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
                            this.props.dismissshowmodalconfirm()
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
        dismissshowmodalconfirm: () => dispatch(dismissshowmodalconfirm())
    };
}

const mapStateToProps = state => ({
    message: state.modalconfirm.message,
    confirm: state.modalconfirm.confirm,
    show: state.modalconfirm.show,
    title: state.modalconfirm.title,
    color: state.modalconfirm.color


});
export default connect(mapStateToProps, bindActions)(ModalConfirm)