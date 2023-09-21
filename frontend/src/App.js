import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store";

//components
import Header from './components/Header';
import Body from './pages/Body';
import WorkoutUpdate from './components/WorkoutUpdate';
import WorkoutAdd from './components/WorkoutAdd';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  }, [dispatch])
  
  return (
    <div className="App">

        <BrowserRouter>
            <Header/>
            <Routes>
              {!isLoggedIn ?
              <>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
              <Route path="/" element={<LandingPage />}/>
              <Route path="*" element={<NotFoundPage />} />
              </> :
              <>
              <Route path="/body" element={<Body />}/>
              <Route path="/" element={<Body />}/>
              <Route path="/update/:id" element={<WorkoutUpdate />}/>
              <Route path="/add" element={<WorkoutAdd />}/>
              <Route path="*" element={<NotFoundPage />} />
              </>
              }
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
