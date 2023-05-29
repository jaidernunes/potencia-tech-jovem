import { useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();
  const navigateTo = useNavigate();
  const { setIsOpen, setIsRegisterOpen } = useContext(AppContext);

  const handleLogin = () => {
    setIsOpen(true);
  }

  const handleRegister = () => {
    setIsRegisterOpen(true);
  }

  return (
    <div className={` w-full bg-secondary flex flex-row justify-between p-2`} >
      <div className='flex flex-row ml-8 mt-[2px]'>
        <img src={logo} alt="logo" className='h-11 ' />
        <span className='text-primary px-4 py-2 text-lg font-medium'>
          Potência Tech Jovem
        </span>
      </div>
      <div className='space-x-2'>
        {location.pathname === '/home' && (
          <>
            <button
              className="bg-primary text-secondary hover:bg-purpleLight text-2xl font-extrabold rounded-lg px-9 py-1 ml-4 my-1"
              onClick={handleRegister}
            >
              Cadastro
            </button>
            <button
              className='bg-secondary text-white hover:text-purpleLight text-xl font-bold py-2 px-8'
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        )}
        {location.pathname !== '/home' && (
          <button
            className='bg-secondary text-white hover:text-purpleLight text-xl font-medium py-2 px-8'
            onClick={() => { navigateTo('/home') }}
          >
            Logout
          </button>
        )}
      </div>
    </div >
  )
}