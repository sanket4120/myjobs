import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className='my-5 text-center'>
      <Spinner animation='border' variant='primary' />
    </div>
  );
};

export { Loader };
