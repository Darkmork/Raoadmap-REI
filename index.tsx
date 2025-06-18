import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Importar el componente principal App
import { AppProvider } from './contexts/AppContext'; // Importar el AppProvider

// Log to console to confirm script module loading
console.log(`index.tsx: Module loaded. React version: ${React.version}.`);

function initializeApp() {
  console.log("index.tsx: initializeApp() called.");
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error("index.tsx: CRITICAL - Root element with id='root' not found in the DOM.");
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
      <div style="color: red; padding: 20px; border: 2px solid red; margin: 20px; font-family: sans-serif;">
        <h2>Error Crítico de Aplicación</h2>
        <p>El elemento raíz necesario para iniciar la aplicación (<code><div id="root"></div></code>) no se encontró en la página.</p>
        <p>Esto impide que la aplicación React se cargue. Por favor, verifique el archivo HTML y asegúrese de que el script se ejecuta después de que el DOM esté listo.</p>
      </div>
    `;
    if (document.body) {
      document.body.prepend(errorDiv);
    } else {
      // Fallback if body itself is not available
      document.documentElement.appendChild(errorDiv);
    }
    return; // Stop further execution if root element is not found
  }

  console.log("index.tsx: Root element #root found. Proceeding with React rendering.");
  const root = createRoot(rootElement);

  try {
    root.render(
      <React.StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </React.StrictMode>
    );
    console.log("index.tsx: React application render command executed successfully.");
  } catch (error) {
    console.error("index.tsx: Error during React application render:", error);
    const errorRenderDiv = document.createElement('div');
    errorRenderDiv.innerHTML = `
      <div style="color: red; padding: 20px; border: 2px solid red; margin: 20px; font-family: sans-serif;">
        <h2>Error al Renderizar React</h2>
        <p>Ocurrió un error al intentar renderizar la aplicación React. Revisa la consola para más detalles.</p>
        <pre>${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
    if (document.body) {
        document.body.prepend(errorRenderDiv);
    } else if (rootElement) { // Should exist if we passed the initial check
        rootElement.appendChild(errorRenderDiv); 
    }
  }
}

// Ensure the DOM is fully loaded before trying to initialize the app
if (document.readyState === 'loading') {
  // Document is still loading, wait for DOMContentLoaded
  console.log("index.tsx: DOM is loading. Adding event listener for DOMContentLoaded.");
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // The DOM is already ready
  console.log("index.tsx: DOM is already ready. Calling initializeApp() directly.");
  initializeApp();
}