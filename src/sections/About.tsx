export const About = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-primary font-semibold mb-3">
            Sobre mi
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Perfil y estadisticas
          </h2>

          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            Egresado TSU en Desarrollo de Software, 20 anos,
            enfocado en crear proyectos web y moviles con buenas interfaces,
            datos claros e integraciones utiles para usuarios reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-primary text-4xl font-bold">
              16
            </p>

            <p className="text-muted mt-2">
              repositorios publicos
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-primary text-4xl font-bold">
              4
            </p>

            <p className="text-muted mt-2">
              seguidores en GitHub
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-primary text-4xl font-bold">
              2024
            </p>

            <p className="text-muted mt-2">
              inicio del perfil
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-primary text-4xl font-bold">
              7+
            </p>

            <p className="text-muted mt-2">
              lenguajes y herramientas
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
