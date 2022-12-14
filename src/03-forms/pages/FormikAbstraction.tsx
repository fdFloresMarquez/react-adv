import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import CustomInputText from '../components/CustomInputText';
import '../styles/styles.css';

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  terms: boolean;
  jobType: 'junior' | 'semi-Senior' | 'senior';
};

const FormikAbstraction: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    firstName: '',
    lastName: '',
    terms: false,
    jobType: 'junior',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'First Name must be 15 characters long').required('Required'),
    lastName: Yup.string().max(20, 'Last Name must be 20 characters long').required('Required'),
    email: Yup.string().email('Email must be a valid email').required('Required'),
  });

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form>
            <CustomInputText
              label="First Name"
              placeholder="Insert your First Name"
              type="firstName"
            />

            <CustomInputText
              label="Last Name"
              placeholder="Insert your Last Name"
              type="lastName"
            />

            <CustomInputText label="Email" placeholder="Insert your Email" type="email" />

            <label htmlFor="seniority">Choose your Seniority</label>
            <Field as="select" name="Seniority">
              <option value="junior">Junior</option>
              <option value="semi-senior">Semi-Senior</option>
              <option value="senior">Senior</option>
            </Field>

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstraction;
