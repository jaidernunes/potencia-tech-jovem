import { useState } from "react";
import Input from "../components/Input";

export default function RegisterStudent() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [school, setSchool] = useState('')
  const [proof, setProof] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-7">
        Cadastro Estudante
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
          placeholder="Digite seu nome"
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
          placeholder="Digite seu e-mail"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          id="inputAge"
          label="Idade"
          classLabel="flex flex-col font-extrabold text-sm"
          type="number"
          value={age}
          inputName="inputAge"
          onChange={({ target }) => setAge(target.value)}
          placeholder="Digite sua idade"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          id="inputSchool"
          label="Escola"
          classLabel="flex flex-col font-extrabold text-sm"
          type="text"
          value={school}
          inputName="inputSchool"
          onChange={({ target }) => setSchool(target.value)}
          placeholder="Ex.: Escola Municipal Francisco Portugal"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl"
        />
        <Input
          id="inputProof"
          label="Comprovação de Vínculo Estudantil"
          classLabel="flex flex-col font-extrabold text-sm"
          type="text"
          value={proof}
          inputName="inputProof"
          onChange={({ target }) => setProof(target.value)}
          placeholder="Ex.: Escola Municipal Francisco Portugal"
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
          id="inputPassword"
          label="Senha"
          classLabel="flex flex-col font-extrabold text-sm"
          type="text"
          value={password}
          inputName="inputPassword"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Digite sua senha"
          classInput="border border-gray font-normal text-sm leading-6 p-1.5 pl-3 rounded-xl mb-6"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-blue-700 text-secondary font-bold py-2 px-4 rounded-xl"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}