import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoadmapDetailPage from './pages/RoadmapDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RoadmapItemDetailPage from './pages/RoadmapItemDetailPage';
import TechnicalTestPage from './pages/TechnicalTestPage';
import WelcomePage from './pages/WelcomePage'; // Importar la nueva página de bienvenida
import { useAppContext } from './contexts/AppContext';

// Componente para proteger rutas que requieren autenticación
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { userProfile } = useAppContext();
  if (!userProfile) {
    // Si no hay usuario, redirige a la página de login
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Layout principal que incluye Navbar y Footer
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-rei-bg-light dark:bg-rei-bg-dark text-rei-text-light dark:text-rei-text-dark">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  const { darkMode, userProfile } = useAppContext();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <Routes>
        {/* Rutas públicas que no usan el layout principal (Navbar/Footer) */}
        <Route path="/" element={userProfile ? <Navigate to="/home" /> : <MainLayout><WelcomePage /></MainLayout>} />
        <Route path="/login" element={userProfile ? <Navigate to="/home" /> : <LoginPage />} />

        {/* Rutas protegidas que sí usan el layout principal */}
        <Route path="/home" element={<ProtectedRoute><MainLayout><HomePage /></MainLayout></ProtectedRoute>} />
        <Route path="/roadmap/:roadmapId" element={<ProtectedRoute><MainLayout><RoadmapDetailPage /></MainLayout></ProtectedRoute>} />
        <Route path="/roadmap/:roadmapId/module/:moduleId/item/:itemId" element={<ProtectedRoute><MainLayout><RoadmapItemDetailPage /></MainLayout></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><MainLayout><ResourcesPage /></MainLayout></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><MainLayout><ProfilePage /></MainLayout></ProtectedRoute>} />
        <Route path="/pruebas-tecnicas" element={<ProtectedRoute><MainLayout><TechnicalTestPage /></MainLayout></ProtectedRoute>} />
        
        {/* Redirección por defecto para cualquier otra ruta */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;