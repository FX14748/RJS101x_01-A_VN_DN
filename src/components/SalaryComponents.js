import { Card, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";



const basicSalary = 3000000;
const overTimeSalary = 200000;

function RenderPayslip({staff}) {
    const salary = (staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary); 
    return(
        <div key={staff.id} className="salary-card col-sm-6 col-md-4 col-12">
            <Card>
                <CardTitle className="card-title"><h2>{staff.name}</h2></CardTitle>
                <CardText><p>Mã nhân viên:{staff.id}</p></CardText>
                <CardText><p>Hệ số lương:{staff.salaryScale}</p></CardText>
                <CardText><p>Số giờ làm thêm:{staff.overTime}</p></CardText>
                <div className="bg-secondary">
                    <CardText >Lương: {salary.toFixed(0)} </CardText>
                </div>
            </Card>
        </div>
    )
}


function RenderBreadCum()  {
   
        return(
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/stafflist">Nhân Viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Bảng Lương
                </BreadcrumbItem>
            </Breadcrumb>
        );
}


const Salary = (props)=> {
    const PaySlip =props.staffs.map((staff)=>{
        return(      
                <RenderPayslip staff={staff}/>
        )
    })
    return(
        <div className="container">
            <div className="row">
                <RenderBreadCum/>
            </div>
            <div className="row">
                {PaySlip}
            </div>
        </div>
    )
}

export default Salary;