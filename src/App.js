import Appbar from './Header/AppBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RequireAuth from "./components/requireAuth"
import About from './pages/About';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Signup from './pages/Signup';
import NoMatch from './pages/noMatch';
import Todo from './pages/todo'



function App() {
  return (
       <BrowserRouter>
        <Appbar/> 
         <Routes>
           <Route path="/about" element={<About />} />
           <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
            <Route
            path="/todo"
            element={
              <RequireAuth>
                <Todo />
              </RequireAuth>
            }
          />
           <Route path="/login" element={<Login />} />
           <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
           <Route path="/signup" element={<Signup />} />
           <Route path="*" element={<NoMatch />} />
         </Routes>

       </BrowserRouter>
  );
}

export default App;
