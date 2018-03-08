import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions/posts_actions';
import Header from './header';

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const {meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    const { email } = this.props;
    this.props.postTodo({...values, email});
  }

  render() {
    const { handleSubmit, fields: { title, content }} = this.props;


    return (
      <div>
        <Header />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link className="back-button" to="/taskapp/display-tasks">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.auth.email,
  };
}

NewPost = reduxForm({
  form: 'NewPost',
  fields: ['title', 'content']

})(NewPost);

NewPost = connect(mapStateToProps, actions)(NewPost);

export default NewPost;
