import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Col, Modal, ModalBody, ModalHeader, Label, Row } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = (value) => value && value.length > 0 ;
const maxlength = (len) => (value) => !(value) || (value.length <= len);

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchInput: '',
            isModalOpen: false,
            newStaff:{},
            clickedSubmit: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    // display/hide modal   
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({searchInput: event.target.value});
        //lưu input value trong ô search vào state danh cho o Search
    }

    handleSubmit(values) {
            this.setState({
                clickedSubmit:true,
        })
        this.toggleModal();
        console.log(values)
        if (this.state.newStaff.name!== '' && this.state.newStaff.doB !== '' && this.state.newStaff.startDate !== '')
        {this.setState({isModalOpen: !this.state.isModalOpen})};
    ;
        
        const newStaff= {
            name: values.name,
            doB: values.doB,
            salaryScale: values.salaryScale,
            startDate: values.startDate,
            department: {name:values.department},
            annualLeave: values.annualLeave,
            overTime: values.overTime,
            image: '/assets/images/alberto.png',
        };
        console.log(newStaff);
        this.setState({newStaff:newStaff})
        //creat new object of staff info
}
       
    render() {       
        return (
            <div className="container">
                <div className='row'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="name"
                                        md={4}>
                                            Tên
                                    </Label>
                                    <Col md={8}>
                                        <Control
                                            type="text"
                                            model=".name"
                                            id="name" 
                                            name="name"
                                            className="form-control"                        
                                            validators={{ required, maxLength: maxlength(15) }}/>
                                        <Errors
                                            model=".name"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập.",
                                            maxLength: "Hãy nhập dưới 15 ký tự.",
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="doB"
                                        md={4}>
                                            Ngày Sinh
                                    </Label>
                                    <Col md={8}>
                                        <Control
                                            type="date"
                                            className="form-control"
                                            model=".doB"
                                            id="doB" 
                                            name="doB"
                                            validators={{required}} />
                                        <Errors
                                            model=".doB"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập."
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="startDate"
                                        md={4}>
                                            Ngày Vào Công Ty
                                    </Label>
                                    <Col md={8}>
                                        <Control 
                                            
                                            type="date" 
                                            id="startDate" 
                                            className="form-control"
                                            name="startDate"
                                            model=".startDate"
                                            validators={{required}} />
                                        <Errors
                                            model=".startDate"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập."
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="department"
                                        md={4}>
                                            Phòng Ban
                                    </Label>
                                    <Col md={8}>
                                        <Control.select
                                                model=".department"
                                                name="department"
                                                className="form-control"
                                                validators={{required}}>
                                                    
                                            <option value="Sale">Sale</option>
                                            <option value="Hr">Hr</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                        </Control.select>
                                        <Errors
                                            model=".department"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập."
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="salaryScale"
                                        md={4}>
                                            Hệ Số Lương
                                    </Label>
                                    <Col md={8}>
                                        <Control 
                                            type="number" 
                                            id="salaryScale" 
                                            name="salaryScale"
                                            model=".salaryScale"
                                            className="form-control"
                                            placeholder="1.0 -> 3.0 "
                                            validators={{required}} />
                                            <Errors
                                            model=".salaryScale"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập."
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="annualLeave"
                                        md={4}>
                                            Số Ngày Nghỉ còn lại
                                    </Label>
                                    <Col md={8}>
                                        <Control 
                                            type="number" 
                                            id="annualLeave" 
                                            name="annualLeave"
                                            className="form-control"
                                            model=".annualLeave"
                                            placeholder="0"
                                            onChange={this.handleInputChange} 
                                            validators={{required}}/>
                                            <Errors
                                            model=".annualLeave"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập."
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="overTime"
                                        md={4}>
                                            Số ngày đã làm thêm
                                    </Label>
                                    <Col md={8}>
                                        <Control 
                                            type="number" 
                                            id="overTime" 
                                            name="overTime"
                                            model=".overTime"
                                            placeholder="0"
                                            className="form-control"
                                            onChange={this.handleInputChange} 
                                            validators={{required}}/>
                                            <Errors
                                            model=".overTime"
                                            show={(field) => field.touched && !field.focus}
                                            messages={{
                                            required: "Yêu cầu nhập."
                                            }}
                                            className="text-danger"
                                        />
                                    </Col>
                                </FormGroup>
                                <Button 
                                    type="submit" 
                                    value="submit" 
                                    color="primary"
                                    onClick={(input) => this.props.addStaff(this.state.newStaff)}>
                                        Thêm
                                </Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    <div className='col-12 col-md-12 row'>
                            <Col md={4}>
                                <Button                     
                                        color="primary"
                                        onClick={this.toggleModal}>
                                    Thêm Nhân Viên
                                </Button>
                            </Col>
                            <Form className="form-inline">
                                <FormGroup>
                                    <Row>
                                        <Input
                                            md={2} 
                                            type="text" 
                                            name="staffSearch"
                                            onChange={(event) => this.isChange(event)}
                                            placeholder="Nhập tên tìm kiếm..."
                                        />
                                            <Button
                                                md={6}
                                                color="primary"
                                                onClick={(text) => this.props.searchedStaff(this.state.searchInput)}
                                                >
                                            Search
                                            </Button>
                                    </Row>
                                </FormGroup>
                            </Form>
                    </div>
                </div>                     
            </div>             
    )};
}

export default Search;