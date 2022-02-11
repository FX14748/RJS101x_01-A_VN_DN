import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import dateFormat from "dateformat";
import StaffDetails from './StaffDetail';
import { Button } from 'reactstrap';
import './StaffList.css';


class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedStaff : null,
                        viewPage: "col-md-6 col-xl-4"
                     }
    };
    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff});
    }
    renderStaff(staff) {
        if (staff != null)
            return(
                <Card>
                    <CardBody>
                      <h2>Họ và Tên: {staff.name}</h2>
                      <CardText>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
                      <CardText>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
                      <CardText>Phòng ban: {staff.department.name}</CardText>
                      <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                      <CardText>Số ngày đi làm thêm : {staff.overTime}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div className="container">
                     <p>Bấm vào tên nhân viên để xem thông tin</p>
                </div>
            );
    }

    render() {
        const staffsList = this.props.staffs.map((staff) => {
            return (
                <div className= {this.state.viewPage}>
                    <Card key={staff.id}
                    onClick={() => this.onStaffSelect(staff)}
                    className="staff-card"
                    >
                        <CardBody>
                        {staff.name}
                        </CardBody>
                    </Card> 
                </div>
            );
        })

        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-4 text-center'>
                        <Button 
                        className='display-button'
                        color="warning"
                        size='lg'
                        onClick={() => this.setState({viewPage:'col-md-6 col-xl-4'})}        
                        >
                            Hiển thị mặc định
                        </Button>
                    </div>
                    
                    <div className='col-md-4 text-center'>
                        <Button 
                        className='display-button'
                        color="warning"
                        size='lg'     
                        onClick={() => this.setState({viewPage:'col-sm-6'})}        
                        >
                            Hiển thị theo 2 cột
                        </Button>
                    </div>

                    <div className='col-md-4 text-center'>
                        <Button 
                        className='display-button'
                        color="warning"
                        size='lg'     
                        onClick={() => this.setState({viewPage:'col-sm-12'})}        
                        >
                            Hiển thị theo 1 cột
                        </Button>
                    </div>
                </div>
                <div className="row staff-list">
                    {staffsList}
                </div>
                <div className="row staff-info">
                   <StaffDetails selectedStaff = {this.state.selectedStaff}/>
                </div>
                
            </div>
                )
    };

}
export default StaffList