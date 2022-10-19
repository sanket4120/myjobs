import './css/App.min.css';
import './css/main.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Login } from './pages';
import { Container } from 'react-bootstrap';
import { Header, Wrapper } from './components';
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
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </Container>
        </Container>
      </GlobalProvider>
    </div>
  );
}

export default App;
