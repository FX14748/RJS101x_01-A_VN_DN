import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import dateFormat, { masks } from "dateformat";


class StaffDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedStaff : null }
    };
    
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
        return (
            <div  className="col-12 col-md-5 m-1">
                {this.renderStaff(this.props.selectedStaff)}
            </div>
        )
    }
}

export default StaffDetails;





