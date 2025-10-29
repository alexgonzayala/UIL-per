import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { NSPracticeProvider } from './context/NSPracticeContext.jsx';
import './../public/index.css';
import App from './components/App.jsx'

// single page react app entry point.
// will add the theme provider here later as well.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NSPracticeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NSPracticeProvider>
    </AuthProvider>
  </StrictMode>,
);
