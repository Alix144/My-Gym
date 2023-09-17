import { BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Header from './components/Header';
import Body from './pages/Body';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/body" element={<Body />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
