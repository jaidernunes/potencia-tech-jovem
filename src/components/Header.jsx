// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  // const [pageColor, setPageColor] = useState('');

  // useEffect(() => {
  //   const getHeaderBackground = () => {
  //     if (location.pathname.includes('escola')) {
  //       return 'primary';
  //     } else if (location.pathname === '/contact') {
  //       return 'green';
  //     } else {
  //       return 'secondary';
  //     }
  //   };

  //   const headerBackground = getHeaderBackground();
  //   console.log(headerBackground);
  //   setPageColor(headerBackground);
  // }, [location]);


  return (
    <div className={` w-full bg-secondary flex flex-row justify-between p-2`} >
      <span className='text-primary px-4 py-2'>Potência Tech Jovem</span>
      <div className='space-x-2'>
        {location.pathname === '/home' && (
          <>
            <button
              className='rounded-md bg-black text-white px-4 py-2'
            >
              Inscreva-se
            </button>
            <button
              className='rounded-md bg-black text-white px-4 py-2'
            >
              Login
            </button>
          </>
        )}
        {location.pathname !== '/home' && (
          <button
            className='rounded-md bg-black text-white px-4 py-2'
          >
            Logout
          </button>
        )}
      </div>
    </div >
  )
}