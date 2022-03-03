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
import Search from "./SearchComponent";



class Main extends Component {

  constructor(props) {
    super (props);

    this.state ={
      staffs: STAFFS,
      departments:DEPARTMENTS,
      searchInput: '',
      test:''
    };
  }

getTextSearch = (text) => {
    this.setState({
      searchInput: text,
    });

    // console.log(' Dữ liệu nhân được là:' + this.state.searchText)
}

addNewStaff = (input) => {
  if(input.name !=='', input.doB !=='', input.startDate !=='')
    {
      const newStaff= {
        id:this.state.staffs.length,
        name: input.name,
        doB: input.doB,
        salaryScale: input.salaryScale,
        startDate: input.startDate,
        department: {name:input.department},
        annualLeave: input.annualLeave,
        overTime: input.overTime,
        image: '/assets/images/alberto.png',
      };
      this.setState({
          test: input,
          staffs: [...this.state.staffs, ...[newStaff]]
      })
      //console.log(this.state.staffs)
    }
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

    var results = [];
    this.state.staffs.map((item) => {
        if ( item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
            results.push(item);
        }
    })
    //console.log(results);

      return(
        <div>
          <Header/>
          <Search 
                searchedStaff = {(text) => this.getTextSearch(text)}
                addStaff= {(input)=>this.addNewStaff(input)}
                staffs={results}
            />
            <Switch>
              <Route exact path="/stafflist" component={()=> <StaffList staffs={results} /> }/>
              <Route path="/stafflist/:ID" component={StaffWithId}/>
              <Route exact path="/department" component={()=> <DepartmentDetail departments ={this.state.departments} /> }/>
              <Route exact path="/payslip" component={()=> <Salary staffs={results} /> }/>
            </Switch>
          <Footer/>
        </div>

      )
    }
  }


export default Main;
