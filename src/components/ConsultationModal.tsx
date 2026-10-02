import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal / Slide-over Dialog */}
      <div className="min-h-full flex items-center justify-center p-4 md:p-8 text-center sm:p-0">
        <div 
          className="relative bg-ivory-50 text-left overflow-hidden shadow-2xl transition-all w-full max-w-3xl my-8 border border-stone-300 z-10 animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="bg-ivory-100 px-6 py-6 border-b border-stone-200 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-brass-600 font-semibold mb-1">
                Aureline Interiors Studio
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 font-light">
                Book a Design Consultation
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-stone-500 hover:text-charcoal-900 transition-colors rounded-full hover:bg-stone-200/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-10">
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              Tell us a little about your property, architectural vision, and project timeline. Our design team will review your requirements and schedule an introductory conversation.
            </p>

            <ConsultationForm onSuccess={onClose} compact />
          </div>
        </div>
      </div>
    </div>
  );
}
