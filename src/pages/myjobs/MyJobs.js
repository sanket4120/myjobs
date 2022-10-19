import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Applicants, Loader, Pagination } from '../../components';
import {
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
} from '../../constants/userConstants';
import { myJobsReducer } from '../../reducers/myJobsReducer';

const MyJobs = () => {
  const [myJobsState, setMyJobsState] = useReducer(myJobsReducer, {
    loading: false,
    myJobs: [],
    error: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [showApplicants, setShowApplicants] = useState(false);
  const handleClose = () => setShowApplicants(false);
  const [currentJobId, setCurrentJobId] = useState('');

  useEffect(() => {
    const getJobs = async () => {
      setMyJobsState({ type: GET_JOBS_REQUEST });

      try {
        const res = await axios.get(
          `https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${currentPage}`
        );

        const { data, metadata } = res.data.data;
        setMyJobsState({ type: GET_JOBS_SUCCESS, payload: data });
        setTotalPages(Math.ceil(metadata.count / metadata.limit));
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getJobs();
  }, [currentPage]);

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
  }

  const viewApplicants = (jobId) => {
    setCurrentJobId(jobId);
    setShowApplicants(true);
  };

  const handleCurrentPage = (count) => {
    setCurrentPage((currentPage) => currentPage + count);
  };

  const { loading, myJobs, error } = myJobsState;

  return (
    <div>
      <div className='text-white mt-2'>
        <Link to='/'>
          <i className='fa-solid fa-house me-2'></i>
          <span>Home</span>
        </Link>

        <h2 className='fs-5 my-3'>Jobs posted by you</h2>
      </div>
      {loading && <Loader />}

      {!loading && myJobs && (
        <>
          <Row md={3} lg={4} className='gx-3 gy-5'>
            {myJobs.map((job) => (
              <Col key={job.id} className='d-flex flex-column'>
                <Card className=' flex-grow-1'>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>{truncate(job.description, 70)}</Card.Text>
                  </Card.Body>

                  <Card.Footer className='border-0 bg-transparent d-flex justify-content-between gap-1 flex-wrap'>
                    <span className='d-flex align-items-center'>
                      <i className='fa-solid fa-location-dot text-primary'></i>
                      <span className='ms-1 text-break'>
                        {truncate(job.location, 10)}
                      </span>
                    </span>
                    <Button
                      className='bg-primary bg-opacity-25 text-dark border-0'
                      size='sm'
                      onClick={() => viewApplicants(job.id)}
                    >
                      View Applications
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              handleCurrentPage={handleCurrentPage}
              currentPage={currentPage}
            />
          )}
        </>
      )}

      {!loading && !error && myJobs.length === 0 && (
        <div className='position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center'>
          <span className='display-1 text-center text-secondary'>
            <i class='fa-solid fa-file-pen'></i>
          </span>
          <p>Your posted jobs will show here!</p>
          <Button variant='primary text-white'>Post a Job</Button>
        </div>
      )}

      <Applicants
        showApplicants={showApplicants}
        handleClose={handleClose}
        jobId={currentJobId}
      />
    </div>
  );
};

export { MyJobs };
