import '../styles/styles.css';
import { useFormik } from 'formik';
import { FormikErrors } from 'formik/dist/types';

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
};

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const FormikBasicPage: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Formik Tutorial</h1>

      <form noValidate onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span>{formik.errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span>{formik.errors.lastName}</span>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
