import './css/App.min.css';
import './css/main.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Login, MyJobs } from './pages';
import { Container } from 'react-bootstrap';
import { AuthRequired, Header, Wrapper } from './components';
import { GlobalProvider } from './context/globalContext';

function App() {
  return (
    <div className='app min-vh-100'>
      <Wrapper height='60vh' />
      <GlobalProvider>
        <Container className='main-container'>
          <Header />
          <Container>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<AuthRequired />}>
                <Route path='/myjobs' element={<MyJobs />} />
              </Route>
            </Routes>
          </Container>
        </Container>
      </GlobalProvider>
    </div>
  );
}

export default App;
