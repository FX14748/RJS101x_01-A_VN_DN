import React, { Component } from "react";
import { Button,Modal, ModalHeader, ModalBody } from "reactstrap";

class AddStaff extends Component {
    constructor(props) {
        super(props);

        this.state={
            staffs: this.props.staffs,
            isModalOpen: false,
        }
    };

    render() {
        return (
            <>
            <Button>+</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.handleOpenModel}>
                <ModalHeader>Thêm nhân viên</ModalHeader>
                <ModalBody>
                
               
                </ModalBody>
          </Modal>
        </>
        )
    }
}

export default AddStaff;