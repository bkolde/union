import React, {Component} from 'react';
import MetricsDisplayListItem from './../../components/Company/metricsDisplayListItem.js';
import {connect} from 'react-redux';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');



class MetricsDisplayList extends Component {
  render(){
    let MetricsDisplayListItems = [];
    for(let i = 0; i < this.props.availableMetrics.length; i++) {
      let availablemetricsitem = this.props.availableMetrics[i];
      let emailData, selectedcompany;
      if(this.props.user.loggedinbrand){
        selectedcompany = this.props.companies[this.props.company];
      }
      else{
        selectedcompany = this.props.companies;
      }
      if(selectedcompany.metrics){
        emailData = [selectedcompany.metrics[availablemetricsitem].data];
      }else{
        emailData = [[]];
      }
      MetricsDisplayListItems.push(
        <MetricsDisplayListItem
          key={availablemetricsitem}
          metricName={availablemetricsitem}
          metricLabel={availablemetricsitem}
          data={emailData}
        />
      );
    }
    if(MetricsDisplayListItems.length === 0){
      MetricsDisplayListItems =  <p className="inputlistNoData">Select a metric to view logged data.</p>;
    }
    return(
      <ul id="metricsdisplay">
        <CSSTransitionGroup
           transitionName="example"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>
        {MetricsDisplayListItems}
      </CSSTransitionGroup>
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    availableMetrics: state.activeMetrics.arr,
    companies: state.companiesdata,
    company: state.activeCompany,
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(MetricsDisplayList);