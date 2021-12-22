import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/Notfound/NotFound';

const PageRoutes = () => {
  const { isLogedIn } = useSelector((state) => state.login);
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      {isLogedIn && <Route path="/dashboard" exact element={<Dashboard />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default PageRoutes;
