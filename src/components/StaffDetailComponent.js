import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import dateFormat from "dateformat";
import './StaffDetailComponent.css';
import { Link } from 'react-router-dom'

   
        function RenderPhoto ({staff}) {
            if (staff != null)
                return(                  
                    <Card className="col-md-3 col-sm-4 col-12">
                        <CardImg width="100%" src={staff.image} alt={staff.name} />
                    </Card>                                   
                );
            else
                return(
                    <div className="container info-card">
                        <p>{/*loi img*/}</p>
                    </div>
                );
        }

        function RenderInfo ({staff}) {
            if (staff != null)
                return(
                    <CardBody key={staff.id}>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardTitle>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardTitle>
                        <CardTitle>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardTitle>                        
                        <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
                        <CardTitle>Số ngày nghỉ còn lại: {staff.annualLeave}</CardTitle>
                        <CardTitle>Số ngày đã làm thêm: {staff.overTime}</CardTitle>
                    </CardBody> 
                );
            else
                return(
                    <div className="container info-card">
                         <p>{/*loi info*/}</p>
                    </div>
                );
        }

        function RenderBreadCum({staff}) {
            if (staff != null)
                return(
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/stafflist">Nhân Viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {staff.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                );
            else
                return(
                    <div className="container info-card">
                         <p>{/*loi BreadCum*/}</p>
                    </div>
                );
        }


const StaffDetails = (props) => {
        return (
            <div className='container'>
                <RenderBreadCum staff={props.staff}/>
                <div className='row'>
                    <RenderPhoto staff={props.staff}/>
                    <RenderInfo staff={props.staff}/>
                </div>
            </div>
        );
}

export default StaffDetails;





