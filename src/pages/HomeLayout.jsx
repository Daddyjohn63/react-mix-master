import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
//by using Outlet, all elements around it will be published in all pages
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
