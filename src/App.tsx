import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './components/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/ui/Toaster';

function Layout() {
  const location = useLocation();
  const isAuthRoute = ['/login', '/register'].includes(location.pathname);
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className={`flex-1 ${!isHomePage && 'pt-16'}`}>
        <AppRoutes />
      </main>
      {!isAuthRoute && <Footer />}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;