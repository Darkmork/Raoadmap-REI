import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.95-4.243-1.591 1.591M5.25 12H3m4.243-4.95L6.386 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);
const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25c0 5.385 4.365 9.75 9.75 9.75 2.572 0 4.92-.99 6.697-2.648Z" />
  </svg>
);

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode, userProfile } = useAppContext();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-rei-blue text-white dark:bg-rei-green dark:text-rei-bg-dark'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`;

  return (
    <header className="bg-rei-card-light dark:bg-rei-card-dark shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* --- LOGO CON "REI" SIN NEGRITA --- */}
            <Link to={userProfile ? "/home" : "/"} className="flex items-center space-x-2 text-2xl">
              {/* Logo de UDP */}
              <img 
                src="https://eit.udp.cl/cms/wp-content/uploads/2023/03/UDP_LogoRGB_2lineas_Color_SinFondo-e1678284375773.png" 
                alt="Logo UDP" 
                className="h-8 w-auto object-contain" 
              />
              
              {/* Separador */}
              <span className="text-black dark:text-white font-light">|</span>
              
              {/* CAMBIO: "REI" ahora tiene font-normal en lugar de font-bold */}
              <span className="font-helvetica font-normal text-rei-blue dark:text-rei-green">REI</span>
            </Link>
            
            {userProfile && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/home" className={navLinkClass}>Inicio</NavLink>
                  <NavLink to="/resources" className={navLinkClass}>Recursos</NavLink>
                  <NavLink to="/pruebas-tecnicas" className={navLinkClass}>Pruebas</NavLink>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
             <button onClick={toggleDarkMode} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
             </button>
            {userProfile ? (
              <NavLink to="/profile" className={navLinkClass}>
                Mi Perfil
              </NavLink>
            ) : (
              <NavLink to="/login" className={navLinkClass}>
                Iniciar Sesión
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;