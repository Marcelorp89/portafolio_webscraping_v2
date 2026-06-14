
export default function About(){
    return(
        <section id="about" className="max-w-6xl mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Sobre mí</h2>
            </div>

            <div className="mt-8 mb-8">
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-2">Me llamo <strong className="text-green-400">Marcelo Rodríguez</strong>, informático con interés en desarrollo web y automatización de tareas con herramientas como scraping y RPA.</p>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-2">Estos proyectos fueron realizados como parte de mi aprendizaje en <strong className="text-green-400">Python</strong> y <strong className="text-green-400">Webscraping</strong>. En ellos, la información  se imprime en consola, y también se guardan en archivo TXT o XLSX</p>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-2">Fue una interesante oportunidad para practicar webscraping, lógica de condiciones, automatización y manejo de archivos.</p>
            </div>

            <h3 className="text-lg font-semibold text-white">Herramientas utilizadas</h3>

              <div className="border border-white/10 rounded-xl overflow-hidden mt-8 mb-8 max-w-2xl hover:border-green-400/40 transition-colors">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-3 text-left text-white font-semibold">Herramienta</th>
                      <th className="px-6 py-3 text-left text-white font-semibold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { nombre: "Python", descripcion: "Lenguaje de programación usado en los scripts." },
                      { nombre: "Requests", descripcion: "Permite realizar solicitudes HTTP para obtener contenido web." },
                      { nombre: "BeautifulSoup", descripcion: "Herramienta para parsear y extraer datos de HTML." },
                      { nombre: "Pandas", descripcion: "Procesa y organiza datos estructurados en tablas." },
                    ].map((item, i) => (
                      <tr
                        key={item.nombre}
                        className={i % 2 === 0 ? "bg-white/5" : ""}
                      >
                        <td className="px-6 py-3 text-white/80 font-medium">{item.nombre}</td>
                        <td className="px-6 py-3 text-white/60">{item.descripcion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

        <h3 className="text-lg font-semibold text-white">Recursos utilizados</h3>

          <div className="mt-8">
            <p className="text-white/60 text-sm mb-4">
              Agradecimiento especial a los recursos y comunidades que me ayudaron en este proceso:
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["freeCodeCamp", "Stack Overflow", "w3schools", "Books to Scrape"].map((recurso) => (
                <span
                  key={recurso}
                  className="px-3 py-1.5 text-sm border border-white/10 rounded-lg text-white/60 bg-white/5 hover:border-green-400/40 transition-colors"
                >
                  {recurso}
                </span>
              ))}
            </div>
          </div>

        </section>
    );
}