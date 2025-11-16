import { useState } from 'react';
import { Home } from './components/Home';
import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import { Exercise4 } from './components/Exercise4';
import { Tutorial } from './components/Tutorial';
import { Button } from './components/ui/button';
import { BookOpen, Code2, Home as HomeIcon } from 'lucide-react';

type Page = 'home' | 'exercise1' | 'exercise2' | 'exercise3' | 'exercise4' | 'tutorial';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'exercise1':
        return <Exercise1 onBack={() => setCurrentPage('home')} />;
      case 'exercise2':
        return <Exercise2 onBack={() => setCurrentPage('home')} />;
      case 'exercise3':
        return <Exercise3 onBack={() => setCurrentPage('home')} />;
      case 'exercise4':
        return <Exercise4 onBack={() => setCurrentPage('home')} />;
      case 'tutorial':
        return <Tutorial onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="size-8 text-blue-600" />
              <div>
                <h1 className="text-gray-900">Estructuras de Programación en C++</h1>
                <p className="text-sm text-gray-600">Selectivas y Repetitivas - Tutorial Interactivo</p>
              </div>
            </div>
            <div className="flex gap-2">
              {currentPage !== 'home' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage('home')}
                  className="gap-2"
                >
                  <HomeIcon className="size-4" />
                  Inicio
                </Button>
              )}
              {currentPage !== 'tutorial' && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setCurrentPage('tutorial')}
                  className="gap-2"
                >
                  <BookOpen className="size-4" />
                  Tutorial
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>Aplicación educativa interactiva para aprender estructuras de programación</p>
          <p className="mt-1">Basado en ejercicios de lógica de programación en C++</p>
        </div>
      </footer>
    </div>
  );
}
