import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import StaffDetails from './StaffDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DepartmentDetail from './DepartmentComponent';
import Salary from './SalaryComponents';
import Search from "./SearchComponent";
import { addStaff } from '../redux/ActionCreators';

const mapStateToProps= state => {
  return {
    staffs: state.staffs,
    departments:state.departments
  }
}

const mapDispatchToProps = dispatch => ({
  
  addStaff: (values) => dispatch(addStaff(values))

});

class Main extends Component {

  constructor(props) {
    super (props);
  
    this.state ={
      searchInput: '',
      test:'',
    };
  }


getTextSearch = (text) => {
    if(text !== '')
    {this.setState({
      searchInput: text,
    });

     //console.log(' Dữ liệu nhân được là:' + this.state.searchText)
};
}

/*addNewStaff = (input) => {
  if(input.name !== undefined & input.doB !==undefined & input.startDate !==undefined)
    {
      const newStaff= {
        id:this.props.staffs.length,
        name: input.name,
        doB: input.doB,
        salaryScale: input.salaryScale,
        startDate: input.startDate,
        department: input.department,
        annualLeave: input.annualLeave,
        overTime: input.overTime,
        image: '/assets/images/alberto.png',
      };
      console.log(newStaff)v
      this.setState({
          test: input,
          staffs: [...this.props.staffs, ...[newStaff]]
      })
      console.log(this.props.staffs)
    }
} */


render () {
  var results = [];
  this.props.staffs.map((item) => {
      if ( item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
          results.push(item);
          console.log(this.state.searchInput)
      }
  })
  //console.log(results);
  
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetails
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(match.params.ID,10))[0]}
        />
      )
    }


      return(
        <div>
          <Header/>
          <Search 
                searchedStaff = {(text) => this.getTextSearch(text)}
                addStaff= {this.props.addStaff}
                staffs={results}
            />
            <Switch>
              <Route exact path="/stafflist" component={()=> <StaffList staffs={results} /> }/>
              <Route path="/stafflist/:ID" component={StaffWithId}/>
              <Route exact path="/department" component={()=> <DepartmentDetail departments ={this.props.departments} /> }/>
              <Route exact path="/payslip" component={()=> <Salary staffs={results} /> }/>
            </Switch>
          <Footer/>
        </div>

      )
    }
  }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
