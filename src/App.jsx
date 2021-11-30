import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SingleUser from './Pages/SingleUser/SingleUser';
import CreateUser from './Pages/CreateUser/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/users/:userId" exact element={<SingleUser />} />
          <Route path="/users/create" exact element={<CreateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
