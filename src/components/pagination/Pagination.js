import { Button } from 'react-bootstrap';
import './pagination.css';

const Pagination = ({ totalPages, currentPage, handleCurrentPage }) => {
  return (
    <div className='my-5 d-flex justify-content-center gap-2 pagination'>
      <Button
        disabled={currentPage === 1}
        onClick={() => handleCurrentPage(-1)}
        variant='secondary'
        className='prev'
      >
        <i className='fa-solid fa-caret-left'></i>
      </Button>
      <Button className='bg-primary bg-opacity-25 text-dark border-0'>
        {currentPage}
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => handleCurrentPage(1)}
        variant='secondary'
        className='next'
      >
        <i className='fa-solid fa-caret-right'></i>
      </Button>
    </div>
  );
};

export { Pagination };
