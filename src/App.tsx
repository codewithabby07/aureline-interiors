import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { StudioPage } from './pages/StudioPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('the-aria-residence');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project/')) {
        const pId = hash.replace('project/', '');
        setSelectedProjectId(pId);
        setCurrentPage('project-detail');
      } else if (['projects', 'services', 'studio', 'process', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, projectId?: string) => {
    if (page === 'project-detail' && projectId) {
      setSelectedProjectId(projectId);
      setCurrentPage('project-detail');
      window.location.hash = `project/${projectId}`;
    } else {
      setCurrentPage(page);
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900 selection:bg-stone-300 selection:text-charcoal-950 font-sans">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'project-detail' && (
          <ProjectDetailPage
            projectId={selectedProjectId}
            onNavigate={navigateTo}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'studio' && (
          <StudioPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'process' && (
          <ProcessPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Slide-over Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

    </div>
  );
}

export default App;
