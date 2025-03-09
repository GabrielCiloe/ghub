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
        <div className="flex flex-col justify-between bg-gradient-to-b from-black/40 to-violet-900 p-4 lg:p-10 xl:p-10 rounded-3xl h-[60vh] lg:h-[90vh] xl:h-[90vh]">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-white text-2xl">G-Hub</h2>
            <nav className="flex gap-4">
              <a href="#sobre" className="text-white hover:text-violet-300 transition-all">Sobre</a>
              <a href="#projetos" className="text-white hover:text-violet-300 transition-all">Trabalhos</a>
            </nav>
            <Link href="https://api.whatsapp.com/send?phone=19971205999&text=Oi,%20queria%20fazer%20um%20projeto%20web%20contigo." className="bg-white hover:bg-black px-4 py-1.5 border-2 hover:border-2 hover:border-violet-700 border-transparent rounded-full font-medium text-black hover:text-white transition-all">Contato</Link>
          </div>

          <div className="flex flex-col space-y-8">
            <h2 className="max-w-3xl font-mono text-2xl lg:text-5xl xl:text-5xl uppercase">Descomplicamos a Web para você: resultados rápidos e de qualidade.</h2>
            <div className="flex flex-row lg:flex-row xl:flex-row justify-between items-center lg:items-end xl:items-end gap-2">
              <a href="#sobre" className="flex flex-row justify-between items-center bg-white p-1 pl-4 rounded-full w-fit font-mono font-medium text-black text-lg text-nowrap cursor-pointer">Descubra mais
                <div className="flex justify-center items-center bg-[#2F06E4] ml-4 lg:ml-8 xl:ml-8 p-4 rounded-full">
                  <FaArrowRight className="text-white text-lg lg:text-2xl xl:text-2xl" />

                </div>
              </a>

              <p className="font-mono text-white text-sm text-left">[Abaixo tem mais]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-14 px-5 lg:px-0 xl:px-0 py-20" id="sobre">
        <div className="flex flex-col space-y-5 mx-auto max-w-7xl">
          <p className="flex flex-row items-center gap-2 font-mono text-black">
            <span className="block bg-gray-400 rounded-full w-2 h-2" />
            Sobre
          </p>
          <div className="flex flex-row justify-between items-start">
            <h2 className="w-full lg:max-w-[50%] xl:max-w-[50%] font-mono font-medium text-black text-xl lg:text-4xl xl:text-4xl uppercase">Soluções Web rápidas, práticas e perfeitamente adaptadas ao seu negócio.</h2>
            <a href="#projetos" className="hidden lg:flex xl:flex bg-black px-7 py-3 rounded-full font-mono text-white text-lg cursor-pointer">
              Ver projetos finalizados
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src={macbook} alt="" width={900} quality={100} />
        </div>
      </section>

      <section className="space-y-14 px-5 lg:px-0 xl:px-0 py-20" id="projetos">
        <div className="flex flex-col space-y-5 mx-auto max-w-7xl">
          <p className="flex flex-row items-center gap-2 font-mono text-black">
            <span className="block bg-gray-400 rounded-full w-2 h-2" />
            Projetos finalizados
          </p>
          <div className="flex flex-row justify-between items-start">
            <h2 className="w-full lg:max-w-[50%] xl:max-w-[50%] font-mono font-medium text-black text-xl lg:text-4xl xl:text-4xl uppercase">Todos esses projetos foram finalizados, o da sua empresa pode ser o próximo!</h2>
          </div>
          <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-5">
            <ProjectCard imagem="/gobe-logo.png" link="https://gobe.be/" />
            <ProjectCard imagem="/alia-logo.png" link="https://alialogistica.com.br/v3/" />
            <ProjectCard imagem="/ministerio-jovem-logo.png" link="https://www.adventistas.org/pt/jovensnovo/" />
            <ProjectCard imagem="/logo-unasp.png" link="https://lp.unasp.edu.br/unasplus/" />
            <ProjectCard imagem="/logo-unasp.png" link="https://unasp.edu.br/medicina" />
            <ProjectCard imagem="/logo-unasp.png" link="https://lp.unasp.edu.br/comercial/" />
            <ProjectCard imagem="/iaja-logo.svg" link="https://iaja.adventistas.org/" />
            <ProjectCard imagem="/estudio-obliquo.png" link="https://estudioobliquo.com.br/" />
            <ProjectCard imagem="/yhmc-logo.png" link="https://yourhomemedicalcare.com/" />
            <ProjectCard imagem="/naph-logo.svg" link="https://naph.com.br/" />
            <ProjectCard imagem="/logo-quebrando-silencio.svg" link="http://quebrandoosilencio.org" />
            <ProjectCard imagem="/salmista-logo.png" link="https://colegiosalmista.com.br/" />
          </div>
        </div>


      </section>
    </main>
  );
}