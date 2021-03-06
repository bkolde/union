import React from 'react';
import InputListItem from './inputListItem.js';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

// List of input forms to add/update metrics
const InputList = (props) => {
  let InputListItems = props.availableMetrics.map((availablemetricsitem) => {
    return(
      <InputListItem key={availablemetricsitem} metricName={availablemetricsitem}/>
    );
  });
  if(InputListItems.length === 0){
    InputListItems =  <p className="inputlistNoData">Select a metric to start logging data.</p>;
  }
  return(
    <ul id="inputlist">
      <CSSTransitionGroup
        id="inputlistspan"
         transitionName="example"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={300}>
      {InputListItems}
    </CSSTransitionGroup>
    </ul>
  );
}

export default InputList;
