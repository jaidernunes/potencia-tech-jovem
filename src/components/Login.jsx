import PropTypes from 'prop-types';
import Input from './Input';
import { useEffect, useState } from 'react';
import close from '../../public/close.png'
import { useNavigate } from 'react-router-dom';

export default function Login({ isOpen, onClose }) {
  const modalClassName = isOpen ? "fixed inset-0 flex items-center justify-center z-50" : "hidden";
  const overlayClassName = isOpen ? "absolute inset-0 bg-black opacity-75 h-screen" : "";

  const navigateTo = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      password
    }
    localStorage.setItem('studentLogin', JSON.stringify(data));

    navigateTo('/estudante/cursos')
  }

  const checkFields = () => {
    if (email === '' ||
      password === '') {
      return true
    }
    return false
  }

  useEffect(() => {
    setIsDisabled(checkFields())

    onClose()
  }, [email, password])

  return (
    <>
      <div className={modalClassName}>
        <div className="relative bg-white w-1/2 pt-6 pb-16 px-9">
          <div className='relative flex flex-row mb-8'>
            <h3 className='text-lg font-semibold text-center w-full'>
              Login
            </h3>
            <button className='absolute right-0 top-3' onClick={onClose}>
              <img src={close} alt="close" />
            </button>
          </div>
          <form className="flex flex-col space-y-4 mb-4">

            <Input
              id="inputEmail"
              label="E-mail"
              classLabel="flex flex-col font-extrabold text-sm"
              type="email"
              value={email}
              inputName="inputEmail"
              onChange={({ target }) => setEmail(target.value)}
              placeholder="Digite o e-mail do estudante"
              classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
            />
            <Input
              id="inputPassword"
              label="Senha"
              classLabel="flex flex-col font-extrabold text-sm"
              type="password"
              value={password}
              inputName="inputPassword"
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Digite sua senha"
              classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl mb-6"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary hover:text-purpleLight text-secondary font-bold py-2 px-4 rounded-xl"
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
      <div className={overlayClassName}></div>
    </>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};