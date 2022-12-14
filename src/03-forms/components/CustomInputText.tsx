import { Field, ErrorMessage } from 'formik';

type Props = {
  label: string;
  placeholder?: string;
  type: string;
};

const CustomInputText: React.FC<Props> = ({ type, label, placeholder = '' }) => {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <Field name={type} placeholder={placeholder} type="text" />
      <ErrorMessage component="span" name={type} />
    </>
  );
};

export default CustomInputText;
