import { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import AppContext from "../context/AppContext";
import { useNavigate } from 'react-router-dom';

export default function RegisterSchool() {
  const { schools, setSchools } = useContext(AppContext)
  const navigateTo = useNavigate();

  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [board, setBoard] = useState('')
  const [principal, setPrincipal] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [cep, setCep] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)


  const handleSubmit = (event) => {
    event.preventDefault();
    const school = {
      name,
      code,
      board,
      principal,
      phone,
      email,
      state,
      city,
      address,
      number,
      cep,
      password
    }

    const updatedSchools = [...schools, school];

    localStorage.setItem('students', JSON.stringify(updatedSchools));
    setSchools(updatedSchools);

    console.log(updatedSchools);
    navigateTo('/escola/acompanhamento')
  }

  const checkFields = () => {
    if (name === '' ||
      code === '' ||
      board === '' ||
      principal === '' ||
      phone === '' ||
      email === '' ||
      state === '' ||
      city === '' ||
      address === '' ||
      number === '' ||
      cep === '' ||
      password === '') {
      return true
    }
    return false
  }

  useEffect(() => {
    setIsDisabled(checkFields())
  }, [name, code, board, principal, phone, email, state, city, address, number, cep, password])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-7">
        Cadastro Escola
      </h1>
      <form className="flex flex-col space-y-4">
        <Input
          id="inputName"
          label="Nome"
          classLabel="flex flex-col font-extrabold text-sm leading-6"
          type="text"
          value={name}
          inputName="inputName"
          onChange={({ target }) => setName(target.value)}
          placeholder="Ex.: Escola Municipal Francisco Portugal"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          id="inputCode"
          label="Código INEP/MEC"
          classLabel="flex flex-col font-extrabold text-sm leading-6"
          type="text"
          value={code}
          inputName="inputCode"
          onChange={({ target }) => setCode(target.value)}
          placeholder="Ex.: 00000000"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          id="inputBoard"
          label="Diretoria Regional"
          classLabel="flex flex-col font-extrabold text-sm leading-6"
          type="text"
          value={board}
          inputName="inputBoard"
          onChange={({ target }) => setBoard(target.value)}
          placeholder="Escreva aqui o nome da Diretoria responsável"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <div className="flex flex-row gap-4">
          <Input
            id="inputPrincipal"
            label="Diretoria da Escola"
            classLabel="flex flex-col font-extrabold text-sm leading-6"
            type="text"
            value={principal}
            inputName="inputPrincipal"
            onChange={({ target }) => setPrincipal(target.value)}
            placeholder="Nome Responsável"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
          <Input
            id="inputPhone"
            label="Telefone"
            classLabel="flex flex-col font-extrabold text-sm leading-6"
            type="phone"
            value={phone}
            inputName="inputPhone"
            onChange={({ target }) => setPhone(target.value)}
            placeholder="Ex.: (00) 11111-1111"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
        </div>
        <Input
          id="inputEmail"
          label="E-mail"
          classLabel="flex flex-col font-extrabold text-sm"
          type="email"
          value={email}
          inputName="inputEmail"
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Digite seu e-mail"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <div className="flex flex-row gap-4">
          <Input
            id="inputState"
            label="Estado"
            classLabel="flex flex-col font-extrabold text-sm w-1/4"
            type="text"
            value={state}
            inputName="inputState"
            onChange={({ target }) => setState(target.value)}
            placeholder="Ex.: MG"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
          <Input
            id="inputCity"
            label="Cidade"
            classLabel="flex flex-col font-extrabold text-sm w-full"
            type="text"
            value={city}
            inputName="inputCity"
            onChange={({ target }) => setCity(target.value)}
            placeholder="Ex.: Belo Horizonte"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
        </div>
        <Input
          id="inputAddress"
          label="Endereço da Escola"
          classLabel="flex flex-col font-extrabold text-sm leading-6"
          type="text"
          value={address}
          inputName="inputAddress"
          onChange={({ target }) => setAddress(target.value)}
          placeholder="Ex.: Rua Francisco Pires"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <div className="flex flex-row gap-4">
          <Input
            id="inputNumber"
            label="Número"
            classLabel="flex flex-col font-extrabold text-sm leading-6"
            type="number"
            value={number}
            inputName="inputNumber"
            onChange={({ target }) => setNumber(target.value)}
            placeholder="Ex.: 123"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
          <Input
            id="inputCep"
            label="CEP"
            classLabel="flex flex-col font-extrabold text-sm leading-6"
            type="number"
            value={cep}
            inputName="inputCep"
            onChange={({ target }) => setCep(target.value)}
            placeholder="Ex.: 00000-000"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
        </div>
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
          className="bg-primary hover:bg-secondary hover:text-purpleLight disabled:bg-gray text-secondary font-bold py-2 px-4 rounded-xl"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}