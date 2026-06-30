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
    icon: "CW",
    name: "CursosWeb",
    type: "Plataforma web educativa",
    description:
      "Aplicacion enfocada en la organizacion y visualizacion de cursos, diseñada con una interfaz moderna y adaptable para distintos dispositivos.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    github: "https://github.com/MarcoAntonioDamianOrtiz/CursosWeb",
    demo: "https://marcoantoniodamianortiz.github.io/CursosWeb/",
  },

  {
    icon: "HP",
    name: "Hospital",
    type: "Sistema de gestion hospitalaria",
    description:
      "Proyecto orientado a la administracion de pacientes, registros medicos, control de informacion y procesos dentro de un entorno hospitalario.",
    tags: ["Vue", "CRUD", "Base de Datos", "Administracion"],
    github: "https://github.com/MarcoAntonioDamianOrtiz/Hospital",
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
