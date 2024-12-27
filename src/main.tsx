import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MarkerTailwind } from "../lib/index.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MarkerTailwind />
  </StrictMode>,
)
