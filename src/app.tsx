import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { HelmetProvider } from 'react-helmet-async'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
// Import styles
import './index.css'
// Import locales
import '@/lib/i18n'

// Create a new router instance
const router = createRouter({ routeTree, context: undefined! })

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />{' '}
      </HelmetProvider>
    </StrictMode>
  )
}
