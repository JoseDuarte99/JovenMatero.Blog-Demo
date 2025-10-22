import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './page/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WithoutNavbarAndFooter from './layout/WithoutNavbarAndFooter';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNavbarAndFooter/>}>
            <Route path='/' element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </QueryClientProvider>  
  </StrictMode>,
)
