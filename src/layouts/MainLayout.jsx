import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ cart, addToCart }) => {
    return (
        <div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
            <Navbar cart={cart} /> 
            <main className='flex-grow flex flex-col justify-between py-4'>
                <Outlet context={{ addToCart }} /> 
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;