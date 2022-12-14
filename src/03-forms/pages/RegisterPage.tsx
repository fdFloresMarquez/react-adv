import '../styles/styles.css';

type Props = {};

const RegisterPage: React.FC<Props> = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <input placeholder="Repeat Password" type="password" />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default RegisterPage;
