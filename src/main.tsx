import './styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'swiper/css';
import 'swiper/css/pagination';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
