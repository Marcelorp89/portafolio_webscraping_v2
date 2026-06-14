import Link from "next/link";

const proyectos = [
  {
    titulo: "Scraping en Excel",
    descripcion: "Extracción de datos web exportados directamente a un archivo Excel estructurado.",
    tags: ["BeautifulSoup", "Pandas", "openpyxl"],
    url: "/proyectos/scraping-excel",
  },
  {
    titulo: "Scraping en Consola",
    descripcion: "Visualización de datos scrapeados directamente en terminal, sin dependencias externas.",
    tags: ["BeautifulSoup", "Requests"],
    url: "/proyectos/scraping-consola",
  },
  {
    titulo: "Scraping en JSON",
    descripcion: "Datos extraídos y serializados en formato JSON, listos para consumir en cualquier aplicación.",
    tags: ["BeautifulSoup", "json"],
    url: "/proyectos/scraping-json",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-green-400 mb-2">Proyectos</p>
        <h2 className="text-3xl font-bold text-white">Lo que he construido</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {proyectos.map((p) => (
          <div
            key={p.titulo}
            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-green-400/40 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white">{p.titulo}</h3>
            <p className="text-white/60 text-sm leading-relaxed flex-1">{p.descripcion}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={p.url}
              className="text-sm text-green-600 hover:text-lime-500 flex items-center gap-1 transition-colors"
            >
              Ver proyecto →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}