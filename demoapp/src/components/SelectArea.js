import React from 'react' ;
import { reduxForm , Field } from 'redux-form' ;
import { connect } from 'react-redux' ;
import Footer from './Footer' ;
import {Link} from 'react-router-dom' ;
//import select from './images/select.png' ;

class SelectArea extends React.Component {

    onClick = (e) => {
        console.log(e);
    }

    componentWillMount(){
      console.log();
    }

   renderSelect = ({ input, label, meta }) => {
        const className = `Field ${meta.error && meta.touched ? 'error' : ' '}`;
        return (
            <div className={className}>
                <label>
                    <h3>Select Area</h3>
                    <img src={require("./images/select.png")} alt='img'/>
                    {label}
                </label>
                <select {...input} placeholder={label}>
                     <option>___Select Area___</option>
                    <option value="Bhavarkua Square">Bhavarkua Square</option>
                    <option value="Navlakha Square">Navlakha Square</option>
                    <option value="Rajendra Nagar">Rajendra Nagar</option>
                    <option value="Palasia Junction">Palasia Junction</option>
                    <option value="Lig Square">Lig Square</option>
                    <option value="Geeta Bhavan">Geeta Bhavan</option>
                </select>
                <font color='red'>{meta.touched ? meta.error : ''}</font>
            </div>
        )
        }
    render() {
              return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onClick.bind(this))} className="ui form">
                    <div>
                       
                        <div>
                            <Field
                                name="select"
                                component={this.renderSelect}
                                placeholder="Select area"
                                type="select"
                            />
                            <Link to='/list'><button className='ui secondary button'>select</button></Link>
                        </div>
                     
                        {/* <img src={require("./images/select.png")} alt='img'/> */}
                    </div>
                    
                </form>
                <Footer/>
            </div>
        );
    }
}

const validate = (formValue) => {
    let errors = {};
    if (formValue.select==='___Select Area___') {
      errors.select = "Area is required"
    }
    //  else if(formValue.username.length<3) {
    //   errors.username = "Username must be atleast 3 character"
    //  }
     return errors;
    }

let selectarea = reduxForm({
    form: 'SelectArea',
    validate
  })(SelectArea);
  
  export default connect (null)(selectarea)
