import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserProfile } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      setUserProfile({
        username: username,
        email: `${username.toLowerCase().replace(/\s+/g, '.')}@mail.udp.cl`,
        profilePictureUrl: `https://picsum.photos/seed/${username}/100/100`,
      });
      navigate('/home'); // Redirige a la página principal de la app
    } else {
      alert('Por favor, ingresa tu correo institucional.');
    }
  };

  return (
    // Contenedor principal con imagen de fondo y superposición oscura
    <div 
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center font-sans"
      style={{ backgroundImage: "url('https://www.udp.cl/cms/wp-content/uploads/2021/06/fee.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Caja de Login, inspirada en login.html */}
      <div className="relative z-10 w-full max-w-sm bg-white p-8 rounded-lg shadow-xl border border-gray-300">
        <img
          src="https://aadcdn.msftauthimages.net/dbd5a2dd-mw6ajxgpbytvbs77zrzd5af5rkwrlp6ec3z4-if9sis/logintenantbranding/0/bannerlogo?ts=638322022952557441"
          alt="Banner Logo UDP"
          className="max-w-full h-auto block mx-auto mb-6"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Iniciar sesión</h2>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            {/* Usamos el nombre de usuario como si fuera el email para la simulación */}
            <input
              type="email"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Correo electrónico, teléfono o Skype"
              className="w-full px-3 py-2 text-sm border border-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 rounded-md"
            />
          </div>
          <div>
            <input
              type="password"
              id="password_fake"
              name="password_fake"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-3 py-2 text-sm border border-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 rounded-md"
            />
          </div>
          <button 
            type="submit" 
            // El color #0067b8 es el azul de Microsoft, replicado aquí
            className="w-full py-2 bg-[#0067b8] hover:bg-[#005a9e] text-white font-semibold rounded-md transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            ¿No puedes acceder a tu cuenta?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;