import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import './index.css'
import App from './App.tsx'
import { ThemeSync } from './components/ThemeSync.tsx'

import TriMet from './pages/TriMet.tsx'
import Hop from './pages/Hop.tsx'
import Arrivals from './pages/Arrivals.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeSync />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trimet" element={<TriMet />} />
          <Route path="/hop" element={<Hop />} />
          <Route path="/trimet/arrivals" element={<Arrivals />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
