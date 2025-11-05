import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import LoginForm from './page/Login/Login';
import WithoutNavbarAndFooter from './layout/WithoutNavbarAndFooter';
import NotFound404 from './page/NotFound404/NotFound404';
import RegisterForm from './page/Register/Register';
import UserProfile from './page/UserProfile/UserProfile';
import Home from './page/Home/Home';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNavbarAndFooter/>}>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<LoginForm />}/>
            <Route path='/register' element={<RegisterForm />}/>
            <Route path='/me' element={<UserProfile />}/>

          </Route>

          <Route path='*' element={<NotFound404/>}/>
        
        </Routes>
      </BrowserRouter>

    </QueryClientProvider>  
  </StrictMode>,
)
