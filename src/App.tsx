import React from 'react';
import { MantineProvider } from '@mantine/core';

import './App.css';
import { Routes } from './routes';

const App = () => {
  return (
    <MantineProvider>
      <Routes />
    </MantineProvider>
  );
};

export default App;
