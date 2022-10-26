import React from 'react';
import { AppShell, Navbar, Container, Text } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

import './App.css';
import { Routes } from './routes';

const App = () => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <AppShell
        className="App"
        navbar={
          <Navbar p="xs" width={{ base: 300 }} style={{ textAlign: 'center' }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Routes />
      </AppShell>
    </MantineProvider>
  );
};

export default App;
