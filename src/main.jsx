import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      position="top-center"
      richColors
      toastOptions={{
        style: {
          fontFamily: "'General Sans', system-ui, sans-serif",
          borderRadius: '14px',
        },
      }}
    />
    <App />
  </StrictMode>
);
