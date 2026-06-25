export const Experience = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center">

          <p className="text-primary font-semibold mb-3">
            Habilidades y tecnologias
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Herramientas que uso
          </h2>

          <p className="text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Stack basado en mi perfil de GitHub: desarrollo web y movil,
            diseno UX/UI, APIs, bases de datos, mapas y despliegue en la nube.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-card border border-border rounded-2xl p-8">

            <div className="text-4xl mb-4 text-primary font-bold">
              UI
            </div>

            <h3 className="text-2xl font-bold mb-6">
              Frontend & Mobile
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Vue
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                React
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Flutter
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Dart
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                TailwindCSS
              </span>

            </div>

          </div>

          <div className="bg-card border border-border rounded-2xl p-8">

            <div className="text-4xl mb-4 text-primary font-bold">
              API
            </div>

            <h3 className="text-2xl font-bold mb-6">
              Backend & Datos
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Django
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Node.js
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Firebase
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                PostgreSQL
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                MongoDB
              </span>

            </div>

          </div>

          <div className="bg-card border border-border rounded-2xl p-8">

            <div className="text-4xl mb-4 text-primary font-bold">
              OPS
            </div>

            <h3 className="text-2xl font-bold mb-6">
              Diseno & Cloud
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Figma
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Adobe XD
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Vercel
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Google Cloud
              </span>

              <span className="bg-surface px-3 py-2 rounded-lg text-sm">
                Mapbox
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
