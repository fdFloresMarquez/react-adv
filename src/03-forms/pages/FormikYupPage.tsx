import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
};

const FormikYupPage: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'First Name must be 15 characters long').required('Required'),
    lastName: Yup.string().max(20, 'Last Name must be 20 characters long').required('Required'),
    email: Yup.string().email().required('Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...formik.getFieldProps('firstName')} />
        {formik.touched.firstName && formik.errors.firstName ? (
          <span>{formik.errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input type="test" {...formik.getFieldProps('lastName')} />
        {formik.touched.lastName && formik.errors.lastName ? (
          <span>{formik.errors.lastName}</span>
        ) : null}

        <label htmlFor="email">Email</label>
        <input type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
