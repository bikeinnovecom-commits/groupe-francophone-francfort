 import { RouterProvider, createRouter, createRoute, createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import MissionPage from './pages/MissionPage';
import ProjectsPage from './pages/ProjectsPage';
import GuidePage from './pages/GuidePage';

const queryClient = new QueryClient();

// Layout component with header and footer
function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { path: '/', label: 'Qui sommes-nous ?' },
    { path: '/vision', label: 'Notre identité' },
    { path: '/mission', label: 'Notre mission' },
    { path: '/projets', label: 'Nos projets' },
    { path: '/guide', label: 'Notre forum' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/assets/adventist-logo.png" 
                alt="Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold text-foreground hidden sm:inline">Groupe Francophone Adventiste de Francfort</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant="ghost"
                    className={`glass-button ${
                      currentPath === link.path ? 'glass-button-active' : ''
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start glass-button ${
                      currentPath === link.path ? 'glass-button-active' : ''
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-md bg-background/80 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/adventist-logo.png" 
                alt="Logo Adventiste" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-sm text-foreground font-medium">
                Église Adventiste du 7ème Jour
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutPage,
});

const visionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/vision',
  component: VisionPage,
});

const missionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mission',
  component: MissionPage,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projets',
  component: ProjectsPage,
});

const guideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/guide',
  component: GuidePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  visionRoute,
  missionRoute,
  projectsRoute,
  guideRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}