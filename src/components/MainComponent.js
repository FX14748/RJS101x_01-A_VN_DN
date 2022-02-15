import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { STAFFS } from '../shared/staffs' ;



class Main extends Component {

  constructor(props) {
    super (props);

    this.state ={
      staffs: STAFFS,
    };
  }

  
  render () {
      return(
        <div>
          <Header/>
            <Switch>
              <Route exact path="/stafflist" component={()=> <StaffList staffs ={this.state.staffs} /> }/>
              <Redirect to="/home"/>
            </Switch>
          <Footer/>
        </div>

      )
    }
  }


export default Main;
