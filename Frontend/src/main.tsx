// Import Style
// Import React
// Import Contexts
// Import Components
// Import Types
// Import Others


// USEFUL TOOLS
// Convertir SVG a Componente de React - https://react-svgr.com/playground/
// Descargar SVG - https://www.svgrepo.com/


// Import Style
import './main.css'

// Import React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

// Import Components
import NavbarAndFooterLayout from './layout/NavbarAndFooterLayout';
import SimpleNavbarAndFooter from './layout/SimpleNavbarAndFooter';
import NotFound404 from './page/NotFound404/NotFound404';
import Home from './page/Home/Home';
import PostById from './page/PostById/PostById';
import About from './page/About/About';
import Catalog from './page/Catalog/Catalog';
import TermsAndPrivacy from './page/TermsAndPrivacy/TermsAndPrivacy';



// Import Contexts
import AppProviders from './context/AppProvider';





const queryClient = new QueryClient();



createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProviders>
        <BrowserRouter>

          <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              {/* Navbar and Footer ------------- */}
              <Route element={<NavbarAndFooterLayout />}>
                <Route path='/home' element={<Home />}/>
                <Route path='/post/:title' element={<PostById/>} />
              </Route>
              
              {/* Simple Navbar and SimpleFooter ------------- */}
              <Route element={<SimpleNavbarAndFooter/>}>
                <Route path='/about' element={<About />}/>
                <Route path='/catalog' element={<Catalog />}/>
                <Route path='/terms_and_privacy' element={<TermsAndPrivacy />}/>
                <Route path='*' element={<NotFound404/>}/>
              </Route>
          
          </Routes>
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          duration={3000} 
        />
    </AppProviders>
    </QueryClientProvider>  
  </StrictMode>,
)
