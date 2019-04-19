import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Footer from './Footer';
import {Link} from 'react-router-dom' ;
import { hostelsList, selectedHostelsList } from '../actions';
//import Checkbox from 'react-simple-checkbox';
//import history from '../history';

class SelectArea extends React.Component {
    state = {
        hostelslist: []
    }
    onClick = ({ select }) => {
        this.props.selectedHostelsList(select, (res) => {
            console.log(res)
            this.setState({
                hostelslist: res.data
            })
        });
    }


    componentWillMount =()=> {
        this.props.hostelsList();
      
    }

    renderSelect = ({ input, label, meta }) => {
        const className = `Field ${meta.error && meta.touched ? 'error' : ' '}`;
        const { hostels } = this.props
        return (
            <div className={className}>
                <label>
                    <h3>Select Area</h3>
                    <img src={require("./images/select.png")} alt='img' />
                    {label}
                </label>

                <select {...input} >
                    <option>___Select Area___</option>
                    {hostels ? hostels.map((hostel, index) => {
                        return <option key={index} value={hostel.id}>{hostel.name}</option>
                    }) : <div />}
                
                </select>
                <font color='red'>{meta.touched ? meta.error : ''}</font>
            </div>
        )
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onClick.bind(this))} className="ui form" >
                    <div>
                    <label>Select Area</label>
                        <div>
                            <Field
                                name="select"
                                component={this.renderSelect}
                                placeholder="Select area"
                                type="select"
                            />
                            <button className='ui secondary button'>select</button>
                        </div>
                        {/* <img src={require("./images/select.png")} alt='img'/> */}
                    </div>

                </form>
                <ul>
                    {this.state.hostelslist ? this.state.hostelslist.map(item => {
                        return (
                            <Link to={`/details/${item.id}`}> <li>
                              {item.name}
                               {/* <button type="button" className="ui info button">View details</button></ */}
                            </li></Link>
                        )
                    }) : <div />}

                </ul>
                
                <Footer />
            </div>
        );
    }
}

const validate = (formValue) => {
    let errors = {};
    if (formValue.select === '___Select Area___') {
        errors.select = "Area is required"
    }
    //  else if(formValue.username.length<3) {
    //   errors.username = "Username must be atleast 3 character"
    //  }
    return errors;
}

let selectarea = reduxForm({
    form: 'SelectArea',
    validate,
})(SelectArea);

const mapStateToProps = state => {
    return {

        hostels: state.fetchHostels.data

    };
};
export default connect(mapStateToProps, { hostelsList, selectedHostelsList })(selectarea)
