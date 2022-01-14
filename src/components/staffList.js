import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';


class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedStaff : null }
    };

    render() {
        const staffsList = this.props.staffs.map((staff) => {
            return (
                <div className="col-md-5 col-xl-4">
                    <Card key={staff.id}>
                        <Card.Body>{staff.name}</Card.Body>
                    </Card> 
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {staffsList}
                </div>
            </div>
                )
    };

}
export default StaffList