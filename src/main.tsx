import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { Store } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import ContextApi  from './components/ContextApi.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Context } from './componentsTwo/ContextReducer/ThemeContext.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <ContextApi>
          <App />
        </ContextApi>
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
)
