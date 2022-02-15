import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';
import './StaffListComponent.css';
import { Link } from "react-router-dom";

    

    function RenderList ({staff}) {
        return(
            <Card key={staff.id}
                className="staff-card"
                >
                <Link to={`/stafflist/${staff.id}`}>
                    <CardImg top src={staff.image} alt={staff.name} />
                    <CardBody>
                        {staff.name}
                    </CardBody>
                </Link>
            </Card>
        );
    }

    const StaffList = (props) => {
        const staffsList = props.staffs.map((staff) => {
            return (
                <div key={staff.id} className= "col-md-4 col-xl-2">
                     <RenderList staff={staff}/>
                </div>
            );
        })
        return (
            <div className="container">
                <div><h2>Nhân Viên</h2><hr/></div>
                <div className="row staff-list">
                    {staffsList}
                </div>        
            </div>
            
        );
    }


export default StaffList;