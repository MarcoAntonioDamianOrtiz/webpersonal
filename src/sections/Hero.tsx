export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6">

      <div className="max-w-5xl mx-auto">

        <p className="text-primary font-semibold mb-4">
          Web & Mobile Developer - Vue - Flutter - APIs
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Marco Antonio Damian Ortiz
        </h1>

        <p className="text-muted mt-6 text-lg max-w-2xl leading-relaxed">
          Estudiante de Ingenieria en Gestion y Desarrollo de Software
          en UTT Tlaxcala. Desarrollo aplicaciones web y moviles con
          interfaces modernas, integracion de APIs, mapas, bases de datos
          y despliegues en la nube.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Ver proyectos
          </a>

        </div>

      </div>

    </section>
  );
};
