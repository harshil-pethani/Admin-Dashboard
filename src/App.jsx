import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import CreateUser from './Pages/CreateUser/CreateUser';
import Products from './Pages/Products/Products';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import CreateProduct from './Pages/CreateProduct/CreateProduct';
import Analytics from './Pages/Analytics/Analytics';
import Sales from './Pages/Sales/Sales';
import Transactions from './Pages/Transactions/Transactions';
import Reports from './Pages/Report/Reports';
import Mail from './Pages/Mail/Mail';
import Feedback from './Pages/Feedback/Feedback';
import Messages from './Pages/Messages/Messages';

import { useState } from 'react';
function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  return (
    <BrowserRouter>
      <Topbar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
      <div className="container">
        <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />

        <Routes>
          <Route path="/" exact element={<Home activeSidebar={activeSidebar} />} />
          <Route path="/users" exact element={<Users activeSidebar={activeSidebar} />} />
          <Route path="/users/:userId" exact element={<UpdateUser activeSidebar={activeSidebar} />} />
          <Route path="/users/create" exact element={<CreateUser activeSidebar={activeSidebar} />} />
          <Route path="/products" exact element={<Products activeSidebar={activeSidebar} />} />
          <Route path="/products/:productId" exact element={<UpdateProduct activeSidebar={activeSidebar} />} />
          <Route path="/products/create" exact element={<CreateProduct activeSidebar={activeSidebar} />} />
          <Route path="/analytics" exact element={<Analytics activeSidebar={activeSidebar} />} />
          <Route path="/sales" exact element={<Sales activeSidebar={activeSidebar} />} />
          <Route path="/transactions" exact element={<Transactions activeSidebar={activeSidebar} />} />
          <Route path="/reports" exact element={<Reports activeSidebar={activeSidebar} />} />
          <Route path="/mail" exact element={<Mail activeSidebar={activeSidebar} />} />
          <Route path="/feedback" exact element={<Feedback activeSidebar={activeSidebar} />} />
          <Route path="/messages" exact element={<Messages activeSidebar={activeSidebar} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
