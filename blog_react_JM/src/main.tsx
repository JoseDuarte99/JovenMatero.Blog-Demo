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
import LoginForm from './page/Login/Login';
import WithoutNavbarAndFooter from './layout/SimpleNavbarAndFooter';
import NotFound404 from './components/NotFound404/NotFound404';
import RegisterForm from './page/Register/Register';
import UserProfile from './page/UserProfile/UserProfile';
import Home from './page/Home/Home';
import PostById from './page/PostById/PostById';
import About from './page/About/About';

// Import Contexts
import AppProviders from './context/AppProvider';
import NavbarAndFooterLayout from './layout/NavbarAndFooterLayout';




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
              <Route path='/post/:id' element={<PostById/>} />
            </Route>
            
            <Route element={<WithoutNavbarAndFooter/>}>
              <Route path='/login' element={<LoginForm />}/>
              <Route path='/register' element={<RegisterForm />}/>
              <Route path='/me' element={<UserProfile />}/>
              <Route path='/about' element={<About />}/>
              <Route path='*' element={<NotFound404/>}/>
            </Route>

            <Route path='*' element={<NotFound404/>}/>
          
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
