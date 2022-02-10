import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import dateFormat, { masks } from "dateformat";
import StaffDetails from './staffDetail';


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
                    onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                        {staff.name}
                        </CardBody>
                    </Card> 
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {staffsList}
                </div>
                <div className="row">
                   <StaffDetails selectedStaff = {this.state.selectedStaff}/>
                </div>
            </div>
                )
    };

}
export default StaffList