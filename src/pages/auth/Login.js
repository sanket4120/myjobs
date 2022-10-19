import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useAuth } from '../../context/authContext';
import { useUserLogin } from '../../utils/useUserLogin';
import './auth.css';

const Login = () => {
  const { handleChange, formData, handleSubmit } = useUserLogin();
  const { email, password, errors } = formData;

  const { authState } = useAuth();

  return (
    <>
      <Card className='border-0 mx-auto auth-container pb-5 shadow-sm'>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <h1 className='fs-5 mb-3'>Login</h1>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={handleChange}
                className={`${
                  (errors.email || authState.error) && 'border-danger'
                }`}
              />
              {errors.email && (
                <Form.Text className='d-block text-danger text-end'>
                  {errors.email}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className='mb-4' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleChange}
                className={`${
                  (errors.password || authState.error) && 'border-danger'
                }`}
              />
              {errors.password && (
                <Form.Text className='d-block text-danger text-end'>
                  {errors.password}
                </Form.Text>
              )}
              {authState.error && (
                <Form.Text className='d-block text-danger text-end'>
                  {authState.error}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className='text-center'>
              <Button
                variant='primary text-white'
                type='submit'
                disabled={authState.loading}
              >
                {authState.loading ? (
                  <Spinner animation='border' variant='white' size='sm' />
                ) : (
                  'Login'
                )}
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export { Login };
