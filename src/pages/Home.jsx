import Header from "../components/Header";
import imgEstudante1 from '../../public/imagem-estudante-1.jpg'
import Login from "../components/Login";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import HomeCards from "../components/HomeCards";
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import parcerias from '../assets/parcerias.png'
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import PreRegister from "../components/PreRegister";

export default function Home() {
  const { isOpen, setIsOpen, isRegisterOpen, setIsRegisterOpen } = useContext(AppContext);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };
  const handleRegister = () => {
    setIsRegisterOpen(true);
  }

  const cards = [
    {
      title: "Estudante",
      description: "Se você for aluno do segundo e terceiro ano do ensino médio e quer aprender sobre programação e tecnologia, pode fazer o seu próprio cadastro.",
      imageSrc: card1,
    },
    {
      title: "Escolas da Rede Pública",
      description: "Escolas podem se cadastrar no programa para disponibilizar os cursos do Itinerário Formativo de Tecnologia para os seus alunos. Instituições de ensino participantes recebem benefícios e recompensas para os alunos.",
      imageSrc: card2,
    },
    {
      title: "A Plataforma",
      description: "As aulas são 100% online em nosso Ambiente Virtual de Aprendizagem. Os profissionais de educação, podem acompanhar a trilha de evolução dos alunos cadastrados no programa.",
      imageSrc: card3,
    },
  ]

  return (
    <>
      <Header />
      <div className="w-full">
        <section className="relative">
          <div className="relative">
            <img
              src={imgEstudante1}
              alt="background estudante"
              className="object-cover w-full z-0 min-h-[600px]"
            />
            <div className="absolute left-0 top-0 lg:left-[100px] lg:top-[100px] xl:left-[250px] xl:right-[250px] w-[600px] p-8">
              <h1 className="text-secondary text-[100px] text-center font-extrabold leading-[96px]">
                Tecnologia acessível para todos
              </h1>
              <h3 className="text-secondary text-2xl font-medium leading-9 m-4 my-8">
                O programa Potência Tech Jovem conecta  alunos do ensino médio de escolas públicas à Área de Tecnologia
              </h3>
              <button
                className="bg-primary text-secondary hover:bg-secondary hover:text-purpleLight text-2xl font-extrabold rounded-lg px-9 py-2 ml-4"
                onClick={handleRegister}
              >
                Cadastro
              </button>
            </div>
          </div>
        </section>
        <section className="max-w-[1280px] mx-auto p-10">
          <h2 className="text-secondary text-4xl font-bold">
            O Programa
          </h2>
          <h3 className="text-secondary text-2xl font-medium leading-9 my-8">
            Nossa plataforma educacional gratuita oferece uma trilha de formação completa para jovens do ensino médio darem os primeiros passos na área de tecnologia.
          </h3>
          <div className="grid grid-cols-3 gap-6 mx-auto ">
            {cards.map((item, i) => (
              <HomeCards
                item={item}
                key={i}
              />
            ))}
          </div>
        </section>
        <section className=" max-w-[1280px] pb-2 mx-auto">
          <div className="bg-grayLight mx-10 pb-10">
            <h4 className="text-secondary text-xl font-semibold mb-4 p-3 pl-5">Empresas Parceiras</h4>
            <img
              src={parcerias}
              alt="empresas parceiras"
              className="w-5/6 mx-auto "
            />
          </div>
        </section>
        <div className="flex items-center justify-center w-full">
          <Login isOpen={isOpen} onClose={handleCloseModal} />
          <PreRegister isOpen={isRegisterOpen} onClose={handleCloseRegister} />
        </div>
        <footer>
          <div className="flex justify-center m-10 text-secondary">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-4"><FaInstagram size={24} /></a>
            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="mx-4"><FaDiscord size={24} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-4"><FaLinkedin size={24} /></a>
          </div>
        </footer>
      </div>
    </>
  )

}