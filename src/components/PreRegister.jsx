import PropTypes from 'prop-types';
import close from '../../public/close.png'
import souEscola from '../assets/souEscola.jpg'
import souEstudante from '../assets/souEstudante.jpg'
import { useNavigate } from 'react-router-dom';

export default function PreRegister({ isOpen, onClose }) {
  const navigateTo = useNavigate();
  const modalClassName = isOpen ? "fixed inset-0 flex items-center justify-center z-50" : "hidden";
  const overlayClassName = isOpen ? "absolute inset-0 bg-black opacity-75 h-screen" : "";

  return (
    <>
      <div className={modalClassName}>
        <div className="relative bg-white w-1/2 min-w-[800px] pt-6 pb-10 px-9">
          <div className='relative flex flex-row mb-8'>
            <h3 className='text-lg font-semibold text-center w-full'>
              Tipo de Cadastro
            </h3>
            <button className='absolute right-0 top-1.5' onClick={onClose}>
              <img src={close} alt="close" />
            </button>
          </div>

          <div className='grid grid-cols-2 gap-6 mx-auto '>
            <button onClick={() => { navigateTo('/estudante/registro') }}>
              <div className="bg-secondary text-white rounded-md shadow-md overflow-hidden max-w-[410px] relative">
                <img
                  className="h-48 w-full object-cover object-center"
                  src={souEstudante}
                  alt='cadastro estudante'
                />
                <div className="px-6 py-4">
                  <h3 className="text-lg text-center font-medium uppercase">
                    SOU ESTUDANTE
                  </h3>
                </div>
              </div>
            </button>
            <button onClick={() => { navigateTo('/escola/registro') }}>
              <div className="bg-secondary text-white rounded-md shadow-md overflow-hidden max-w-[410px] relative">
                <img
                  className="h-48 w-full object-cover object-center"
                  src={souEscola}
                  alt='cadastro escola'
                />
                <div className="px-6 py-4">
                  <h3 className="text-lg text-center font-medium uppercase">
                    SOU ESCOLA
                  </h3>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={overlayClassName}></div>
    </>
  );
}

PreRegister.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};