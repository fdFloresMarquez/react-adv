import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  terms: boolean;
  jobType: 'junior' | 'semi-Senior' | 'senior';
};

const FormikComponents: React.FC = () => {
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
      <h1>Formik Components</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component="span" name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component="span" name="lastName" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage component="span" name="email" />

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

export default FormikComponents;
