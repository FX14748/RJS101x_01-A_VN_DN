import { Card, CardText, CardTitle } from "reactstrap";



function RenderDept ({dept}) {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4" key={dept.id}>
            <Card>
                <CardTitle>{dept.name}</CardTitle>
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