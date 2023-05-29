import { useContext, useState } from "react";
import Input from "../components/Input";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function RegisterStudent() {
  const navigateTo = useNavigate();

  const { students, setStudents } = useContext(AppContext);
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [birth, setBirth] = useState('')
  const [school, setSchool] = useState('')
  const [proof, setProof] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = {
      name,
      email,
      birth,
      school,
      proof,
      state,
      city,
      password
    }

    const updatedStudents = [...students, student];

    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setStudents(updatedStudents);

    console.log(updatedStudents);
    navigateTo('/estudante/cursos')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-7">
        Cadastro Estudante
      </h1>
      <form className="flex flex-col space-y-4">
        <Input
          label="Nome"
          id="inputName"
          inputName="inputName"
          classLabel="flex flex-col font-extrabold text-sm leading-6"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Digite seu nome"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          label="CPF"
          id="inputCpf"
          inputName="inputCpf"
          classLabel="flex flex-col font-extrabold text-sm leading-6"
          type="text"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
          placeholder="Ex.: 000.000.000-00"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          label="E-mail"
          id="inputEmail"
          inputName="inputEmail"
          classLabel="flex flex-col font-extrabold text-sm"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Digite seu e-mail"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        {/* INSTALL DATEPICKER */}
        <Input
          label="Data de Nascimento"
          id="inputBirth"
          inputName="inputBirth"
          classLabel="flex flex-col font-extrabold text-sm"
          type="date"
          value={birth}
          onChange={({ target }) => setBirth(target.value)}
          placeholder="Ex.: mm/dd/yyyy"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          label="Escola"
          id="inputSchool"
          inputName="inputSchool"
          classLabel="flex flex-col font-extrabold text-sm"
          type="text"
          value={school}
          onChange={({ target }) => setSchool(target.value)}
          placeholder="Ex.: Escola Municipal Francisco Portugal"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        {/* <Input
          label="Comprovação de Vínculo Estudantil"
          id="inputProof"
          inputName="inputProof"
          classLabel="flex flex-col font-extrabold text-sm"
          type="file"
          value={proof}
          onChange={({ target }) => setProof(target.value)}
          placeholder="Ex.: Escola Municipal Francisco Portugal"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        /> */}
        <label htmlFor="inputProof" className="flex flex-col font-extrabold text-sm">
          Comprovação de Vínculo Estudantil
          <div className="relative border border-gray font-normal text-sm leading-6 h-[40px] rounded-xl">
            <input
              id="inputProof"
              name="inputProof"
              type="file"
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
              onChange={({ target }) => setProof(target.value)}
              value={proof}
            />
            <div className="flex justify-between">
              {!proof && (
                <span className="text-gray justify-start my-auto ml-3">
                  Selecione o arquivo de comprovação
                </span>
              )}
              <span className="m-2">{proof}</span>
              <button className="bg-primary text-black rounded-r-[11px] h-[38px] w-[38px]">
                <FaCloudUploadAlt size={24} className="m-auto text-secondary" />
              </button>
            </div>
          </div>
        </label>
        <div className="flex flex-row gap-4">
          <Input
            label="Estado"
            id="inputState"
            inputName="inputState"
            classLabel="flex flex-col font-extrabold text-sm w-1/4"
            type="text"
            value={state}
            onChange={({ target }) => setState(target.value)}
            placeholder="Ex.: MG"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
          <Input
            label="Cidade"
            id="inputCity"
            inputName="inputCity"
            classLabel="flex flex-col font-extrabold text-sm w-full"
            type="text"
            value={city}
            onChange={({ target }) => setCity(target.value)}
            placeholder="Ex.: Belo Horizonte"
            classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
          />
        </div>
        <Input
          label="Senha"
          id="inputPassword"
          inputName="inputPassword"
          classLabel="flex flex-col font-extrabold text-sm"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Digite sua senha"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl mb-6"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-secondary hover:text-purpleLight text-secondary disabled:bg-gray font-extrabold py-2 px-4 rounded-xl"
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}