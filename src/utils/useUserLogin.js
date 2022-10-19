import { useEffect, useState } from 'react';
import { validateLogin, validateLoginField } from './validate';
import { login } from '../actions/authActions';
import { useAuth } from '../context/authContext';
import { useLocation, useNavigate } from 'react-router-dom';

const useUserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  });
  const {
    setAuth,
    authState: { isAuthenticated },
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/myjobs';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateLogin(formData);

    if (isValid) {
      const { email, password } = formData;
      const loginCredentials = {
        email,
        password,
      };

      login(setAuth, loginCredentials);

      setFormData({
        email: '',
        password: '',
        errors: {
          email: '',
          password: '',
        },
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, ...errors },
      }));
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    const error = validateLoginField(name, value, formData);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors: { ...formData.errors, [name]: error },
    }));
  };

  return {
    handleChange,
    formData,
    handleSubmit,
  };
};

export { useUserLogin };
