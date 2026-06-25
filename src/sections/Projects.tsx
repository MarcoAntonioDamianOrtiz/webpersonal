const projects = [
  {
    icon: "CA",
    name: "Cafeteria",
    type: "Sistema administrativo para cafeteria",
    description:
      "Proyecto enfocado en gestion de productos, inventario, panel administrativo y operacion de una cafeteria inteligente.",
    tags: ["Vue", "Inventario", "Administracion", "UX/UI"],
    github: "https://github.com/MarcoAntonioDamianOrtiz/Cafeteria",
  },
  {
    icon: "AS",
    name: "ASMP",
    type: "Aplicacion web desplegada en Vercel",
    description:
      "Aplicacion desarrollada con Vue y publicada en Vercel, orientada a interfaces web modernas e integracion de datos.",
    tags: ["Vue", "Vercel", "Frontend", "APIs"],
    github: "https://github.com/MarcoAntonioDamianOrtiz/ASMP",
    demo: "https://asmp-eight.vercel.app",
  },
  {
    icon: "API",
    name: "Apis",
    type: "Integracion de APIs y servicios externos",
    description:
      "Proyecto para consumo de APIs, manejo de datos externos y presentacion de informacion en una experiencia web clara.",
    tags: ["Vue", "REST APIs", "Vercel", "Datos"],
    github: "https://github.com/MarcoAntonioDamianOrtiz/Apis",
    demo: "https://apis-one-alpha.vercel.app",
  },
  {
    icon: "MAP",
    name: "Riesgoapp",
    type: "Proyecto con enfoque en riesgo y ubicacion",
    description:
      "Aplicacion web relacionada con mapas, geocercas, formularios dinamicos y visualizacion de informacion para tomar decisiones.",
    tags: ["Vue", "Mapbox", "Geocercas", "Formularios"],
    github: "https://github.com/MarcoAntonioDamianOrtiz/Riesgoapp",
  },
];

export const Projects = () => (
  <section id="projects" className="py-24 px-6">

    <div className="max-w-6xl mx-auto">

      <div className="mb-16">
        <p className="text-primary font-semibold mb-3">
          Proyectos
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Proyectos destacados
        </h2>

        <p className="text-muted mt-4 max-w-2xl leading-relaxed">
          Aplicaciones reales tomadas de mi GitHub, enfocadas en desarrollo web,
          administracion, APIs, mapas, bases de datos y despliegues modernos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-card border border-border rounded-2xl p-6 hover:translate-y-[-4px] transition-all duration-300"
          >

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl text-primary font-bold">
                {project.icon}
              </span>

              <div>
                <h3 className="text-2xl font-bold">
                  {project.name}
                </h3>

                <p className="text-muted text-sm">
                  {project.type}
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">

              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface px-3 py-1 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}

            </div>

            <div className="flex gap-4 mt-6">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-4 py-2 rounded-xl text-sm font-medium"
                >
                  Demo
                </a>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>

  </section>
);
