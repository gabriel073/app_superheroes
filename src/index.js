import HeroesApp from './HeroesApp';
import React from 'react';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<HeroesApp />);