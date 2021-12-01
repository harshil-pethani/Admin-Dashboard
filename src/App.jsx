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

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" exact element={<Users />} />
          <Route path="/users/:userId" exact element={<UpdateUser />} />
          <Route path="/users/create" exact element={<CreateUser />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:productId" exact element={<UpdateProduct />} />
          <Route path="/products/create" exact element={<CreateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
