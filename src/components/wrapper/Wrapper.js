import { useLocation } from 'react-router-dom';
import './wrapper.css';

const Wrapper = () => {
  const location = useLocation();
  let height;

  switch (location.pathname.toLowerCase()) {
    case '/':
      height = '60vh';
      break;
    case '/login':
      height = '45vh';
      break;
    default:
      height = '30vh';
      break;
  }

  return <div className='wrapper' style={{ height }}></div>;
};

export { Wrapper };
