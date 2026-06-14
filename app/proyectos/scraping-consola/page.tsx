import Link from "next/link";
import Image from "next/image";

const pasos = [
  {
    numero: 1,
    titulo: "Solicitud HTTP y parseo inicial",
    descripcion:
      "Se realiza una petición GET a books.toscrape.com y BeautifulSoup parsea el HTML de la primera página para dejarla lista para extraer datos.",
    imagen: "/consola1.png",
  },
  {
    numero: 2,
    titulo: "Extracción de datos primera página",
    descripcion:
      "Se localizan todos los artículos con find_all('article', class_='product_pod') y se extrae título, precio y stock de cada libro, imprimiéndolos directamente en consola.",
    imagen: "/consola2.png",
  },
  {
    numero: 3,
    titulo: "Construcción de URL dinámica",
    descripcion:
      "A partir de la segunda página, se construye la URL dinámicamente usando un número de página que se va incrementando.",
    imagen: "/consola_3.png",
  },
  {
    numero: 4,
    titulo: "Paginación con bucle while",
    descripcion:
      "El bucle recorre todas las páginas restantes extrayendo título y precio. Cuando find_all no devuelve libros, el proceso termina con un break.",
    imagen: "/consola4.png",
  },
  {
    numero: 5,
    titulo: "Resultado en consola",
    descripcion:
    "Captura del output en terminal mostrando los libros impresos página por página en tiempo real.",
    imagen: "/consola_6.png",
    esResultado: true,

  },
];

const tecnologias = [
  { nombre: "Python", descripcion: "Lenguaje base" },
  { nombre: "Requests", descripcion: "Peticiones HTTP" },
  { nombre: "BeautifulSoup", descripcion: "Parseo HTML" },
];

export default function ScrapingConsola() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-white">

      {/* Volver */}
      <Link
        href="/#proyectos"
        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-lime-500 transition-colors mb-12"
      >
        ← Volver a proyectos
      </Link>

      {/* Header */}
      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase text-green-400 mb-3">
          Proyecto
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Scraping en Consola
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
          Extracción de datos desde la weby visualizados directamente en la terminal,
          sin exportar a ningún archivo externo. 
        </p>
      </div>

      {/* Descripción técnica */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Descripción técnica</h2>
        <p className="text-white/60 leading-relaxed">
          Este proyecto utiliza Python junto a{" "}
          <code className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded text-sm">
            Requests
          </code>{" "}
          y{" "}
          <code className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded text-sm">
            BeautifulSoup
          </code>{" "}
          para extraer datos del sitio <strong>Books to Scrape</strong> y mostrarlos directamente en la terminal, sin necesidad
          de exportar a ningún archivo externo.
        </p>
      </section>

      {/* Stack de tecnologías */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Tecnologías</h2>
        <div className="flex flex-wrap gap-3">
          {tecnologias.map((t) => (
            <div
              key={t.nombre}
              className="border border-white/10 rounded-lg px-4 py-2 flex flex-col"
            >
              <span className="text-sm font-medium text-white">{t.nombre}</span>
              <span className="text-xs text-white/40">{t.descripcion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Paso a paso */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-10">¿Cómo funciona?</h2>
        <div className="flex flex-col gap-16">
          {pasos.map((paso, i) => (
            <div
              key={paso.numero}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Imagen */}
              <div className={`rounded-xl overflow-hidden border border-white/10 ${paso.esResultado ? "w-full md:w-1/1" : "w-full md:w-2/3"
                }`}>
                <Image
                  src={paso.imagen}
                  alt={paso.titulo}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                /> 
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2">
                <span className="text-4xl font-bold text-white/10">
                  0{paso.numero}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Botón GitHub */}
      <section className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-white/40 text-sm">¿Quieres ver el código?</p>
          <p className="text-white font-medium">Disponible en GitHub</p>
        </div>
        <a
          href="https://github.com/Marcelorp89/Scraping-consola"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
          Ver repositorio →
        </a>
      </section>

    </div>
  );
}