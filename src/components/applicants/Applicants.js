import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {
  GET_APPLICANTS_REQUEST,
  GET_APPLICANTS_SUCCESS,
} from '../../constants/userConstants';
import { applicantsReducer } from '../../reducers/myJobsReducer';
import { Avatar } from '../avatar/Avatar';
import { Loader } from '../loader/Loader';
import './applicants.css';

function Applicants({ showApplicants, handleClose, jobId }) {
  const [applicantsState, setApplicantsState] = useReducer(applicantsReducer, {
    loading: false,
    applicants: [],
    error: null,
  });

  useEffect(() => {
    const getApplicants = async () => {
      setApplicantsState({ type: GET_APPLICANTS_REQUEST });

      try {
        const res = await axios.get(
          `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${jobId}/candidates`
        );

        const data = res.data?.data ?? [];

        setApplicantsState({ type: GET_APPLICANTS_SUCCESS, payload: data });
      } catch (error) {
        console.log(error.response.data);
      }
    };
    if (jobId) {
      getApplicants();
    }
  }, [jobId]);

  const { loading, error, applicants } = applicantsState;

  return (
    <>
      <Modal
        show={showApplicants}
        onHide={handleClose}
        animation={false}
        size='lg'
        className='applicants'
      >
        <Modal.Header closeButton>
          <Modal.Title>Applicants for this job</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column'>
          {applicants.length > 0 ? (
            <p>Total {applicants.length} applicantions</p>
          ) : (
            <p>0 Applications</p>
          )}

          <div className='applications bg-secondary bg-opacity-25 rounded-3 flex-grow-1 p-2'>
            {loading && <Loader />}

            {!loading && applicants && (
              <Row xs={1} lg={2} className='g-1'>
                {applicants.map((applicant) => (
                  <Col key={applicant.id} className='d-flex flex-column'>
                    <Card className='flex-grow-1'>
                      <Card.Header className='bg-transparent border-0 d-flex  align-items-center gap-2'>
                        <div className='me-1'>
                          <Avatar name={applicant.name} />
                        </div>
                        <Card.Text className='text-break'>
                          <span>{applicant.name}</span>
                          <br />
                          <span>{applicant.email}</span>
                        </Card.Text>
                      </Card.Header>

                      <Card.Body className='pb-0'>
                        <Card.Text>
                          <span className='fw-semibold'>Skills</span>
                          <p>{applicant.skills}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

            {!loading && !error && applicants.length === 0 && (
              <div className='position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center'>
                <span className='display-1 text-center text-secondary'>
                  <i class='fa-solid fa-file-pen'></i>
                </span>
                <p>No applicants available!</p>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { Applicants };
