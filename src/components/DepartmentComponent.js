import { Card, CardText, CardTitle } from "reactstrap";
import "./DepartmentComponent.css";


function RenderDept ({dept}) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 text-card" key={dept.id}>
            <Card>
                <CardTitle><h2>{dept.name}</h2></CardTitle>
                <CardText><p>Số lượng nhận viên: {dept.numberOfStaff}</p></CardText>
            </Card>

        </div>
    )
}


const DepartmentDetail = (props) => {
    const DeptDetail = props.departments.map((dept) => {
        return(
            <RenderDept dept={dept}/>
        )
    })

    return(
        <div className="container">
            <div className="row">
                {DeptDetail}
            </div>
        </div>

    
    )
}

export default DepartmentDetail;