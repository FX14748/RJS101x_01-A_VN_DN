import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import StaffDetails from './StaffDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import DepartmentDetail from './DepartmentComponent';
import Salary from './SalaryComponents';



class Main extends Component {

  constructor(props) {
    super (props);

    this.state ={
      staffs: STAFFS,
      departments:DEPARTMENTS
    };
  }

  
  render () {

    const StaffWithId = ({ match }) => {
      return (
        <StaffDetails
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.ID,10))[0]}
        />
      )
    }
      return(
        <div>
          <Header/>
            <Switch>
              <Route exact path="/stafflist" component={()=> <StaffList staffs ={this.state.staffs} /> }/>
              <Route path="/stafflist/:ID" component={StaffWithId}/>
              <Route exact path="/department" component={()=> <DepartmentDetail departments ={this.state.departments} /> }/>
              <Route exact path="/payslip" component={()=> <Salary staffs ={this.state.staffs} /> }/>
            </Switch>
          <Footer/>
        </div>

      )
    }
  }


export default Main;
