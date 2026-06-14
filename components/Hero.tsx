export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-24 max-w-4xl mx-auto">

      {/* Eyebrow tag */}
      <span className="inline-block mb-6 px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full border border-green-400/40 text-green-400">
        Python · BeautifulSoup · Pandas
      </span>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
        Datos dispersos,{" "}
        <span className="text-green-400">información útil</span>
      </h1>

      {/* Subtítulo — una sola idea, conciso */}
      <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
        Proyectos de web scraping y automatización donde convierto
        fuentes web en datos estructurados, listos para analizar.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#proyectos"
          className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-medium rounded-lg transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#about"
          className="px-6 py-3 border border-white/20 hover:border-white/40 text-white/70 hover:text-white rounded-lg transition-colors"
        >
          Sobre mí
        </a>
      </div>

    </section>
  );
}