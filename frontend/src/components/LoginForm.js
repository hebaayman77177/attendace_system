// import { Button, Form } from 'react-bootstrap';
// import { Field, reduxForm } from 'redux-form';

// const InputGroup = ({ label, type, input}) => {
//     console.log("###################################", input);
//     return (<Form.Group >
//         <Form.Label>{label}</Form.Label>
//         <Form.Control type={type} id={input.name}
//             value={input.value}
//             onChange={input.onChange} />
//     </Form.Group>);
// }

// function LoginForm() {
//     return (
//         <Form>
//             <Field name="jjjemail" type="email" label="Email" component={InputGroup}  />
//             <Field name="jjjpassword" type="password" label="Password" component='input' />
//             <Button variant="primary" type="submit">
//                 Login
//             </Button>
//         </Form>
//     );
// }

// LoginForm = reduxForm({
//     // a unique name for the form
//     enableReinitialize: true,
//     form: 'login'
// })(LoginForm)

// export default LoginForm;





// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// const validate = values => {
//     const errors = {}
//     if (!values.username) {
//         errors.username = 'Required'
//     } else if (values.username.length > 15) {
//         errors.username = 'Must be 15 characters or less'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }
//     if (!values.age) {
//         errors.age = 'Required'
//     } else if (isNaN(Number(values.age))) {
//         errors.age = 'Must be a number'
//     } else if (Number(values.age) < 18) {
//         errors.age = 'Sorry, you must be at least 18 years old'
//     }
//     return errors
// }

// const warn = values => {
//     const warnings = {}
//     if (values.age < 19) {
//         warnings.age = 'Hmm, you seem a bit young...'
//     }
//     return warnings
// }

// const renderField = ({
//     input,
//     label,
//     type,
//     meta: { touched, error, warning }
// }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...input} placeholder={label} type={type} />
//             {touched &&
//                 ((error && <span>{error}</span>) ||
//                     (warning && <span>{warning}</span>))}
//         </div>
//     </div>
// )

// const SyncValidationForm = props => {
//     const { handleSubmit, pristine, reset, submitting } = props
//     return (
//         <form onSubmit={handleSubmit}>
//             <Field
//                 name="username"
//                 type="text"
//                 component={renderField}
//                 label="Username"
//             />
//             <Field name="email" type="email" component={renderField} label="Email" />
//             <Field name="age" type="number" component={renderField} label="Age" />
//             <div>
//                 <button type="submit" disabled={submitting}>
//                     Submit
//         </button>
//                 <button type="button" disabled={pristine || submitting} onClick={reset}>
//                     Clear Values
//         </button>
//             </div>
//         </form>
//     )
// }

// export default reduxForm({
//     form: 'syncValidation', // a unique identifier for this form
//     validate, // <--- validation function given to redux-form
//     warn // <--- warning function given to redux-form
// })(SyncValidationForm)




import React from 'react'
import {Field, reduxForm} from 'redux-form'

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const FieldLevelValidationForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, maxLength15]}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age"
        validate={[required, number, minValue18]}
        warn={tooOld}
      />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)

