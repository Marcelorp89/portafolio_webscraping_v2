import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">


          {/* Redes */}
            <div className="flex flex-col items-center gap-3">
            <span className="text-sm uppercase tracking-wider text-zinc-500">
                Contacto
            </span>
            <div className="flex flex-row gap-3">
                <a href="https://github.com/Marcelorp89"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 hover:bg-purple-800 hover:scale-105 transition-all duration-300"
                >
                <FaGithub />
                </a>

                <a href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 hover:bg-sky-500 hover:scale-105 transition-all duration-300"
                >
                <TbWorldWww />
                </a>

                <a href="https://www.linkedin.com/in/marcelorodriguezpalma/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                <FaLinkedin />
                </a>

            </div>

            </div>


        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 mt-8 pt-4 text-center">

          <p className="text-xs text-zinc-500 hover:text-green-500">
            Elaborado por ManoTech ©
          </p>

        </div>

      </div>

    </footer>
  );
}