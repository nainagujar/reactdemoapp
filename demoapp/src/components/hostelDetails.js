import React from 'react';
import { connect } from 'react-redux';
import { viewDetails } from '../actions';
import _ from 'lodash' ;
//import { Link } from 'react-router-dom';
//import history from '../history';

class hostelDetails extends React.Component {
  
  state = {
    hostelDetails: []
  }
  componentDidMount() {
    this.props.viewDetails(this.props.match.params.id)
  }

  render() {
    const { hosteldetails } = this.props;
    let details = {}
    if (typeof hosteldetails != 'undefined' ) {
      details = hosteldetails[0];
    }
  if(!_.isEmpty(details)){
    return (
      <div>
        <div>
        {details.Address}
        </div>
        <div>
          {details.Contact}
        </div>
        <div>
          {details.Facilities}
        </div>
        <div>
        <img src={require("./images/test.jpeg")} alt='img' />
        <img src={require("./images/hostel1.png")} alt='img' />
        </div>
      </div>
    )
    }else{
      return <div></div>
    }
  }
}

const mapStateToProps = state => {

  return {

    hosteldetails: state.fetchHostels.data

  };
};

export default connect(mapStateToProps, { viewDetails })(hostelDetails);

