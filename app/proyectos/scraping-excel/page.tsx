
import Link from "next/link";
import Image from "next/image";

const pasos = [
  {
    numero: 1,
    titulo: "Solicitud HTTP y configuración",
    descripcion:
      "Se realiza una petición GET a books.toscrape.com usando requests.get(). Se configura el encoding en utf-8 para asegurar que los caracteres especiales como precios en libras £ se lean correctamente..",
    imagen: "/excel1.png", 
  },
  {
    numero: 2,
    titulo: "Parseo y extracción de datos",
    descripcion:
      "BeautifulSoup analiza el HTML y localiza cada libro usando el selector article.product_pod. De cada uno extrae tres datos: título, precio y stock, que se almacenan como diccionarios en una lista llamada libros.",
    imagen: "/excel2.png",
  },
  {
    numero: 3,
    titulo: "Paginación automática",
    descripcion:
      "El scraper no se limita a la primera página — construye dinámicamente las URLs siguientes (/catalogue/page-2.html, page-3.html...) usando un bucle while. Cuando una página ya no devuelve libros, el proceso termina automáticamente con un break.",
    imagen: "/excel3.png",
  },
  {
    numero: 4,
    titulo: "Exportación a Excel",
    descripcion:
      "La lista de libros se convierte en un DataFrame de Pandas y se exporta a libros.xlsx con openpyxl, generando un archivo con tres columnas ordenadas: Título, Precio y Stock.",
    imagen: "/excel4.png",
  },
  {
    numero: 5,
    titulo: "Resultado final",
    descripcion:
      "Captura del archivo libros.xlsx abierto en Excel mostrando los datos extraídos — títulos, precios y stock de todos los libros del sitio listos para analizar.",
    imagen: "/excel5.png",
    esResultado: true,
  },
];

const tecnologias = [
  { nombre: "Python", descripcion: "Lenguaje base" },
  { nombre: "Requests", descripcion: "Peticiones HTTP" },
  { nombre: "BeautifulSoup", descripcion: "Parseo HTML" },
  { nombre: "Pandas", descripcion: "Estructuración de datos" },
  { nombre: "openpyxl", descripcion: "Exportación Excel" },
];

export default function ScrapingExcel() {
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
          Scraping en Excel
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
          Extracción automatizada de datos desde la web, estructurados y
          exportados directamente a un archivo Excel listo para usar.
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
          para extraer información de una página web. Los datos se estructuran
          con{" "}
          <code className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded text-sm">
            Pandas
          </code>{" "}
          y se exportan a un archivo Excel usando{" "}
          <code className="text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded text-sm">
            openpyxl
          </code>
          .
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
              <div className={`rounded-xl overflow-hidden border border-white/10 ${paso.esResultado ? "w-full md:w-1/2" : "w-full md:w-2/3"
                }`}>
                <Image
                  src={paso.imagen}
                  alt={paso.titulo}
                  width={900}
                  height={506}
                  className="w-full h-auto rounded-xl"
                /> 
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/4">
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
          href="https://github.com/Marcelorp89/Scraping-excel"
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