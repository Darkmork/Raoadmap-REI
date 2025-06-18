import React from 'react';
import { Link } from 'react-router-dom';

// --- Contenido para las tarjetas con las NUEVAS URL de las imágenes ---
const features = [
  {
    // Icono de Binoculares
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/114/114781.png',
    title: "Descubre tu Camino",
    text: "¿Te has preguntado cómo conectar lo que aprendes en la UDP con lo que busca la industria tecnológica chilena? En REI te guiamos paso a paso con rutas claras y actualizadas para que avances con propósito.",
  },
  {
    // Icono de Cohete
    imageUrl: 'https://cdn.pixabay.com/photo/2014/04/02/10/21/spacecraft-303592_1280.png',
    title: "Prepárate para el Despegue",
    text: "Deja atrás la incertidumbre. Con recursos seleccionados y desafíos reales, REI te prepara para entrevistas, proyectos y oportunidades laborales, alineadas con lo que hoy demanda el mercado tecnológico en Chile.",
  },
  {
    // Icono de Comunidad/Grupo
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1006/1006606.png',
    title: "Únete a REI",
    text: "Este es tu espacio. Participa, aprende, evalúate y fortalece tu perfil profesional desde hoy. Da el primer paso hacia una carrera que marque la diferencia, con las herramientas que realmente necesitas.",
  },
];


const WelcomePage: React.FC = () => {
  return (
    <div className="relative flex size-full flex-col bg-white dark:bg-rei-bg-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-5">
          <div className="layout-content-container flex flex-col flex-1">
            
            {/* --- Hero Section con Imagen --- */}
            <div className="@container">
              <div className="@[480px]:p-2">
                <div
                  className="flex min-h-[500px] flex-col gap-8 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl items-center justify-center px-4 py-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                  }}
                >
                  <div className="flex flex-col gap-4 text-center max-w-3xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                      Tu Carrera en Tecnología Comienza Aquí
                    </h1>
                    <h2 className="text-gray-200 text-base font-normal leading-normal md:text-lg">
                      REI es tu roadmap diseñado para estudiantes de Ingeniería en Informática de la UDP. Explora rutas de aprendizaje, prepárate para entrevistas técnicas y accede a recursos validados por expertos del sector tecnológico chileno.
                    </h2>
                  </div>
                  <Link
                    to="/login"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-rei-green text-white dark:bg-rei-blue dark:text-white text-base font-bold leading-normal tracking-wide transition-transform transform hover:scale-105 shadow-lg"
                  >
                    <span className="truncate">Comenzar Ahora</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* --- Sección de Características --- */}
            <div className="flex flex-col gap-10 px-4 py-16 @container">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-rei-text-light dark:text-rei-text-dark text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black tracking-[-0.033em] max-w-3xl mx-auto">
                  Potenciando Tu Viaje Profesional
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto">
                  Nuestra plataforma está diseñada para apoyar tu crecimiento de estudiante a profesional. Ofrecemos una gama de herramientas para ayudarte a triunfar en el competitivo panorama tecnológico.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-rei-card-dark p-6 flex-col items-center text-center transform transition-transform hover:-translate-y-1">
                        {/* CAMBIO: Se eliminó el div de fondo. La imagen es más grande y se invierte en modo oscuro. */}
                        <img 
                            src={feature.imageUrl} 
                            alt={feature.title} 
                            className="w-16 h-16 object-contain mb-4 dark:invert" 
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-rei-text-light dark:text-rei-text-dark text-lg font-bold leading-tight">{feature.title}</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                                {feature.text}
                            </p>
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* --- Sección de Metodología (Roadmaps) --- */}
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-rei-text-light dark:text-rei-text-dark text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black tracking-[-0.033em] max-w-3xl mx-auto">
                  Nuestros Roadmaps
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto">
                  Creemos en un enfoque claro y estructurado para el desarrollo profesional. Explora nuestras rutas de aprendizaje diseñadas por expertos de la industria.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {/* Tarjeta Frontend */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                  ></div>
                  <div>
                    <p className="text-rei-text-light dark:text-rei-text-dark text-base font-medium leading-normal">Desarrollo Frontend</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                      Domina HTML, CSS, JavaScript y frameworks modernos para crear interfaces interactivas y atractivas.
                    </p>
                  </div>
                </div>
                {/* Tarjeta Backend */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                  ></div>
                  <div>
                    <p className="text-rei-text-light dark:text-rei-text-dark text-base font-medium leading-normal">Desarrollo Backend</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                      Aprende a construir la lógica del servidor, bases de datos y APIs que potencian las aplicaciones web.
                    </p>
                  </div>
                </div>
                {/* Tarjeta Data Analysis */}
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
                  ></div>
                  <div>
                    <p className="text-rei-text-light dark:text-rei-text-dark text-base font-medium leading-normal">Análisis de Datos</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                      Transforma datos en decisiones inteligentes usando Python, SQL y herramientas de visualización.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* --- CTA Final --- */}
            <div className="@container">
              <div className="flex flex-col justify-center items-center gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 text-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-rei-text-light dark:text-rei-text-dark text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black tracking-[-0.033em] max-w-[720px]">
                    Tu Futuro Profesional Comienza Hoy
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">
                    Eres parte de una generación que marcará la diferencia en la industria tecnológica nacional. En REI creemos en tu potencial y te damos las herramientas para que lo transformes en impacto real. El futuro no se improvisa, se construye. Y empieza aquí.
                  </p>
                </div>
                <div className="flex justify-center">
                    <Link
                      to="/login"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-rei-green text-white dark:bg-rei-blue dark:text-white text-base font-bold leading-normal tracking-wide transition-transform transform hover:scale-105 shadow-lg"
                    >
                      <span className="truncate">Únete a Nuestra Comunidad</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;