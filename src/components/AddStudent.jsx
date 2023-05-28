import PropTypes from 'prop-types';
import Input from './Input';
import { useState } from 'react';
import close from '../../public/close.png'

export default function AddStudent({ isOpen, onClose }) {
  const modalClassName = isOpen ? "fixed inset-0 flex items-center justify-center z-50" : "hidden";
  const overlayClassName = isOpen ? "absolute inset-0 bg-black opacity-75 h-screen" : "";

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [year, setYear] = useState('')

  return (
    <>
      <div className={modalClassName}>
        <div className="relative bg-white w-1/2 pt-6 pb-16 px-9">
          <div className='flex flex-row mb-8'>
            <h3 className='text-lg font-semibold pt-1'>Adicionar Estudante</h3>
            <button className='ml-auto' onClick={onClose}>
              <img src={close} alt="close" />
            </button>
          </div>
          <form className="flex flex-col space-y-4 mb-4">
            <Input
              id="inputName"
              label="Nome"
              classLabel="flex flex-col font-extrabold text-sm leading-6"
              type="text"
              value={name}
              inputName="inputName"
              onChange={({ target }) => setName(target.value)}
              placeholder="Digite o nome do estudante"
              classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
            />
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
              id="inputAge"
              label="Data de Nascimento"
              classLabel="flex flex-col font-extrabold text-sm"
              type="number"
              value={age}
              inputName="inputAge"
              onChange={({ target }) => setAge(target.value)}
              placeholder="Ex.: 00/00/0000"
              classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
            />
            <Input
              id="inputYear"
              label="Ano do Ensino Médio"
              classLabel="flex flex-col font-extrabold text-sm"
              type="number"
              value={year}
              inputName="inputYear"
              onChange={({ target }) => setYear(target.value)}
              placeholder="Ex.: 3"
              classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl mb-6"
            />

            <button
              type="submit"
              className="bg-primary hover:bg-blue-700 text-secondary font-bold py-2 px-4 rounded-xl"
              onClick={onClose}
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
      <div className={overlayClassName}></div>
    </>
  );
}

AddStudent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};