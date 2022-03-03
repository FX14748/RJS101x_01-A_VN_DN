import React, { Component } from 'react';
import { Button, Form, FormGroup, FormFeedback, Input, Col, Modal, ModalBody, ModalHeader, Label, Row } from 'reactstrap';



class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchInput: '',
            isModalOpen: false,
            newStaff:{
                id: this.props.staffs.length,
                name: '',
                doB: '',
                salaryScale:1,
                startDate: '',
                department: "Sale",
                annualLeave: 0,
                overTime: 0,
                image: "/assets/images/alberto.png"},
            touched: {
                name: false,
                doB: false,
                salaryScale:false,
                startDate: false,
                annualLeave: false,
                overTime: false
            },
            clickedSubmit: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    // display/hide modal

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const names = target.name;
        //console.log(value);
        //console.log(names);
        this.setState({
            newStaff: {...this.state.newStaff,  [names]: value }
        });
    }
    //update input value from mode => state

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    //check if user click on input field or not

    validate(name, doB, startDate) {
        const errors = {
            name: '',
            doB:'',
            startDate:''
        };

        if (name ==="" && this.state.clickedSubmit)
            {errors.name="Vui lòng nhập tên"}
        else if (this.state.touched.name && name.length < 3)
            {errors.name = 'Yêu cầu lớn hơn 3 ký tự'}
        else if (this.state.touched.name && name.length > 30)
            {errors.name = 'Yêu cầu ít hơn 30 ký tự'};

        if (doB==='' && this.state.clickedSubmit)
            {errors.doB="Vui lòng nhập ngày sinh"};
            //console.log(errors.doB)

        if (startDate==='' && this.state.clickedSubmit)
            {errors.startDate="Vui lòng nhập ngày bắt đầu"};
            //console.log(errors.startDate)


        return errors;
    }
    //validate dat from modal's input
   
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({searchInput: event.target.value});
        //lưu input value trong ô search vào state danh cho o Search
    }

    handleSubmit(event) {
            this.setState({
                clickedSubmit:true,
        })

        if (this.state.newStaff.name!== '' && this.state.newStaff.doB !== '' && this.state.newStaff.startDate !== '')
        {this.setState({isModalOpen: !this.state.isModalOpen})};
    ;
        // hide modal
        
        event.preventDefault();
        
        /*console.log(this.state.newStaff);
        const staffData = this.state.newStaff;
        const newStaff= {
            name: staffData.name,
            doB: staffData.doB,
            salaryScale: staffData.salaryScale,
            startDate: staffData.startDate,
            department: {name:staffData.department},
            annualLeave: staffData.annualLeave,
            overTime: staffData.overTime,
            image: '/assets/images/alberto.png',
        };
        console.log(newStaff);
        return newStaff; */
        //creat new object of staff info
}
    

    
    render() {
        const errors = this.validate(this.state.newStaff.name, this.state.newStaff.doB, this.state.newStaff.startDate);
        
        return (
            <div className="container">
                <div className='row'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="name"
                                        md={4}>
                                            Tên
                                    </Label>
                                    <Col md={8}>
                                        <Input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            
                                            value={this.state.newStaff.name}
                                            valid={errors.name === ''}
                                            invalid={errors.name !== ''}
                                            onBlur={this.handleBlur('name')}
                                            onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="doB"
                                        md={4}>
                                            Ngày Sinh
                                    </Label>
                                    <Col md={8}>
                                        <Input 
                                            type="date" 
                                            id="doB" 
                                            name="doB"
                                            value={this.state.newStaff.doB}
                                            valid={errors.doB === ''}
                                            invalid={errors.doB !== ''}
                                            onBlur={this.handleBlur('doB')}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.doB}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="startDate"
                                        md={4}>
                                            Ngày Vào Công Ty
                                    </Label>
                                    <Col md={8}>
                                        <Input 
                                            type="date" 
                                            id="startDate" 
                                            name="startDate"
                                            valid={errors.startDate === ''}
                                            invalid={errors.startDate !== ''}
                                            onBlur={this.handleBlur('startDate')}
                                            value={this.state.newStaff.startDate}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.startDate}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="department"
                                        md={4}>
                                            Phòng Ban
                                    </Label>
                                    <Col md={8}>
                                        <Input type="select" 
                                                name="department"
                                                value={this.state.newStaff.department}
                                                onChange={this.handleInputChange}>
                                            <option value="Sale">Sale</option>
                                            <option value="Hr">Hr</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="salaryScale"
                                        md={4}>
                                            Hệ Số Lương
                                    </Label>
                                    <Col md={8}>
                                        <Input 
                                            type="number" 
                                            id="salaryScale" 
                                            name="salaryScale"
                                            placeholder="1.0 -> 3.0 "
                                            value={this.state.newStaff.salaryScale}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="annualLeave"
                                        md={4}>
                                            Số Ngày Nghỉ còn lại
                                    </Label>
                                    <Col md={8}>
                                        <Input 
                                            type="number" 
                                            id="annualLeave" 
                                            name="annualLeave"
                                            placeholder="0"
                                            value={this.state.newStaff.annualLeave}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label 
                                        htmlFor="overTime"
                                        md={4}>
                                            Số ngày đã làm thêm
                                    </Label>
                                    <Col md={8}>
                                        <Input 
                                            type="number" 
                                            id="overTime" 
                                            name="overTime"
                                            placeholder="0"
                                            value={this.state.newStaff.overTime}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <Button 
                                    type="submit" 
                                    value="submit" 
                                    color="primary"
                                    onClick={(input) => this.props.addStaff(this.state.newStaff)}>
                                        Thêm
                                </Button>
                            </Form>
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