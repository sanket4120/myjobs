import {
  GET_JOBS_FAIL,
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_APPLICANTS_REQUEST,
  GET_APPLICANTS_SUCCESS,
  GET_APPLICANTS_FAIL,
} from '../constants/userConstants';

const myJobsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOBS_REQUEST:
      return { ...state, loading: true };
    case GET_JOBS_SUCCESS:
      return { ...state, loading: false, error: null, myJobs: payload };
    case GET_JOBS_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

const applicantsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_APPLICANTS_REQUEST:
      return { ...state, loading: true };
    case GET_APPLICANTS_SUCCESS:
      return { loading: false, error: null, applicants: payload };
    case GET_APPLICANTS_FAIL:
      return { loading: false, error: payload, applicants: [] };
    default:
      return state;
  }
};

export { myJobsReducer, applicantsReducer };
