import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router-dom';
import history from '../history';


class PostForm extends React.Component {

    onSubmit = (values) => {
        this.props.onSubmit(values)
    }

renderField = ({ input, meta }) => {
    return (
        <div>
            <input  {...input}
            />
            <br />
            <font color='red'>{meta.touched ? meta.error : ''}</font>
        </div>
    )
}
renderText = ({ input, meta }) => {
    return (
        <div>
            <textarea  {...input}
            />
            <br />
            <font color='red'>{meta.touched ? meta.error : ''}</font>
        </div>
    )
}
renderSelect = ({ input, label, meta }) => {
    const className = `Field ${meta.error && meta.touched ? 'error' : ' '}`;
    return (
        <div className={className}>
            <label>
                {label}
            </label>
            <select {...input} placeholder={label}>
                <option value="publish">Publish</option>
                <option value="future">Future</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="draft">Private</option>
            </select>
            <font color='red'>{meta.touched ? meta.error : ''}</font>
        </div>
    )
    }

render() {
    if (localStorage.getItem("authToken")) {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <div>
                        <label>Title</label>
                        <div>
                            <Field
                                name="title"
                                component={this.renderField}

                                placeholder="Enter Title"
                            />
                        </div>
                        <label>Description</label>
                        <div>
                            <Field
                                name="content"
                                component={this.renderText}
                                type="text"
                                placeholder="Description"
                            />
                        </div>
                    </div>
                    <label>Status</label>
                    <div>
                        <Field
                            name="status"
                            component={this.renderSelect}
                            type="select"
                            placeholder=" Select Status"
                        />
                    </div>
                    <div>
                        <button className="ui primary button">
                            Submit
          </button>
                        <Link className='ui primary button' to="/post" >
                            Cancel
          </Link>
                    </div>
                </form>
            </div>
        );
    }
    else {
        return (
            <div>
                {alert('you have to login first')}
                {history.push('/login')}

            </div>
        );

    }
}
}
const validate = (values) => {
    let errors = {};
    if (!values.title) {
        errors.title = "you must enter title"
    }
    else if (values.title.length > 10) {
        errors.title = "max length is 10"
    }
    if (!values.content) {
        errors.content = "content is required"
    }
    else if (values.content.length > 30) {
        errors.content = "max length is 30 character"
    }
    if (!values.status) {
        errors.status = "status is required"
    }
    else if (values.status.length > 8) {
        errors.status = "max length is 8 character"
    }
    return errors;
}

let createpost = reduxForm({
    form: 'createpost',
    validate // a unique identifier for this form
})(PostForm);

export default connect(null, { createPost })(createpost)
