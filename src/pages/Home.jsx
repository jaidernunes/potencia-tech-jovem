import Header from "../components/Header";
import imgEstudante1 from '../../public/imagem-estudante-1.jpg'
import Modal from "../components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header />
      <section className="relative">
        <div className="relative">
          <img
            src={imgEstudante1}
            alt="background estudante"
            className="h-full z-0"
          />
          <div className="absolute left-0 top-0 w-4/6 p-8">
            <h1>
              Tecnologia acessível para todos
            </h1>
            <h3>
              O programa Potência Tech Jovem conecta alunos do ensino médio de escolas públicas à área de tecnologia
            </h3>
            <button className="bg-primary rounded-lg px-4 py-2">
              Cadastro
            </button>
          </div>
        </div>
      </section>
      <section>
        <h2>
          O Programa
        </h2>
        <h3>
          Nossa plataforma educacional gratuita oferece uma trilha de formação completa para jovens do ensino médio darem os primeiros passos na área de tecnologia.
        </h3>
      </section>
      <div className="flex items-center justify-center h-screen">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleOpenModal}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </>
  )

}