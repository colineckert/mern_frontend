import React from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../actions/question_actions';

const Form = ({ submitQuestion }) => {
  
  return (
    <>
    
    </>
  )
}

const mDTP = dispatch => ({
  submitQuestion: question => dispatch(submitQuestion(question))
});

export default connect(null, mDTP)(Form);