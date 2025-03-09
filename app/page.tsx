import Link from "next/link";
import bgHero from '../public/bg-hero.jpg';
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import macbook from '../public/macbook.png'
import { ProjectCard } from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="bg-white p-3 min-h-screen">
      <section
        className="rounded-4xl h-fit"
        style={{
          backgroundImage: `url(${bgHero.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className="flex flex-col justify-between bg-gradient-to-b from-black/40 to-violet-900 p-10 rounded-3xl h-[90vh]">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-white text-2xl">G-Hub</h2>
            <nav className="flex gap-4">
              <a href="#" className="text-white hover:text-violet-300 transition-all">Sobre</a>
              <a href="#" className="text-white hover:text-violet-300 transition-all">Trabalhos</a>
            </nav>
            <Link href="#" className="bg-white hover:bg-black px-4 py-1.5 border-2 hover:border-2 hover:border-violet-700 border-transparent rounded-full font-medium text-black hover:text-white transition-all">Contato</Link>
          </div>

          <div className="flex flex-col space-y-8">
            <h2 className="max-w-3xl font-mono text-5xl uppercase">Descomplicamos a Web para você: resultados rápidos e de qualidade.</h2>
            <div className="flex flex-row justify-between items-end">
              <button className="flex flex-row justify-between items-center bg-white p-1 pl-4 rounded-full w-fit font-mono font-medium text-black text-lg text-nowrap cursor-pointer">Descubra mais
                <div className="flex justify-center items-center bg-[#2F06E4] ml-8 p-4 rounded-full">
                  <FaArrowRight className="text-white text-2xl" />

                </div>
              </button>

              <p className="font-mono text-white">[Abaixo tem mais]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-14 py-20">
        <div className="flex flex-col space-y-5 mx-auto max-w-7xl">
          <p className="flex flex-row items-center gap-2 font-mono text-black">
            <span className="block bg-gray-400 rounded-full w-2 h-2" />
            Sobre
          </p>
          <div className="flex flex-row justify-between items-start">
            <h2 className="w-full max-w-[50%] font-mono font-medium text-black text-4xl uppercase">Soluções Web rápidas, práticas e perfeitamente adaptadas ao seu negócio.</h2>
            <button className="bg-black px-7 py-3 rounded-full font-mono text-white text-lg cursor-pointer">
              Ver projetos finalizados
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src={macbook} alt="" width={900} quality={100} />
        </div>
      </section>

      <section className="space-y-14 py-20">
        <div className="flex flex-col space-y-5 mx-auto max-w-7xl">
          <p className="flex flex-row items-center gap-2 font-mono text-black">
            <span className="block bg-gray-400 rounded-full w-2 h-2" />
            Projetos finalizados
          </p>
          <div className="flex flex-row justify-between items-start">
            <h2 className="w-full max-w-[50%] font-mono font-medium text-black text-4xl uppercase">Todos esses projetos foram finalizados, o da sua empresa pode ser o próximo!</h2>
          </div>
          <div className="gap-2 grid grid-cols-4 mt-5">
            <ProjectCard imagem="/gobe-logo.png" link="https://gobe.be/" />
            <ProjectCard imagem="/alia-logo.png" link="https://alialogistica.com.br/v3/" />
            <ProjectCard imagem="/ministerio-jovem-logo.png" link="https://www.adventistas.org/pt/jovensnovo/" />
            <ProjectCard imagem="/logo-unasp.png" link="https://lp.unasp.edu.br/unasplus/" />
            <ProjectCard imagem="/estudio-obliquo.png" link="https://estudioobliquo.com.br/" />
            <ProjectCard imagem="/yhmc-logo.png" link="https://yourhomemedicalcare.com/" />
          </div>
        </div>


      </section>
    </main>
  );
}